import { useState } from 'react'
import useRecipeStore from '../recipeStore'

function AddRecipeForm() {
  const addRecipe = useRecipeStore((state) => state.addRecipe)
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!title.trim() || !description.trim()) {
      alert('Please fill out both fields')
      return
    }

    addRecipe({ id: Date.now(), title, description })
    setTitle('')
    setDescription('')
  }

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      <h2>➕ Add a New Recipe</h2>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Recipe Title"
        style={{ display: 'block', margin: '10px 0', padding: '8px', width: '100%' }}
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Recipe Description"
        style={{ display: 'block', margin: '10px 0', padding: '8px', width: '100%' }}
      />
      <button type="submit" style={{ padding: '8px 12px', cursor: 'pointer' }}>
        Add Recipe
      </button>
    </form>
  )
}

export default AddRecipeForm
