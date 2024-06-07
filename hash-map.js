export class HashMap{
  constructor(name){
    this.name = name;
    this.capacity = 16;
    this._buckets = [];
    this._length = 0;
    this._entries = [];
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
    // add an entry to the entries array
    this._entries.push([key,value]);

    // add a new node to the buckets array
    const index = this.getIndex(key);

    if(this._buckets[index]){
      let currentNode = this._buckets[index];
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
        this._length += 1;
        return true;
      }
    } else {
      this._buckets[index] = new Node(key,value);
      this._length += 1;
      return true;
    }
  }

  get(key){
    const index = this.getIndex(key);

    if(this._buckets[index]){
      let currentNode = this._buckets[index];
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

    if(this._buckets[index]){
      let currentNode = this._buckets[index];
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

    if(this._buckets[index]){
      let currentNode = this._buckets[index];
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

  removeEntry(key){
    const i = this._entries.findIndex(e => e[0] === key);
    this._entries.splice(i,1);
  }

  remove(key){
    // remove the item from entries array 
    this.removeEntry(key);

    // remove the node from buckets array
    const index = this.getIndex(key);

    let previousNode = this._buckets[index];
    let currentNode = this._buckets[index];

    // target index empty
    if(!this._buckets[index]){
      return false
    }

    // only one node on the target index linked list
    if(currentNode.next === null){
      if(currentNode.key === key){
        this._buckets[index] = null;
        this._length -= 1;
        return true;
      }
      return false;
    }

    // more than one node on the linked list and first node must be removed
    if(currentNode.key === key){
      this._buckets[index] = currentNode.next;
      this._length -= 1;
      return true;
    }

    // more than one node on the linked list and target node to be remove is unknown
    currentNode = currentNode.next;
    while(currentNode !== null){
      if(currentNode.key === key){
        previousNode.next = currentNode.next;
        this._length -= 1;
        return true;
      }
      previousNode = previousNode.next;
      currentNode = currentNode.next;
    }
    return false;
  }

  length(){
    return this._length;
  }

  clear(){
    this._buckets = [];
    this._length = 0;
  }

  keys(){
    return this._entries.map(e => e[0]);
  }

  values(){
    return this._entries.map(e => e[1]);
  }

  entries(){
    return this._entries;
  }

  buckets(){
    return this._buckets;
  }
}

class Node{
  constructor(key = null, value = null){
    this.key = key;
    this.value = value;
    this.next = null;
  }
}