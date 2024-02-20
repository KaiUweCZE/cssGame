import React, { useEffect } from 'react'
import { useTypingEffect } from '../../Functions/useTypingEffect'
import { emojiData } from '../../data/EmojiData'

const EmojiMessage = (props) => {
  const text = props.text === "intro" ? props.data.secondScene.textIntro : ""
  const actionStart = props.data.secondScene?.actionStep.text
  let i = 0;
  const resultText = props?.text && props?.step === actionStart ? useTypingEffect(text.first[i], 15) : useTypingEffect("", 15)
  i += 1

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