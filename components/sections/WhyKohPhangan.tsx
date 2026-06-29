import AesopSection from "@/components/ui/AesopSection";
import { IMAGES } from "@/lib/images";

const text = `קופנגן הוא אי של טבע פראי, מים בצבע טורקיז, חופים לבנים וג'ונגלים ירוקים שנפגשים עם הים. יש בו אנרגיה שקשה להסביר במילים — שילוב נדיר של שקט, חופש ופשטות שמאפשרים לגוף להירגע וללב להיפתח.

מעבר לכל היופי שבו, קופנגן הפך בשנים האחרונות לבית של קהילה בינלאומית של יוגה, ריפוי והתפתחות אישית. אנשים מכל העולם מגיעים אליו כדי לעצור, להתחבר לעצמם ולחוות דרך חיים קצת אחרת.`;

export default function WhyKohPhangan() {
  return (
    <AesopSection
      id="why"
      reverse
      eyebrow="Why Koh Phangan"
      heading="למה דווקא קופנגן?"
      subline="אי אחד, אנרגיה שאי אפשר להסביר במילים."
      paragraph={text}
      image={IMAGES.villaSunset}
      imageAlt="שקיעה עוצרת נשימה מהוילה"
      details={[
        { label: "הטבע", value: "חופים לבנים, מים טורקיז וג'ונגלים ירוקים" },
        { label: "האנרגיה", value: "שקט, חופש ופשטות" },
        { label: "הקהילה", value: "יוגה, ריפוי והתפתחות אישית" },
      ]}
    />
  );
}
