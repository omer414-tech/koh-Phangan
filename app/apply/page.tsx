"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { FORM_NAME, F } from "@/lib/formFields";

// ─── Types ───────────────────────────────────────────────────────────────────

type FormData = Partial<Record<string, string>>;

// ─── Animation variants ───────────────────────────────────────────────────────

const slideVariants = {
  enter: (dir: number) => ({ opacity: 0, x: dir > 0 ? 48 : -48 }),
  center: { opacity: 1, x: 0 },
  exit: (dir: number) => ({ opacity: 0, x: dir > 0 ? -48 : 48 }),
};

const transition = { duration: 0.45, ease: [0.22, 1, 0.36, 1] as const };

// Web3Forms access key. Configurable via env (set NEXT_PUBLIC_WEB3FORMS_KEY in
// Hostinger). Falls back to the project key so the build never breaks if unset.
// This key is public by design (domain-restrictable, not a secret).
const WEB3FORMS_KEY =
  process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? "182a14a6-75ac-4e98-aea4-63f51572d597";

// ─── Reusable field primitives ────────────────────────────────────────────────

function Label({ children, required }: { children: React.ReactNode; required?: boolean }) {
  return (
    <label className="block font-assistant text-[#28302C] text-base mb-2 font-semibold">
      {children}
      {required && <span className="text-[#6E8A7F] mr-1" aria-hidden="true">*</span>}
    </label>
  );
}

function Input({
  name, type = "text", value, onChange, required, placeholder,
}: {
  name: string; type?: string; value: string; onChange: (v: string) => void;
  required?: boolean; placeholder?: string;
}) {
  return (
    <input
      name={name}
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      required={required}
      placeholder={placeholder}
      className="w-full font-assistant text-[#28302C] bg-white border border-[#8DA293]/40 rounded-lg px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-[#6E8A7F] focus:border-transparent placeholder:text-[#8DA293] transition-shadow"
      dir="rtl"
    />
  );
}

function Textarea({
  name, value, onChange, rows = 3, placeholder,
}: {
  name: string; value: string; onChange: (v: string) => void; rows?: number; placeholder?: string;
}) {
  return (
    <textarea
      name={name}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      rows={rows}
      placeholder={placeholder}
      className="w-full font-assistant text-[#28302C] bg-white border border-[#8DA293]/40 rounded-lg px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-[#6E8A7F] focus:border-transparent placeholder:text-[#8DA293] transition-shadow resize-none"
      dir="rtl"
    />
  );
}

function RadioGroup({
  name, options, value, onChange,
}: {
  name: string; options: string[]; value: string; onChange: (v: string) => void;
}) {
  return (
    <div className="flex flex-wrap gap-3" role="radiogroup">
      {options.map((opt) => (
        <button
          key={opt}
          type="button"
          role="radio"
          aria-checked={value === opt}
          onClick={() => onChange(opt)}
          className={`font-assistant text-sm px-4 py-2 rounded-full border transition-colors duration-200 ${
            value === opt
              ? "bg-[#2A3A33] text-[#ECEEE9] border-[#2A3A33]"
              : "bg-white text-[#28302C] border-[#8DA293]/40 hover:border-[#2A3A33]"
          }`}
        >
          {opt}
        </button>
      ))}
    </div>
  );
}

function CheckboxGroup({
  name, options, value, onChange,
}: {
  name: string; options: string[]; value: string[]; onChange: (v: string[]) => void;
}) {
  const toggle = (opt: string) => {
    onChange(value.includes(opt) ? value.filter((v) => v !== opt) : [...value, opt]);
  };
  return (
    <div className="flex flex-wrap gap-3" role="group">
      {options.map((opt) => (
        <button
          key={opt}
          type="button"
          aria-pressed={value.includes(opt)}
          onClick={() => toggle(opt)}
          className={`font-assistant text-sm px-4 py-2 rounded-full border transition-colors duration-200 ${
            value.includes(opt)
              ? "bg-[#6E8A7F] text-[#ECEEE9] border-[#6E8A7F]"
              : "bg-white text-[#28302C] border-[#8DA293]/40 hover:border-[#6E8A7F]"
          }`}
        >
          {opt}
        </button>
      ))}
    </div>
  );
}

