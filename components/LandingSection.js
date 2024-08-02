import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import langingPageImage from '../public/landing-page-image.webp';
import logo from '../public/logo&subtitle.svg';

const LandingSection = () => {
  return (
    <section
      id="home"
      className="home h-screen backgroundcolor bg-cover bg-center bg-fixed pt-28 pb-20 flex "
    >
      <div className="home-box sm:container mx-auto px-8 sm:px-0 sm:pl-4 flex sm:justify-between space-x-6  xl:space-x-10">
        <div className="home-header-box sm:w-[38rem] text-black flex flex-col self-center gap-[2rem] sm:gap-[3rem] -mt-40">
          <div className="mt-32 flex self-center max-w-[15rem]">
            <Image
              src={logo}
              alt="Four different displays"
              className="rounded w-full h-full"
              style={{ objectFit: 'fill' }}
              width={200}
              height={150}
            />
          </div>
          <h2 className="h-8  sm:text-[calc(1vw+16px)] mt-3 transition duration-300">
            <Link
              href={'#contact'}
              scroll={false}
              className=" text-[calc(10px+6*((100vw-1px)/680))] sm:text-[calc(15px+6*((100vw-320px)/680))] lg:text-[calc(10px+6*((100vw-320px)/680))] "
            >
              <Typewriter
                words={[
                  'Maßgeschneiderte Webseiten, Software und Apps',
                  'Wir finden individuelle Lösungen',
                ]}
                loop={false}
                cursorStyle="|"
                typeSpeed={60}
                deleteSpeed={20}
                delaySpeed={1000}
              />
            </Link>
          </h2>
          <div className="divider bg-black h-[2px]  "></div>
          <div className="home-header_text-con text-txt-dark-gray flex flex-col gap-[1rem] pt-4">
            <p className=" text-2xl leading-normal sm:leading-1  text-[calc(2vw+7px)] sm:text-[calc(1vw+5px)]">
              <span className="inline-block w-1.5 h-1.5  bg-txt-dark-gray rounded-full mr-1.5 align-middle"></span>
              Wir sind Experten für Webseiten, Software und App-Entwicklung und
              entwickeln individuelle Lösungen für Ihre individuellen
              Bedürfnisse und Wünsche.
            </p>

            <p className="text-2xl leading-normal sm:leading-1  text-[calc(2vw+7px)] sm:text-[calc(1vw+5px)]">
              <span className="inline-block w-1.5 h-1.5  bg-txt-dark-gray rounded-full mr-1.5 align-middle"></span>
              Unser Team arbeitet eng mit unseren Kunden zusammen, um unter
              Einsatz modernster Technologien und Programmiersprachen Ihre
              Vorhaben umzusetzen.
            </p>
            <p className="text-2xl leading-normal sm:leading-1  text-[calc(2vw+7px)] sm:text-[calc(1vw+5px)]">
              <span className="inline-block w-1.5 h-1.5  bg-txt-dark-gray rounded-full mr-1.5 align-middle"></span>
              Dabei legen wir Wert auf Lösungen, die durch Funktionalität,
              Design, Benutzerfreundlichkeit und Zuverlässigkeit überzeugen.
            </p>
          </div>
        </div>
        <div className="home-image hidden sm:flex items-center relative ">
          <Image
            src={langingPageImage}
            alt="Four different displays"
            placeholder="blur"
            sizes="40vw"
            className="rounded"
          />
        </div>
      </div>
    </section>
  );
};

export default LandingSection;
