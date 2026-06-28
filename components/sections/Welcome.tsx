import { WordsPullUpMultiStyle } from "@/components/ui/WordsPullUp";
import ScrollRevealText from "@/components/ui/ScrollRevealText";

export default function Welcome() {
  return (
    <section aria-label="About" className="bg-black px-4 md:px-6 py-16 md:py-28">
      <div className="bg-[#101010] max-w-6xl mx-auto text-center px-6 py-16 md:py-24 rounded-2xl md:rounded-[2rem]">
        <p
          className="font-almarai text-[10px] sm:text-xs tracking-[0.3em] uppercase mb-8"
          style={{ color: "#DEDBC8" }}
        >
          ברוכים הבאים
        </p>

        <h2
          className="font-almarai text-3xl sm:text-4xl md:text-5xl lg:text-6xl max-w-3xl mx-auto leading-[0.95] sm:leading-[0.9] justify-center"
          style={{ color: "#E1E0CC" }}
        >
          <WordsPullUpMultiStyle
            className="justify-center"
            segments={[
              { text: "ברוכים הבאים לריטריט" },
              { text: "Koh Phangan.", className: "font-serif-italic" },
              { text: "מסע של תנועה, שקט וקהילה — בלב האי." },
            ]}
          />
        </h2>

        <div className="max-w-2xl mx-auto mt-10 md:mt-14">
          <ScrollRevealText
            className="font-almarai text-sm sm:text-base md:text-lg leading-relaxed text-center text-[#DEDBC8]"
            text={
              "קופנגן הוא אי של טבע פראי, מים בצבע טורקיז וג'ונגלים ירוקים שנפגשים עם הים. יש בו אנרגיה שקשה להסביר במילים — שילוב נדיר של שקט, חופש ופשטות שמאפשרים לגוף להירגע וללב להיפתח. במשך כמה ימים ניכנס לקצב של האי, ניתן לטבע להוביל אותנו, ונאפשר לעצמנו פשוט להיות."
            }
          />
        </div>
      </div>
    </section>
  );
}
