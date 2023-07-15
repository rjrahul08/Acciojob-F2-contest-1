/** @format */

let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
  ];
  
  function PrintDeveloperbyMap() {
    //Write your code here , just console.log
    arr.map(element => {
      if(element.profession === "developer") {
        console.log(element);
      }
    })
  }
  
  function PrintDeveloperbyForEach() {
    //Write your code here , just console.log
    arr.forEach(element => {
      if(element.profession === "developer") {
        console.log(element);
      }
    })
  }
  
  function addData() {
    //Write your code here, just console.log
    let newEmployee = {id:4,name:"susan",age:"20",profession:"intern"};
    arr.push(newEmployee);
    console.log(arr);
  }
  
  function removeAdmin() {
    //Write your code here, just console.log
    let result = arr.filter(element => element.profession !== "admin");
    console.log(result);
  }
  
  function concatenateArray() {
    //Write your code here, just console.log
    arr2 = [
      { id: 5, name: "Hemanth", age: "24", profession: "web developer"},
      { id: 6, name: "Rocky", age: "27", profession: "sql developer"},
      { id: 7, name: "Bheem", age: "30", profession: "data aalyst"}
    ]
  
    let newArray = arr.concat(arr2);
    console.log(newArray);
  }