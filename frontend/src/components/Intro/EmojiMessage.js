import React, { useEffect } from 'react'
import { useTypingEffect } from '../../Functions/useTypingEffect'
import { emojiData } from '../../data/EmojiData'

const EmojiMessage = (props) => {
  const text = props.text === "intro" ? props.data.secondScene.textIntro : ""
  const actionStart = props.data.secondScene?.actionStep.text
  console.log(text.first[0], props.step, props.text);
  const resultText = props?.text && props?.step === actionStart ? useTypingEffect(text.first[0], 15) : useTypingEffect("", 15)

  return (
    <>
      { props.step === actionStart ?
      <div key={props.step} className='emoji__message'>
          <p>
            {resultText}
          </p>
      </div>
      :
      null
      }
  </>
  )
}

export default EmojiMessage