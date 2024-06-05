export class HashMap{
  constructor(name){
    this.name = name;
    this.capacity = 16;
    this.loadFactor = 0.8;
    this.buckets = [];
  }

  hash(key){
    let hashCode = 0;
     
    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
      hashCode = hashCode % this.capacity;
    }
  
    return hashCode; 
  }

  set(key,value){
    const index = this.hash(key);
    if (index < 0 || index >= this.capacity) {
      throw new Error("Trying to access index out of bound");
    }
    if(this.buckets[index]){
      let tail = this.buckets[index];
      while(tail.next !== null){
        if(tail.key === key){
          tail.value = value;
          return false;
        }
        tail = tail.next;
      }
      if(tail.key === key){
        tail.value = value;
        return false;
      } else {
        tail.next = new Node(key,value);
        return true;
      }
    } else {  
      this.buckets[index] = new Node(key,value);
      return true;
    }
  }
}

class Node{
  constructor(key,value){
    this.key = key;
    this.value = value;
    this.next = null;
  }
}