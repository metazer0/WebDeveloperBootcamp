let userInput = prompt("what would you like to do?")
let todos = ["call mom","buy groceries"];

while(userInput!=="exit")
{
   if(userInput==="list"){

       console.log("************")
       for(let i = 0 ; i < todos.length ; i++)
       {
           console.log(`${i}: ${todos[i]} `)
       }
       console.log("************")

   }

   else if(userInput==="new"){
    let input = prompt("enter new todo")
    todos.push(input)
   }
   
   else if(userInput==="delete"){
       let del = prompt("select index of todo to delete")
       console.log(`${todos[del]} deleted`)
       todos.splice(del,1)
   }

   else if(userInput==="exit"){
       console.log("exiting app...")
   }



   userInput = prompt("what would you like to do?")
}

console.log("bye-bye")