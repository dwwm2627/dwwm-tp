const person = {name: `Ada`, city:`Londres`};
const alias = person;
alias.city=`Paris`;
console.log(person.city);
// on a coller une seconde etiquette sur le meme objet

//spread c est un copier/coller pour resumer tres simplement
// ... recopient les proprietes dans un nouvel objet
const moved = {...person, city:`Rome`};
console.log(person.city, moved.city);