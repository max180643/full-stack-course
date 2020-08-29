const number = [1, 2, 3, 4, 5] // Array ทั้งหมดควรเป็นชนิดเดียวกัน
const [val1, val2, ...other] = number

console.log(val1)
console.log(val2)
console.log(other)

// destructure

const newNumber = [...other, val2, val1]
console.log(newNumber)

const double = [...other, ...other]
console.log(double)

// loop array

const printValue = (val, index) => { console.log(val, index) }

number.forEach(printValue)

// array filter ไม่ effect ต่อ array ตัวเดิม (pure function)
const isOdd = num => num % 2 === 1

const oddNum = number.filter(isOdd) // function ที่ใส่ต้อง return true/false

console.log(oddNum)

// array map มีจำนวนเท่าไรก็ได้เท่าเดิม (pure function)

const multi = num => num * 2

const multiNum = number.map(multi)

console.log(multiNum)

// method every ใช้ตรวจสอบว่าทุกตัวตรงเงื่อนไขไหม
// method some ใช้ตรวจสอบว่าบางตัวตรงเงื่อนไขไหม

// method slice ตัดแค่บางส่วนของ array หยิบบางส่วน
// ตัวแปรแรกคือ index start ตัวที่สองคือ end
// จะเอาตำแหน่งถึงตำแหน่งสุดท้าย - 1
console.log(number.slice(2, 4))

// array reduce
// prev คือ value ของรอบที่แล้ว curr คือ value ของรอบปัจจุบัน
const sumFunc = (prev, curr) => prev + curr
// 0 คือ ค่าตั้งต้น
const sumVal = number.reduce(sumFunc, 0)
console.log(sumVal)

// count name
const names = ['Bob', 'Alice', 'Tony', 'Bob', 'Jane', 'Tony', 'Bob', 'Tom']

const countName = (prev, curr) => ({
  ...prev,
  [curr]: (prev[curr] ? prev[curr] + 1 : 1),
})
const countValue = names.reduce(countName, {})

console.log(countValue)

// count character
const countChar = (prev, curr) => ({
  ...prev,
  [curr[0]]: (prev[curr[0]] ? prev[curr[0]] + 1 : 1),
//   [curr[0]]: (prev[curr[0]] + 1 || 1),
})

const char = names.reduce(countChar, {})

console.log(char)

const [name, age, phone = 'No phone'] = ['Bob', 20]
console.log(name, age, phone)
