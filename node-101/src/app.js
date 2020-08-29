// const num = 1234n เติม n เวลาเลขหลักมากๆ Number.MAX_SAFE_INTEGER
// const empty = null เป็นค่าที่ถูก assign
// const undef = undefined เป็นค่าที่ไม่ถูก assign

// การ check
// == ตรวจสอบแค่ค่าไม่ตรวจสอบ datatype
// === ตรวจสอบแค่ค่า กับ datatype

const key = 'some-key'

const data = {
  fname: 'Chanwit',
  lname: 'Settavongsin',
  '0a': true,
  '#': false,
  [key]: 'value', // 'some-key' = 'value'
}

const { fname, lname, ...other } = data

other.newkey = 'new_key' // ไม่ควรเพิ่มค่าแบบนี้ เพราะประกาศเป็น const ควรสร้างเป็น object ใหม่

const newObj = {
  ...other,
  demo: 'demo',
}

newObj['#'] = null

const checkAge = (name) => {
  if (name === 'Chanwit') {
    return 20
  }
  return 18
}

const age = checkAge(fname)

console.log(fname, lname, age)
console.log(data['0a'])
console.log(data[key])

console.log(other)

console.log(newObj)

console.log(Object.keys(newObj))

// destructure

const user1 = {
  fname: 'Chanwit',
  lname: 'Settavongsin',
}

const user2 = {
  fname: 'Bob',
  lname: 'Test',
}

const { fname: u1fname, lname: u1lname } = user1 // เปลื่ยนชื่อ key
const { fname: u2fname = 'default', lname: u2lname, phone = '0000' } = user2 // set default value
console.log(u1fname, u1lname, u2fname, u2lname, phone)

const print = (fnamep, lnamep, phonep = 'no phone number') => {
  console.log(fnamep, lnamep, phonep)
}

const { fname1, lname1 } = user1
print(fname1, lname1)

const print1 = ({ fnamep, lnamep, phonep = 'no phone number' }) => {
  console.log(fnamep, lnamep, phonep)
}

print1({ fname1, lname1 })
print1(user2)

const name = 'Moshi'

const object = {
  name, // ถ้าชื่อ key ตรงกับตัวแปร เขียนย่อได้
}

