/** The Hero */
export class Superhero{
    constructor(){
        this.strName;
        this.strSuperpower;
        this.strSpecies;
        this.intPower;
    }

    slam(){
        console.log('POW!');
    }  
    
    get quote(){
        try{
            /** If empty */
            if(this.strQuote === '') throw 'Please set a value for quote!';
            /** If consists only multiple whitespaces */
            if(this.strQuote.match(/\S/i) === null) throw 'Please set a value for quote!! This one consists only whitespaces.';            
        }
        catch(err){
            throw new Error(err);
        }
        
        return this.strQuote;
    }

    set quote(strQuote){
        this.strQuote = strQuote;
    }

       
}

/** His Enemy */
export class Movie{
    constructor(){
        this.strTitle;
    }
       
}
  
// /** Create: spiderman */
// const spiderman = new Superhero('Human');
// spiderman.name = 'Spiderman';
// console.log(`Superhero name: ${spiderman.name}`);
// spiderman.quote = 'With great power comes great responsibility.';
// console.log(`Superhero quote: ${spiderman.quote}`);

// /** Create: Doctor Octopus */
// const farFromHome = new Movie();
// farFromHome.strTitle = 'Spider-Man: Far From Home';
// console.log(`Movie Title: ${farFromHome.strTitle}`);




  
  
  