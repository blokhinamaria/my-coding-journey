export default function ingredientsList({ingredients , getRecipe}) {
    
    const ingredientsList = ingredients.map((ingredient) => 
        <li key={ingredient}>{ingredient}</li>
    )
    
    return (
        <section>
            <h1>Ingredients on hand:</h1>
            <ul>
                {ingredientsList}
            </ul>

            {ingredients.length >= 4 && <div className="recipe-request">
                <h2>Ready for a Recipe?</h2>
                <button onClick={getRecipe}>Ask for a recipe</button>
            </div>}
        </section> 
    )
}