import { HorizonHeroSection } from "@/components/ui/horizon-hero-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { SkillsSection } from "@/components/sections/skills-section";
import { ContactSection } from "@/components/sections/contact-section";

export default function Home() {
  return (
    <>
      <main className="w-full">
        <HorizonHeroSection />
      </main>
      <ExperienceSection />
      <SkillsSection />
      <ContactSection />
    </>
  );
}
