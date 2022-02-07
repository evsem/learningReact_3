import React from 'react'
import ButtonGrey from '../../UI/Buttons/ButtonGrey/ButtonGrey'
import classes from './PostItem.module.css'

const PostItem = ({ props, number, removeFunc }) => {
  return (
    <div className={classes.wrapper_postItem}>
      <div className={classes.infoContainer_postItem}>
        <h3 className={classes.title_postItem}>
          {number}. {props.title}
        </h3>
        <p className={classes.body_postItem}>{props.body}</p>
      </div>

      <div className={classes.buttonsContainer_postItem}>
        <ButtonGrey>Learn More</ButtonGrey>
        <ButtonGrey onClick={() => removeFunc(props)}>Delete</ButtonGrey>
      </div>
    </div>
  )
}

export default PostItem
