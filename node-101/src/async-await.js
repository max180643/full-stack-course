// mock function
const fetch = data => new Promise((resolve) => {
  setTimeout(() => {
    resolve(data)
  }, 2000)
})

const main = async () => {
//   const res1 = await fetch({ key1: 'val1' })
//   const res2 = await fetch({ key2: 'val2', ...res1 })
//   const res3 = await fetch({ key3: 'val3', ...res2 })
//   console.log(res3)

  const req1 = fetch({ key1: 'val1' })
  const req2 = fetch({ key2: 'val2' })
  const req3 = fetch({ key3: 'val3' })
  const [res1, res2, res3] = await Promise.all([req1, req2, req3])
  console.log(res1, res2, res3)
}

main()
