import React from 'react'
import "./Showpools.css";
import { IoMdLock } from "react-icons/io";

const Showpools = () => {
  return (
    <>
    <div className='container mt-5'>
     <table class="table table-bordered" style={{borderTop:'transparent'}}>
  <thead>
    <tr>
      <th scope="col">TOKEN NAME</th>
      <th scope="col">CHAIN</th>
      <th scope="col">SOFTCAP/HARDCAP</th>
      <th scope="col">PRESALES START</th>
      <th scope="col">TOKEN NAME</th>
      <th scope="col">STATUS</th>
      <th scope="col">PROGRESS</th>
      <th scope="col">VIEW</th>
    </tr>
  </thead>
  <tbody style={{borderLeft:'1px solid #e8e6e6',borderRight:'1px solid #e8e6e6'}}>
    <tr>
      <th scope="row">
      <div className='d-flex'>
      <img src = "https://bafybeidqdytdlkaknqp5lsh6sy4ni7jyh4oh3h7azj55cembqh5mfhxxmq.ipfs.infura-ipfs.io/" 
            class = "rounded-circle" alt = "Rounded Image" width = "15%" height = "15%"/>
      <div>
      <span style={{color:'black',fontWeight:'600'}}>ZINU</span>
       <p style={{color:'black',fontSize:'13px',fontWeight:'500'}}>Zombie Inu</p> 
      </div>

          </div>
         
      </th>
      <td>
      <div className='d-flex'>
      
     <span className='ml-2'>BSC</span>
     </div>
      </td>
      <td>
      <div className='d-flex'>
      <IoMdLock style={{fontSize:'20px',color:'gray'}}/>
      0%
      </div>
     
      </td>
      <td>
      <div className='d-flex'>
      <div className='prsalerate'>  </div>
      <span>748</span>
      </div>
      </td>
      <td>
      <div className='d-flex'>
      <IoMdLock style={{fontSize:'20px',color:'gray'}}/>
      40,000,000,00(40.00%)
      </div>
      </td>
      <td>$20,264,253.00</td>
      <td>
     <div className="progress">
  <div className="progress-bar" role="progressbar" style={{width: '5%'}} aria-valuenow={0} aria-valuemin={0} aria-valuemax={100}></div>
</div>
  
      </td>
      <td>
    <button type="button" className="btn btn-light tablebtn">View</button>

      </td>
    </tr>
    <tr>
      <th scope="row">
      <div className='d-flex'>
      <img src = "https://bafybeidqdytdlkaknqp5lsh6sy4ni7jyh4oh3h7azj55cembqh5mfhxxmq.ipfs.infura-ipfs.io/" 
            class = "rounded-circle" alt = "Rounded Image" width = "15%" height = "15%"/>
      <div>
      <span style={{color:'black',fontWeight:'600'}}>ZINU</span>
       <p style={{color:'black',fontSize:'13px',fontWeight:'500'}}>Zombie Inu</p> 
      </div>

          </div> 
      </th>
      <td>BSC</td>
      <td>
      <div className='d-flex'>
      <IoMdLock style={{fontSize:'20px',color:'gray'}}/>
      0%
      </div>
      </td>
      <td>
      <div className='d-flex'>
      <div className='prsalerate'>  </div>
      <span>748</span>
      </div>
      </td>
      <td>
      <div className='d-flex'>
      <IoMdLock style={{fontSize:'20px',color:'gray'}}/>
      40,000,000,00(40.00%)
      </div>
      </td>
      <td>$20,264,253.00</td>
      <td>
      <div className="progress">
  <div className="progress-bar" role="progressbar" style={{width: '15%'}} aria-valuenow={0} aria-valuemin={0} aria-valuemax={100}></div>
</div>  
      </td>
      <td>
      <button type="button" className="btn btn-light tablebtn">View</button>
      </td>
    </tr>

    <tr>
      <th scope="row">
      <div className='d-flex'>
      <img src = "https://bafybeidqdytdlkaknqp5lsh6sy4ni7jyh4oh3h7azj55cembqh5mfhxxmq.ipfs.infura-ipfs.io/" 
            class = "rounded-circle" alt = "Rounded Image" width = "15%" height = "15%"/>
      <div>
      <span style={{color:'black',fontWeight:'600'}}>GAIA</span>
       <p style={{color:'black',fontSize:'13px',fontWeight:'500'}}>Zombie Inu</p> 
      </div>

          </div> 
      </th>
      <td>BSC</td>
      <td>
      <div className='d-flex'>
      <IoMdLock style={{fontSize:'20px',color:'gray'}}/>
      0%
      </div>
      </td>
      <td>
      <div className='d-flex'>
      <div className='prsalerate'>  </div>
      <span>748</span>
      </div>
      </td>
      <td>
      <div className='d-flex'>
      <IoMdLock style={{fontSize:'20px',color:'gray'}}/>
      40,000,000,00(40.00%)
      </div>
      </td>
      <td>$20,264,253.00</td>
      <td>
      <div className="progress">
  <div className="progress-bar" role="progressbar" style={{width: '45%'}} aria-valuenow={0} aria-valuemin={0} aria-valuemax={100}></div>
</div>  
      </td>
      <td>
      <button type="button" className="btn btn-light tablebtn">View</button>
      </td>
    </tr>

    <tr>
      <th scope="row">
      <div className='d-flex'>
      <img src = "https://bafybeidqdytdlkaknqp5lsh6sy4ni7jyh4oh3h7azj55cembqh5mfhxxmq.ipfs.infura-ipfs.io/" 
            class = "rounded-circle" alt = "Rounded Image" width = "15%" height = "15%"/>
      <div>
      <span style={{color:'black',fontWeight:'600'}}>SWAP</span>
       <p style={{color:'black',fontSize:'13px',fontWeight:'500'}}>Zombie Inu</p> 
      </div>

          </div>  
      </th>
      <td>BSC</td>
      <td>
      <div className='d-flex'>
      <IoMdLock style={{fontSize:'20px',color:'gray'}}/>
      0%
      </div>
      </td>
      <td>
      <div className='d-flex'>
      <div className='prsalerate'>  </div>
      <span>748</span>
      </div>
      </td>
      <td> <div className='d-flex'>
      <IoMdLock style={{fontSize:'20px',color:'gray'}}/>
      40,000,000,00(40.00%)
      </div></td>
      <td>$20,264,253.00</td>
      <td>
      <div className="progress">
  <div className="progress-bar" role="progressbar" style={{width: '85%'}} aria-valuenow={0} aria-valuemin={0} aria-valuemax={100}></div>
</div>  
      </td>
      <td>
      <button type="button" className="btn btn-light tablebtn">View</button>
      </td>
    </tr>
    <tr>
      <th scope="row">
      <div className='d-flex'>
      <img src = "https://bafybeidqdytdlkaknqp5lsh6sy4ni7jyh4oh3h7azj55cembqh5mfhxxmq.ipfs.infura-ipfs.io/" 
            class = "rounded-circle" alt = "Rounded Image" width = "15%" height = "15%"/>
      <div>
      <span style={{color:'black',fontWeight:'600'}}>WETH</span>
       <p style={{color:'black',fontSize:'13px',fontWeight:'500'}}>Zombie Inu</p> 
      </div>

          </div>  
      </th>
      <td>BSC</td>
      <td>
      <div className='d-flex'>
      <IoMdLock style={{fontSize:'20px',color:'gray'}}/>
      0%
      </div>
      </td>
      <td>
      <div className='d-flex'>
      <div className='prsalerate'>  </div>
      <span>748</span>
      </div>
      </td>
      <td> <div className='d-flex'>
      <IoMdLock style={{fontSize:'20px',color:'gray'}}/>
      40,000,000,00(40.00%)
      </div></td>
      <td>$20,264,253.00</td>
      <td>
      <div className="progress">
  <div className="progress-bar" role="progressbar" style={{width: '55%'}} aria-valuenow={0} aria-valuemin={0} aria-valuemax={100}></div>
</div>  
      </td>
      <td>
      <button type="button" className="btn btn-light tablebtn">View</button>
      </td>
    </tr>

    <tr>
      <th scope="row">
      <div className='d-flex'>
      <img src = "https://bafybeidqdytdlkaknqp5lsh6sy4ni7jyh4oh3h7azj55cembqh5mfhxxmq.ipfs.infura-ipfs.io/" 
            class = "rounded-circle img-fluid" alt = "Rounded Image" width = "15%" height = "15%"/>
      <div>
      <span style={{color:'black',fontWeight:'600'}}>USDT</span>
       <p style={{color:'black',fontSize:'13px',fontWeight:'500'}}>Zombie Inu</p> 
      </div>

          </div>
      </th>
      <td>BSC</td>
      <td>
      <div className='d-flex'>
      <IoMdLock style={{fontSize:'20px',color:'gray'}}/>
      0%
      </div>
      </td>
      <td>
      <div className='d-flex'>
      <div className='prsalerate'>  </div>
      <span>748</span>
      </div>
      </td>
      <td>
      <div className='d-flex'>
      <IoMdLock style={{fontSize:'20px',color:'gray'}}/>
      40,000,000,00(40.00%)
      </div>
      </td>
      <td>$20,264,253.00</td>
      <td>
      <div className="progress">
  <div className="progress-bar" role="progressbar" style={{width: '65%'}} aria-valuenow={0} aria-valuemin={0} aria-valuemax={100}></div>
</div>  
      </td>
      <td>
      <button type="button" className="btn btn-light tablebtn">View</button>
      </td>
    </tr>
  
   
  </tbody>
</table> 
</div>
    </>
  )
}

export default Showpools