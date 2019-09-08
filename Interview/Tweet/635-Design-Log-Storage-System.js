
var LogSystem = function() {
    this.log = {};
    
};

/** 
 * @param {number} id 
 * @param {string} timestamp
 * @return {void}
 */
LogSystem.prototype.put = function(id, timestamp) {
    this.log[id] = timestamp;
};

/** 
 * @param {string} s 
 * @param {string} e 
 * @param {string} gra
 * @return {number[]}
 */
LogSystem.prototype.retrieve = function(s, e, gra) {
    var time = {
        'Year': 1,
        'Month':2,
        'Day': 3,
        'Hour': 4,
        'Minute': 5,
        'Second': 6};
    
    var result = [];
    var granular = time[gra];
    var start = s.split(':');
    var end = e.split(':');
    

    
    var log = this.log;
    
    for (var key in log) {
        var logTime = log[key];
        var time = logTime.split(':');
      
        var inRange = true;
      
        var totalTime = 0;
        var startTime = 0;
        var endTime = 0;
        
        var seconds = {
            0: 365*24*60*60,
            1: 30*24*60*60,
            2: 24*60*60,
            3: 60*60,
            4: 60,
            5: 1
        }
        for (var i = 0; i < granular ; i++) {
                 
            totalTime += parseInt(time[i]*seconds[i]);
            startTime += parseInt(start[i]*seconds[i]);
            endTime += parseInt(end[i]*seconds[i]);
            
            // if (!(parseInt(time[i]) >= parseInt(start[i]) && parseInt(time[i]) <= parseInt(end[i]) )) {
            //     inRange = false;
            //     break;
            //     }
           
        }
        if (totalTime >= startTime && totalTime <= endTime) {
            result.push(key);
        }
        
    }
    return result;
};

/** 
 * Your LogSystem object will be instantiated and called as such:
 * var obj = new LogSystem()
 * obj.put(id,timestamp)
 * var param_2 = obj.retrieve(s,e,gra)
 */