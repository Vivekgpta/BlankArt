import React from "react";
import ContactUsHeading from "../components/contact/ContactUsHeading";
import { Link } from "react-router-dom";
import ContactUsFormSection from "../components/contact/ContactUsFormSection";

const Contact = () => {
  return (
    <div className="bg-[#ffedf3]">
      <ContactUsHeading />

    <ContactUsFormSection/>

    </div>
  );
};

export default Contact;
