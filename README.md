# chatgpt-hamlet-loop README.md


* before running any example it is necessary to run
```> npm install package.json``` 

* It is also necessary insert the following keys into a .env-file
OPENAI_API_KEY=
SERPAPI_API_KEY=
PINECONE_API_KEY=
PINECONE_ENVIRONMENT=


* The application (usually) generates dialogues between Hamlet and Ophelia,
  in the context of Shakespeare's Hamlet, Prince of Denmark

* The structure is a loop starting with entering a prompt
  After a delay the LLM should reply with an original Hamlet-Ophelia dialogue
  After the reply there is an option to end or re-run with the same 
  or another prompt

* two prompts found to be mainly effective are
   [1] micro_dialogue_prompt: You are William Shakespeare, author of Hamlet 
   Prince of Denmark. Create a dialogue between Hamlet and Ophelia.
   [2] minimal_dialogue_prompt: You are William Shakespeare, author of Hamlet
   Prince of Denmark. Create a dialogue between Hamlet and Ophelia, 
   consistent with the play and the nature of the two characters.


* to run:
workspace> python main.py


