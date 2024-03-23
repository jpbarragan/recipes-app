import React, { useEffect, useState } from "react";

function SearchRecipes(){
    // Set query constant from search box
    const [query, setQuery] = useState("");

    // Import data from the API and display it in the console
    let query2 = "chorizo";
    
    const url = `https://api.api-ninjas.com/v1/recipe?query=${query2}`
    const [recipeList, setRecipeList] = useState([])

    const fetchRecipes = () => {
        return fetch(url, {
                //url: "https://api.api-ninjas.com/v1/recipe?query=italian wedding soup",
                method: 'GET',
                headers: { 'X-Api-Key': 'STuGUMbY2n5DjD8aaC1FVg==ru2DrJuoIMRSs9w4'}
                })
            .then((res) => res.json())
            .then((d) => setRecipeList(d))
    }

    useEffect(() => {
        fetchRecipes();
    }, [])

    console.log(recipeList);

    
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
            <br></br>
            SEE A LIST OF RECIPES
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
                        {recipeList.map((eachRecipe, index) => (
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