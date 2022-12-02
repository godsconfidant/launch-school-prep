// Refactor the function below using arrow syntax. Line 9 should still log the same sentence.



const template = 'I VERB NOUN.';

const temp = (verb, noun) => template
  .replace('VERB', verb)
  .replace('NOUN', noun);  

function sentence(verb, noun) {
  return template
          .replace('VERB', verb)
          .replace('NOUN', noun);
}

console.log(temp('run', 'car'));