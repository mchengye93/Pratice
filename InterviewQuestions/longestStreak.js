/* Noom - Frontend problem
Given an array filled with daily calories budget and calorie intake for breakfast, lunch, and dinner.
Return the longest streak of daily calorie intake of less than calories budget.

*/
var longestStreak = (inputsArr) => {
let inputsArr = input.split('\n');
let longestStreak = 0;
let currentStreak = 0;

    for (let i = 0; i < inputsArr.length; i++) {

        let input = inputsArr[i].split(',');
        let calorieBudget = parseInt(input[0]);
        let calorieIntake = parseInt(input[1])+parseInt(input[2])+parseInt(input[3]);
        if (calorieIntake <= calorieBudget) {
            currentStreak++;
            if (currentStreak > longestStreak) {
                longestStreak = currentStreak;
            }
        } else {
            currentStreak = 0;
        }
        

        
    }
    console.log(longestStreak);

}