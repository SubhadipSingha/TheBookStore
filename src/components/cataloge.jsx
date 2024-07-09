import NavBar from "./Navbar";
import Footer from "./Footer/Footer";
import Card from "./Trending books/card";
import "../components/Trending books/card.css";
import Details from "./BookDetails";
import { useState } from "react";
import Filter from "./Filter";
import "./cataloge.css";
import React from "react";

function CreateCard(details) { 
  return (
    <Card
      key={details.id}
      id={details.id}
      src={details.src}
      name={details.name}
      price={details.price}
    />
  );
}

function cataloge() {
  const [selectedCategory, setSelectedCategory] = useState("All"); // Correct hook usage
  const filteredDetails =
    selectedCategory === "All"
      ? Details // Show all books if "All" is selected
      : Details.filter((detail) => detail.category === selectedCategory); // Use arrow function for cleaner syntax

  

  return (
    <div>
      <NavBar />
      <div className="cataloge">
       <div className="filter-container"> 
       <h2>Browse Books by Category</h2>
       <Filter 
          FilterItems={filteredDetails.map((detail) => detail.category)} // Get categories from filtered details
          selectedCategory={selectedCategory}
          onCategoryChange={(category) => setSelectedCategory(category)}
        />
        </div>
        <div className="cards"
          style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-around" }}
        >
          {filteredDetails.map(CreateCard)}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default cataloge;
