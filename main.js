const testfunc = (obj, num) => {
    obj.age = num
}
let object = {
    name: "alice",
    age: 18
}
testfunc(object, 17)
console.log(object)