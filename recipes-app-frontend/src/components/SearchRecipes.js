import React, { useEffect, useState } from "react";

function SearchRecipes(){
    // Set query constant from search box
    const [query, setQuery] = useState("");
    
    console.log(query)
    // API CALL
    // const [recipeList, setRecipeList] = useState({
        
    // })

    // let query = 'italian wedding soup'
    // fetch({
    //     method: 'GET',
    //     url: 'https://api.api-ninjas.com/v1/recipe?query=' + query,
    //     headers: { 'X-Api-Key': 'STuGUMbY2n5DjD8aaC1FVg==ru2DrJuoIMRSs9w4'},
    //     contentType: 'application/json',
    //     success: function(result) {
    //         console.log(result);
    //     },
    //     error: function ajaxError(jqXHR) {
    //         console.error('Error: ', jqXHR.responseText);
    //     }
    // });
    
    // Page display
    return (
        <div>
            SEARCH FOR A RECIPE ONLINE
            <br></br>
            <form>
                <input type="text" placeholder="Search your recipe here..." onSubmit={(e) => setQuery(e.target.value)}/>
                <button type="submit">Search</button>
            </form>
            <button>Clear all</button>
        </div>
    )

}

export default SearchRecipes;