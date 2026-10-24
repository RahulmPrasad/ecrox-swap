"use client";

import { useState } from "react";
import Collapse from "./Collapse";
import "./Faq.css";

const QUESTIONS = [
  {
    question: "What is ECROX Swap?",
    answer:
      "Ecrox Swap is the official decentralized exchange of the Ecrox Chain, offering users a state-of-the-art platform for swapping, staking, and providing liquidity for a wide range of digital assets.",
  },
  {
    question: "Why Choose Ecrox Swap?",
    answer:
      "Ecrox Swap stands out in the crowded DeFi space due to its unique features and the backing of the Ecrox Chain ecosystem,Ecrox Swap respects users' privacy and does not require KYC (Know Your Customer) verification, allowing for pseudonymous trading.",
  },
  {
    question: "What are key features of Ecrox Swap?",
    answer:
      "Ecrox Swap allows users to swap various cryptocurrencies and tokens with minimal fees and slippage, thanks to its automated market-making (AMM) mechanism. The platform provides ample liquidity for a wide range of assets, ensuring that traders can execute their transactions swiftly and with minimal price impact.",
  },
  {
    question: "What is security in Ecrox Swap?",
    answer:
      "Built on the Ecrox Chain's secure and scalable infrastructure, Ecrox Swap combines the best of blockchain technology and decentralized finance to offer a user-friendly, fast, and cost-effective trading experience.",
  },
  {
    question: "Is Ecrox Swap User-friendly?",
    answer:
      "Ecrox Swap boasts an intuitive and user-friendly interface, making it accessible to both experienced and novice traders.",
  },
  {
    question: "What is transaction fees of Ecrox Swap?",
    answer:
      "The minimum transaction fees is 0. The Ecrox Chain's efficient infrastructure ensures low transaction fees, making it cost-effective for users to trade and participate in yield farming.",
  },
];

export default function Faq() {
  // Only one item open at a time; clicking the open item closes it (like data-bs-parent)
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="pt-140 pb-140 overflow-hidden">
      <div className="container">
        <div className="row gy-40 justify-content-between">
          <div className="col-xl-4 text-xl-start">
            <div className="section-title mb-50">
              <h2 className="title style2">Frequently Asked Questions</h2>
              <p className="sec-text">DO have any kind Of questions? We&apos;re here to help.</p>
            </div>
            <div className="faq-thumb mt-60">
              <img src="/assets/img/update/normal/faq_1-1.png" alt="img" />
            </div>
          </div>
          <div className="col-xxl-6 col-xl-8">
            <div className="accordion-area accordion" id="faqAccordion">
              {QUESTIONS.map((item, index) => {
                const number = index + 1;
                const isOpen = openIndex === index;
                return (
                  <div className={`accordion-card${isOpen ? " active" : ""}`} key={item.question}>
                    <div className="accordion-header" id={`collapse-item-${number}`}>
                      <button
                        className={`accordion-button${isOpen ? "" : " collapsed"}`}
                        type="button"
                        aria-expanded={isOpen}
                        aria-controls={`collapse-${number}`}
                        onClick={() => setOpenIndex(isOpen ? null : index)}
                      >
                        <span className="number">{number}</span> {item.question}
                      </button>
                    </div>
                    <Collapse
                      isOpen={isOpen}
                      id={`collapse-${number}`}
                      className="accordion-collapse"
                      aria-labelledby={`collapse-item-${number}`}
                    >
                      <div className="accordion-body">
                        <p className="faq-text text-justify">{item.answer}</p>
                      </div>
                    </Collapse>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
