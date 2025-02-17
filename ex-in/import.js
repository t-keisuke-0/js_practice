import printName from './export.js'
import { Test } from './export.js'

printName('JeffDean')  // JeffDean
const test_inst = new Test()
console.log(test_inst.my_method(5, 6))
