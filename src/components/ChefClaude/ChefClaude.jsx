import './ChefClaude.css'
import { useState } from 'react'
import IngredientsList from './IngredientsList';
import Recipe from './Recipe';
import { getRecipeFromChefClaude } from './ai';

export default function ChefClaude() {

    const [ ingredients , setIngredients ] = useState([]);

    function addIngredient(formData) {
        const newIngredient = formData.get('ingredient')
        setIngredients((prev) => [...prev, newIngredient])
    }

    const [ recipe, setRecipe ] = useState('');
    const [ showRecipe, setShowRecipe ] = useState(false)
    
    async function getRecipe() {
        const result = await getRecipeFromChefClaude(ingredients);
        setRecipe(result);
        setShowRecipe(true);
    }

    return (
        <main className='chef-claude-main'>
            <header>
                <img src="src/components/ChefClaude/images/chef-claude-icon.png"/>
                <span>Chef Claude</span>
            </header>
            <section>
                <form action={addIngredient}> 
                    <input
                        type='text'
                        placeholder='e.g. oregano'
                        aria-label='Add ingredient'
                        name='ingredient'
                    />
                    <button type='submit'>Add ingredient</button>
                </form>
            </section>
            {ingredients.length > 0 && <IngredientsList 
                ingredients={ingredients}
                getRecipe={getRecipe}
            />}
            { showRecipe && <Recipe recipe={recipe}/>}
        </main>
    )
}