function StarRating({
  label, fieldName, value, onChange,
}: {
  label: string; fieldName: string; value: string; onChange: (field: string, v: string) => void;
}) {
  return (
    <div className="flex items-center justify-between gap-4">
      <span className="font-assistant text-[#28302C]/80 text-sm">{label}</span>
      <div className="flex gap-1" role="group" aria-label={`דירוג ${label}`}>
        {[1, 2, 3, 4, 5].map((n) => (
          <button
            key={n}
            type="button"
            aria-label={`${n} כוכבים`}
            onClick={() => onChange(fieldName, String(n))}
            className={`text-xl transition-colors duration-150 ${
              Number(value) >= n ? "text-[#6E8A7F]" : "text-[#8DA293]/30"
            }`}
          >
            ★
          </button>
        ))}
      </div>
    </div>
  );
}

function FieldGroup({ children }: { children: React.ReactNode }) {
  return <div className="space-y-2">{children}</div>;
}

// ─── Progress indicator ───────────────────────────────────────────────────────

function Progress({ current, total }: { current: number; total: number }) {
  const pct = Math.round((current / total) * 100);
  return (
    <div className="w-full space-y-2">
      <div className="flex justify-between items-center">
        <span className="font-assistant text-[#8DA293] text-xs">
          שלב {current} מתוך {total}
        </span>
        <span className="font-assistant text-[#8DA293] text-xs">{pct}%</span>
      </div>
      <div className="w-full h-1 bg-[#8DA293]/20 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-[#6E8A7F] rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${pct}%` }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}

// ─── Navigation buttons ───────────────────────────────────────────────────────

function NavButtons({
  onBack, onNext, isFirst, isLast, isSubmitting, error,
}: {
  onBack: () => void; onNext: () => void;
  isFirst: boolean; isLast: boolean; isSubmitting: boolean; error: string;
}) {
  return (
    <div className="space-y-4 pt-4">
      {error && (
        <p className="font-assistant text-[#6E8A7F] text-sm text-center">{error}</p>
      )}
      <div className="flex gap-3 justify-between">
        {!isFirst && (
          <button
            type="button"
            onClick={onBack}
            className="font-assistant text-[#2A3A33] text-sm px-6 py-3 rounded-full border border-[#2A3A33]/30 hover:border-[#2A3A33] transition-colors duration-200"
          >
            ← חזרה
          </button>
        )}
        <button
          type="button"
          onClick={onNext}
          disabled={isSubmitting}
          className="font-assistant font-semibold text-[#ECEEE9] bg-[#2A3A33] text-sm px-8 py-3 rounded-full hover:bg-[#6E8A7F] transition-colors duration-300 disabled:opacity-60 mr-auto"
        >
          {isSubmitting ? "שולח..." : isLast ? "שליחה" : "המשך"}
        </button>
      </div>
    </div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

const TOTAL_STEPS = 8;

export default function ApplyPage() {
  const [phase, setPhase] = useState<"intro" | "form" | "success">("intro");
  const [step, setStep] = useState(1);
  const [direction, setDirection] = useState(1);
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Multi-select state (arrays)
  const [interests, setInterests] = useState<string[]>([]);
  const [vacationTypes, setVacationTypes] = useState<string[]>([]);

  // All other fields
  const [form, setForm] = useState<FormData>({});

  const set = useCallback((field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  }, []);

  const get = (field: string) => form[field] ?? "";

  // ── Validation ──────────────────────────────────────────────────────────────

  const validate = (): string => {
    if (step === 1) {
      if (!get(F.fullName).trim()) return "נא למלא שם מלא";
      if (!get(F.phone).trim()) return "נא למלא מספר טלפון";
      const emailRx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!get(F.email).trim()) return "נא למלא כתובת אימייל";
      if (!emailRx.test(get(F.email))) return "כתובת האימייל אינה תקינה";
      const phoneRx = /^[\d\s\-\+\(\)]{7,}$/;
      if (!phoneRx.test(get(F.phone))) return "מספר הטלפון אינו תקין";
    }
    return "";
  };

  // ── Navigation ──────────────────────────────────────────────────────────────

  const handleNext = async () => {
    const err = validate();
    if (err) { setError(err); return; }
    setError("");

    if (step < TOTAL_STEPS) {
      setDirection(1);
      setStep((s) => s + 1);
      return;
    }

    // Final submit
    setIsSubmitting(true);
    try {
      const body: Record<string, string> = {
        access_key: WEB3FORMS_KEY,
        subject: "הרשמה חדשה - KPG Retreat",
        from_name: "KPG Retreat Website",
        ...Object.fromEntries(
          Object.entries(form).map(([k, v]) => [k, v ?? ""])
        ),
        [F.interests]:     interests.join(", "),
        [F.vacationTypes]: vacationTypes.join(", "),
      };

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(body),
      });

      const data = await res.json();
      if (!data.success) throw new Error(data.message || `HTTP ${res.status}`);
      setPhase("success");
    } catch {
      setError("אירעה שגיאה בשליחה — נסה שוב.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleBack = () => {
    if (step > 1) { setDirection(-1); setStep((s) => s - 1); }
    setError("");
  };

  // ── Intro ───────────────────────────────────────────────────────────────────

  if (phase === "intro") {
    return (
      <PageShell>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={transition}
          className="text-center space-y-8"
        >
          <p className="font-frank font-light tracking-[0.3em] text-[#8DA293] text-xs uppercase">
            Application Form
          </p>
          <h1
            className="font-frank text-[#2A3A33] leading-tight"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 400 }}
          >
            ברוכים הבאים ל־Koh Phangan Retreat
          </h1>
          <p className="font-assistant text-[#28302C]/75 leading-relaxed max-w-md mx-auto"
            style={{ fontSize: "clamp(0.95rem, 1.3vw, 1.1rem)" }}>
            אנחנו שמחים שבחרתם להצטרף למסע הזה. השאלון יעזור לנו להכיר אתכם טוב יותר
            ולבנות עבורכם את החוויה המדויקת ביותר. משך מילוי השאלון כ־10 דקות.
          </p>
          <button
            onClick={() => setPhase("form")}
            className="inline-block bg-[#2A3A33] text-[#ECEEE9] font-assistant font-semibold px-10 py-4 rounded-full hover:bg-[#6E8A7F] transition-colors duration-400 text-base"
          >
            בואו נתחיל
          </button>
          <div className="pt-2">
            <Link href="/" className="font-assistant text-[#8DA293] text-sm hover:text-[#6E8A7F] transition-colors">
              ← חזרה לאתר
            </Link>
          </div>
        </motion.div>
      </PageShell>
    );
  }

  // ── Success ─────────────────────────────────────────────────────────────────

  if (phase === "success") {
    return (
      <PageShell>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={transition}
          className="text-center space-y-6"
        >
          <span className="block text-5xl" aria-hidden="true">🌴</span>
          <h2
            className="font-frank text-[#2A3A33]"
            style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 400 }}
          >
            תודה!
          </h2>
          <p className="font-assistant text-[#28302C]/75 leading-relaxed max-w-sm mx-auto text-base">
            הבקשה שלך התקבלה. בימים הקרובים ניצור איתך קשר להמשך תהליך ההרשמה.
          </p>
          <p className="font-frank font-light italic text-[#8DA293] text-lg">
            מחכים לפגוש אותך בקופנגן 🌴
          </p>
          <Link
            href="/"
            className="inline-block mt-4 font-assistant text-sm text-[#2A3A33] border border-[#2A3A33]/30 px-6 py-2 rounded-full hover:border-[#2A3A33] transition-colors"
          >
            חזרה לאתר
          </Link>
        </motion.div>
      </PageShell>
    );
  }

  // ── Form steps ───────────────────────────────────────────────────────────────

  return (
    <PageShell>
      <div className="w-full max-w-xl mx-auto space-y-8">
        <div className="flex items-center justify-between">
          <Link href="/" className="font-assistant text-[#8DA293] text-xs hover:text-[#6E8A7F] transition-colors">
            ← חזרה לאתר
          </Link>
          <p className="font-frank font-light tracking-[0.3em] text-[#8DA293] text-xs uppercase">
            ריטריט קופנגן
          </p>
        </div>

        <Progress current={step} total={TOTAL_STEPS} />

        {/* Honeypot — hidden from real users, visible to Netlify */}
        <input type="hidden" name={F.formName} value={FORM_NAME} />
        <div style={{ display: "none" }} aria-hidden="true">
          <input type="text" name={F.botField} />
        </div>

        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={step}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={transition}
            className="space-y-6"
          >
            {step === 1 && <Step1 get={get} set={set} />}
            {step === 2 && <Step2 get={get} set={set} />}
            {step === 3 && <Step3 get={get} set={set} />}
            {step === 4 && <Step4 get={get} set={set} />}
            {step === 5 && <Step5 get={get} set={set} interests={interests} setInterests={setInterests} />}
            {step === 6 && <Step6 get={get} set={set} />}
            {step === 7 && <Step7 get={get} set={set} vacationTypes={vacationTypes} setVacationTypes={setVacationTypes} />}
            {step === 8 && <Step8 get={get} set={set} />}
          </motion.div>
        </AnimatePresence>

        <NavButtons
          onBack={handleBack}
          onNext={handleNext}
          isFirst={step === 1}
          isLast={step === TOTAL_STEPS}
          isSubmitting={isSubmitting}
          error={error}
        />
      </div>
    </PageShell>
  );
}

