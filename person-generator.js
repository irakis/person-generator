import { writeFile } from 'node:fs';

const genders = ['female', 'male'];
const maleNames = ['John', 'Adam', 'Camil', 'Daniel', 'Edgar','Francis', 'Gabriel', 'Diego','Hershel', 'Olaf',
                    'Olgierd', 'Malcolm', 'Henry', 'Ronald', 'Walter','Zygfryd', 'Paul','Jeremy','Jeremiah','Rupert'];
const femaleNames = ['Agnes','Agatha','Martha','Mary','Gabriella','Camilla','Pamela','Daniela','Margareth','Morgana',
                      'Edith','Judith','Rachela', 'Franchesca','Honoratha','Irene','Lucilla','Ophelia','Paula','Fabiola'];
const lastNames = ['Johnson', 'Doe', 'Smith','Danielson','Reagan','Richardson','Robertson','Sullivan','Gates','Garson',
                    'Matherson','Olphson','Dobson','Cohelo','Cobhen','Willson','Raw','Simens','Curth','Sachs'];

const randChoice = (length) => {
  return (
    Math.floor(Math.random()*length)
  )
}
const randAge = () => {
  const min = 20
  const max = 60
  return (Math.floor(Math.random() * (+max + 1 - +min)) + +min)
}

const people = [];

for (let i = 0; i < lastNames.length; i++) {
  const personLastName = lastNames[Math.floor(Math.random()*lastNames.length)];
  const personFemaleFirstName = femaleNames[randChoice(femaleNames.length)]
  const personMaleFirstName = maleNames[randChoice(maleNames.length)]
  const personGender = genders[randChoice(genders.length)];

  people.push(
      {
        gender: personGender,
        firstName: (personGender == 'female' ? personFemaleFirstName : personMaleFirstName),
        lastName: personLastName,
        age: randAge(),
        email : null
      }
    )
}

for(let i=0 ; i < people.length; i++) {
  people[i].email = (`${people[i].firstName.toLowerCase()}.${people[i].lastName.toLowerCase()}@gmail.com`)
}
const data = people;

writeFile('people.json', JSON.stringify(data), (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});