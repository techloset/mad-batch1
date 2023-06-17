'use client'

import { useState } from 'react';

const CreateRecipeForm = () => {
  const [recipeData, setRecipeData] = useState({
    name: '',
    cookingTime: '',
    difficultyLevel: '',
    instructions: [''],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRecipeData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleInstructionChange = (e, index) => {
    const { value } = e.target;
    setRecipeData((prevData) => {
      const updatedInstructions = [...prevData.instructions];
      updatedInstructions[index] = value;
      return {
        ...prevData,
        instructions: updatedInstructions,
      };
    });
  };

  const handleAddInstruction = () => {
    setRecipeData((prevData) => ({
      ...prevData,
      instructions: [...prevData.instructions, ''],
    }));
  };

  const handleRemoveInstruction = (index) => {
    setRecipeData((prevData) => {
      const updatedInstructions = [...prevData.instructions];
      updatedInstructions.splice(index, 1);
      return {
        ...prevData,
        instructions: updatedInstructions,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // TODO: Send recipeData to the server for saving
    console.log(recipeData);
 try {
  let res = await fetch('http://localhost:3000/recipes/api/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json', // Set the appropriate content type for your request
    },
    body: JSON.stringify(recipeData), // Convert the data to JSON format
  })
  console.log("res", res);
 } catch (error) {
  console.log("catch ", error);
 }
   
    // Reset form data
    setRecipeData({
      name: '',
      cookingTime: '',
      difficultyLevel: '',
      instructions: [''],
    });
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto">
      <label className="block mb-2">
        <span className="text-lg font-medium">Recipe Name:</span>
        <input
          type="text"
          name="name"
          value={recipeData.name}
          onChange={handleChange}
          className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
        />
      </label>
      <br />
      <label className="block mb-2">
        <span className="text-lg font-medium">Cooking Time (in minutes):</span>
        <input
          type="number"
          name="cookingTime"
          value={recipeData.cookingTime}
          onChange={handleChange}
          className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
        />
      </label>
      <br />
      <label className="block mb-2">
        <span className="text-lg font-medium">Difficulty Level:</span>
        <select
          name="difficultyLevel"
          value={recipeData.difficultyLevel}
          onChange={handleChange}
          className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
        >
          <option value="">Select</option>
          <option value="Easy">Easy</option>
          <option value="Medium">Medium</option>
          <option value="Hard">Hard</option>
        </select>
      </label>
      <br />
      <label className="block mb-2">
        <span className="text-lg font-medium">Instructions:</span>
        {recipeData.instructions.map((instruction, index) => (
          <div key={index} className="flex items-center">
            <input
              type="text"
              value={instruction}
              onChange={(e) => handleInstructionChange(e, index)}
              className="flex-grow px-3 py-2 mt-1 mr-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
            />
            {index > 0 && (
              <button
                type="button"
                onClick={() => handleRemoveInstruction(index)}
                className="text-red-500 hover:text-red-700"
              >
                Remove
              </button>
            )}
          </div>
        ))}
        <button
          type="button"
          onClick={handleAddInstruction}
          className="block mt-2 text-blue-500 hover:text-blue-700"
        >
          Add Instruction
        </button>
      </label>
      <br />
      <button
        type="submit"
        className="block px-4 py-2 mx-auto text-lg font-medium text-white bg-blue-500 rounded-md hover:bg-blue-700"
      >
        Create Recipe
      </button>
    </form>
  );
};

export default CreateRecipeForm;
