import React from "react";
import "../Components/WhatIsEta.css";

const Pagenation = () => {
  return (
    <>
      <nav aria-label="Page navigation pagination">
        <ul className="pagination justify-content-center">
          <li className="page-item disabled">
            <a
              className="page-link bg-warning text-white bg-gradient"
              href="#"
              tabIndex={-1}
              aria-disabled="true"
            >
              <i class="fa fa-arrow-circle-o-left"></i>
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              1
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              2
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              3
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              4
            </a>
          </li>
          <li className="page-item">
            <a className="page-link bg-warning bg-gradient" href="#">
              <i class="fa fa-arrow-circle-o-right"></i>
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Pagenation;
