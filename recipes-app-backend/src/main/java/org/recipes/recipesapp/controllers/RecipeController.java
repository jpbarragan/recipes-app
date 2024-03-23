package org.recipes.recipesapp.controllers;

import org.recipes.recipesapp.models.Recipe;
import org.recipes.recipesapp.repository.RecipeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping ("recipe")
public class RecipeController {

    @Autowired
    private RecipeRepository recipeRepository;

    @PostMapping("add")
    Recipe recipe (@RequestBody Recipe recipe) {
        return recipeRepository.save(recipe);
    }
}
