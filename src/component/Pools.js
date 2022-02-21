import React from "react";
import "./Pools.css";

const Pools = () => {
  return (
    <>
      <section className="bg-launchpad">
        <div className="container">
          <div className="row margin-bottom-text">
            <div className="col-lg-12">
              <div className="launchpad-title-container ">
                <h2 className="launchpad-list-h2">All Pools | My Pools</h2>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12">
              <div className="form-flex-2 margin-bottom-text">
                <div className="launchpad-list-input">
                  <div className="list-input">
                    <input
                      id
                      name
                      placeholder="Enter Token name or Token contract"
                      defaultValue
                    />
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="arrow-right"
                      className="svg-inline--fa fa-arrow-right fa-w-14 submit-icon"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                    >
                      <path
                        fill="currentColor"
                        d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"
                      />
                    </svg>
                  </div>
                </div>

                <div className="input-btns d-flex align-items-center justify-on-768">
                  <span className="filters-starter ">
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="sliders-h"
                      className="svg-inline--fa fa-sliders-h fa-w-16 filter-icon"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill="currentColor"
                        d="M496 384H160v-16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v16H16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h80v16c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-16h336c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm0-160h-80v-16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v16H16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h336v16c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-16h80c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm0-160H288V48c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v16H16C7.2 64 0 71.2 0 80v32c0 8.8 7.2 16 16 16h208v16c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-16h208c8.8 0 16-7.2 16-16V80c0-8.8-7.2-16-16-16z"
                      />
                    </svg>
                    <span className="title"> Filters</span>
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="row margin-rem">
            <div className="col-lg-8">
              <div className="launchpad-list-filters">
                <ul>
                  <li className="launchpad-list-filter  launchpad-list-filter-active">
                    presale live
                  </li>
                  <li className="launchpad-list-filter  ">upcoming</li>
                  <li className="launchpad-list-filter  ">presale ended</li>
                  <li className="launchpad-list-filter  ">cancelled</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Pools;
