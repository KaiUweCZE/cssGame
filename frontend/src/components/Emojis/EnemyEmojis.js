import React, { useContext } from 'react'
import { enemyImg } from '../../data/ImagesData'
import EmojiMessage from './EmojiMessage'
import { emojiData } from '../../data/EmojiData'
import { ResultContext } from '../../contexts/FormContext'

const EnemyEmoji = (props) => {
  const data = emojiData.find(e => e.name === 'enemy').level
  const currentLevelAnimations = data.find(e => e.id === props.level).animations
  const {checked} = useContext(ResultContext)
  console.log(currentLevelAnimations);
  const animationFalse = currentLevelAnimations[0]
  const animationTrue = currentLevelAnimations[1]
  
  return (
    <>
      <img src={enemyImg} alt="" className={checked.check ? (checked.result ? `emoji-character enemy ${animationTrue}` : `emoji-character enemy ${animationFalse}`) : `emoji-character enemy`}/>
    </>
  )
}

export default EnemyEmoji