import React from 'react'

const CurrentPosition = ({ tracks, index }) => {
  return (
    <div className='player-controls__track'>
      <span className='track__name'>{tracks[index - 1].name}</span>
      &nbsp;—&nbsp;
      <span className='track__artist'>{tracks[index - 1].artist}</span>
    </div>
  )
}

export default CurrentPosition
