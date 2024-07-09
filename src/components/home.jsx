import Trending from './Trending books/Trending';
import Footer from './Footer/Footer';
import Navbar from './Navbar'
import './home.css'
import { Link } from 'react-router-dom';
import Cart from "./cart/cart"
function Home(){
  return (
    <div>
       <Navbar size={Cart.length}/>
        <section className="hero">
          <div className="hero-content">
            <h1>Dive into the World of Books</h1>
            <p>Find your next great read with our vast selection of books.</p>
            <Link to="/cataloge"><button className="hero-button">Shop New Releases</button></Link>
          </div>
        </section>
        <div className="TrendingSection"><h2>Books On Demand</h2>
        <Trending/>
        </div>
        <Footer/>
        </div>
      );
    }
    
    export default Home;
    
