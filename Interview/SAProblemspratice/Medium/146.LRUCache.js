/*
Design and implement a data structure for Least Recently Used (LRU) cache. It should 
support the following operations: get and put.

get(key) - Get the value (will always be positive) of the key if the key exists in the
 cache, otherwise return -1.
put(key, value) - Set or insert the value if the key is not already present. When the 
cache reached its capacity, it should invalidate the least recently used item before 
inserting a new item.

The cache is initialized with a positive capacity.

Follow up:
Could you do both operations in O(1) time complexity?

Example:

LRUCache cache = new LRUCache( 2 capacity );

cache.put(1, 1);
cache.put(2, 2);
cache.get(1);       // returns 1
cache.put(3, 3);    // evicts key 2
cache.get(2);       // returns -1 (not found)
cache.put(4, 4);    // evicts key 1
cache.get(1);       // returns -1 (not found)
cache.get(3);       // returns 3
cache.get(4);       // returns 4
*/
/**
 * @param {number} capacity
 */
class Node {
    constructor(key, val, left = null, right =null) {
        this.key = key;
        this.val = val;
        this.left = left;
        this.right = right;
    }
}
var LRUCache = function(capacity) {
    this.capacity = capacity;
    this.size = 0;
    this.head = null;
    this.tail = null;
    this.map = {};

};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    let node = this.map[key];
    if (node) {
        //update head
        this.add(key,node.val);

    } else {
        return -1;
    }
};

LRUCache.prototype.add = function(key,val) {
    let node = new Node(key,val);
    if (this.head === null) {
        this.head = node;
        this.tail = node;
        
    } else {
        let prevHead = this.head;
        this.head = 
    }
    this.size++;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */