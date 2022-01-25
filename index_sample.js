//3 Approaches

//1st
//Everything spelled out
const configurationObject = {
    method: 'POST',
    headers: {
        "Content-Type": "application/json",
        "Accept": "applicatioin/json"
    },
    body: JSON.stringify({
        dogBreed: "Byron",
        dogBreed: "Poodle"
    }),
};

fetch("http://localhost:3000/dogs", configurationObject);


//2nd
//more general code with an extra variable
const formData = {
    dogName: "Byron",
    dogBreed: "Poodle",
}
const configurationObject = {
    method: 'POST',
    headers: {
        "Content-Type": "application/json",
        "Accept": "applicatioin/json"
    },
    body: JSON.stringify(formData),
};

fetch("http://localhost:3000/dogs", configurationObject);


//3rd
//fetch with a built in annonymous function
fetch('http://localhost:3000/dogs', {
    method: 'POST',
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    },
    body: JSON.stringify({
        dogName: "Byron",
        dogBreed: "Poodle"
    })
})


//Using .catch() to catch errors

const formData = {
    dogName: "Byron",
    dogBreed: "Poodle",
  };
  
  // method: "POST" is missing from the object below
  const configurationObject = {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(formData),
  };
  
  fetch("http://localhost:3000/dogs", configurationObject)
    .then(function (response) {
      return response.json();
    })
    .then(function (object) {
      console.log(object);
    })
    .catch(function (error) {
      alert("Bad things! Ragnarők!");
      console.log(error.message);
    });