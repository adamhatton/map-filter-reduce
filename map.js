  
/**
 * To run this file in Gitpod, use the 
 * command node map.js in the terminal
 */

// ---------------------------------------MAP()

// Using a for loop
// let nums = [1, 2, 3, 4, 5];
// let results = [];
// for (let num of nums) {
//   results.push(num * 2);
// }
// console.log(nums, results);

// // Using map()
// const multByTwo = function (num) {
//   return num * 2;
// }

// const mapResults = nums.map(multByTwo);
// console.log(mapResults);

// // Simplified w/ map()
// const simplified = nums.map(function (num) { return num * 2 });

// console.log(simplified);

// // Simplfied w/ map() + arrow function
// const simplifiedArrow = nums.map(num => num * 2);

// console.log(simplifiedArrow);

// // With objects:
// const students = [
//   {
//     id: 1,
//     name: 'Mark',
//     profession: 'Developer',
//     skill: 'JavaScript'
//   },
//   {
//     id: 2,
//     name: 'Ariel',
//     profession: 'Developer',
//     skill: 'HTML'
//   },
//   {
//     id: 3,
//     name: 'Jason',
//     profession: 'Designer',
//     skill: 'CSS'
//   },
// ];

// const studentsWithIds = students.map(arr => [arr.name, arr.id]);
// console.log(studentsWithIds);

// const studentObjects = students.map(student => ({ id: student.id, name: student.name }));
// console.log(studentObjects);

// let ages = [31, 34, 36];
// const studentsWithAges = students.map((student, age) => ({ ...student, age: ages[age] }));
// console.log(studentsWithAges);

// ---------------------------------------FILTER()

// Simple Filtering
const people = [
  {
    name: 'Michael',
    age: 23,
  },
  {
    name: 'Lianna',
    age: 16,
  },
  {
    name: 'Paul',
    age: 18,
  },
];

const oldEnough = people.filter(person => person.age >= 21);
console.log(oldEnough);

const paul = people.filter(p => p.name === 'Paul');
console.log(paul);

// Complex Filtering
const students = [
  {
    id: 1,
    name: 'Mark',
    profession: 'Developer',
    skills: [
      { name: 'javascript', yrsExperience: 1 },
      { name: 'html', yrsExperience: 5 },
      { name: 'css', yrsExperience: 3 },
    ]
  },
  {
    id: 2,
    name: 'Ariel',
    profession: 'Developer',
    skills: [
      { name: 'javascript', yrsExperience: 0 },
      { name: 'html', yrsExperience: 4 },
      { name: 'css', yrsExperience: 2 },
    ]
  },
  {
    id: 3,
    name: 'Jason',
    profession: 'Designer',
    skills: [
      { name: 'javascript', yrsExperience: 1 },
      { name: 'html', yrsExperience: 1 },
      { name: 'css', yrsExperience: 5 },
    ]
  },
];

const has5yearsExp = skill => skill.yrsExperience >= 5;

const hasStrongSkills = student => student.skills.filter(has5yearsExp).length > 0;

const candidates = students.filter(hasStrongSkills);

const candidateNames = candidates.map(c => c.name);

console.log(candidateNames);

// ---------------------------------------REDUCE()

// Summing an array of numbers:
const nums = [0, 1, 2, 3, 4];
let sum = nums.reduce((acc, curr) => {
  console.log(
    "Accumulator:", acc,
    "Current Value:", curr,
    "Total:", acc + curr 
  );
    return acc + curr;
}, 0); //acc = accumulator, curr = current
console.log(sum);


const teamMembers = [
  {
    name: 'Andrew',
    profession: 'Developer',
    yrsExperience: 5
  },
  {
    name: 'Ariel',
    profession: 'Developer',
    yrsExperience: 7
  },
  {
    name: 'Michael',
    profession: 'Designer',
    yrsExperience: 1
  },
  {
    name: 'Kelly',
    profession: 'Designer',
    yrsExperience: 3
  }
];

// Totaling a specific object property
let totalExperience = teamMembers.reduce((acc, curr) => acc + curr.yrsExperience, 0);
console.log(totalExperience);

// Grouping by a property, and totaling it too
let experienceByProfession = teamMembers.reduce((acc, curr) => {
  let key = curr.profession;
  if(!acc[key]) {
    acc[key] = curr.yrsExperience;
  }
  else {
    acc[key] += curr.yrsExperience;
  }
  return acc;
}, {});

console.log(experienceByProfession);