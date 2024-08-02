import Heading from "./Heading";
import Image from "next/image";
import aboutUsImage from "../public/aboutUs.jpg";

function About() {
  return (
    <section id="about" className="about-con sm:container mx-auto py-10 px-4">
      <Heading title="Über Uns" />
      <div className="about-wrapper grid grid-cols-1 sm:grid-cols-2 gap-[60px]">
        <div className="about-image-con flex items-center justify-center relative">
          <Image
            className="about-image "
            src={aboutUsImage}
            alt="Grafik - Ein Mann sitzt auf dem Notebook"
            placeholder="blur"
            sizes="40vw"
            width={200}
            height={200}
          />
        </div>

        <div className="about-text-box font-medium sm:w-full sm:mt-[-9rem] px-4 max-w-[500px] flex flex-col justify-center">
          <h1 className="about-header text-center pb-8 text-2xl lg:text-3xl">
            Clean Apps <br /> Web Development
          </h1>
          <p className="about-text-paragraph text-txt-dark-gray">
            Wir sind ein engagiertes Web-Unternehmen aus Berlin. Sie möchten
            eine neue Webseite erstellen lassen? Oder brauchen eine Software?
            Wir setzen Ihre Vorstellungen um. Wir haben es uns zum Ziel gesetzt,
            Unternehmen durch die Entwicklung von Webseiten zu unterstützen,
            sich online zu präsentieren und noch sichtbarer zu werden
            <br />
            <br />
            Außerdem unterstützen wir Unternehmen durch Software und Anwendungen
            darin, ihre Prozesse effizienter, leichter und besser handhabbar zu
            machen. Bei beiden Bereichen unserer Arbeit ist uns wichtig, dem
            Kunden genau zuzuhören und unsere Expertise so einzusetzen, dass die
            spezifischen Bedürfnisse und Wünsche der Kunden erfüllt werden. 
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
