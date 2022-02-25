import React from 'react'
import "./TokenLock.css";
import { FaRegQuestionCircle } from 'react-icons/fa';

const TokenLocks = () => {
  return (
      <div className='container'>
    <div className='mt-5 d-flex ' style={{color:'#90DA52'}}>
    <h3>Create Token Locker</h3>
    </div>
    <div className='col-md-8 p-3' style={{border:'1px solid #e8e6e6',borderRadius:'23px'}}>
    
    <form>
  <div className="form-group">
  <div className='d-flex' style={{justifyContent:'space-between'}}>
    <label htmlFor="" style={{fontSize:'14px',fontWeight:'700'}}>Enter Token or LP Token address *</label>
    <FaRegQuestionCircle/>
    </div>
    <input type="email" className="form-control mt-2" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Token or LP TOken address"  style={{height:'1rem',borderRadius:'23px',fontSize:'11px',fontWeight:'300'}}/>
  </div>
</form>

<form>
  <div className="form-group mt-3">
  <div className='d-flex' style={{justifyContent:'space-between'}}>
    <label htmlFor="" style={{fontSize:'14px',fontWeight:'700'}}>Amount *</label>
    <FaRegQuestionCircle/>
    </div>
   
    <div className='d-flex' style={{justifyContent:'space-between'}}>
    <input type="email" className="form-control mt-2  " id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Ex-Ethereum"  style={{height:'1rem',borderRadius:'23px',fontSize:'11px',fontWeight:'300'}}/>
    <button type="button" class="btn btn-info mx-1" style={{backgroundColor:'#90DA52',borderColor:'#90DA52',color:'#fff',fontSize:'11px',fontWeight:'700'}}>Max</button>
    </div>
  </div>
</form>
<form>
<div className="form-group mt-3">
  <div className='d-flex' style={{justifyContent:'space-between'}}>
    <label htmlFor="" style={{fontSize:'14px',fontWeight:'700'}}>Lock Until(UTC time)*</label>
    <FaRegQuestionCircle/>
    </div>
    <input type="email" className="form-control mt-2" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Ex-ETH"  style={{height:'1rem',borderRadius:'23px',fontSize:'11px',fontWeight:'300'}}/>
  </div>
  <div class="form-check mt-2">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
  <label class="form-check-label" for="flexCheckDefault" style={{fontSize:'14px',fontWeight:'700'}}>
    Vesting Locker
  </label>
</div>
</form>

<div className='mt-2'>
    <p style={{color:'#90DA52',fontSize:'11px',fontWeight:'600'}}>You Will Pay:0 BNB</p>
</div>

<div className='mt-2'>
<button type="button" class="btn btn-secondary" style={{borderRadius:'23px',backgroundColor:'#f0f1f2', borderColor:'gray',color:'rgb(89 89 89 / 42%)',fontSize:'11px',fontWeight:'900'}}>CREATE TOKEN</button>
</div>

<div class="form-check mt-2">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
  <label class="form-check-label" for="flexCheckDefault" style={{fontSize:'14px',fontWeight:'700'}}>
    Vesting Locker
  </label>
</div>
<form>
  <div className="form-group mt-3">
  <div className='d-flex' style={{justifyContent:'space-between'}}>
    <label htmlFor="" style={{fontSize:'14px',fontWeight:'700'}}>cycle(days) *</label>
    <FaRegQuestionCircle/>
    </div>
    <input type="email" className="form-control mt-2" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Ex:-2"  style={{height:'1rem',borderRadius:'23px',fontSize:'11px',fontWeight:'300'}}/>
  </div>
</form>

<form>
  <div className="form-group mt-3">
  <div className='d-flex' style={{justifyContent:'space-between'}}>
    <label htmlFor="" style={{fontSize:'14px',fontWeight:'700'}}>First Percentage *</label>
    <FaRegQuestionCircle/>
    </div>
    <input type="email" className="form-control mt-2" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Ex-40%"  style={{height:'1rem',borderRadius:'23px',fontSize:'11px',fontWeight:'300'}}/>
  </div>
</form>

<form>
  <div className="form-group mt-3">
  <div className='d-flex' style={{justifyContent:'space-between'}}>
    <label htmlFor="" style={{fontSize:'14px',fontWeight:'700'}}>Token Per Cycle Percentage (%)*</label>
    <FaRegQuestionCircle/>
    </div>
    <input type="email" className="form-control mt-2" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Ex-40%"  style={{height:'1rem',borderRadius:'23px',fontSize:'11px',fontWeight:'300'}}/>
  </div>
</form>
<div className='mt-2'>
    <p style={{color:'#90DA52',fontSize:'11px',fontWeight:'600'}}>You Will Pay:0 BNB</p>
</div>
<div className='mt-2'>
<button type="button" class="btn btn-secondary" style={{borderRadius:'23px',backgroundColor:'#f0f1f2', borderColor:'gray',color:'rgb(89 89 89 / 42%)',fontSize:'11px',fontWeight:'900'}}>CREATE TOKEN</button>
</div>

    
    </div>
    </div>
  )
}

export default TokenLocks