var final_hex;

function randomNumber(min, max) {  
    return Math.random() * (max - min) + min; 
}
function countDigits(a){ // FUNCTION TO COUNT DIGITS (TO HANDLE SINGLE DIGITS)
    return a.toString().length;
}

const randombg = (id) =>{
    var a = randomNumber(100, 255);       //Red
    var b = randomNumber(100, 255);       //Green
    var c = randomNumber(100, 255);       //Blue

    /* CODE FOR CONVERTING RGB TO HEX */
    var hex_arr=[parseInt(a).toString(16), parseInt(b).toString(16), parseInt(c).toString(16)];

    var hex="#";

    for(var i = 1;i<=3;i++){
        var len = countDigits(hex_arr[i-1]);
        if(len!=2){
            hex = hex + "0" + hex_arr[i-1].toString();
        }
        else
            hex = hex + hex_arr[i-1].toString();
    }

    var sum= a+b+c;
    var background="rgb("+ a + ", " + b + ", " + c + ")";

//    console.log(hex);
//    console.log(background);

    final_hex=hex;
//    console.log(final_hex);

    if(sum>=455){
        var bglist = document.getElementById(id);
        bglist.style.color = ("#010101")
    }
    else{
        var bglist = document.getElementById(id);
        bglist.style.color = ("#fcfcfc")
    }

    var bglist = document.getElementById(id);
    bglist.style.backgroundColor = (background);
}

export default randombg;