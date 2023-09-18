//chatgpt-interactive-loop template: app.ts 
//exercising langchain nodejs/ts framework


import {OpenAI} from 'langchain/llms/openai';
import * as dotenv from 'dotenv';
import readline from "readline";


console.log(`test-space for GPT text-chat applications`);
dotenv.config();


// create openai model - set temperature
const key = process.env.OPENAI_API_KEY;
const model = new OpenAI({openAIApiKey:key , temperature: 0.9});
//console.log(`model is: ${model}`);


export const run = async() => {

  const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
  });

  // Prompt user for input
  rl.question("Enter prompt (enter 'q' to leave) : ", (input) => {
    console.log(`You entered: ${input}`);

    // Close the interface
    if(input === 'q'){
      rl.close();
    }
    
    //get reply
    (async() => {
      const result = await model.call(input);
      console.log(`result is: ${result}`);
      console.log('\n\n');
      run();
    })();
  });
  
  // Handle close event
  rl.on('close', () => {
    console.log('Input stream closed. Now exiting...');
    process.exit(0);
  });

}


run();


