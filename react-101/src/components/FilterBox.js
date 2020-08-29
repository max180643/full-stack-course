import React, { useState, Fragment, useMemo, useCallback, useEffect } from 'react'
import PostList from './PostList'

const FilterBox = ({ posts }) => {
  const [text, setText] = useState('')

  // const [data, setData] = useState([])
  // setData([1, 2 ,3])
  // setData([...data, newRecord]) // wrong data
  // setData((prev) => {
  //   return [...prev, newRecord]
  // })

//   const handleTextChange = (e) => {
//     setText(e.target.value)
//   }

    // useCallback ไม่สร้าง function ใหม่เวลา rerender ใน [] คือ ถ้าตัวพวกนั้นมีการเปลื่ยนแปลงจะสร้าง function ใหม่

    const handleTextChange = useCallback(
        (e) => {
            setText(e.target.value)
        }, [setText]
    )

//   const filteredPosts = posts.filter((post) => {
//     const patt = new RegExp(text, 'ig')
//     return text === '' || patt.test(post.title) || patt.test(post.content)
//   })

    // useMemo ไม่สร้างตัวแปรใหม่เวลา rerender ใน [] (posts หรือ text เปลื่ยน) คือ ถ้าตัวพวกนั้นมีการเปลื่ยนแปลงจะสร้างตัวแปรใหม่

  const filteredPosts = useMemo(
      () => {
          return (
            posts.filter((post) => {
                const patt = new RegExp(text, 'ig')
                return text === '' || patt.test(post.title) || patt.test(post.content)
            })
          )
      }, [posts, text]
  )

  // เมื่อตัวแปรนั้นมีการเปลื่ยนแปลงจะทำงาน
  // สามารถใช้เป็น DidMount, WillUnMount
  useEffect(() => {
      console.log('text change')
  }, [text])

  return (
    <Fragment>
      Filter: <input value={text} onChange={handleTextChange} />
      {filteredPosts.length > 0 ? <PostList posts={filteredPosts} /> : <div>No post found</div>}
    </Fragment>
  )
}

export default FilterBox