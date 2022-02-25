import { specialCharMap } from "@testing-library/user-event/dist/keyboard";
import React from "react";
import "./Locktoken.css";

const Locktokendetail = () => {
  return (
    <div>
      <div className="container">
      
        <div
          className="d-flex locktokendetails"
          style={{ justifyContent: "space-between" }}
        >
          <h2
            className="mt-4"
            style={{ fontSize: "30px", fontWeight: "600", color: "#90DA52" }}
          >
            Lock Token Details
          </h2>

          <div className="d-flex flex-column">
            <h2
              className="d-flex  mt-4"
              style={{ fontSize: "14px", fontWeight: "600" }}
            >
              Unlocks in
            </h2>
            <div>
              <button
                type="button"
                class="btn btn-success mx-1"
                style={{ backgroundColor: "#90DA52", borderColor: "#90DA52" }}
              >
                768
              </button>
              <button
                type="button"
                class="btn btn-success mx-2"
                style={{ backgroundColor: "#90DA52", borderColor: "#90DA52" }}
              >
                1
              </button>
              <button
                type="button"
                class="btn btn-success mx-1"
                style={{ backgroundColor: "#90DA52", borderColor: "#90DA52" }}
              >
                42
              </button>
              <button
                type="button"
                class="btn btn-success mx-1"
                style={{ backgroundColor: "#90DA52", borderColor: "#90DA52" }}
              >
                23
              </button>
            </div>
          </div>
        </div>

        {/*---------------locktoken details----------------- */}
        <div className="mt-5 p-3 mb-3" style={{border:'1px solid #e8e6e6',borderRadius:'23px'}}>
          <div
            className="d-flex mt-4"
            style={{
              justifyContent: "space-between",
              borderBottom: "1px solid #e8e6e6",
            }}
          >
            <p style={{fontSize:'14px',fontWeight:'600'}}>Total amount lock</p>
            <span style={{fontSize:'14px',fontWeight:'600'}}>300000000</span>
          </div>

          <div
            className="d-flex mt-4"
            style={{
              justifyContent: "space-between",
              borderBottom: "1px solid #e8e6e6",
            }}
          >
            <p style={{fontSize:'14px',fontWeight:'600'}}>Locked Token address</p>
            <span style={{color:'#90DA52',fontSize:'14px',fontWeight:'600'}}>0xfcvsgdhfhfhhggjgjkgkgk</span>
          </div>

          <div
            className="d-flex mt-4"
            style={{
              justifyContent: "space-between",
              borderBottom: "1px solid #e8e6e6",
            }}
          >
            <p style={{fontSize:'14px',fontWeight:'600'}}>Pair Name</p>
            <span style={{fontSize:'14px',fontWeight:'600'}}>SAWA Crypto Fund</span>
          </div>

          
          <div
            className="d-flex mt-4"
            style={{
              justifyContent: "space-between",
              borderBottom: "1px solid #e8e6e6",
            }}
          >
            <p style={{fontSize:'14px',fontWeight:'600'}}>Dex</p>
            <span style={{fontSize:'14px',fontWeight:'600'}}>PencakesSwap</span>
          </div>

          <div
            className="d-flex mt-4"
            style={{
              justifyContent: "space-between",
              borderBottom: "1px solid #e8e6e6",
            }}
          >
            <p style={{fontSize:'14px',fontWeight:'600'}}>Owner</p>
            <span style={{color:'#90DA52',fontSize:'14px',fontWeight:'600'}}>0fxchghhghghjhjhjhjkh</span>
          </div>

          <div
            className="d-flex mt-4"
            style={{
              justifyContent: "space-between",
              borderBottom: "1px solid #e8e6e6",
            }}
          >
            <p style={{fontSize:'14px',fontWeight:'600'}}>Unlock Date</p>
            <span style={{fontSize:'14px',fontWeight:'600'}}>04/02/2023 9:0(UTC)</span>
          </div>

          <div className="mt-4">
              <h4 style={{fontSize:'14px',fontWeight:'900'}}>Locker Vesting</h4>
          </div>

          <div className="d-flex mt-4" style={{justifyContent:'space-between'}}>
              <h6 style={{fontSize:'14px',fontWeight:'800'}}>Days</h6>
              <h6 style={{fontSize:'14px',fontWeight:'800'}}>Total Claimed(%)</h6>
              <h6 style={{fontSize:'14px',fontWeight:'800'}}>cycle</h6>
          </div>
<div className="mb-4">
          <div className="d-flex mt-4" style={{justifyContent:'space-between',borderBottom:'1px solid #e8e6e6'}}>
              <span style={{fontSize:'14px',fontWeight:'600'}}>04/01/2024 09:00</span>
              <span style={{fontSize:'14px',fontWeight:'600'}}>50%</span>
              <span style={{fontSize:'14px',fontWeight:'600'}}>1</span>
          </div>

          <div className="d-flex mt-4" style={{justifyContent:'space-between',borderBottom:'1px solid #e8e6e6'}}>
              <span style={{fontSize:'14px',fontWeight:'600'}}>0/30/2024 09:04</span>
              <span style={{fontSize:'14px',fontWeight:'600'}}>100%</span>
              <span style={{fontSize:'14px',fontWeight:'600'}}>2</span>
          </div>
          </div>
          
        </div>
        <div>
          <button type="button" class="btn btn-secondary btn-sm" style={{backgroundColor:'white',borderColor:'gray',color:'gray',borderRadius:'11px',fontSize:'14px',fontWeight:'700'}}>BACK TO LIST</button>
          </div>
        {/*---------------locktoken details close----------------- */}
      
      </div>
    </div>
  );
};

export default Locktokendetail;
