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
     constructor(key,val,next=null,prev=null) {
         this.key = key;
         this.val = val;
         this.next = next;
         this.prev = prev;
     }
 }
var LRUCache = function(capacity) {
    this.map = {};
    this.capacity = capacity;
    this.size = 0;
    this.head = null;
    this.tail = null;
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if (this.map[key]) {
        let node = this.map[key];
        this.put(key,node.val);
        return node.val;

    }
    return null;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    this.checkCapacity();

    if (this.map[key]) {
        //remove node
        this.remove(key);
        //add and make it head
        this.add(key,value);

    } else {
        this.add(key,value);
    }
   
};

LRUCache.prototype.remove = (key) => {
    let node = this.map[key];
    delete this.map[key];
    if (node.prev !== null) {
        node.prev.next = node.next;
    } else {
        this.head = node.next;
    }

    if (node.next !== null) {
        node.next.prev = node.prev;
    } else {
        this.tail = node.prev;
    }
    this.size--;
}

LRUCache.prototype.add = (key,val) => {
    let node = new Node (key,val);

    if (this.head !== null) {
        this.head.prev = node;
        node.next = this.head;
        this.head = node;
        
    } else {
        this.head = node;
        this.tail = node;
    }
    this.map[key] = node;
    this.size++;
}

LRUCache.prototype.checkCapacity = () => {
    while(this.size > this.capacity) {
        this.remove(this.tail.key);
    }
}
/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */