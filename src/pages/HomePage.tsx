import { Hero } from '@/components/home/Hero';
import { ImpactTeaser } from '@/components/home/ImpactTeaser';
import { LatestUpdates } from '@/components/home/LatestUpdates';
import { CTASection } from '@/components/home/CTASection';

export const HomePage = () => (
  <>
    <Hero />
    <ImpactTeaser />
    <LatestUpdates />
    <CTASection />
  </>
);
