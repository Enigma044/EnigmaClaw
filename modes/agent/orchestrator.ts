import chalk from "chalk";
import {isCancel,text} from "@clack/prompts"
export async function runAgentMode(){
    console.log(chalk.bold("\n🤖 Agent Mode\n"))
    const goal=await text({
        message:"What do you like the agents to do?",
        placeholder:"Concrete task for this codebase..."
    })
    if(isCancel(goal) || !goal.trim()) return;
}