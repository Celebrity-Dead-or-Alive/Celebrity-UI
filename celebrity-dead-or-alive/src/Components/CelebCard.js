import React from 'react'

const CelebCard = (props) => {
  return (
    <div className='celeb-card'>
      <img src={props.data.image_url} alt={props.data.name} />
      <h3>{props.data.name}</h3>
      <h4>{props.data.info}</h4>
      <h4>Birth Year: {props.data.birth}</h4>
    </div>
  )
}

export default CelebCard