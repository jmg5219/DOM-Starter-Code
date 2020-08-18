const myButton = document.getElementById('clickMe');
const noun1 = document.getElementById('noun1');
const noun2 = document.getElementById('noun2');
const verb1 = document.getElementById('verb1');
const verb1Input = document.getElementById('verb1Input');
const noun1Input = document.getElementById('noun1Input');
const noun2Input = document.getElementById('noun2Input');
const bodyContainer = document.getElementById('container');
const additionalText = "Hey, this is rad!!!";
const radButton = document.getElementById('radButton');


// Add values
myButton.addEventListener('click', function (event) {
  event.preventDefault();
  noun1.innerHTML = noun1Input.value;
  noun2.innerHTML = noun2Input.value;
  verb1.innerHTML = verb1Input.value;
  noun1.classList.add('filled');//adding css
  noun2.classList.add('filled');
  verb1.classList.add('filled');


});
//Add elements and values
radButton.addEventListener('click', function (event) {
  event.preventDefault();
  document.createElement("p")
  const newParagraph = document.createElement("p");
  newParagraph.innerHTML = additionalText;
  bodyContainer.appendChild(newParagraph);
});


//Changing heading in list, adding new list item (on page load)
document.addEventListener('DOMContentLoaded', function (event) {
  event.preventDefault();
  console.log('The DOM is Loaded')
  const changeHeading = document.getElementById('heading');
  const burgerClass = document.getElementById('burger');
  const listItems = document.getElementById('list')
  changeHeading.innerHTML = "Toppings";
  burgerClass.classList.add('list-item');
  const newListitem = document.createElement('li');
  newListitem.innerHTML = "New Item";
  newListitem.classList.add('list-item');
  listItems.appendChild(newListitem);
});