import prisma from "@/config/prismaClient"
async function getData() {
  try {
    const data = await prisma.recipes.findMany({
     
      include:{
        instructions:{
          select:{
            description:true 
          }
        }
      }
    })
    return data;
  } catch (error) {
    console.log(error);
    return error
   
  }
 
}
export default async function Recipes() {
  const recipes  = await getData()
  console.log("recipes",recipes);
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
          <p>Recipes page</p>
          {/* {recipes?.map((recipe)=>{
            return (
              <div>
                <p>Name:  difficultyLevel: {recipe.difficultyLevel} cookingTime : {recipe.cookingTime}</p>
                
              </div>
            )
          })} */}
        </div>
      </main>
    )
  }
  