import SvgSymbols from '@/components/SvgSymbols';
import GhostTracker from '@/components/GhostTracker';
import ScrollReveal from '@/components/ScrollReveal';
import Hero from '@/components/Hero';
import FeedOffers from '@/components/FeedOffers';
import Benefits from '@/components/Benefits';
import Steps from '@/components/Steps';
import FAQ from '@/components/FAQ';
import FinalSection from '@/components/FinalSection';
import FixedBottomBar from '@/components/FixedBottomBar';

export default function Home() {
  return (
    <>
      <SvgSymbols />
      <GhostTracker />
      <ScrollReveal />

      <main>
        <Hero />
        <FeedOffers />
        <Benefits />
        <Steps />
        <FAQ />
        <FinalSection />
      </main>

      <FixedBottomBar />
    </>
  );
}