// ─── Page shell ───────────────────────────────────────────────────────────────

function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="min-h-screen bg-[#ECEEE9] flex flex-col items-center justify-center px-6 py-16"
      dir="rtl"
    >
      {children}
    </div>
  );
}

// ─── Step heading ─────────────────────────────────────────────────────────────

function StepHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2
      className="font-frank text-[#2A3A33] leading-tight mb-6"
      style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 400 }}
    >
      {children}
    </h2>
  );
}

// ─── Step 1: Personal details ─────────────────────────────────────────────────

function Step1({ get, set }: { get: (f: string) => string; set: (f: string, v: string) => void }) {
  return (
    <div className="space-y-5">
      <StepHeading>פרטים אישיים</StepHeading>
      <FieldGroup>
        <Label required>שם מלא</Label>
        <Input name={F.fullName} value={get(F.fullName)} onChange={(v) => set(F.fullName, v)} required placeholder="ישראל ישראלי" />
      </FieldGroup>
      <FieldGroup>
        <Label>תאריך לידה</Label>
        <Input name={F.dob} type="date" value={get(F.dob)} onChange={(v) => set(F.dob, v)} />
      </FieldGroup>
      <FieldGroup>
        <Label required>טלפון</Label>
        <Input name={F.phone} type="tel" value={get(F.phone)} onChange={(v) => set(F.phone, v)} required placeholder="050-0000000" />
      </FieldGroup>
      <FieldGroup>
        <Label required>אימייל</Label>
        <Input name={F.email} type="email" value={get(F.email)} onChange={(v) => set(F.email, v)} required placeholder="me@example.com" />
      </FieldGroup>
      <FieldGroup>
        <Label>אינסטגרם</Label>
        <Input name={F.instagram} value={get(F.instagram)} onChange={(v) => set(F.instagram, v)} placeholder="@username" />
      </FieldGroup>
      <FieldGroup>
        <Label>עיר מגורים</Label>
        <Input name={F.city} value={get(F.city)} onChange={(v) => set(F.city, v)} />
      </FieldGroup>
      <FieldGroup>
        <Label>עיסוק</Label>
        <Input name={F.occupation} value={get(F.occupation)} onChange={(v) => set(F.occupation, v)} />
      </FieldGroup>
    </div>
  );
}

