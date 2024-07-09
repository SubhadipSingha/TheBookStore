import React from "react"
import "./filter.css"
// eslint-disable-next-line react/prop-types
function Filter({FilterItems,selectedCategory, onCategoryChange}){
    const uniquecategories =[...new Set(FilterItems)];
    return(
        <div className="filter-items">
            {uniquecategories.map((category)=>
                (
                <button 
                key={category}
                className={`filter-buttons ${selectedCategory === category ? "active" : ""}`}
                onClick={() => onCategoryChange(category)}>
                    {category}
                </button>
            )) }
            <button
            className={`filter-buttons ${selectedCategory === "All" ? "active" : ""}`}
            onClick={() => onCategoryChange("All")}>
                All
            </button>
        </div>
    )
}
export default Filter