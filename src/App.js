import './App.css';
import Marketplace from './components/Marketplace';
import SearchFilter from './components/SearchFilter';
import Topbar from './components/Topbar';

import Navbar from './components/Topbar'


function App() {
  return (
    <div className="App">

      <div className='container'>
        {/* <Navbar /> */}

        <Topbar/>

        <Marketplace />

        <div className='dummy'></div>

        <div className='searchfilter bg-success mx-auto'>
          <SearchFilter />
        </div>

      </div>

    </div>
  );
}

export default App;