// ─── Step 2: Medical ──────────────────────────────────────────────────────────

function Step2({ get, set }: { get: (f: string) => string; set: (f: string, v: string) => void }) {
  const hasSensitivity = get(F.foodSensitivity) === "כן";
  return (
    <div className="space-y-5">
      <StepHeading>מידע רפואי</StepHeading>
      <FieldGroup>
        <Label>יש לך רגישויות למזון?</Label>
        <RadioGroup name={F.foodSensitivity} options={["לא", "כן"]} value={get(F.foodSensitivity)} onChange={(v) => set(F.foodSensitivity, v)} />
      </FieldGroup>
      {hasSensitivity && (
        <FieldGroup>
          <Label>אם כן, פרט.</Label>
          <Textarea name={F.foodSensitivityDetail} value={get(F.foodSensitivityDetail)} onChange={(v) => set(F.foodSensitivityDetail, v)} />
        </FieldGroup>
      )}
      <FieldGroup>
        <Label>יש לך אלרגיות?</Label>
        <Textarea name={F.allergies} value={get(F.allergies)} onChange={(v) => set(F.allergies, v)} rows={2} />
      </FieldGroup>
      <FieldGroup>
        <Label>יש מחלות רקע?</Label>
        <Textarea name={F.medicalConditions} value={get(F.medicalConditions)} onChange={(v) => set(F.medicalConditions, v)} rows={2} />
      </FieldGroup>
      <FieldGroup>
        <Label>האם אתה נוטל תרופות באופן קבוע?</Label>
        <Textarea name={F.medications} value={get(F.medications)} onChange={(v) => set(F.medications, v)} rows={2} />
      </FieldGroup>
      <FieldGroup>
        <Label>יש מגבלות פיזיות שחשוב שנכיר?</Label>
        <Textarea name={F.physicalLimitations} value={get(F.physicalLimitations)} onChange={(v) => set(F.physicalLimitations, v)} rows={2} />
      </FieldGroup>
      <FieldGroup>
        <Label>קופת חולים</Label>
        <Input name={F.healthFund} value={get(F.healthFund)} onChange={(v) => set(F.healthFund, v)} placeholder="מכבי / כללית / מאוחדת / לאומית" />
      </FieldGroup>
      <p className="font-frank font-light text-[#8DA293] text-sm tracking-wide">איש קשר למקרה חירום</p>
      <FieldGroup>
        <Label>שם</Label>
        <Input name={F.emergencyName} value={get(F.emergencyName)} onChange={(v) => set(F.emergencyName, v)} />
      </FieldGroup>
      <FieldGroup>
        <Label>טלפון</Label>
        <Input name={F.emergencyPhone} type="tel" value={get(F.emergencyPhone)} onChange={(v) => set(F.emergencyPhone, v)} />
      </FieldGroup>
      <FieldGroup>
        <Label>קרבה</Label>
        <Input name={F.emergencyRelation} value={get(F.emergencyRelation)} onChange={(v) => set(F.emergencyRelation, v)} placeholder="הורה / בן/בת זוג / חבר..." />
      </FieldGroup>
    </div>
  );
}

