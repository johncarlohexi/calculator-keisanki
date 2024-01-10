const getNames = document.getElementsByClassName("names")
const getDays = document.getElementsByClassName("namenum")


let people = [
    { name: "Tanaka", days: 2 },
    { name: "Hororo", days: 1 },
    { name: "Pop", days: 10 },
]
/*
getNames[0].innerHTML = people[0].name + ":"
getNames[1].innerHTML = people[1].name + ":"
getNames[2].innerHTML = people[2].name + ":" */

function updateNames() {
    for (let i = 0; i < getNames.length; i++) {
        (getNames[i]).innerHTML = `${people[i].name}`
    }

    for (let i = 0; i < getDays.length; i++) {
        (getDays[i]).innerHTML = `${people[i].days}`
    }
}
updateNames()

const getSalaryCount = document.getElementsByClassName("salary-count")
const getSalaryNames = document.getElementsByClassName("salary-names");


function putName() {
    for (let i = 0; i < getSalaryNames.length; i++) {
        (getSalaryNames[i]).innerHTML = `${people[i].name}` + ":"
    }

}
putName()

let perHour = 1250;

function getSalary() {
    for (let i = 0; i < getDays.length; i++) {
        getResults = (getDays[i]).innerHTML * perHour
        console.log(getResults)

        if (i < getSalaryCount.length) {
            (getSalaryCount[i]).innerHTML = `${getResults}`
        }
    }
}

getSalary()
