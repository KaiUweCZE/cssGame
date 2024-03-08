import React, { useEffect } from 'react'
import { useTypingEffect } from '../../Functions/useTypingEffect'
import { emojiData } from '../../data/EmojiData'

const EmojiMessage = ({text, specialClass=""}) => {
  //const actionStart = props?.data?.secondScene?.actionStep.text
  const resultText = text ? useTypingEffect(text, 15) : useTypingEffect("", 15)

  return (
    <>
      { text ?
        <div className={`emoji__message ${specialClass}`}>
          <p>
            {resultText}
          </p>
      </div>
      :
      ""
      }
    </>
  )
}

export default EmojiMessage