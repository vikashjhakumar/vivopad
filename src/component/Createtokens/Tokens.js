import React from 'react'
import { FaRegQuestionCircle } from 'react-icons/fa';
import "./Tokens.css"

const Tokens = () => {
  return (
    <div className='container'>
    <div className='mt-5 d-flex ' style={{color:'#90DA52'}}>
    <h3 style={{fontSize:'20px',fontWeight:'700'}}>Create Tokens</h3>
    </div>
    <div className='col-md-8 p-3' style={{border:'1px solid #e8e6e6',borderRadius:'23px'}}>
    
    <form>
  <div className="form-group">
  <div className='d-flex' style={{justifyContent:'space-between'}}>
    <label htmlFor="" style={{fontSize:'11px',fontWeight:'600'}}> Token Types *</label>
    <FaRegQuestionCircle/>
    </div>
    <select class="form-select selectpicker style={{fontSize:'11px',fontWeight:'700',outline:'none'}}" aria-label="Default select example">
  <option className='optionselect' selected >Liquidity Generater token</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>
  </div>
</form>

<form>
  <div className="form-group mt-3">
  <div className='d-flex' style={{justifyContent:'space-between'}}>
    <label htmlFor="" style={{fontSize:'11px',fontWeight:'600'}}>Name *</label>
    <FaRegQuestionCircle/>
    </div>
    <input type="email" className="form-control mt-2  " id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Ex-Ethereum"  style={{height:'1rem',borderRadius:'11px',fontSize:'11px',fontWeight:'300'}}/>
  </div>
</form>
<form>
<div className="form-group mt-3">
  <div className='d-flex' style={{justifyContent:'space-between'}}>
    <label htmlFor="" style={{fontSize:'11px',fontWeight:'600'}}>Symbol*</label>
    <FaRegQuestionCircle/>
    </div>
    <input type="email" className="form-control mt-2" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Ex-ETH"  style={{height:'1rem',borderRadius:'11px',fontSize:'11px',fontWeight:'300'}}/>
  </div>
</form>

<form>
<div className="form-group mt-3">
  <div className='d-flex' style={{justifyContent:'space-between'}}>
    <label htmlFor="" style={{fontSize:'11px',fontWeight:'600'}}>Decimals*</label>
    <FaRegQuestionCircle/>
    </div>
    <input type="email" className="form-control mt-2" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Ex. 18"  style={{height:'1rem',borderRadius:'11px',fontSize:'11px',fontWeight:'300'}}/>
  </div>
</form>

<form>
<div className="form-group mt-3">
  <div className='d-flex' style={{justifyContent:'space-between'}}>
    <label htmlFor="" style={{fontSize:'11px',fontWeight:'600'}}>Total Supply*</label>
    <FaRegQuestionCircle/>
    </div>
    <input type="email" className="form-control mt-2" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Ex. 100000000"  style={{height:'1rem',borderRadius:'11px',fontSize:'11px',fontWeight:'300'}}/>
  </div>
</form>

<form>
<div className="form-group mt-3">
  <div className='d-flex' style={{justifyContent:'space-between'}}>
    <label htmlFor="" style={{fontSize:'11px',fontWeight:'600'}}>Router*</label>
    <FaRegQuestionCircle/>
    </div>
    <input type="email" className="form-control mt-2" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Pancakeswap"  style={{height:'1rem',borderRadius:'11px',fontSize:'11px',fontWeight:'300'}}/>
  </div>
</form>

<form>
<div className="form-group mt-3">
  <div className='d-flex' style={{justifyContent:'space-between'}}>
    <label htmlFor="" style={{fontSize:'11px',fontWeight:'600'}}> Transaction fee to held yet(%)*</label>
    <label htmlFor="" className='d-flex justify-content-center' style={{fontSize:'11px',fontWeight:'600'}}>Transaction fee to generate liquidity*</label>
    <FaRegQuestionCircle/>
    </div>
    <div className='d-flex'>
    <input type="email" className="form-control mt-2" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="0-100"  style={{height:'1rem',borderRadius:'11px',fontSize:'11px',fontWeight:'300'}}/>
    <input type="email" className="form-control mt-2 mx-2" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="0-100"  style={{height:'1rem',borderRadius:'11px',fontSize:'11px',fontWeight:'300'}}/>
    </div>
  </div>
</form>
<form>
<div className="form-group mt-3">
  <div className='d-flex' style={{justifyContent:'space-between'}}>
    <label htmlFor="" style={{fontSize:'11px',fontWeight:'600'}}>Transaction Fee To Generate Yield(%)*</label>
    <FaRegQuestionCircle/>
    </div>
    <input type="email" className="form-control mt-2" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="0-100"  style={{height:'1rem',borderRadius:'11px',fontSize:'11px',fontWeight:'300'}}/>
  </div>
</form>

<form>
<div className="form-group mt-3">
  <div className='d-flex' style={{justifyContent:'space-between'}}>
    <label htmlFor="" style={{fontSize:'11px',fontWeight:'600'}}>Charity or Marketing address*</label>
    <FaRegQuestionCircle/>
    </div>
    <input type="email" className="form-control mt-2" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="0-100"  style={{height:'1rem',borderRadius:'11px',fontSize:'11px',fontWeight:'300'}}/>
  </div>
</form>

<form>
<div className="form-group mt-3">
  <div className='d-flex' style={{justifyContent:'space-between'}}>
    <label htmlFor="" style={{fontSize:'11px',fontWeight:'600'}}>Max Transaction(%)*</label>
    <label htmlFor="" className='d-flex justify-content-center' style={{fontSize:'11px',fontWeight:'600'}}>Max Wallet holding(%)*</label>
    <FaRegQuestionCircle/>
    </div>
    <div className='d-flex'>
    <input type="email" className="form-control mt-2" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="0-100"  style={{height:'1rem',borderRadius:'11px',fontSize:'11px',fontWeight:'300'}}/>
    <input type="email" className="form-control mt-2 mx-2" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="0-100"  style={{height:'1rem',borderRadius:'11px',fontSize:'11px',fontWeight:'300'}}/>
    </div>
  </div>
</form>


<div className='mt-2'>
<button type="button" class="btn btn-secondary" style={{borderRadius:'11px',backgroundColor:'#f0f1f2', borderColor:'gray',color:'rgb(89 89 89 / 42%)',fontSize:'11px',fontWeight:'900'}}>CREATE TOKEN</button>
</div>






    
    </div>
    </div>
  )
}

export default Tokens