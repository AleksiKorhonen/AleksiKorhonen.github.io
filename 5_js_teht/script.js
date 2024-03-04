//teht 1
function sortAndDisplay1() {
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    let num3 = document.getElementById('num3').value;
    

    let numbers = [num1, num2, num3].map(Number).sort((a, b) => a - b);


    document.getElementById('sortedNumbers').innerHTML = `järjestetty: ${numbers.join(', ')}`;


    document.getElementById('num1').value = numbers[0];
    document.getElementById('num2').value = numbers[1];
    document.getElementById('num3').value = numbers[2];
}


//teht 2
function DisplayTheBiggest() {
    let num1 = document.getElementById('teht2num1').value;
    let num2 = document.getElementById('teht2num2').value;
    let num3 = document.getElementById('teht2num3').value;
    let num4 = document.getElementById('teht2num4').value;
    let num5 = document.getElementById('teht2num5').value;
    

    var arr = [num1, num2, num3, num4, num5];
    var largest = arr[0];

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > largest ) {
            largest = arr[i];
        }
    }

    document.getElementById('dabiggestnum').innerHTML = `Suurin: ${largest}`;
}



//teht 3
function isEven(){
    let num1 = document.getElementById('odd_or_even').value;

    if (num1%2 == 0)
        return document.getElementById('TASA_VAI_PARITON').innerHTML = `Luku on parillinen!`;
    else
        return document.getElementById('TASA_VAI_PARITON').innerHTML = `Luku on pariton!`;
}


//teht 4
function mita_saat_ajaa(){
    let num1 = document.getElementById('ika').value;

    if (num1 >= 18)
        return document.getElementById('mita_ajaa').innerHTML = `saat ajaa autoa ja pienempiä!`;
    if (num1 >= 15)
        return document.getElementById('mita_ajaa').innerHTML = `saat ajaa mopoa ja pienempiä!`;
    else
        return document.getElementById('mita_ajaa').innerHTML = `saat ajaa vain polkupyörää!`;
}




//teht 5
function changeSelect() {
    if (document.getElementById("dropBox").value == "1") {
        document.getElementById("divText").innerHTML = "tykkään pelata apina pelejä";
    } else if (document.getElementById("dropBox").value == "2") {
        document.getElementById("divText").innerHTML = "jag gillar att spela apaspel";
    } else if (document.getElementById("dropBox").value == "3") {
        document.getElementById("divText").innerHTML = "i like to play monkey games";
    }
}