// src/components/RecipeList.jsx
import { Link } from 'react-router-dom'
import useRecipeStore from '../recipeStore'
import DeleteRecipeButton from './DeleteRecipeButton'

function RecipeList() {
  const recipes = useRecipeStore((state) => state.recipes)

  return (
    <div style={{ marginTop: '20px' }}>
      <h2>📖 Recipe List</h2>
      {recipes.length === 0 ? (
        <p>No recipes yet. Add one above!</p>
      ) : (
        recipes.map((recipe) => (
          <div
            key={recipe.id}
            style={{
              border: '1px solid #ccc',
              borderRadius: '8px',
              padding: '10px',
              marginBottom: '10px',
              backgroundColor: '#f9f9f9',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}
          >
            <div>
              <Link to={`/recipes/${recipe.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <h3 style={{ margin: 0 }}>{recipe.title}</h3>
                <p style={{ margin: '6px 0', color: '#555' }}>
                  {recipe.description.length > 120
                    ? recipe.description.slice(0, 120) + '…'
                    : recipe.description}
                </p>
              </Link>
            </div>

            <div style={{ display: 'flex', gap: 8 }}>
              <Link to={`/edit/${recipe.id}`}>
                <button>Edit</button>
              </Link>
              <DeleteRecipeButton id={recipe.id} redirect="/" />
            </div>
          </div>
        ))
      )}
    </div>
  )
}

export default RecipeList

