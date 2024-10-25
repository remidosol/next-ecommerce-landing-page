import FeaturesSection from "./features/page";
import HeroSection from "./hero/page";
import WhyJoinUsSection from "./why-join-us/page";

export default function HomePage() {
  return (
    <div className='min-w-96 min-h-64 bg-gradient-to-r from-[#FFFBEB] to-white'>
      <HeroSection />
      <FeaturesSection />
      <WhyJoinUsSection />
    </div>
  );
}
