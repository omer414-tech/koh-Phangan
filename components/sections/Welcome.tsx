import AesopSection from "@/components/ui/AesopSection";
import { IMAGES } from "@/lib/images";
import { APPLY_URL } from "@/lib/config";

const welcomeText = `דמיינו שאתם מתעוררים לקול הגלים.
יוצאים יחפים אל המרפסת עם כוס קפה.
נוף פנורמי מהוילה, עצי הקוקוס, ים טורקיז.
הימים מתחילים לאט. בלי לחץ. בלי שעון.
רק הטבע, השקט והקצב של האי.

בין חופים לבנים, ג'ונגלים ירוקים, שקיעות עוצרות נשימה ואנשים שמגיעים מכל העולם כדי לעצור לרגע, יש לקופנגן אנרגיה מיוחדת. כזו שמזכירה לנו כמה מעט אנחנו באמת צריכים כדי להרגיש טוב.

ומעבר לכל היופי, זה אחד המקומות המיוחדים בעולם ליוגה, ריפוי והתפתחות אישית. במשך כמה ימים ניתן לעצמנו להיסחף בקצב של האי, לנשום עמוק, להאט, ולהיזכר איך זה מרגיש להיות פשוט אנחנו.`;

export default function Welcome() {
  return (
    <AesopSection
      eyebrow="Welcome"
      heading="ברוכים הבאים לריטריט קופנגן"
      paragraph={welcomeText}
      image={IMAGES.villaView2}
      imageAlt="נוף פנורמי מהוילה אל הים"
      cta={{ label: "גלו עוד ←", href: APPLY_URL }}
    />
  );
}
