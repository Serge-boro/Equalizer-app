import { FaFastForward, FaFastBackward } from 'react-icons/fa'
import styled from 'styled-components'
const PlayButton = ({ playItem, isPaused }) => (
  <Wrapper aria-label='Play button' type='button' onClick={playItem}>
    {isPaused ? 'pause' : 'play'}
  </Wrapper>
)

const NextButton = ({ onNextButtonClick }) => (
  <Wrapper aria-label='Next button' type='button' onClick={onNextButtonClick}>
    <FaFastForward />
  </Wrapper>
)

const PreviousButton = ({ onPreviousButtonClick }) => (
  <Wrapper
    aria-label='Previous button'
    type='button'
    onClick={onPreviousButtonClick}
  >
    <FaFastBackward />
  </Wrapper>
)

const Wrapper = styled.button`
  width: 3.5rem;
  height: 3.5rem;
  place-items: center;
  border-radius: 50%;
  background: rgb(65, 61, 61);
  color: rgb(141, 133, 133);

  &:hover {
    background: rgb(80, 79, 79);
    color: rgb(56, 55, 55);
  }
`

export { PlayButton, NextButton, PreviousButton }
