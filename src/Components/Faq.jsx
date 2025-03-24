import React, { useState } from "react";
import { faqs } from "../util/constant";
import { FilePlus, Plus } from "lucide-react";
import RoundedHeader from "./RoundedHeader";
import { useNavigate } from "react-router-dom";

const Faq = () => {
  const [isOpen, setIsOpen] = useState("");
  const navigate = useNavigate();
  const navigateTo = (link) => {
    navigate(link);
  };
  return (
    <section>
      <div className="wrapper paddingtop paddingbottom">
        <div className="grid md:grid-cols-3 gap-10">
          <div className="flex flex-col gap-5">
            <RoundedHeader title={"FAQs"} bg={true} />
            <h1 className="main-title leading-tight" data-aos="fade-right">
              Frequently Asked Questions
            </h1>
            <p className="desc" data-aos="fade-right">
              In the digital age, your voice on social media is your brand's
              heartbeat.
            </p>
            <button
              onClick={() => navigateTo("/contact-us")}
              className="secondary-btn-white w-fit"
              data-aos="fade-right"
            >
              Get Started
            </button>
          </div>
          <div className="col-span-2">
            {faqs.map((faq, index) => (
              <div key={index} className="mb-4" data-aos="fade-left">
                <button
                  className="w-full flex items-center border border-slate-600 justify-between bg-opacity-10 bg-white text-white p-4 rounded-lg focus:outline-none"
                  onClick={() =>
                    setIsOpen((prev) => (prev === index ? "" : index))
                  }
                >
                  <span className="text-left font-medium text-lg dark:text-white text-darkblack">
                    {faq.question}
                  </span>
                  <Plus className="dark:text-white text-darkblack flex-shrink-0" />
                </button>
                {isOpen === index && (
                  <div className="p-4 dark:text-white text-darkblack bg-opacity-5 bg-darkblack dark:bg-white/30 rounded-b-lg mt-1">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
