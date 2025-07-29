import {cellContent} from './Working-Procces-Data'
import React, { useState } from "react";

export function Cell() {
  const [imgSrc, setImgSrc] = useState(Array(6).fill(false));

  function handleClick(index) {
    const newState = [...imgSrc];
    newState[index] = !newState[index];
    setImgSrc(newState);
  }

  return (
    <>
      {cellContent.map((cell, index) => (
        <div className={`working-process accordion ${imgSrc[index] ? 'active' : ''}`} key={index}>
          <input  onClick={() => handleClick(index)} type="checkbox" id={`accordion-${index + 1}`} className="accordion-toggle"/>

          <label htmlFor={`accordion-${index + 1}`} className="working-process-cell-header accordion-header">
            <h6>{`0${index + 1}`}</h6>
            <h3>{cell.h3Text}</h3>
            <img
              className="accordion-icon"
              src={ imgSrc[index] ? 'working-process-minus-icon.svg' : 'working-process-plus-icon.svg' }
              alt=""
            />
          </label>
          <hr className={imgSrc[index] ? 'visible' : 'hidden'}/>
          <div className="working-process-cell-text accordion-content">
            <p>
              During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.
            </p>
          </div>
        </div>
      ))}
    </>
  );
}