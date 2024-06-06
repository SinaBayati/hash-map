export class HashMap{
  constructor(name){
    this.name = name;
    this.capacity = 16;
    this.loadFactor = 0.8;
    this.buckets = [];
    this.length = 0;
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

  getIndex(key){
    const index = this.hash(key);
    if (index < 0 || index >= this.capacity) {
      throw new Error("Trying to access index out of bound");
    }
    return index;
  }

  set(key,value){
    const index = this.getIndex(key);

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
        this.length += 1;
        return true;
      }
    } else {
      this.buckets[index] = new Node(key,value);
      this.length += 1;
      return true;
    }
  }

  get(key){
    const index = this.getIndex(key);

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

  getNode(key){
    const index = this.getIndex(key);

    if(this.buckets[index]){
      let currentNode = this.buckets[index];
      while(currentNode.next !== null){
        if(currentNode.key === key){
          return currentNode;
        }
        currentNode = currentNode.next;
      }

      if(currentNode.key === key){
        return currentNode;
      } else {
        return null;
      }
    } else {
      return null;
    }
  }

  has(key){
    const index = this.getIndex(key);

    if(this.buckets[index]){
      let currentNode = this.buckets[index];
      while(currentNode.next !== null){
        if(currentNode.key === key){
          return true;
        }
        currentNode = currentNode.next;
      }

      if(currentNode.key === key){
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

  remove(key){
    const index = this.getIndex(key);

    const accumulator = this.buckets[index];
    let previousNode = this.buckets[index];
    let currentNode = this.buckets[index];

    // target index empty
    if(!this.buckets[index]){
      return false
    }

    // only one node on the target index linked list
    if(currentNode.next === null){
      if(currentNode.key === key){
        this.buckets[index] = null;
        this.length -= 1;
        return true;
      }
      return false;
    }

    // more than one node on the linked list and first node must be removed
    if(currentNode.key === key){
      this.buckets[index] = currentNode.next;
      this.length -= 1;
      return true;
    }

    // more than one node on the linked list and target node to be remove is unknown
    currentNode = currentNode.next;
    while(currentNode !== null){
      if(currentNode.key === key){
        previousNode.next = currentNode.next;
        this.length -= 1;
        return true;
      }
      previousNode = previousNode.next;
      currentNode = currentNode.next;
    }
    return false;
  }
}

class Node{
  constructor(key = null, value = null){
    this.key = key;
    this.value = value;
    this.next = null;
  }
}