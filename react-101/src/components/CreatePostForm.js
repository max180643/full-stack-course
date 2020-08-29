import React, { useState } from 'react'

const CreatePostForm = ({ addPost }) => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [author, setAuthor] = useState('')
  // [state, setState]

  const handleTitleChange = (e) => {
    setTitle(e.target.value)
  }

  const handleContentChange = (e) => {
    setContent(e.target.value)
  }

  const handleAuthorChange = (e) => {
    setAuthor(e.target.value)
  }

  const handleCreatePost = async (e) => {
    e.preventDefault();
    const newPost = {
      title,
      content,
      author
    }
    console.log(newPost)
    // const res = await fetch('/create', newPost)
    addPost(newPost)
  }

  return (
    <form onSubmit={handleCreatePost}>
      <div>Title: <input value={title} onChange={handleTitleChange} /></div>
      <div>Content: <textarea value ={content} onChange={handleContentChange} /></div>
      <div>Author: <input value={author} onChange={handleAuthorChange} /></div>
      <button type="submit">Create Post</button>
      {/* <button onClick={handleCreatePost}>Create Post</button> */}
      <br/> Now title: { title }
      <br/> Now Content: { content }
      <br/> Now Author: { author }
    </form>
  )
}

export default CreatePostForm
