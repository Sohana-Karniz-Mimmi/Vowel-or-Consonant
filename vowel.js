
/**************Vowel or Consonant:**************/
let latter = prompt("Enter a single character");

if (latter.length === 1 && latter.match(/[a-z]/i)) {
    if(
        (latter === 'a' || latter === 'A') || 
        (latter === "e" || latter === "E") || 
        (latter === "i" || latter === "I") || 
        (latter === "o" || latter === "O") || 
        (latter === "u" || latter === "U")) 
        {
        document.write(`${latter} is Vowel`)
    }
    else {
        document.write(`${latter} is Consonant`)
    }
}
else{
    document.write("Invalid input. Please enter a single Latter.");
}
