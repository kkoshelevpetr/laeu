function getUTCQuarter() {
    return Math.floor(this.getUTCMonth() / 4) + 1;
}

// Example usage:
let date = new Date(); // Current date and time
date.getUTCQuarter = getUTCQuarter; // Adding the method to the date object

console.log(date.getUTCQuarter()); // Outputs the quarter of the year (1, 2, or 3)
