//Question 1

const itemsObject = [
  { quantity: 1, price: 200 },
  { quantity: 3, price: 350 },
  { quantity: 5, price: 400 },
];
const doubleEle = (items) => {
  return items.map(({ quantity, price }) => ({
    quantity: quantity * 2,
    price: price * 2,
  }));
};

console.log(
  "<-----------------------------question 1--------------------------------->"
);
console.log("Source Array");
console.log(itemsObject);
console.log("New Array");
console.log(doubleEle(itemsObject));
console.log("Source Array");
console.log(itemsObject);
console.log(Array.isArray(doubleEle(itemsObject)) + "\n");

//Question 2

const qualifiedEle = (items) => {
  return items.filter(({ quantity, price }) => quantity > 2 && price > 300);
};

console.log(
  "<-----------------------------question 2--------------------------------->"
);
console.log("Source Array");
console.log(itemsObject);
console.log("New Array");
console.log(qualifiedEle(itemsObject));
console.log("Source Array");
console.log(itemsObject);
console.log(Array.isArray(qualifiedEle(itemsObject)) + "\n");

//Question 3

const calItems = (items) => {
  return items.reduce((acc, { quantity, price }) => {
    return acc + quantity * price;
  }, 0);
};

console.log(
  "<-----------------------------question 3--------------------------------->"
);
console.log("Source Array");
console.log(itemsObject);
console.log("Total Value");
console.log(calItems(itemsObject) + "\n");

//Question 4
const string =
  " Perhaps The Easiest-to-understand               Case For Reduce Is To Return The Sum Of All The Elements In An Array ";

const newString = (string) => {
  return string
    .split(/[^a-zA-Z]+/)
    .filter((ele) => ele != "")
    .join(" ")
    .toLowerCase();
};

console.log(
  "<-----------------------------question 4--------------------------------->"
);
console.log(string);
console.log(newString(string) + "\n");

//Question 5

const first = [
  { uuid: 6, name: "test6" },
  { uuid: 2, name: "test" },
  { uuid: 5, name: "test5" },
  { uuid: 3, name: "test3" },
];
const second = [
  { uuid: 6, role: "pm" },
  { uuid: 4, role: "engineer" },
  { uuid: 1, role: "manager" },
  { uuid: 2, role: "associate" },
];
const mergeArrays = (array1, array2) => {
  const mergedArray = [];
  array1.forEach((element) => {
    let tempElement = {};
    let uuidA1 = element.uuid;
    for (let uuidA2 of array2) {
      if (uuidA1 == uuidA2.uuid) {
        tempElement.uuid = element.uuid;
        tempElement.name = element.name;
        tempElement.role = uuidA2.role;
        break;
      }
      tempElement.uuid = element.uuid;
      tempElement.name = element.name;
      tempElement.role = null;
    }
    mergedArray.push(tempElement);
  });
  array2.forEach((element) => {
    let uuidA2 = element.uuid;
    let index = mergedArray.findIndex((p) => p.uuid == uuidA2);
    if (index == -1) {
      let tempElement = {};
      tempElement.uuid = element.uuid;
      tempElement.name = null;
      tempElement.role = element.role;
      mergedArray.push(tempElement);
    }
  });
  mergedArray.sort((a, b) => a.uuid - b.uuid);
  return mergedArray;
};

console.log(
  "<-----------------------------question 5--------------------------------->"
);
console.log(first);
console.log(second);
console.log(mergeArrays(first, second));
