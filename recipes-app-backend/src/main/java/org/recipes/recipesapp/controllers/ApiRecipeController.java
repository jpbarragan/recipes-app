package org.recipes.recipesapp.controllers;

import org.recipes.recipesapp.models.ApiRecipe;
import org.recipes.recipesapp.repository.ApiRecipeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping ("apiRecipe")
public class ApiRecipeController {

    @Autowired
    private ApiRecipeRepository apiRecipeRepository;

    @PostMapping("add")
    ApiRecipe apiRecipe (@RequestBody ApiRecipe apiRecipe) {
        return apiRecipeRepository.save(apiRecipe);
    }
}
