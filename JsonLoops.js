const resumeData = {
    
        "name": "John Doe",
        "age": 30,
        "email": "john.doe@example.com",
        "phone": "123-456-7890",
        "address": {
          "street": "123 Main Street",
          "city": "Cityville",
          "state": "State",
          "zip": "12345"
        },
        "education": [
          {
            "degree": "Bachelor of Science",
            "major": "Computer Science",
            "school": "University XYZ",
            "year": 2015
          },
          {
            "degree": "Master of Science",
            "major": "Software Engineering",
            "school": "Tech Institute",
            "year": 2017
          }
        ],
        "experience": [
          {
            "position": "Software Engineer",
            "company": "Tech Solutions Inc.",
            "year": "2017-2020",
            "responsibilities": ["Developed new features", "Collaborated with cross-functional teams"]
          },
          {
            "position": "Senior Software Engineer",
            "company": "Innovate Tech Co.",
            "year": "2020-Present",
            "responsibilities": ["Led software development projects", "Mentored junior developers"]
          }
        ]
      
      
  };
  
  console.log("Using for loop:");

// Iterating over all properties in the resumeData object
for (let key in resumeData) {
  if (resumeData.hasOwnProperty(key)) {
    console.log(`${key}: ${JSON.stringify(resumeData[key])}`);
  }
}

console.log("\nUsing for...in loop:");

// Iterating over the 'address' object using for...in loop
for (let prop in resumeData.address) {
  if (resumeData.address.hasOwnProperty(prop)) {
    console.log(`${prop}: ${resumeData.address[prop]}`);
  }
}

console.log("\nUsing for...of loop for 'education' array:");

// Iterating over the 'education' array using for...of loop
for (let education of resumeData.education) {
  console.log(`Degree: ${education.degree}, School: ${education.school}, Year: ${education.year}`);
}

console.log("\nUsing forEach loop for 'experience' array:");

// Iterating over the 'experience' array using forEach loop
resumeData.experience.forEach(experience => {
  console.log(`Position: ${experience.position}, Company: ${experience.company}, Year: ${experience.year}`);
});

