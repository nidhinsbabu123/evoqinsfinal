import './App.css';
import Footer from './components/Footer';
import Marketplace from './components/Marketplace';
import SearchFilter from './components/SearchFilter';
import Topbar from './components/Topbar';



function App() {
  return (
    <div className="App">

      <div className='container'>
        {/* <Navbar /> */}

        <Topbar/>

        <Marketplace />


        <div className='searchfilter bg-succes mx-auto mt-5'>
          <SearchFilter />
        </div>

      </div>

      <Footer/>

      

    </div>



  );
}

export default App;
