import React, { useState } from 'react'
import ButtonTeal from '../../UI/Buttons/ButtonTeal/ButtonTeal'
import InputTeal from '../../UI/Inputs/InputTeal/InputTeal'
import classes from './PostForm.module.css'

const PostForm = ({ funcForAddPost_forPostForm }) => {
  let [params, setParams] = useState({ title: '', body: '' })

  const addNewPost = (e) => {
    e.preventDefault()
    let newPost = {
      ...params,
      id: Date.now(),
    }
    funcForAddPost_forPostForm(newPost)
    setParams({ title: '', body: '' })
  }
  return (
    <div className={classes.wrapper_postForm}>
      <InputTeal
        placeholder="Title"
        value={params.title}
        onChange={(e) => setParams({ ...params, title: e.target.value })}
      />
      <InputTeal
        placeholder="Body"
        value={params.body}
        onChange={(e) => setParams({ ...params, body: e.target.value })}
      />
      <ButtonTeal onClick={addNewPost}>Add</ButtonTeal>
    </div>
  )
}

export default PostForm
