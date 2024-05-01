import React, { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import { MdOutlineArrowDropDown } from "react-icons/md";
import "./Value.css";
import data from "../../utils/accordion";

const Value = () => {
  const [expandedItemIndex, setExpandedItemIndex] = useState(null);

  const handleSpanClick = (index) => {
    setExpandedItemIndex(index);
    // Scroll to the accordion item
    const accordionItem = document.getElementById(`accordion-item-${index}`);
    accordionItem.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="v-wrapper" id="values">
      <div className="paddings innerWidth flexCenter v-container">
        {/* left-side */}
        <div className="v-left">
          <div className="image-container">
            <img src="./value.png" alt="" />
          </div>
        </div>
        {/* right side */}

        <div className="flexColStart v-right">
          <span className="orangeText">Our value</span>
          <span className="primaryText">Value We Give to You</span>
          <span className="secondaryText">
            We are always ready to help by providing the best services for you.
            <br />
            We believe a good balance to live can make your life better.
          </span>
          <Accordion
            className="accordion"
            allowMultipleExpanded={false}
            preExpanded={expandedItemIndex !== null ? [expandedItemIndex] : []}
          >
            {data.map((item, index) => (
              <AccordionItem
                key={index}
                uuid={index}
                id={`accordion-item-${index}`}
              >
                <AccordionItemHeading>
                  <AccordionItemButton className="flexCenter accordionButton">
                    <div className="flexCenter icon">{item.icon}</div>
                    <span
                      className="primaryText"
                      onClick={() => handleSpanClick(index)}
                    >
                      {item.heading}
                    </span>
                    <div className="flexCenter icon">
                      <MdOutlineArrowDropDown size={20} />
                    </div>
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p className="secondaryText">{item.detail}</p>
                </AccordionItemPanel>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Value;
