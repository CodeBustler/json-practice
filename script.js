// 01. Create a JSON object representing a student with the following information:

// Name: John Doe
// Age: 18
// Grade: 12

let obj = {
  Name: 'CodeBustler',
  Age: 26,
  Admin: true,
};

// 02. Convert the JSON object to a string
let jsonString = JSON.stringify(obj);
console.log(jsonString);

// 03. Parse the string back into a JSON object.
let jsonOBJ = JSON.parse(jsonString);
console.log(jsonOBJ);

// 04. Add the parsed JSON object to an array called "students".
let students = [jsonOBJ];
console.log(students);

// 05. Create another JSON object representing a student with the following information:

let jsonOBJ2 = {
  Name: 'Jane Smith',
  Age: 17,
  Grade: 11,
};

// 06. Add the second student object to the "students" array.
students.push(jsonOBJ2);
console.log(students);

// 07. Convert the "students" array to a JSON string.
let studJson = JSON.stringify(students);

// 08. Display the JSON string in the console.
console.log(studJson);

// 09. Parse the JSON string back into a JavaScript array.
let studObj = JSON.parse(studJson);
console.log(studObj);

// 10. Display the student details (name, age, and grade) from the JavaScript array in the console.
let s1 = studObj[0];
let s2 = studObj[1];

for (let x in s1) {
  console.log(`${x} : ${s1[x]}`);
}

for (let x in s2) {
  console.log(`${x} : ${s2[x]}`);
}
