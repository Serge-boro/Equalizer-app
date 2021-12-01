import React from 'react'
import styled from 'styled-components'
const RenderTracks = ({ tracks, index }) =>
  tracks.map((track) => (
    <Wrapper
      className={`tracks-list__item ${
        index === track.id ? 'tracks-list__item--selected' : ''
      }`}
      key={track.id}
    >
      <span className='tracks-list__name'>{track.name}</span>
      <span className='tracks-list__artist'>
        &nbsp;—&nbsp;
        {track.artist}
      </span>
    </Wrapper>
  ))

const Wrapper = styled.div`
  margin-top: 1rem;
  @media screen and (max-width: 415px) {
    margin-top: 0.5rem;
  }
`

export default RenderTracks
