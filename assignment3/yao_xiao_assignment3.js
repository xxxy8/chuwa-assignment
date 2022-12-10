//<-------------------------------------------------Question1----------------------------------------------------------->

const tableInfo = {
  tableHeader: ["Student Name", "Age", "Phone", "Address"],
  tableContent: [
    {
      "Student Name": "John",
      Age: 19,
      Phone: "455 - 983 - 0903",
      Address: "123 Ave, San Francisco, CA, 94011",
    },
    {
      "Student Name": "Alex",
      Age: 21,
      Phone: "455 - 983 - 0912",
      Address: "456 Rd, San Francisco, CA, 94012",
    },
    {
      "Student Name": "Josh",
      Age: 22,
      Phone: "455 - 345 - 0912",
      Address: "789 Dr, Newark, CA, 94016",
    },
    {
      "Student Name": "Matt",
      Age: 23,
      Phone: "321 - 345 - 0912",
      Address: "223 Dr, Sunnyvale, CA, 94016",
    },
  ],
};

const createNode = (type, textContent = "", className = "") => {
  const newNode = document.createElement(type);
  newNode.textContent = textContent;
  newNode.className = className;
  return newNode;
};

const div1 = createNode(
  "div",
  "<------------------------------------------------Question1---------------------------------------------------------->",
  "div1"
);
div1.appendChild(createNode("div", "question1", "q1Div"));
const table = createNode("table", "", "table");

const tabHeader = [...tableInfo.tableHeader];
for (let i = 0; i < tabHeader.length + 1; i++) {
  let index = 0 + i;
  const newTr = createNode("tr", "", "tr" + index);
  table.appendChild(newTr);
}

for (let i = 0; i < tabHeader.length; i++) {
  let index = i + 1;
  const newTh = createNode("th", tabHeader[i], "td" + index);
  table.querySelector("tr").appendChild(newTh);
}
const tabConts = [...tableInfo.tableContent];

for (let i = 0; i < tabConts.length; i++) {
  const tabCont = { ...tabConts[i] };
  let index = i + 1;
  for (let key of Object.keys(tabCont)) {
    const newTd = createNode("td", tabCont[key]);
    let tempIndex = ".tr" + index.toString();
    table.querySelector(tempIndex).appendChild(newTd);
  }
}

document.body.append(div1);
document.body.append(table);

//<-------------------------------------------------Question2----------------------------------------------------------->

const div12 = createNode("div");

const divQ2 = createNode(
  "div",
  "<------------------------------------------------Question2---------------------------------------------------------->",
  "div1"
);
div12.append(divQ2);
document.body.append(div12);

const div2 = createNode("div", "", "div2");
const inputE = document.createElement("input");
inputE.placeholder = "search";
inputE.type = "text";
div2.append(inputE);
div12.append(div2);
document.body.append(div12);

//<-------------------------------------------------Question3----------------------------------------------------------->

const list = ["HTML", "JavaScript", "CSS", "React", "Redux", "Java"];
const items = [...list];
console.log(items);
const div13 = createNode("div");

const divQ3 = createNode(
  "div",
  "<------------------------------------------------Question3---------------------------------------------------------->",
  "div1"
);
div13.append(divQ3);

const createSpan = (type, textContent) => {
  const newSpan = document.createElement(type);
  newSpan.textContent = textContent;
  return newSpan;
};
const createOl = (type) => {
  const newOl = document.createElement(type);
  items.forEach((ele) => {
    const item = document.createElement("li");
    item.textContent = ele;
    newOl.appendChild(item);
  });
  return newOl;
};

const createUl = (type) => {
  const newOl = document.createElement(type);
  items.forEach((ele) => {
    let item = document.createElement("li");
    item.textContent = ele;
    newOl.appendChild(item);
  });
  return newOl;
};

div13.appendChild(createSpan("span", "Ordered List"));
div13.appendChild(createOl("ol"));
div13.appendChild(createSpan("span", "Unordered List"));
div13.appendChild(createUl("ul"));
document.body.append(div13);

//<-------------------------------------------------Question4----------------------------------------------------------->
const dropDownList = [
  { value: "newark", content: "Newark" },
  { value: "santaClara", content: "Santa Clara" },
  { value: "unionCity", content: "Union City" },
  { value: "albany", content: "Albany" },
  { value: "dalyCity", content: "Daly City" },
  { value: "sanJose", content: "San Jose" },
];

const div14 = createNode("div");

const divQ4 = createNode(
  "div",
  "<------------------------------------------------Question4---------------------------------------------------------->",
  "div1"
);

const createSel = (type) => {
  const newSel = document.createElement(type);
  dropDownList.forEach((ele) => {
    let item = document.createElement("option");
    item.value = ele.value;
    item.textContent = ele.content;
    newSel.appendChild(item);
  });
  return newSel;
};
div14.append(divQ4);
div14.append(createSel("select"));
document.body.append(div14);
