var num: number = 10.1236321234;

// console.log(num.toExponential());
// console.log("toFixed", num.toFixed(3));
// console.log("toLocaleString", num.toLocaleString());

// var myStringNum:string = num.toString()
// console.log("toString", num.toString());
// console.log("toPrecision", num.toPrecision(5));
// console.log("toPrecision", num.valueOf());

// var words: string = "i love l pakistan";

// for (let index = 0; index < words.length; index++) {
//     const element = words[index];
//     console.log("element",element);

// }

// console.log("length", words.length);
// console.log("charAt", words.charAt(1));
// console.log("charCodeAt()", words.charCodeAt(2));
// console.log("indexOf()", words.indexOf("l"));
// console.log("lastIndexOf()", words.lastIndexOf("l"));

// console.log("concat()", words.concat(" something"));

// console.log("replace()", words.replace("love", "like"));

var str1 = "THIS is, beautiful, str,ing";

var toLowerCaseStr: string = str1.toLowerCase();
console.log("toLowerCaseStr", toLowerCaseStr);

var toUpperCaseStr: string = str1.toUpperCase();
console.log("toUpperCaseStr", toUpperCaseStr);



// console.log("localeCompare", str1.localeCompare("This is beautiful string"));

// console.log("search", str1.search("sdafkl"));

var newStr: string = str1.slice(1, 3);
console.log("slice newStr", newStr);

var subStringStr: string = str1.substring(1, 3);
console.log("subStringStr", subStringStr);


// var splitStr: string[] = str1.split(" ");

// console.log("slice splitStr", splitStr);

// function showTimeInWords(time: string) {
//   var splitedTime: string[] = time.split(":");
//   console.log(
//     `Time is ${splitedTime[0]} Hours, ${splitedTime[1]} Mins and ${splitedTime[2]} Seconds`
//   );
// }

// showTimeInWords("1:35:40");

// Arrays methods

var numbers:number [] = [10,20,30,40,50]

 numbers.forEach((element)=>{
    console.log("element",element);
})




function myReplace(text:string, replaceTo:string, replaceWith:string) :string {
    let finalString:string = ''
    for (let index = 0; index < text.length; index++) {
        if (text.slice(index, index+replaceTo.length) === replaceTo) {
            let firstString:string = text.slice(index, index+replaceTo.length)     
            let lastString:string = text.slice( index+replaceTo.length,text.length)
             finalString = `${firstString} ${replaceWith} ${lastString}`
            break 
        }
        
    }
    return finalString
}

myReplace('i love pakistan', 'love', 'like')
// i like pakistan
