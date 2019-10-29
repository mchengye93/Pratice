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
        
        this.checkCapacity();
        //if head is null then new value is head/tail
        if(!this.head){
            this.head = this.tail = new Node(key, value);
        } else{
            //else set node to be head 
            const node = new Node(key, value);

            //oldHead's prev is node
            this.head.prev = node;

            //node becomes head
            this.head = node;
        }
    
        //Update the cache map
        this.cache[key] = this.head;
        this.size++;

    }

    read(key) {
        //if key exist return value
        if(this.cache[key]){
            const value = this.cache[key].value;
            
            //remove node
            this.remove(key)

            //put as head
            // write node again to the head of LinkedList to make it most recently used
            this.set(key, value);
      
            return value;
          }
          return null; //item does not exist in cache
       
    }

  
    remove(key){
        const node = this.cache[key];
        
        //if node prev is not null reset prev next to point node next
        if(node.prev !== null){
          node.prev.next = node.next;
        } else {
          this.head = node.next;
        }
        
        //if node next is not null set node.next.prev to point node.prev
        if(node.next !== null){
          node.next.prev = node.prev;
        } else {
            //if next is null then it was tail so set new tail to be current's prev
          this.tail = node.prev
        }
    
        //remove from cache and lower size
        delete this.cache[key];
        this.size--;
      }

      checkCapacity(){
        if(this.size === this.capacity){
          this.remove(this.tail.key)
        }
      }
}