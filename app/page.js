import ScrollTop from "@/components/ScrollTop/ScrollTop";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import Brand from "@/components/Brand/Brand";
import WhyChooseUs from "@/components/WhyChooseUs/WhyChooseUs";
import Intro from "@/components/Intro/Intro";
import Roadmap from "@/components/Roadmap/Roadmap";
import Invest from "@/components/Invest/Invest";
import Founders from "@/components/Founders/Founders";
import Events from "@/components/Events/Events";
import Faq from "@/components/Faq/Faq";
import Footer from "@/components/Footer/Footer";

export default function HomePage() {
  return (
    <div className="home-purple-gradient">
      <ScrollTop />
      <Header variant="home" />
      <Hero />
      <Brand />
      <WhyChooseUs />
      <Intro />
      <Roadmap />
      <Invest />

      {/*
        Team area. In the original template this wrapper is never closed,
        so the browser nests the FAQ and footer inside it as well. That
        nesting is kept here so spacing and the bottom gradient match.
      */}
      <div className="pt-130 pb-140 overflow-hidden position-relative z-index-common">
        <div className="bg-gradient-3"></div>
        <Founders />
        <Events />
        <Faq />
        <Footer />
      </div>
    </div>
  );
}
