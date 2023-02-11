import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";

import { benefitOne, benefitTwo } from "../components/data";
import Video from "../components/video";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
import Testimonials from "../components/testimonials";
import Cta from "../components/cta";
import Faq from "../components/faq";
import PopupWidget from "../components/popupWidget";

//import dynamic from "next/dynamic";

// const Video = dynamic(() => import("../components/video"));

// const Benefits = dynamic(() => import("../components/benefits"));
// const Footer = dynamic(() => import("../components/footer"));
// const Testimonials = dynamic(() => import("../components/testimonials"));
// const Cta = dynamic(() => import("../components/cta"));
// const Faq = dynamic(() => import("../components/faq"));

// const PopupWidget = dynamic(() => import("../components/popupWidget"));

export default function Home() {
  return (
    <>
      <Head>
        <title>LawBud</title>
        <meta
          name="description"
          content="LawBud"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Hero />
      <SectionTitle
        pretitle="LawBud Benefits"
        title="Virtual law assistant for a more accessible justice">
        Join the AI revolution in the legal world with LawBud. Our virtual law assistant provides accurate legal advice and facilitates access to justice for all. Try it now.
      </SectionTitle>
      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />
      <SectionTitle
        pretitle="Watch a video"
        title="Virtual law assistant for a more accessible justice">
        Join the AI revolution in the legal world with LawBud. Our virtual law assistant provides accurate legal advice and facilitates access to justice for all. Try it now.
      </SectionTitle>
      <Video />
      <SectionTitle
        pretitle="Testimonials"
        title="Virtual law assistant for a more accessible justice">
        Join the AI revolution in the legal world with LawBud. Our virtual law assistant provides accurate legal advice and facilitates access to justice for all. Try it now.
      </SectionTitle>
      <Testimonials />
      <SectionTitle pretitle="FAQ" title="Frequently Asked Questions">
        mdr je coco rien.
      </SectionTitle>
      <Faq />
      <Cta />
      <Footer />
      <PopupWidget />
    </>
  );
}
