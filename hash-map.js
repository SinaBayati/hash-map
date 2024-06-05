export class HashMap{
  constructor(name){
    this.name = name;
  }

  hash(key){
    let hashCode = 0;
     
    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
      hashCode = hashCode % 16;
    }
  
    return hashCode; 
  }
}