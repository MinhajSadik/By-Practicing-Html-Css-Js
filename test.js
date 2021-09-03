import { subordinates } from "./data.json";


const KatherineCohen = subordinates[0];
const RoxanneSimmons = subordinates[3];


const example1 = (person) => {
    return person.subordinates.map((subordinate) => subordinate.name);
  };

// const result = example1()
console.log(example1());
