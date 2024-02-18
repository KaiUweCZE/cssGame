import React from 'react'
import { guideImg } from '../data/images'
import EmojiMessage from './Intro/EmojiMessage'
import { emojiData } from '../data/EmojiData'

const GuideEmoji = (props) => {
  const data = emojiData.find(e => e.name === 'guide')
  const stepsClass = data?.secondScene.actionStep.class
  console.log(props.step);
  return (
    <>
    <div className="box-emoji">
      <img src={guideImg} alt="" className={props.step >= stepsClass ? `emoji-character guide active` : `emoji-character guide`}/>
      <EmojiMessage data={data} step={props.step} text='intro'/>
    </div>
    </>
  )
}

export default GuideEmoji