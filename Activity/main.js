let helpO=require("./commands/help");
let treeO=require("./commands/tree")
let organizeO=require("./Commands/organize")

let inputArr=process.argv.slice(2);
let command=inputArr[0];
let path=inputArr[1];

switch(command){
    case "help":
        helpO.helpFn();
        break;
    case "tree":
        treeO.treeFn(path);
        break;
    case "organize":
        organizeO.organizeFn(path);
        break;        
    default:
        console.log("----INVALID COMMAND ENTERED----");
        break;
}
