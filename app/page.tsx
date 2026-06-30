import Splash from "@/components/ui/Splash";
import Navbar from "@/components/ui/Navbar";
import Hero from "@/components/sections/Hero";
import Welcome from "@/components/sections/Welcome";
import WhyKohPhangan from "@/components/sections/WhyKohPhangan";
import MosaicSpace from "@/components/sections/MosaicSpace";
import Hosts from "@/components/sections/Hosts";
import WhatsIncluded from "@/components/sections/WhatsIncluded";
import HolisticApproach from "@/components/sections/HolisticApproach";
import Experience from "@/components/sections/Experience";
import DayTimeline from "@/components/sections/DayTimeline";
import Pricing from "@/components/sections/Pricing";
import GoodToKnow from "@/components/sections/GoodToKnow";
import JoinUs from "@/components/sections/JoinUs";

export default function Home() {
  return (
    <div className="bg-[#ECEEE9] overflow-x-hidden">
      <Splash />
      <Navbar />
      <main>
        <Hero />
        <Welcome />
        <WhyKohPhangan />
        <MosaicSpace />
        <Hosts />
        <WhatsIncluded />
        <HolisticApproach />
        <Experience />
        <DayTimeline />
        <Pricing />
        <GoodToKnow />
        <JoinUs />
      </main>
    </div>
  );
}
