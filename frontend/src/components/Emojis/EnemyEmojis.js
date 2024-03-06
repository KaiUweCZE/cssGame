import React from 'react'
import { enemyImg } from '../../data/ImagesData'
import EmojiMessage from './EmojiMessage'
import { emojiData } from '../../data/EmojiData'

const EnemyEmoji = (props) => {
  const data = emojiData.find(e => e.name === 'guide')
  const stepsClass = data?.secondScene.actionStep.class
  console.log(props.step);
  return (
    <>
      <img src={enemyImg} alt="" className="emoji-character enemy"/>
      <EmojiMessage data={data} step={props.step} text='intro' />
    </>
  )
}

export default EnemyEmoji