import {Superhero,Movie} from './classes.js';

/** Create: spiderman */
const spiderman = new Superhero('Human');
spiderman.name = 'Spiderman';
console.log(`Superhero name: ${spiderman.name}`);
spiderman.quote = 'With great power comes great responsibility.';
console.log(`Superhero quote: ${spiderman.quote}`);

/** Create: Doctor Octopus */
const farFromHome = new Movie();
farFromHome.strTitle = 'Spider-Man: Far From Home';
console.log(`Movie Title: ${farFromHome.strTitle}`);
