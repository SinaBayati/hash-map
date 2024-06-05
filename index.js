import { HashMap } from './hash-map.js';

const H = new HashMap("products");
console.log(H.name);
H.set("milk",2);
H.set("bread",3);
H.set("chocolate",5);
H.set("cheese",8);
console.log(H.set("cheese",10));
H.set("beef",8);
H.set("beef",12);

console.log(H.buckets);
console.log(H.get("beef"));
console.log(H.get("mutton"));