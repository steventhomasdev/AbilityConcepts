import "./style.css";
import React, { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scorlled upto given distance
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set the top cordinate to 0
  // make scrolling smooth
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="scroll-to-top">
      {isVisible && (
        <div>
          <div className="return-to-top" onClick={scrollToTop}>
            <i
              className="fa fa-angle-up "
              id="scroll-top"
              data-toggle="tooltip"
              data-placement="top"
              title=""
              data-original-title="Back to Top"
              aria-hidden="true"
            ></i>
          </div>
        </div>
      )}
    </div>
  );
}
