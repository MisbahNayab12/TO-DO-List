#! /usr/bin/env node

import inquirer from "inquirer";

let myList: string[] = []
let condition = true

while (condition) {
let options = await inquirer.prompt(
    [
        {
            name: "possibleOptions",
            type: "list",
            message: "Please select options",
            choices: ["view list", "add items in your list", "quit"]
        }
    ]
)

if (options.possibleOptions == "view list"){
    console.log(myList)
}
else if (options.possibleOptions == "add items in your list"){
    let input = await inquirer.prompt(
        [
            {
                name: "items",
                type: "string",
                message: "Enter your TO DO item"
            }
        ]
    )
    
    myList.push(input.items)
    console.log(myList)
} 
else {
    break;
}
}
