import Header from "./components/header";
import Footer from "./components/footer";

import FeatureSection from "./components/sections/feature-section";
import HeroSection from "./components/sections/hero-section";
import Slider from "./components/sections/slider";

import BentoSection from "./components/sections/bento-section";
import Divider from "./components/sections/divider";
import LargeGallery from "./components/sections/large-gallery";
import SmallGallery from "./components/sections/small-gallery";
import StatsSection from "./components/sections/stats-section";

import ContactSection from "./components/sections/contact-section";

import { useScroll } from "./context/scroll-context";
import ShowcaseSection from "./components/sections/showcase-section";

const App = () => {
  const { registerSection } = useScroll();

  return (
    <div className="bg-white dark:bg-[#0a0a0a]">
      <div className="relative z-10 flex min-h-screen flex-col justify-between overflow-hidden pt-16">
        <Header />
        <main>
          <div ref={registerSection("home", "body-1")}>
            <HeroSection />
          </div>

          <Divider />

          <div ref={registerSection("about", "body-2")}>
            <FeatureSection />
          </div>

          <Divider />

          <div ref={registerSection("gallery-small", "body-3")}>
            <SmallGallery />
          </div>

          <Divider />

          {/* <div ref={registerSection("gallery-large", "body-4")}>
            <LargeGallery />
          </div> */}

          <Divider />

          <div ref={registerSection("bento", "body-5")}>
            <BentoSection />
          </div>

          <Divider />

          <div ref={registerSection("slider", "body-6")}>
            <Slider />
          </div>

          <Divider />

          {/* <div ref={registerSection("showcase", "body-7")}>
            <ShowcaseSection />
          </div> */}

          <Divider />

          <div ref={registerSection("stats", "body-8")}>
            <StatsSection />
          </div>

          {/*


          <Divider />

          <div ref={registerSection("contact", "body-9")}>
            <ContactSection />
          </div>
        
        <Footer /> */}
        </main>
      </div>
    </div>
  );
};

export default App;
