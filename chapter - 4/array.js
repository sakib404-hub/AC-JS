// To store related data means to store same type of data maximum of the time we would be using array
//Here position , index matters the most though the indexing method we can retrive any data we need
//Numerous elements are separated by comma
//Property is the thing that does something but value is the thing that we assign
//ARRAY IS MUTABLE

let marks = [60, 70, 90, 76, 94, 76];
console.log(marks);
marks[0] = 89;
console.log(marks);

//This is known as the mixed array
let info = ["rahul", 86, "Delhi"];
console.log(info);
console.log(info.length); //This is known as property

let heros = ["Ironman", "Superman", "Hakweye", "Antman", "Black Widow", "Thor"];
console.log(heros);
console.log(heros.length);
console.log(typeof heros);
//From the above we understand that array is a kind of object also where key value pair exist like object
//But the thing is we have index in place of the key

// we can do this also but this is not a good way to do it when we want a single data type to contain multiplee values
let mark = {
  student1: 97,
  student12: 83,
};
