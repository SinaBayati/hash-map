import { HashMap } from './hash-map.js';

const H = new HashMap("products");
console.log(H.name+":");
H.set("item1",8);
H.set("item2",8);
H.set("item3",8);
H.set("item4",8);
H.set("item5",8);
H.set("item6",8);
H.set("item7",8);
H.set("item8",8);
H.set("item9",8);
H.set("item10",8);
H.set("item11",8);
H.set("item12",8);
H.set("item13",8);
H.set("item14",8);
H.set("item15",8);
H.set("item16",8);
H.set("item17",8);
H.set("item18",8);
H.set("item19",8);
H.set("item20",8);
H.set("item21",8);
H.set("item22",8);
H.set("item23",8);
H.set("item24",8);
H.set("item25",8);
H.set("item26",8);
H.set("item27",8);
H.set("item28",8);
H.set("item29",8);
H.set("item30",8);
H.set("item31",8);
H.set("item32",8);

console.log(H.remove("item5"));
console.log(H.getNode("item10"));

console.log(H.length());

console.log(H.buckets);
H.clear();
console.log(H.buckets);
console.log(H.length());


/*
let node = {
  key: "milk",
  value: 2,
  next: {
    key: "beef",
    value: 8,
    next: {
      key: "mutton",
      value: 14,
      next: {
        key: "bread",
        value: 3,
        next: null,
      }
    }
  }
};
*/