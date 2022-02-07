import React, { useState } from 'react'
import './App.css'
import PostForm from './Components/PostForm/PostForm'
import PostList from './Components/PostList/PostList'

const App = () => {
  let [posts, setPosts] = useState([
    { id: 1, title: 'JS', body: 'Programming language' },
    { id: 2, title: 'Swift', body: 'Programming language' },
    { id: 3, title: 'Python', body: 'Programming language' },
    { id: 4, title: 'Java', body: 'Programming language' },
    { id: 5, title: 'Cotlin', body: 'Programming language' },
  ])

  const addNewPost = (newPost) => {
    setPosts([...posts, newPost])
  }
  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id))
  }
  return (
    <div className="App">
      <PostForm funcForAddPost_forPostForm={addNewPost} />
      <hr style={{ margin: '10px 0px' }} />
      <PostList props_forPostList={posts} removeFunc={removePost} />
    </div>
  )
}

export default App
