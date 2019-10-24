/*
Create a LRU cache
*/

class LinkedListNode {
    constructor(key,value, prev = null, next = null) {
        this.key = key;
        this.value = value;
        this.prev = prev;
        this.next = next;
    }
}
class Cache {
    constructor(capacity) {
        this.capacity;
    }
}