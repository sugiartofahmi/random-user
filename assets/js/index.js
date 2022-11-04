const name = document.getElementById("name");
const gender = document.getElementById("gender");
const image = document.getElementById("image");
const button = document.getElementById("btn");

const getData = async () => {
  const res = await fetch("https://randomuser.me/api/");
  const data = await res.json();
  const person = data.results[0];
  name.textContent = `${person.name.first} ${person.name.last}`;
  gender.textContent = `${person.gender}`;
  image.setAttribute("src", `${person.picture.medium}`);
  console.log(person);
};

button.addEventListener("click", getData);

getData();