// ─── Step 3: Food ─────────────────────────────────────────────────────────────

function Step3({ get, set }: { get: (f: string) => string; set: (f: string, v: string) => void }) {
  const isOther = get(F.dietType) === "אחר";
  return (
    <div className="space-y-5">
      <StepHeading>אוכל</StepHeading>
      <FieldGroup>
        <Label>איך היית מגדיר את התזונה שלך?</Label>
        <RadioGroup
          name={F.dietType}
          options={["רגילה", "צמחוני", "טבעוני", "כשר", "ללא גלוטן", "אחר"]}
          value={get(F.dietType)}
          onChange={(v) => set(F.dietType, v)}
        />
        {isOther && (
          <div className="mt-3">
            <Input name={F.dietOther} value={get(F.dietOther)} onChange={(v) => set(F.dietOther, v)} placeholder="פרט..." />
          </div>
        )}
      </FieldGroup>
      <FieldGroup>
        <Label>יש מאכלים שאתה לא אוכל?</Label>
        <Textarea name={F.foodDislikes} value={get(F.foodDislikes)} onChange={(v) => set(F.foodDislikes, v)} rows={2} />
      </FieldGroup>
      <FieldGroup>
        <Label>מה הארוחה שאתה הכי אוהב בעולם?</Label>
        <Input name={F.favoriteMeal} value={get(F.favoriteMeal)} onChange={(v) => set(F.favoriteMeal, v)} />
      </FieldGroup>
      <FieldGroup>
        <Label>מה המשקה האהוב עליך?</Label>
        <Input name={F.favoriteDrink} value={get(F.favoriteDrink)} onChange={(v) => set(F.favoriteDrink, v)} />
      </FieldGroup>
    </div>
  );
}

// ─── Step 4: Koh Phangan ──────────────────────────────────────────────────────

