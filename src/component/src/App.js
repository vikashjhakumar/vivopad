import logo from './logo.svg';
import './App.css';
import { Route, Link, Switch, Routes } from "react-router-dom";
// import Nav from './component/Navbar/Nav';
  import Pools from './component/Pools';
 import Home from './component/Home';
import Pre from './component/Presale/Pre';
import Tokens from './component/Createtokens/Tokens';
// import Liquidity from './component/Liquidity/Liquidity';

// import Tokenlist from './component/Tokenslist/Tokenlist';
// import Locktokendetail from './component/Locktocken/Locktokendetail';



// import Showpools from './component/Showpools';

function App() {
  return ( 
    <div className="App">
      {/* <Nav /> */}
    {/* <Tokenlist /> */}
    {/* <Locktokendetail /> */}
    {/* <TokenLocks /> */}
    {/* <Liquidity /> */}
    <Tokens />
      <Routes>
      
        {/* <Route exact path="/" element={<Home />} /> */}
        {/* <Route exact path="/pools" element={<Pools />} />
        <Route  path="/presale" element={<Pre />} />
        <Route  path="/" element={<Tokenlist />} /> */}
        
        {/* <Route path="/poolscard" element={<PoolCard />} />
        <Route path="/about" element={<TablePools/>} /> */}
      </Routes>
    </div>
  );
}

export default App;
