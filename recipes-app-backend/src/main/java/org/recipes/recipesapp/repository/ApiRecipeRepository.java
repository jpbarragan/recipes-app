package org.recipes.recipesapp.repository;

import org.recipes.recipesapp.models.ApiRecipe;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ApiRecipeRepository extends CrudRepository <ApiRecipe, Long> {
}