function Step4({ get, set }: { get: (f: string) => string; set: (f: string, v: string) => void }) {
  const beenBefore = get(F.beenToKpg) === "כן";
  return (
    <div className="space-y-5">
      <StepHeading>קופנגן</StepHeading>
      <FieldGroup>
        <Label>כבר היית בקופנגן?</Label>
        <RadioGroup name={F.beenToKpg} options={["כן", "לא"]} value={get(F.beenToKpg)} onChange={(v) => set(F.beenToKpg, v)} />
      </FieldGroup>
      {beenBefore && (
        <FieldGroup>
          <Label>כמה פעמים?</Label>
          <Input name={F.kpgTimes} type="number" value={get(F.kpgTimes)} onChange={(v) => set(F.kpgTimes, v)} placeholder="0" />
        </FieldGroup>
      )}
      <FieldGroup>
        <Label>יש מקומות שהיית רוצה לחזור אליהם?</Label>
        <Textarea name={F.kpgReturnPlaces} value={get(F.kpgReturnPlaces)} onChange={(v) => set(F.kpgReturnPlaces, v)} rows={2} />
      </FieldGroup>
      <FieldGroup>
        <Label>יש מקומות שתמיד רצית לראות?</Label>
        <Textarea name={F.kpgWishPlaces} value={get(F.kpgWishPlaces)} onChange={(v) => set(F.kpgWishPlaces, v)} rows={2} />
      </FieldGroup>
      <FieldGroup>
        <Label>יש לך רישיון נהיגה לאופנוע?</Label>
        <RadioGroup name={F.motorcycleLicense} options={["כן", "לא"]} value={get(F.motorcycleLicense)} onChange={(v) => set(F.motorcycleLicense, v)} />
      </FieldGroup>
      <FieldGroup>
        <Label>האם תרצה לשכור אופנוע?</Label>
        <RadioGroup name={F.wantsMotorcycle} options={["כן", "אולי", "לא"]} value={get(F.wantsMotorcycle)} onChange={(v) => set(F.wantsMotorcycle, v)} />
      </FieldGroup>
      <FieldGroup>
        <Label>רמת הנהיגה שלך</Label>
        <RadioGroup name={F.drivingLevel} options={["מתחיל", "בינוני", "מנוסה"]} value={get(F.drivingLevel)} onChange={(v) => set(F.drivingLevel, v)} />
      </FieldGroup>
    </div>
  );
}

// ─── Step 5: Experience ───────────────────────────────────────────────────────

const INTEREST_OPTIONS = [
  "יוגה", "מדיטציה", "נשימות", "סדנאות", "כושר", "תזונה",
  "יזמות", "התפתחות אישית", "טיולים", "מסיבות", "חיי לילה", "ים", "קהילה", "נטוורקינג",
];

function Step5({
  get, set, interests, setInterests,
}: {
  get: (f: string) => string; set: (f: string, v: string) => void;
  interests: string[]; setInterests: (v: string[]) => void;
}) {
  return (
    <div className="space-y-5">
      <StepHeading>החוויה</StepHeading>
      <FieldGroup>
        <Label>איזה תחומים הכי מעניינים אותך?</Label>
        <CheckboxGroup name={F.interests} options={INTEREST_OPTIONS} value={interests} onChange={setInterests} />
      </FieldGroup>
      <FieldGroup>
        <Label>מה אתה הכי מצפה לקבל מהריטריט?</Label>
        <Textarea name={F.retreatExpectations} value={get(F.retreatExpectations)} onChange={(v) => set(F.retreatExpectations, v)} rows={3} />
      </FieldGroup>
      <FieldGroup>
        <Label>מה לדעתך תהיה החוויה הכי משמעותית עבורך?</Label>
        <Textarea name={F.meaningfulExperience} value={get(F.meaningfulExperience)} onChange={(v) => set(F.meaningfulExperience, v)} rows={3} />
      </FieldGroup>
    </div>
  );
}

// ─── Step 6: About you ────────────────────────────────────────────────────────

function Step6({ get, set }: { get: (f: string) => string; set: (f: string, v: string) => void }) {
  return (
    <div className="space-y-5">
      <StepHeading>עליך</StepHeading>
      <FieldGroup>
        <Label>מה גרם לך להירשם לריטריט?</Label>
        <Textarea name={F.registrationReason} value={get(F.registrationReason)} onChange={(v) => set(F.registrationReason, v)} rows={3} />
      </FieldGroup>
      <FieldGroup>
        <Label>איפה אתה נמצא בחיים היום?</Label>
        <Textarea name={F.lifeSituation} value={get(F.lifeSituation)} onChange={(v) => set(F.lifeSituation, v)} rows={3} />
      </FieldGroup>
      <FieldGroup>
        <Label>אם היית יכול לשנות דבר אחד בחיים שלך כרגע, מה הוא היה?</Label>
        <Textarea name={F.changeOneThing} value={get(F.changeOneThing)} onChange={(v) => set(F.changeOneThing, v)} rows={2} />
      </FieldGroup>
      <FieldGroup>
        <Label>מה המטרה הכי גדולה שלך לשנה הקרובה?</Label>
        <Textarea name={F.biggestGoal} value={get(F.biggestGoal)} onChange={(v) => set(F.biggestGoal, v)} rows={2} />
      </FieldGroup>
      <FieldGroup>
        <Label>מה היית רוצה לקחת איתך הביתה אחרי השבוע הזה?</Label>
        <Textarea name={F.takeHome} value={get(F.takeHome)} onChange={(v) => set(F.takeHome, v)} rows={2} />
      </FieldGroup>
      <FieldGroup>
        <Label>איך היית מתאר את עצמך בשלוש מילים?</Label>
        <Input name={F.threeWords} value={get(F.threeWords)} onChange={(v) => set(F.threeWords, v)} placeholder="מילה, מילה, מילה" />
      </FieldGroup>
    </div>
  );
}

