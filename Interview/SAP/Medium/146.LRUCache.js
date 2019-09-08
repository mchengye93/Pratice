/*
Design and implement a data structure for Least Recently Used (LRU) cache. It should support the 
following operations: get and put.

get(key) - Get the value (will always be positive) of the key if the key exists in the cache, 
otherwise return -1.
put(key, value) - Set or insert the value if the key is not already present. When the cache 
reached its capacity, it should invalidate the least recently used item before inserting a 
new item.

The cache is initialized with a positive capacity.

Follow up:
Could you do both operations in O(1) time complexity?

Example:

LRUCache cache = new LRUCache( 2 capacity  );

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

var doubleLinkedNode = () => {
    this.key = 0;
    this.value = 0;
    this.next= null;
    this.prev = null;
    
}

doubleLinkedNode.prototype.addNode = (node) => {
    
    //add new node after head
    node.prev = head;
    node.next = head.next;
    
    head.next.prev = node;
    head.next = node;
}

doubleLinkedNode.prototype.removeNode = (node) => {
    //remove exisiting node from linkedlist
    let prev = node.prev;
    let next = node.next;
    
    prev.next = next;
    next.prev = prev;
}

doubleLinkedNode.prototype.moveToHead = (node) => {
    removeNode(node);
    addNode(node);
}

doubleLinkedNode.prototype.popTail = () => {
    let res = this.tail.prev;
    removeNode(res);
    return res;
}
/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    //FIFO- First in first out
    this.capacity = capacity;
    this.currentCapacity = 0;
    this.cache = {};
    
    this.head = new doubleLinkedNode();
    this.tail = new doubleLinkedNode();
    
    this.head.next = this.tail;
    this.tail.prev = this.head;
    
    
    
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    let node = this.cache[key];
    
    if(node === undefined) {
        return -1;
    }
    
    this.moveToHead(node);
    return node.value;
    
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    let node = this.cache[key];
    
    if (node === undefined) {
        let newNode = new DoubleLinkedNode();
        newNode.key = key;
        newNode.value = value;
        
        this.cache[key] = newNode;
        this.addNode(newNode);
        
        this.currentCapacity++;
        
        if (this.currentCapacity > this.capacity) {
            let tail = this.popTail();
            delete this.cache[tail.key];
            this.currentCapacity--;
        } 
    }else {
        node.value = value;
        this.moveToHead(node);
            
        }
    }


/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */