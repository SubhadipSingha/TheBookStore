import Details from "../BookDetails";
import Card from "./card";
import './trending-books.css';
import { Link } from 'react-router-dom';

function Trending() {
  var x =Math.floor(Math.random()*3);
  return (
    <div className="trending-books">
      {/* Trending book cards */}
      <Card key={Details[x].id} name={Details[x].name} src={Details[x].src} text={Details[x].text} price={Details[x].price} />
      <Card key={Details[7].id} name={Details[7].name} src={Details[7].src} text={Details[7].text} price={Details[7].price}/>
      <Card key={Details[6].id} name={Details[6].name} src={Details[6].src} text={Details[6].text} price={Details[6].price}/>
      <Card key={Details[5].id} name={Details[5].name} src={Details[5].src} text={Details[5].text} price={Details[5].price}/>
      {/* <Card key={Details[4].id} name={Details[3].name} src={Details[3].src} text={Details[3].text} /> */}

      {/* Button to navigate to catalog page */}
      <div className="trending-books-button-container">
       <Link to="/cataloge"> <button >Explore More Books</button></Link>
      </div>
    </div>
  );
}

export default Trending;
