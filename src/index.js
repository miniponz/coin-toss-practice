import catOrDog from './cat-or-dog.js';

const animalForm = document.getElementById('animal-form');
const image = document.getElementById('animal-image');
const result = document.getElementById('result');


animalForm.addEventListener('submit', function(event){
    event.preventDefault();
    console.log('form submitted!!');

    const randomNumber = Math.random();
    console.log(randomNumber);

    const animal = catOrDog(randomNumber);
    console.log(animal);

    let imageSource = '';
    if(animal === 'cat'){
        imageSource = './assets/cat.jpg';
        result.textContent = 'You\'re a cat person!';
    }
    else {
        imageSource = './assets/dog.jpg';
        result.textContent = 'You\'re a dog person!';
    }

    console.log(imageSource);
    image.src = imageSource;
    image.classList.remove('hidden');

});
