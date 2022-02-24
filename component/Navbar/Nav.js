import React from "react";
import "./nav.css";
import { GrAdd } from "react-icons/gr";
import { Link } from "react-router-dom";
export default function Nav() {
  return (
    <div>
      <div id="sidebar">
        <img src={process.env.PUBLIC_URL + "/assets/images/logo.svg"} />
        <div>
          <ul
            style={{
              textAlign: "left",
              listStyle: "none",
              padding: 10,
              fontSize: "0.5 rem",
            }}
          >
            <li style={{ margin: "10px 0" }}>
              <Link to="/">Home</Link>
            </li>

            <li style={{ margin: "10px 0" }}>
              <Link to="/poolscard">Launchpads</Link>
              <ul className="mx-2">
                <Link to="/pools">
                  <li>Create Pools</li>
                </Link>
                
                  <li>Show All Pools</li>
                  
                
              </ul>
            </li>
            <li>
              Token
              <ul>
              <Link to="/presale">
                <li>Create Tokens</li>
                </Link>
                
                <li>Lock Tokens</li>
            <Link to="/tokenlist">
                <li>Token Locks</li>
                </Link>
              </ul>
            </li>
            <li style={{ margin: "10px 0" }}>Liquidity</li>
            <li style={{ margin: "10px 0" }}>KYC Check</li>
            <li style={{ margin: "10px 0" }}>Smart Contract Audit</li>
          </ul>
        </div>
      </div>
      <div id="rightSideWrapper">
         <header>
          <div style={{ padding: 10 }}>
            <div className="flex-button">
              <button
                className="mx-2 btn btn-success"
                style={{ borderRadius: "50px" }}
              >
                <GrAdd style={{ color: "white" }} className="mx-1" />
                Create
              </button>
              <button
                className="mx-2 btn btn-warning"
                style={{ borderRadius: "50px" }}
              >
                BSC Mainnet
              </button>
              <button
                className="mx-2 btn btn-success"
                style={{ borderRadius: "50px" }}
              >
                Connect
              </button>
            </div>
          </div>
        </header>

        <div class="ContentBox">
          <main>
            {/* <Pools />
            <PoolCard /> */}
            {/* <TablePools /> */}
            {/* <Home /> */}
          </main>
        </div>
      </div>
    </div>
  );
}
