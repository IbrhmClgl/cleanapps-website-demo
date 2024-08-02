import LandingSection from "../components/LandingSection";
import Meta from "../components/Meta";
import dynamic from "next/dynamic";

// import components dynamically
const About = dynamic(() => import("../components/About"));
const Services = dynamic(() => import("../components/Services"));
const References = dynamic(() => import("../components/References"));
const ContactUs = dynamic(() => import("../components/ContactUs"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <Meta
        pageTitle="Clean Apps Web Development - Führende App-Entwicklungsagentur"
        description="Wir entwickeln maßgeschneiderte Webseiten und Softwarelösungen, die den spezifischen Anforderungen und Wünschen unserer Kunden entsprechen"
        cLink="https://www.cleanapps.eu/"
      />

      <main>
        <LandingSection />
        <About />
        <Services />
        <References />
        <ContactUs />
      </main>
    </>
  );
}
