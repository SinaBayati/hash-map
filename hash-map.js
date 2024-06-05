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
      let currentNode = this.buckets[index];
      while(currentNode.next !== null){
        if(currentNode.key === key){
          currentNode.value = value;
          return false;
        }
        currentNode = currentNode.next;
      }
      if(currentNode.key === key){
        currentNode.value = value;
        return false;
      } else {
        currentNode.next = new Node(key,value);
        return true;
      }
    } else {
      this.buckets[index] = new Node(key,value);
      return true;
    }
  }

  get(key){
    const index = this.hash(key);
    if (index < 0 || index >= this.capacity) {
      throw new Error("Trying to access index out of bound");
    }

    if(this.buckets[index]){
      let currentNode = this.buckets[index];
      while(currentNode.next !== null){
        if(currentNode.key === key){
          return currentNode.value;
        }
        currentNode = currentNode.next;
      }

      if(currentNode.key === key){
        return currentNode.value;
      } else {
        return null;
      }
    } else {
      return null;
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