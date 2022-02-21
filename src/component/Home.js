import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <>
      <div className="py-6 container">
        <section className="hero">
          <div className="hero-body">
            <div className="has-text-centered d-flex justify-content-center">
              <h1 className="ant-typography" >
                Launch your dream , launch your token
              </h1>
            </div>
            <p className="d-flex justify-content-center" style={{fontSize:'600',fontWeight:'bold'}}>
              Weevo create your token ,raise crowed funding in easy way
            </p>
          </div>
        </section>
        {/*--- card section---- */}

        <div className="section">
          <nav className="stats">
            <div className="stat has-text-centered">
              <div className="stat-box">
                <p className="title">$360.1M</p>
                <p className="heading" style={{color:'gray',fontWeight:'500'}}>Total Liquidity Raised</p>
              </div>
            </div>
            <div className="stat has-text-centered">
              <div className="stat-box">
                <p className="title">5820</p>
                <p className="heading" style={{color:'gray',fontWeight:'500'}}>Total Projects</p>
              </div>
            </div>
            <div className="stat has-text-centered">
              <div className="stat-box">
                <p className="title">265255</p>
                <p className="heading" style={{color:'gray',fontWeight:'500'}}>Total Participants</p>
              </div>
            </div>
            <div className="stat has-text-centered">
              <div className="stat-box">
                <p className="title">$460.1.8M</p>
                <p className="heading" style={{color:'gray',fontWeight:'500'}}>Total Values Locked</p>
              </div>
            </div>
          </nav>
        </div>
       
          <div className="custom-hero-buttons mt-5">
            <a href="#">Launchpad</a>
            <a
              className="learn"
              href="#"
            >
              Token
            </a>
          </div>
       
  
        {/*-----close card section------ */}
        <div className="underline"></div>
        {/*--------Trending Pool---------*/}
        <div className="custom-features-section mt-5">
          <div className="has-text-centered">
            <h3 class="custom-title">
              Trending Pool
            </h3>
          </div>

          <div className="custom-features mt-5">
            <div className="custom-feature">
              <div className="custom-feature-box">
                <h4>Safemoon</h4>
                <img src="https://www.clipartmax.com/png/middle/322-3220431_solid-color-circle-png.png" />
                <button
                  type="button"
                  class="btn btn-warning mt-5 text-white"
                  style={{
                    borderRadius: "23px",
                    width: "7rem",
                    marginBottom: "-3rem",
                  }}
                >
                  View
                </button>
              </div>
            </div>

            <div className="custom-feature">
              <div className="custom-feature-box">
                <h4>CumRocket</h4>
                <img src="https://www.clipartmax.com/png/middle/322-3220431_solid-color-circle-png.png" />
                <button
                  type="button"
                  class="btn btn-warning mt-5 text-white"
                  style={{
                    borderRadius: "23px",
                    width: "7rem",
                    marginBottom: "-3rem",
                  }}
                >
                  View
                </button>
              </div>
            </div>

            <div className="custom-feature">
              <div className="custom-feature-box">
                <h4>ElonGate</h4>
                <img src="https://www.clipartmax.com/png/middle/322-3220431_solid-color-circle-png.png" />
                <button
                  type="button"
                  class="btn btn-warning mt-5 text-white"
                  style={{
                    borderRadius: "23px",
                    width: "7rem",
                    marginBottom: "-3rem",
                  }}
                >
                  View
                </button>
              </div>
            </div>

            <div className="custom-feature">
              <div className="custom-feature-box">
                <h4>SavePlanetEarth</h4>
                <img src="https://www.clipartmax.com/png/middle/322-3220431_solid-color-circle-png.png" />
                <button
                  type="button"
                  class="btn btn-warning mt-5 text-white"
                  style={{
                    borderRadius: "23px",
                    width: "7rem",
                    marginBottom: "-3rem",
                  }}
                >
                  View
                </button>
              </div>
            </div>

            <div className="custom-feature">
              <div className="custom-feature-box">
                <h4>TeslaSafe</h4>
                <img src="https://www.clipartmax.com/png/middle/322-3220431_solid-color-circle-png.png" />
                <button
                  type="button"
                  class="btn btn-warning mt-5 text-white"
                  style={{
                    borderRadius: "23px",
                    width: "7rem",
                    marginBottom: "-3rem",
                  }}
                >
                  View
                </button>
              </div>
            </div>

            <div className="custom-feature">
              <div className="custom-feature-box">
                <h4>SlamToken</h4>
                <img src="https://www.clipartmax.com/png/middle/322-3220431_solid-color-circle-png.png" />
                <button
                  type="button"
                  class="btn btn-warning mt-5 text-white"
                  style={{
                    borderRadius: "23px",
                    width: "7rem",
                    marginBottom: "-3rem",
                  }}
                >
                  View
                </button>
              </div>
            </div>
          </div>
        </div>
        {/*--------Close Trending Pool---------*/}
      </div>
    </>
  );
};

export default Home;
