import React, { useState } from "react";
import { faqs } from "../util/constant";
import { FilePlus, Plus } from "lucide-react";
import RoundedHeader from "./RoundedHeader";

const Faq = () => {
  const [isOpen, setIsOpen] = useState("");

  return (
    <section>
      <div className="wrapper paddingtop paddingbottom">
        <div className="grid md:grid-cols-3 gap-10">
          <div className="flex flex-col gap-5">
            <RoundedHeader title={"FAQs"} bg={true} />
            <h1 className="main-title leading-tight">
              Frequently Asked Questions
            </h1>
            <p className="desc">
              In the digital age, your voice on social media is your brand's
              heartbeat.
            </p>
            <button className="secondary-btn-white w-fit">Get Started</button>
          </div>
          <div className="col-span-2">
            {faqs.map((faq, index) => (
              <div key={index} className="mb-4">
                <button
                  className="w-full flex items-center border border-slate-600 justify-between bg-opacity-10 bg-white text-white p-4 rounded-lg focus:outline-none"
                  onClick={() =>
                    setIsOpen((prev) => (prev === index ? "" : index))
                  }
                >
                  <span className="text-left">{faq.question}</span>
                  <Plus className="text-white flex-shrink-0" />
                </button>
                {isOpen === index && (
                  <div className="p-4 text-white bg-opacity-5 bg-white rounded-b-lg mt-1">
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
