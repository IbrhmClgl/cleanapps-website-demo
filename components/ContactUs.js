import React, { useRef, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

import { BsFillTelephoneFill } from "react-icons/bs";
import Button from "./Button";
import ContactForm from "./ContactForm";
import { GrMail } from "react-icons/gr";
import Heading from "./Heading";
import Link from "next/link";
import emailjs from "@emailjs/browser";

export const ContactUs = () => {
  const form = useRef();

  const [isLoading, setIsLoading] = useState(false);

  const handleSnackbar = () => {
    toast.success("Your message has been committed", {
      duration: 3000,
      position: "bottom-center",
    });
  };

  // Sending mail API --------- starts --//
  const handleSendEmailSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          setIsLoading(false);
          // We call reset to reset all the fields in the form.
          // This works for uncontrolled form fields.
          e.target.reset();
          handleSnackbar();
        },
        (error) => {
          setIsLoading(false);
          console.log(error.text);
        }
      );
  };
  // Sending mail API --------- ends --//

  return (
    <section id="contact" className="container contactus mx-auto py-10 px-4">
      <Heading title="Kontaktiere uns" />

      <div className="contactus__flex-box flex flex-col md:flex-row justify-around ">
        <div className="contactus__info sm:w-[22rem] flex flex-col max-md:mb-10 md:mr-10 text-txt-dark-gray text-sm">
          <div className="contactus__info__box flex flex-row items-center ">
            <BsFillTelephoneFill className=" mr-5" />
            <Link href={`tel:${"015678283091"}`}>0156 78 28 30 91</Link>{" "}
          </div>

          <div className="contactus__info__box flex flex-row items-center ">
            <GrMail className=" mr-5" />
            <Link href="mailto:service@cleanapps.eu">service@cleanapps.eu</Link>
          </div>

          {/*-------- Download vCard ------ */}
          <div className="contactus__info__box flex ">
            <Link
              className="btn mt-4 relative flex justify-center text-center md:w-21"
              href={"https://vcard.link/card/DRnL.vcf"}
            >
              Kontakt in Adressbuch hinzufügen
            </Link>
          </div>
        </div>

        <ContactForm
          handleSendEmailSubmit={handleSendEmailSubmit}
          isLoading={isLoading}
          form={form}
        />
      </div>
      <Toaster />
    </section>
  );
};

export default ContactUs;
