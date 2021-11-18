
const button1 = document.querySelector(`#one`);


button1.onclick = function () {
  alert("Cool! You can hear/understand a hummingbird and ants");
};


const h3 = document.querySelector(`h3`);


h3.addEventListener(`mouseenter`, () => {
  alert("OH NO! The squirrels are on to you. Now you have to leave this reality and move to a new one");
});


const form = document.querySelector(`form`);


form.addEventListener(`submit`, () => {
  alert(`${form.elements.quote.value}`);
});
