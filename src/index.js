import catOrDog from './cat-or-dog.js';

const animalForm = document.getElementById('animal-form');
const image = document.getElementById('animal-image');


animalForm.addEventListener('submit', function(event){
    event.preventDefault();
    console.log('form submitted!!');

    const randomNumber = Math.random();
    console.log(randomNumber);

    const animal = catOrDog(randomNumber);
    console.log(animal);

    let imageSource = '';
    if(animal === 'cat'){
        imageSource = '../assets/cat.jpg/';
    }
    

});
