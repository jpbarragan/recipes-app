import React, { useEffect, useState } from "react";

function SearchRecipes(){
    // Set query constant from search box
    //const [query, setQuery] = useState("");

    // Import data from the API and display it in the console
    // Changed function to fetch await 
    // Option: Give user a few regional cuisines to choose from and assign their selection to query2
    let query2 = "spanish";
    
    const url = `https://api.api-ninjas.com/v1/recipe?query=${query2}`
    const [recipeList, setRecipeList] = useState([])
    const [filteredRecipes, setFilteredRecipes] = useState([])

    const fetchRecipes = async () => {
        const res = await fetch(url, {
            method: 'GET',
            headers: { 'X-Api-Key': 'STuGUMbY2n5DjD8aaC1FVg==ru2DrJuoIMRSs9w4' }
        });
        const d = await res.json();
        setRecipeList(d);
        setFilteredRecipes(d);
        return
    }
    
    useEffect(() => {
        fetchRecipes();
    }, [])

    // Constant for filtering results based on the title of the recipes. This only applies 
    // to the already rendered recipes, does not change the query variable sent to the API.
    const Filter = (e) => {
        setFilteredRecipes(recipeList.filter(f => f.ingredients.toLowerCase().includes(e.target.value)))
    }

    
    // Page display
    return (
        <div>
            CHOOSE YOUR FAVORITE CUISINE
            <br></br>
            <button>Spanish</button>
            <button>Italian</button>
            <br></br>
            SEARCH OUR RECIPE DATABASE
            <br></br>
            <form>
                <input 
                    type="text" 
                    placeholder="Search your recipe here..." 
                    /*onChange={(e) => setQuery(e.target.value)}*/
                    onChange={Filter}
                    />
                <button type="submit">Search</button>
            </form>
            <button>Clear all</button>
            <br></br>
            SEE A LIST OF YOUR SEARCHED RECIPES
            <div>
                <table>
                    <thead>
                        <tr>
                        <th scope="col">Number</th>
                        <th scope="col">Title</th>
                        <th scope="col">Ingredients</th>
                        <th scope="col">Servings</th>
                        <th scope="col">Instructions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredRecipes.map((eachRecipe, index) => (
                            <tr>
                            <th scope="row" key={index}>{index+1}</th>
                            <td>{eachRecipe.title}</td>
                            <td>{eachRecipe.ingredients}</td>
                            <td>{eachRecipe.servings}</td>
                            <td>{eachRecipe.instructions}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            
            </div>

        </div>
    )

}

export default SearchRecipes;