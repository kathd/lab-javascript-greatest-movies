/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)
    // Defines orderByYear
    // Should return an array
    // Should return a new array
    // Should return the element in a single element array
    // Return the new array in ascending order
    // If two movies have the same year, order them alphabetically by their title


function orderByYear(arr) {
    let newArr = arr.map(obj => obj)
    .sort((a,b) => {
        if (a.title > b.title) return 1;
        if (a.title < b.title) return -1;
        return 0;
    })
    .sort((a,b) => a.year - b.year);
    return newArr;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct
    // Defines howManyMovies
    // Should return a number
    // Should return 0 if the array is empty
    // Return 0 if he did not direct none of the movies in the array
    // Only drama movies! Should return 1
    // Only Steven Spielberg movies! Should return 2
    // Should return 4

function howManyMovies(arr) {
    let total = arr.filter(el => (el.director === "Steven Spielberg") && (el.genre.includes("Drama")))
    .length;
    return total;
}

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles
    // Defines orderAlphabetically
    // You should return an array
    // You should not mutate the original array
    // Only return the title of the movies! Each element should be a string
    // If there are less than 20 elements, return all of them.
    // If there are more than 20 elements, return only 20 of them.
    // You should order them alphabetically.
    // You should return the top20 after ordering them alphabetically.

function orderAlphabetically(arr) {
    let newArr = arr.map(obj => obj.title).sort().slice(0,20);
    return newArr;
}

// Iteration 4: All rates average - Get the average of all rates with 2 decimals
    // Defines ratesAverage
    // You should return a number!
    // You should return the average rate of 2 movies with rate 8 each!
    // It should be rounded to 2 decimals digits
    // It should return 0 if there is no movie
    // Return average even if one of the movies does not have rate!

function ratesAverage(arr) {
    if (!arr.length) return 0;
    let average = arr.map((obj) => {
        if (!obj.rate) return 0;
        return obj.rate;
    })
    .reduce((total,rate) => total+=rate)
    /arr.length;
    
    return Number(average.toFixed(2));
}

// Iteration 5: Drama movies - Get the average of Drama Movies
    // Defines dramaMoviesRate
    // You should return a number!
    // Return the rate of a single element array!
    // It should return the average of the array!
    // It should return the average of the array, float!
    // Only Drama Movies! You should return the average of Drama movies only!
    // Should return 0 if there is no Drama movie!


function dramaMoviesRate(arr) {
    let newArr = arr.filter(el => el.genre.includes("Drama"));
    
    if (!newArr.length) return 0;
    let average = newArr
        .map((obj) => {
            if (!obj.rate) return 0;
            return obj.rate;
        })
        .reduce((total,rate) => total+=rate)
        /newArr.length;
        
    return Number(average.toFixed(2));
}

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes
    // Defines turnHoursToMinutes
    // Should return an array
    // Should return a new array, not update the original one
    // The duration of the movie should be a number
    // The duration of the movie should return the correct number to a short movie - 31 minutes
    // The duration of the movie should return the correct number for really long movie - 341 minutes
    // It should return the correct number when the duration is only in hours
    // It should return the correct number when the duration is only in minutes


function turnHoursToMinutes(arr) {
    let newArr = arr
    .map((obj) => {
        let totalTime = obj.duration
        .split(" ")
        .map(t => { 
            if (t.includes("h")) {
                return parseInt(t)*60;
            } else if (t.includes("min")) {
                return parseInt(t);
            }
        })
        .reduce((total,time) => total += time)

        return {
            "title": obj.title,
            "year": obj.year,
            "director": obj.director,
            "duration": totalTime,
            "genre": obj.genre,
            "rate": obj.rate
        }
    })
    return newArr;
}


// BONUS Iteration: Best yearly rate average - Best yearly rate average
    // Should return null if the array is empty
    // Should return the correct answer to a single element array
    // Should return the correct answer to a multiple elements array
    // Should return the oldest year when there is a tie

    function bestYearAvg(arr) {
        if (!arr.length) return null;

        let newArr = arr.map(obj => obj)
        .reduce((acc,val) => {
            let key = val["year"]
            if (!acc[key]) {
                acc[key] = []
            }
            let x = acc[key].push(val.rate)
            return acc;
        }, {})
    
        return newArr
    }