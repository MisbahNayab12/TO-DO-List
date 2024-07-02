#! /usr/bin/env node
import inquirer from "inquirer";
let myList = [];
let condition = true;
while (condition) {
    let options = await inquirer.prompt([
        {
            name: "possibleOptions",
            type: "list",
            message: "Please select options",
            choices: ["view list", "add items in your list", "delete items", "quit"]
        }
    ]);
    if (options.possibleOptions == "view list") {
        if (options.list === 0 || []) {
            console.log("Sorry! You have nothing in your list. First Create your list");
        }
        else {
            for (let items of myList) {
                console.log(`${myList.indexOf(items)}: items`);
            }
        }
    }
    else if (options.possibleOptions == "add items in your list") {
        let input = await inquirer.prompt([
            {
                name: "items",
                type: "string",
                message: "Enter your TO DO item"
            }
        ]);
        myList.push(input.items);
        console.log(myList);
    }
    else if (options.possibleOptions == "delete items") {
        let remove = await inquirer.prompt([
            {
                name: "itemsRemove",
                type: "number",
                message: "What do you want to delete?"
            }
        ]);
        myList.splice(remove.itemsRemove, 1);
        console.log(myList);
    }
    else {
        break;
    }
}
