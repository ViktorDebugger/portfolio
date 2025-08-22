import FeatureSection from "../components/sections/feature-section";
import HeroSection from "../components/sections/hero-section";
import HomeBottom from "../components/sections/home-bottom";
import PromoSection from "../components/sections/promo-section";
import Slider from "../components/sections/slider";

import BentoSection from "../components/sections/bento-section";
import ContentSection from "../components/sections/content-section";
import Divider from "../components/sections/divider";
import FAQSSection from "../components/sections/faqs-section";
import GridSection from "../components/sections/grid-section";
import LargeGallery from "../components/sections/large-gallery";
import SmallGallery from "../components/sections/small-gallery";
import StatsSection from "../components/sections/stats-section";

import CTASection from "../components/sections/cta-section";

import CVHeading from "../components/sections/cv-heading";
import CVSection from "../components/sections/cv-section";

import ContactSection from "../components/sections/contact-section";
import HeadingSection from "../components/sections/heading-section";

import { useScroll } from "../context/scroll-context";
import ShowcaseSection from "../components/sections/showcase-section";

const Page = () => {
  const { registerSection } = useScroll();

  return (
    <main>
      {/* Home */}
      <div ref={registerSection("home")}>
        <HeroSection />
        <CTASection />
        <Divider />
        <FeatureSection />
        <Divider />
        <PromoSection />
        <Divider />
        <Slider />
        <HomeBottom />
      </div>

      {/* About */}

      <div ref={registerSection("about")}>
        <HeadingSection title="About Me" />
        <SmallGallery />
        <Divider />
        <StatsSection />
        <Divider />
        <GridSection />
        <Divider />
        <ContentSection />
        <Divider />
        <BentoSection />
        <Divider />
        <LargeGallery />
        <Divider />
        <FAQSSection />
      </div>

      <div ref={registerSection("showcase")}>
        <ShowcaseSection />
      </div>

      {/* CV */}

      <div ref={registerSection("cv")}>
        <HeadingSection title="CV" />
        <CVHeading />
        <CVSection />
      </div>

      {/* Contact */}
      <div ref={registerSection("contact")}>
        <HeadingSection title="Contact Me" />
        <ContactSection />
      </div>
    </main>
  );
};

export default Page;
