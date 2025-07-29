import React from "react";
import { cellContent } from "./Case-Studies-Data";
export function Cell() {
  return (
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
  );
}