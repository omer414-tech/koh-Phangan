import Hero from "@/components/sections/Hero";
import Welcome from "@/components/sections/Welcome";
import Villas from "@/components/sections/Villas";
import Hosts from "@/components/sections/Hosts";
import WhatsIncluded from "@/components/sections/WhatsIncluded";
import Experience from "@/components/sections/Experience";
import DayTimeline from "@/components/sections/DayTimeline";
import Pricing from "@/components/sections/Pricing";
import GoodToKnow from "@/components/sections/GoodToKnow";
import JoinUs from "@/components/sections/JoinUs";

export default function Home() {
  return (
    <main>
      <Hero />
      <Welcome />
      <Villas />
      <Hosts />
      <WhatsIncluded />
      <Experience />
      <DayTimeline />
      <Pricing />
      <GoodToKnow />
      <JoinUs />
    </main>
  );
}
