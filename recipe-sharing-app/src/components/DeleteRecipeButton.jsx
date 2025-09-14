// src/components/DeleteRecipeButton.jsx
import useRecipeStore from '../recipeStore'
import { useNavigate } from 'react-router-dom'

function DeleteRecipeButton({ id, redirect = '/' }) {
  const deleteRecipe = useRecipeStore((s) => s.deleteRecipe)
  const navigate = useNavigate()
  const handleDelete = () => {
    if (window.confirm('Delete this recipe?')) {
      deleteRecipe(id)
      navigate(redirect)
    }
  }

  return (
    <button onClick={handleDelete} style={{ background: '#e74c3c', color: 'white', border: 'none', padding: '6px 10px', cursor: 'pointer' }}>
      Delete
    </button>
  )
}

export default DeleteRecipeButton
