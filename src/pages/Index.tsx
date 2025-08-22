import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import PricingTiers from '@/components/PricingTiers';
import Separator from '@/components/Separator';
import ProductShowcase from '@/components/ProductShowcase';
import EligibilityRequirements from '@/components/EligibilityRequirements';
import CompanyLogos from '@/components/CompanyLogos';
import TestimonialCarousel from '@/components/TestimonialCarousel';
import G2Report from '@/components/G2Report';
import FAQ from '@/components/FAQ';
import HelpfulResources from '@/components/HelpfulResources';
import CTABanner from '@/components/CTABanner';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-cream">
      <Navigation />
      
      <main className="pt-16"> {/* Add padding to account for fixed nav */}
        <Hero />
        
        <Separator />
        <PricingTiers />
        
        <Separator />
        <ProductShowcase />
        
        <Separator />
        <EligibilityRequirements />
        
        <Separator />
        <CompanyLogos />
        
        <Separator />
        <TestimonialCarousel />
        
        <Separator />
        <G2Report />
        
        <Separator />
        <FAQ />
        
        <Separator />
        <HelpfulResources />
        
        <CTABanner />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;