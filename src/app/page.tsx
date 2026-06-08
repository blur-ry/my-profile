import { HeroSection } from '@/components/HeroSection';
import { EngineeringSection } from '@/components/EngineeringSection';
import { EducationTimeline } from '@/components/EducationTimeline';
import { SkillGrid } from '@/components/SkillGrid';
import { ProjectsSection } from '@/components/ProjectsSection';
import { ContactForm } from '@/components/ContactForm';

export default async function HomePage() {
  return (
    <div>
      <HeroSection />
      <EngineeringSection />
      <EducationTimeline />
      <SkillGrid />
      <ProjectsSection />
      <ContactForm />
    </div>
  );
}
