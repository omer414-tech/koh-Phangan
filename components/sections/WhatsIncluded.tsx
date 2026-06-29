import AesopSection from "@/components/ui/AesopSection";
import { IMAGES } from "@/lib/images";

export default function WhatsIncluded() {
  return (
    <AesopSection
      id="included"
      eyebrow="What's included"
      heading="מה כלול בריטריט"
      subline="הרבה מעבר לריטריט רגיל."
      paragraph="כל מה שצריך כדי פשוט להיות — לינה יוקרתית, תנועה ווולנס יומיים, אוכל מעולה וקהילה. דאגנו לכל פרט, כדי שתוכלו פשוט להגיע ולהיות נוכחים."
      image={IMAGES.whatsIncluded}
      imageAlt="מה כלול בריטריט קופנגן"
      details={[
        {
          label: "לינה",
          value: "7 לילות בוילות יוקרה במרכז האי · נוף לים ובריכות אינפיניטי · שף פרטי וניקיון יומי",
        },
        {
          label: "תנועה ווולנס",
          value: "יוגה ומדיטציות יומיות · אקסטטיק דאנס וריקוד קונטקט · מוי טאי וקרוספיט · נשימה וחשיפה לקור · טקס קקאו וסאונד הילינג",
        },
      ]}
    />
  );
}
