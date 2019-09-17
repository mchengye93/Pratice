/*
Given data on time, amount of people, and people going in and out of mall. Return busiest time.
input:  data = [ [1487799425, 14, 1], 
                 [1487799425, 4,  0],
                 [1487799425, 2,  0],
                 [1487800378, 10, 1],
                 [1487801478, 18, 0],
                 [1487801478, 18, 1],
                 [1487901013, 1,  0],
                 [1487901211, 7,  1],
                 [1487901211, 7,  0] ]

output: 1487800378 # since the increase in the number of people
                   # in the mall is the highest at that point
*/
function findBusiestPeriod(data) {
    // your code goes here
    let busiestTime = 0;
    let maxNum = 0;
    let currentPeople = 0;
    
    let timePeople = {};
    let arrTime = [];
    
    for (let i = 0; i < data.length; i++) {
      let dataPoint = data[i];
      let time = dataPoint[0];
      let amount = dataPoint[1];
      let inOut = dataPoint[2];
      
      if(timePeople[time] === undefined) {
        timePeople[time] = 0;
        arrTime.push(time);
      }
      
      if (inOut) {
        timePeople[time] += amount;
        
      } else {
        timePeople[time] -= amount;
      }
    }
    
    for (let i = 0; i < arrTime.length; i++) {
      let key = arrTime[i];
      currentPeople += timePeople[key];
      
      if (currentPeople > maxNum) {
        maxNum = currentPeople;
        busiestTime = key;
      }
    }
    
    return busiestTime;
  }