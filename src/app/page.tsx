import { HeroSection } from '@/components/HeroSection';
import { EducationTimeline } from '@/components/EducationTimeline';
import { SkillGrid } from '@/components/SkillGrid';
import { ProjectsSection } from '@/components/ProjectsSection';
import { ContactForm } from '@/components/ContactForm';

export default async function HomePage() {
  return (
    <div>
      <HeroSection />
      <EducationTimeline />
      <SkillGrid />
      <ProjectsSection />
      <ContactForm />
    </div>
  );
}
