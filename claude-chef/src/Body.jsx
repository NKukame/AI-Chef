import './style.css';
import React from 'react';
import Recipe from './components/Recipe';
import IngredientsList from "./components/IngredientsList";
import { getRecipeFromMistral } from './ai';

function Body(){

    const [ingredients, setIngredients] = React.useState([])

    const [recipe, setRecipe] = React.useState("")

    async function getRecipe() {
        const recipeMarkdown = await getRecipeFromMistral(ingredients)
        setRecipe(recipeMarkdown)
    }

    function addIngredient(formData) {
        const newIngredient = formData.get("ingredient")
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
    }

    return(
        <main>
            <form action={addIngredient} className="add-ingredient-form">
                <input 
                    type="text" 
                    aria-label='Add Your Ingredients'
                    placeholder='e.g Spinach'
                    name='ingredient'
                />
                <button>Add Ingredient</button>
                
            </form>

            {ingredients.length > 0 &&
                <IngredientsList
                    ingredients={ingredients}
                    getRecipe={getRecipe}
                />
            }

            {recipe && <Recipe recipe={recipe} />}
            

        </main>
    )
}

export default Body;