// ─── Step 7: Good life ────────────────────────────────────────────────────────

const VACATION_OPTIONS = ["יוקרה", "טבע", "הרפתקאות", "מסיבות", "בטן גב", "שילוב"];
const RATINGS = [
  { label: "יוגה",         field: F.ratingYoga },
  { label: "מסיבות",       field: F.ratingParties },
  { label: "סדנאות",       field: F.ratingWorkshops },
  { label: "כושר",         field: F.ratingFitness },
  { label: "טיולים",       field: F.ratingHikes },
  { label: "ארוחות שף",    field: F.ratingChefMeals },
  { label: "נטוורקינג",    field: F.ratingNetworking },
];

function Step7({
  get, set, vacationTypes, setVacationTypes,
}: {
  get: (f: string) => string; set: (f: string, v: string) => void;
  vacationTypes: string[]; setVacationTypes: (v: string[]) => void;
}) {
  return (
    <div className="space-y-6">
      <StepHeading>החיים הטובים</StepHeading>
      <FieldGroup>
        <Label>איזה סוג של חופשות אתה אוהב?</Label>
        <CheckboxGroup name={F.vacationTypes} options={VACATION_OPTIONS} value={vacationTypes} onChange={setVacationTypes} />
      </FieldGroup>
      <div className="space-y-4">
        <Label>כמה חשוב לך</Label>
        <div className="space-y-3 bg-white/60 rounded-xl p-5 border border-[#8DA293]/20">
          {RATINGS.map(({ label, field }) => (
            <StarRating key={field} label={label} fieldName={field} value={get(field)} onChange={set} />
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Step 8: Personalization ──────────────────────────────────────────────────

function Step8({ get, set }: { get: (f: string) => string; set: (f: string, v: string) => void }) {
  return (
    <div className="space-y-5">
      <StepHeading>התאמה אישית</StepHeading>
      <FieldGroup>
        <Label>האם יש משהו שהיית רוצה שנפתיע אותך בו?</Label>
        <Textarea name={F.surpriseMe} value={get(F.surpriseMe)} onChange={(v) => set(F.surpriseMe, v)} rows={2} />
      </FieldGroup>
      <FieldGroup>
        <Label>יש יום הולדת במהלך הריטריט?</Label>
        <Textarea name={F.birthdayDuring} value={get(F.birthdayDuring)} onChange={(v) => set(F.birthdayDuring, v)} rows={2} />
      </FieldGroup>
      <FieldGroup>
        <Label>יש אירוע מיוחד שתרצה לחגוג?</Label>
        <Textarea name={F.specialOccasion} value={get(F.specialOccasion)} onChange={(v) => set(F.specialOccasion, v)} rows={2} />
      </FieldGroup>
      <FieldGroup>
        <Label>יש משהו שיגרום לך להגיד בסוף השבוע: &quot;זו הייתה אחת החוויות הכי טובות שהיו לי בחיים.&quot;</Label>
        <Textarea name={F.dreamMoment} value={get(F.dreamMoment)} onChange={(v) => set(F.dreamMoment, v)} rows={3} />
      </FieldGroup>
      <FieldGroup>
        <Label>עוד משהו שחשוב לנו לדעת?</Label>
        <Textarea name={F.additionalNotes} value={get(F.additionalNotes)} onChange={(v) => set(F.additionalNotes, v)} rows={3} />
      </FieldGroup>
    </div>
  );
}
