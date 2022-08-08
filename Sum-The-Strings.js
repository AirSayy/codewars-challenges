/*Create a function that takes 2 integers in form of a string as an input, and outputs the sum (also as a string):

Example: (Input1, Input2 -->Output)

"4",  "5" --> "9"
"34", "5" --> "39"
"", "" --> "0"
"2", "" --> "2"
"-5", "3" --> "-2" 

//SOLUTION

function sumStr(a,b) {
    let strToNum = Number(a)+Number(b) // transformed my arguments to integers and summed it up
    return strToNum.toString() //returned the solution and transformed to a string
}*/