/*
Median is the middle value in an ordered integer list. If the size of the list is even, there is no
 middle value. So the median is the mean of the two middle value.

For example,
[2,3,4], the median is 3

[2,3], the median is (2 + 3) / 2 = 2.5

Design a data structure that supports the following two operations:

void addNum(int num) - Add a integer number from the data stream to the data structure.
double findMedian() - Return the median of all elements so far.
 

Example:

addNum(1)
addNum(2)
findMedian() -> 1.5
addNum(3) 
findMedian() -> 2
 

Follow up:

If all integer numbers from the stream are between 0 and 100, how would you optimize it?
If 99% of all integer numbers from the stream are between 0 and 100, how would you optimize it?
*/

/**
 * initialize your data structure here.
 */
var MedianFinder = function() {
    this.array = [];
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
    
    this.array.unshift(num);
   
    //sort
    for (var i = 0; i < this.array.length-1; i++) {
        //swap
        if (this.array[i] > this.array[i+1]) {
            var temp = this.array[i];
            this.array[i] = this.array[i+1];
            this.array[i+1] = temp;
        }
    }
    
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
    console.log(this.array);
    console.log(this.array.length);
    
    if(this.array.length % 2 === 0) {
        
        var midLeft = Math.floor(this.array.length/2) - 1;
        
        var midRight = midLeft + 1;
        console.log(midLeft, midRight);
        
        
        return (this.array[midLeft] + this.array[midRight])/2;
    }
    return this.array[Math.floor(this.array.length/2)];
};

/** 
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */