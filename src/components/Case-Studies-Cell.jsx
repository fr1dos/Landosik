import React from "react";
import { cellContent } from "./Case-Studies-Data";
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/scrollbar';

import { Scrollbar } from 'swiper/modules';

export function Cell() {
  const isMobile = window.innerWidth < 575;

  return (
    <>
      {isMobile && (  
        <>
          <Swiper
            slidesPerView={2}
            loop={true}
            spaceBetween={240}
            modules={[Scrollbar]}
            className="mySwiper"
          >
              {cellContent.map((cell, index) => (
                <SwiperSlide key={index}>
                    <div className="case-studies-cell">
                      <p className="case-studies-cell-text">{cell.cellText}</p>
                      <button className="case-studies-cell-link">
                        <a className="case-studies-cell-link-text" href="">Learn more</a>
                        <img className="case-studies-cell-arrow-picture" src="./case-studies-green-arrow.svg" alt="" />
                      </button>
                    </div>
                </SwiperSlide>
              ))}
          </Swiper>
        </>
      )}
      {!isMobile && (
        <>
          {cellContent.map((cell, index) => (
            <React.Fragment key={index}>
              <div className="case-studies-cell">
                <p className="case-studies-cell-text">{cell.cellText}</p>
                <button className="case-studies-cell-link">
                  <a className="case-studies-cell-link-text" href="">Learn more</a>
                  <img className="case-studies-cell-arrow-picture" src="./case-studies-green-arrow.svg" alt="" />
                </button>
              </div>
              {index < cellContent.length - 1 && 
                <hr className="vertical-line" />
              }
            </React.Fragment>
          ))}
        </>
      )}
    </>
  );
}