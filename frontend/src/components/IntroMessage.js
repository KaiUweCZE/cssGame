import React from 'react'

const IntroMessage = (props) => {
  return (
    <div className='emoji__message'>
        <p>{props.text}</p>
    </div>
  )
}

export default IntroMessage