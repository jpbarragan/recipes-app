import React from "react";

//Page display: 
function PersonalizedRecipe() {

    return (
        <div>
            <br></br>
            <h1>My recipes</h1>
            <form>
                <div>
                  <label for="recipe-name">My recipe: </label>
                </div>
                <div>
                    <input type="text" id="recipe-name" name="name" placeholder="Recipe's name"/>
                </div>
                <br></br>
                <div>
                    <label for="recipe-description"> Ingredients and instructions:</label>
                </div>
                <div>
                    <textarea type="text" id="recipe-description" name="description" placeholder="recipe ingredients and instructions"></textarea>
                </div>
                <br></br>
                <div>
                    <button type="submit">Save my recipe</button>
                </div>
                <br></br>
            </form>

        </div>
    );
}

export default PersonalizedRecipe;