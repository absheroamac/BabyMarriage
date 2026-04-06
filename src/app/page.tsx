import HeroVideo from "@/components/HeroVideo";
import WelcomeSection from "@/components/sections/WelcomeSection";
import InvitationSection from "@/components/sections/InvitationSection";
import PeopleSection from "@/components/sections/PeopleSection";
import EventsSection from "@/components/sections/EventsSection";
import VenueSection from "@/components/sections/VenueSection";
import ClosingSection from "@/components/sections/ClosingSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-transparent relative z-10 w-full overflow-x-hidden">
      <HeroVideo />
      
      {/* Content wrapper with a subtle top margin to allow seamless scroll transition */}
      <div className="relative z-10 bg-background w-full">
        <WelcomeSection />
        <InvitationSection />
        <PeopleSection />
        <EventsSection />
        <VenueSection />
        <ClosingSection />
      </div>
    </main>
  );
}
