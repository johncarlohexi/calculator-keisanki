const exams = [
    {firstName:"kento", age: 23, passed:true},
    {firstName:"kento1", age: 28, passed:false},
    {firstName:"kento2", age: 31, passed:true},
    {firstName:"kento3", age: 42, passed:false},
    {firstName:"kento4", age: 12, passed:true},
    {firstName:"kento5", age: 36, passed:false},
]

const getPassed = exams.filter(exams => exams.passed == false)

let retest = [];

function addToRetest(items) {
    retest.push(...items)
}
addToRetest(getPassed)


const orderedAge = exams.sort((a, b) => a.age > b.age ? 1 : -1)

const getOldest = exams.sort(function(a, b) {
    return b.age - a.age
})

const oldestPerson = getOldest[0]
console.log(oldestPerson)
