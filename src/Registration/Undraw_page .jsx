import { CssStyle } from "./CssStyle";
import { Link } from "react-router-dom";
import React, { useEffect } from "react";

const Undraw_page = () => {
  const handleReload = () => {
    window.location.reload();
  };
  return (
    <>
      <CssStyle>
        <div className="body">
          <div className="main">
            <div className="card_img">
              <div className="img">
                <img src="/image/undraw_page_not_found_re_e9o6 1.png" />
              </div>
              <div className="button">
                <button className="Go_Home_Page">
                  <Link to="/">Go Home Page</Link>
                </button>
                <button onClick={handleReload} className="Reload_Page">
                  Reload Page
                </button>
              </div>
            </div>
          </div>
        </div>
      </CssStyle>
    </>
  );
};

export default Undraw_page;
