function ABC<T>(anyParam:T) : string  {
  // 100 lines
  return "anyParam"
}

type A = {
  userName: string,
  age: number
}

ABC<A>({userName:"naveed", age:25})

ABC<number>(12)

function ABC2(anyParam:number) : number  {
   // 100 lines
  return anyParam
}

function ABC3(anyParam:boolean) : boolean  {
  // 100 lines
 return anyParam
}