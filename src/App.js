import './App.scss';
//import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer/footer';
import Products from './components/Products/products';
import Customers from './components/Customers/customers'
import Header from './components/Header/header'
import Slideshow from './components/SlideShow/slideshow';
import Services from './components/Services/services';
import About from './components/About/about';

function App() {
  return (
    <div className='App'>
        <Header />
      <div className='container-wraper'>
        <Slideshow />
        <Services />
        <About />
        <Products />
        <Customers />
      </div>
      <Footer />
    </div>
    
  );
}
 
export default App;
