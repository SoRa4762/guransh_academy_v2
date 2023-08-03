import { faq } from "@/helper/data";
import React from "react";

type Props = {};

const FAQ = (props: Props) => {
  return (
    <div
      id="faq"
      className="min-h-screen w-full flex flex-col bg-gray-100 px-6 lg:px-16"
    >
      <h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold text-center py-6 md:py-10 lg:py-14">
        Frequently Asked Questions
      </h1>
      {/* QnA */}
      <div className="grid md:grid-cols-2 md:grid-rows-2 grid-rows-4">
        {faq.map((qna, index) => (
          <div key={index} className="h-full w-full p-4 sm:p-12 flex flex-col">
            <h1 className="text-lg md:text-2xl lg:text-3xl font-bold text-yellow-500">
              {qna.question}
            </h1>
            <p className="mt-2 text-sm sm:text-base lg:text-lg">{qna.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
