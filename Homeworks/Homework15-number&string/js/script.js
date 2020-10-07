let str = "lorem ipsum is simply dummy";

let resultStr = "";
    
for (let letter = 0; letter < str.length; letter++) {
    resultStr += (str[letter - 1] == " " || letter == 0) ? str[letter].toUpperCase() : str[letter];

}
    
console.log(resultStr);

// -----------------------------------------------------------------------------------------------------------

let name = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae, accusantium."

for (let i = 1; i < name.length; i+=2) {
        const element = name[i];
        console.log(element);  
}

// ------------------------------------------------------------------------------------------------------------

function getLongerString(str1, str2) {
    let result = (str1.length > str2.length)? `String1: '${str1}' - is longer than string2.`:`String2: '${str2}' - is longer than string1.`;
    return result
}

console.log(getLongerString("Lorem ipsum dolor sit amet.", "Lorem ipsum dolor sit amet consectetur adipisicing."))

// or

function getLongerString(str1, str2) {
    if (str1.length > str2.length){
        result = `String1: '${str1}' - is longer than string2.`;
    } else if (str1.length < str2.length){
        result = `String2: '${str2}' - is longer than string1.`;
    } else{
        result = `Strings are even.`
    }
    return result
}

console.log(getLongerString("Lorem ipsum dolor sit amet.", "Lorem ipsum dolor sit amet consectetur adipisicing."))
