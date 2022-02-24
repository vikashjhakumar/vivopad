import React from "react";
import "./Tokenlist.css";

const Tokenlist = () => {
  return (
    <div>
      <section className="bg-lockToken common-main-padding padding-left-all">
        <div className="container">
          <div class="row margin-bottom-desktop">
            <div className="col-lg-12">
              <div className="lock-token-container">
                <h2 className="lock-token-h2 marginb-less">Lock Token List</h2>
              </div>
            </div>
          </div>
          <div className="row d-flex align-items-center">
            <div className="col-lg-7">
              <div className="position-relative">
                <div className="searchToken">
                  <input
                    placeholder="Search by Token address..."
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
            </div>
            <div className="col-lg-5 d-flex align-items-center justify-start-mobile">
              <div className="d-flex justify-content-end pr-2 mb-2 pt-desktop">
                <button className="tokens-filter-btn all mr-2">All</button>
                <button className="tokens-filter-btn my-lock mr-2 mx-1">
                  My lock
                </button>
                <a className="create-token" href="#/createlocktoken">
                  Create Lock
                </a>
              </div>
            </div>
          </div>
          <div className="list-container mb-4">
            <div className="row">
              <div className="col-lg-12">
                <div className="locked-list-container">
                  <div className="border-bottom-card-before">
                    <ul className="border-bottom-card d-flex justify-content-between">
                      <li className="d-flex align-items-center hidden-mr-mobile lock-header-fixed">
                        <div className="token-card-header-logo" />
                        <div className="token-card-header-text-container d-flex flex-column">
                          <span className="token-card-header-text mb-2">
                            DAOBAO
                          </span>
                          <span className="camp-title">BAO</span>
                        </div>
                      </li>
                      <li className=" d-flex align-items-center flex-column justify-content-center hidden-mr-mobile">
                        <div className="d-flex flex-column align-items-start pl-mobile">
                          <span className="camp-title">Amount</span>
                          <div className="token-amount mr-2">50000000</div>
                        </div>
                      </li>
                      <li className="hidden-768 d-flex align-items-center ">
                        <div className="d-flex flex-column align-items-start">
                          <span className="camp-title">Lock until</span>
                          <span className="token-amount mr-2">678:876455</span>
                        </div>
                      </li>
                      <li className=" d-flex align-items-center justify-content-end max-w-100">
                        <a
                          className="link-view"
                          href="#/lockToken/0x4b457c5d499bf83b41f59e65408900419f799806"
                        >
                          View
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="locked-list-container">
                  <div className="border-bottom-card-before">
                    <ul className="border-bottom-card d-flex justify-content-between">
                      <li className="d-flex align-items-center hidden-mr-mobile lock-header-fixed">
                        <div className="token-card-header-logo" />
                        <div className="token-card-header-text-container d-flex flex-column">
                          <span className="token-card-header-text mb-2">
                            DAOBAO
                          </span>
                          <span className="camp-title">BAO</span>
                        </div>
                      </li>
                      <li className=" d-flex align-items-center flex-column justify-content-center hidden-mr-mobile">
                        <div className="d-flex flex-column align-items-start pl-mobile">
                          <span className="camp-title">Amount</span>
                          <div className="token-amount mr-2">50000000</div>
                        </div>
                      </li>
                      <li className="hidden-768 d-flex align-items-center ">
                        <div className="d-flex flex-column align-items-start">
                          <span className="camp-title">Lock until</span>
                          <span className="token-amount mr-2">678:876455</span>
                        </div>
                      </li>
                      <li className=" d-flex align-items-center justify-content-end max-w-100">
                        <a
                          className="link-view"
                          href="#/lockToken/0x4b457c5d499bf83b41f59e65408900419f799806"
                        >
                          View
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="locked-list-container">
                  <div className="border-bottom-card-before">
                    <ul className="border-bottom-card d-flex justify-content-between">
                      <li className="d-flex align-items-center hidden-mr-mobile lock-header-fixed">
                        <div className="token-card-header-logo" />
                        <div className="token-card-header-text-container d-flex flex-column">
                          <span className="token-card-header-text mb-2">
                            DAOBAO
                          </span>
                          <span className="camp-title">BAO</span>
                        </div>
                      </li>
                      <li className=" d-flex align-items-center flex-column justify-content-center hidden-mr-mobile">
                        <div className="d-flex flex-column align-items-start pl-mobile">
                          <span className="camp-title">Amount</span>
                          <div className="token-amount mr-2">50000000</div>
                        </div>
                      </li>
                      <li className="hidden-768 d-flex align-items-center ">
                        <div className="d-flex flex-column align-items-start">
                          <span className="camp-title">Lock until</span>
                          <span className="token-amount mr-2">678:876455</span>
                        </div>
                      </li>
                      <li className=" d-flex align-items-center justify-content-end max-w-100">
                        <a
                          className="link-view"
                          href="#/lockToken/0x4b457c5d499bf83b41f59e65408900419f799806"
                        >
                          View
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="locked-list-container">
                  <div className="border-bottom-card-before">
                    <ul className="border-bottom-card d-flex justify-content-between">
                      <li className="d-flex align-items-center hidden-mr-mobile lock-header-fixed">
                        <div className="token-card-header-logo" />
                        <div className="token-card-header-text-container d-flex flex-column">
                          <span className="token-card-header-text mb-2">
                            DAOBAO
                          </span>
                          <span className="camp-title">BAO</span>
                        </div>
                      </li>
                      <li className=" d-flex align-items-center flex-column justify-content-center hidden-mr-mobile">
                        <div className="d-flex flex-column align-items-start pl-mobile">
                          <span className="camp-title">Amount</span>
                          <div className="token-amount mr-2">50000000</div>
                        </div>
                      </li>
                      <li className="hidden-768 d-flex align-items-center ">
                        <div className="d-flex flex-column align-items-start">
                          <span className="camp-title">Lock until</span>
                          <span className="token-amount mr-2">678:876455</span>
                        </div>
                      </li>
                      <li className=" d-flex align-items-center justify-content-end max-w-100">
                        <a
                          className="link-view"
                          href="#/lockToken/0x4b457c5d499bf83b41f59e65408900419f799806"
                        >
                          View
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Tokenlist;
