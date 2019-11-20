/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct

function howManyMovies (array) {


    let steveMovies = array.filter( (oneMovie)=>{
        return oneMovie.director == "Steven Spielberg" && oneMovie.genre.includes('Drama');
    
      })
      
    return steveMovies;
    }
    
    
    howManyMovies (movies)
    
    
    

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

// Iteration 4: All rates average - Get the average of all rates with 2 decimals

// Iteration 5: Drama movies - Get the average of Drama Movies

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

// BONUS Iteration: Best yearly rate average - Best yearly rate average
