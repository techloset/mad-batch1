import prisma from "@/config/prismaClient"
async function getData() {
  try {
    const data = await prisma.user.findMany()
    return data;
  } catch (error) {
    console.log(error);
    return error
   
  }
 
}
export default async function Contact() {
  const userData = await getData()
  console.log("userData",userData);
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
          <p>contact page</p>
        </div>
      </main>
    )
  }
  