import prisma from "@/config/prismaClient"
async function getData() {
  try {
    const query = `
    query User($login: String!) {
      user(login: $login) {
        followers {
          totalCount
        }
      }
    }
  `;
  
  const variables = {
    login: "naveed-rana",
  };
  
  const headers = {
    "Authorization": "bearer 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",
    "Content-Type": "application/json",
  };
  
  const response = await fetch(
    "https://api.github.com/graphql",
    {
      method: "POST",
      headers,
      body: JSON.stringify({ query, variables }),
    }
  );
  

    const data = await response.json();
    console.log(data); 
    return data;
  } catch (error) {
    console.log(error);
    return error
   
  }
 
}
export default async function Contact() {
  const userData = await getData()
  console.log("userData",userData.data.user.followers.totalCount);
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
          <p>contact page</p>
          {userData.data.user.followers.totalCount}
          {/* {userData?.map((user=>{
            return (
              <div>{user.name}</div>
            )
          }))} */}
        </div>
      </main>
    )
  }
  