import CreateRecipeForm from "@/app/(components)/createRecipe/CreateRecipe";

export default function RecipesCreate() {
 
      return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
          <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
            <h1>Add New Recipe</h1>
            <CreateRecipeForm/>
          </div>
        </main>
      )
    }