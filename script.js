const opBoxes = document.getElementsByClassName("op-box")
const nmBoxes = document.getElementsByClassName("nm-box")
const opBtns = document.getElementsByClassName("op")

let showNumber = document.querySelector(".show-number")
let stringNum = "";


let numbers = {
    myNum: null,
    myNum2: null,
    equalNum: null,
    toNumber: null
};


let getNum;
for (let i = 0; i < nmBoxes.length; i++) {
    nmBoxes[i].addEventListener("click", function() {
        getNum = nmBoxes[i].innerHTML;
        stringNum += getNum

        /// Limit Number
        if(stringNum.length > 8) stringNum = stringNum.substring(0,8)
        
        showNumber.innerHTML = stringNum

        toNumber = parseInt(stringNum)
        numbers.myNum = toNumber
        console.log(numbers.myNum)
    })


}

for (let i = 0; i < opBtns.length; i++) {
    opBtns[i].addEventListener("click", function() {
        let getOperator = opBtns[i].innerHTML

        console.log(getOperator)
    }) 
}