import React from "react";
//import 'bootstrap/dist/css/bootstrap.css';

//Page display: 
function PersonalizedRecipe() {

    return (
        <div>
            <br></br>
            <h1>My recipes</h1>
            <form>
                <div>
                  <label for="recipe-name"><b>My recipe: </b></label>
                </div>
                <div>
                    <input type="text" id="recipe-name" name="name" placeholder="Recipe's name"/>
                </div>
                <br></br>
                <div>
                    <label for="recipe-description"><b> Ingredients and instructions: </b></label>
                </div>
                <div>
                    <textarea type="text" id="recipe-description" name="description" placeholder="recipe ingredients and instructions"></textarea>
                </div>
                <br></br>
                <div>
                    <button className="btn btn-outline-primary mx-2" style={{backgroundColor: "#CD5C5C"}} type="submit"><b> Save my recipe </b></button>
                </div>
                <br></br>
            </form>

        </div>
    );
}

export default PersonalizedRecipe;