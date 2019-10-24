/*
Create a LRU cache
*/

class Node {
    constructor(key,value, prev = null, next = null) {
        this.key = key;
        this.value = value;
        this.prev = prev;
        this.next = next;
    }
}
class Cache {
    constructor(capacity) {
        this.size = 0;
        this.capacity = capacity;
        this.tail = null;
        this.head = null;
        this.cache = {};
    }

    set(key,value) {
        //most recently put on head

        //if head is null then set tail and head

        //else replace head with new node

        //put the key on cache and node {key: node}
        //add one to size

    }

    get(key) {
        //check to see if it is in cache
        //if it isn't then return null

        
        //if exist make node prev to point to node's next
        // node next prev point to prev node
        //take oldHead and set old head prev to be node
        // node next is oldHead
        //this.head = node;
       
    }

    delete(key) {
        //when we pass limit we are remove elements from tail
        //set tail previous to be tail and 
        //if it is both head and tail then set them to be null
        //we also remove key from cache map
    }


}