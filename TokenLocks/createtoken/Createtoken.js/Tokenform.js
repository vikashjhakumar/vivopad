import React from 'react'
import "./Tokenform.css"

const Tokenform = () => {
  return (
      <div className='container'>
    <div className='col-md-8 p-3 mt-4' style={{border:'1px solid #e8e6e6',borderRadius:'23px'}}>
    <form className=''>
    <div className="form-group mt-3">
      <div className='d-flex' style={{justifyContent:'space-between'}}>
        <label htmlFor="" className='mt-2 mx-2' style={{fontSize:'14px',fontWeight:'600'}}> *Token Name:</label>
        <div className='d-flex col'>
        <input type="email" className="form-control  mr-5 " id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="e.g Good Luck Token"  style={{height:'1rem',borderRadius:'14px',fontSize:'14px',fontWeight:'500'}}/>
        </div>
        </div>
      
       
      
      </div>

      <div className="form-group mt-3">
      <div className='d-flex' style={{justifyContent:'space-between'}}>
        <label htmlFor="" className='mt-2 mx-2' style={{fontSize:'14px',fontWeight:'600'}}> *Symbol:</label>
        <div className='d-flex col'>
        <input type="email" className="form-control  mr-5 " id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="e.g Good Luck Token"  style={{height:'1rem',borderRadius:'14px',fontSize:'14px',fontWeight:'500'}}/>
        </div>
        </div>
      
       
      
      </div>
    </form>
    </div>
    </div>
  )
}

export default Tokenform