import React from 'react'
import "./Vesting.css";
const Vesting = () => {
    
  return (
      <>

<div className='container'>
    <div className='mt-5 d-flex ' style={{color:'#90DA52'}}>
    <h3 style={{fontSize:'20px',fontWeight:'700'}}>Vesting Contributer</h3>
    </div>
    <div className='col-md-8 p-3' style={{border:'1px solid #e8e6e6',borderRadius:'14px'}}>
    
  

<form>
  <div className="form-group mt-3">
  <div className='d-flex' style={{justifyContent:'space-between'}}>
    <label htmlFor="" style={{fontSize:'11px',fontWeight:'600'}}>First Release for Presale</label>
    
    </div>
    <input type="email" className="form-control mt-2  " id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Ex-40%"  style={{height:'1rem',borderRadius:'14px',fontSize:'11px',fontWeight:'300'}}/>
    <small id="emailHelp" class="form-text text-muted" style={{fontSize:'11px',fontWeight:'300',color:"greenyellow"}}>First release for presale can't be blank</small>
  </div>
</form>






<form>
<div className="form-group mt-3">
  <div className='d-flex' style={{justifyContent:'space-between'}}>
    <label htmlFor="" style={{fontSize:'11px',fontWeight:'600'}}> vesting Period Each Cycle(minutes)</label>
    <label htmlFor="" className='d-flex justify-content-center' style={{fontSize:'11px',fontWeight:'600'}}>Presale token release each cycle(Percent)</label>

    </div>
    <div className='d-flex'>
    <input type="email" className="form-control mt-2" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter (minutes) Ex:3"  style={{height:'1rem',borderRadius:'14px',fontSize:'11px',fontWeight:'300'}}/>
    <input type="email" className="form-control mt-2 mx-2" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Ex: 20%"  style={{height:'1rem',borderRadius:'14px',fontSize:'11px',fontWeight:'300'}}/>
    </div>
  </div>
</form>






    
    </div>
    </div>

      </>
    
  )
}

export default Vesting