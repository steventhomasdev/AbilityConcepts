import React from "react";

export default function Footer() {
  return (
    <div>
      <footer id="footer" className="footer">
        <div className="container">
          <div className="hm-footer-copyright text-center">
            <div className="footer-social">
              <a href="#">
                <i className="fa fa-facebook"></i>
              </a>
              <a href="#">
                <i className="fa fa-instagram"></i>
              </a>
              <a href="#">
                <i className="fa fa-linkedin"></i>
              </a>
              <a href="#">
                <i className="fa fa-pinterest"></i>
              </a>
              <a href="#">
                <i className="fa fa-behance"></i>
              </a>
            </div>
            <p>
              <a>&copy;copyright @ 2022 Ability Concepts</a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
