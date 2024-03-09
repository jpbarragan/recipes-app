package org.recipes.recipesapp.models;

import jakarta.persistence.*;

@Entity
public class Recipe {

    @Id
    @GeneratedValue
    private Long id;

    private String title;

    private String ingredients;

    private String servings;

    private String instructions;

    public Recipe() {}

    public Recipe(String title, String ingredients, String servings, String instructions) {
        super();
        this.title = title;
        this.ingredients = ingredients;
        this.servings = servings;
        this.instructions = instructions;
    }

    public Long getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getIngredients() {
        return ingredients;
    }

    public void setIngredients(String ingredients) {
        this.ingredients = ingredients;
    }

    public String getServings() {
        return servings;
    }

    public void setServings(String servings) {
        this.servings = servings;
    }

    public String getInstructions() {
        return instructions;
    }

    public void setInstructions(String instructions) {
        this.instructions = instructions;
    }
}
