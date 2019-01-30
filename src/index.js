const animalForm = document.getElementById('animal-form');
import catOrDog from './cat-or-dog.js';

animalForm.addEventListener('submit', function(event){
    event.preventDefault();
    console.log('form submitted!!');

    const randomNumber = Math.random();
    console.log(randomNumber);

    const animal = catOrDog(randomNumber);
    console.log(animal);

});
