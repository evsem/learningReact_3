import React from 'react'
import PostItem from '../PostItem/PostItem'
import classes from './PostList.module.css'

const PostList = ({ props_forPostList, removeFunc }) => {
  return (
    <div className={classes.wrapper_postList}>
      {props_forPostList.map((post, index) => (
        <PostItem
          props={post}
          key={props_forPostList.id}
          number={index + 1}
          removeFunc={removeFunc}
        />
      ))}
    </div>
  )
}

export default PostList
