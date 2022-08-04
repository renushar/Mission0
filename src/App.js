import './App.css';
import Navbar from './Components/Navbar/Navbar';
//import Footer from './Components/Footer/Footer';
import CardGallery from './Components/Card/CardGallery';
import SearchButton from './Components/SearchButton/SearchButton';

function App() {
  return (
    <div className="container">
    <Navbar/> 
    <SearchButton />
  {/* <Footer />  */}
  <CardGallery />
  
    </div>
  );
}

export default App;