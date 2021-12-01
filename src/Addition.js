import React, { useState, useRef } from 'react'
import { PlayButton, NextButton, PreviousButton } from './Buttons/Buttons'
import { tracks } from './data'
import RenderTracks from './Rendering'
import CurrentPosition from './CurrentPosition'
import styled from 'styled-components'
const Addition = () => {
  const [index, setIndex] = useState(1)
  let [isPaused, setPaused] = useState(false)
  const intervalId = useRef()

  const checker = (item) => {
    if (item > tracks.length) return 1
    if (item < 1) return tracks.length
    return item
  }

  const onNextButtonClick = () => {
    setIndex((prev) => {
      const ItemPlus = prev + 1
      return checker(ItemPlus)
    })
  }

  const onPreviousButtonClick = () => {
    setIndex((prev) => {
      const ItemPlus = prev - 1
      return checker(ItemPlus)
    })
  }

  // useEffect(() => {
  //   intervalId.current = setInterval(() => {
  //     setIndex((prev) => {
  //       let item = prev + 1
  //       return checker(item)
  //     })
  //   }, 1000)
  //   return () => clearInterval(intervalId.current)
  // }, [])

  const playItem = () => {
    setPaused(!isPaused)
    if (!isPaused) {
      intervalId.current = setInterval(() => {
        setIndex((prev) => {
          let item = prev + 1
          return checker(item)
        })
      }, 1000)
      return () => clearInterval(intervalId.current)
    } else {
      clearInterval(intervalId.current)
    }
  }

  return (
    <Wrapper>
      <div className='tracks-list'>
        <h2 className='tracks-list__title'>Tracks</h2>
        <div className='tracks-list__center-hero'>
          <div className='tracks-list__hero'>
            <CurrentPosition tracks={tracks} index={index} />
          </div>
        </div>
        <div className='tracks-list__player-controls'>
          <div className='tracks-list__render'>
            <RenderTracks tracks={tracks} index={index} />
          </div>
          <div className='tracks-list__buttons'>
            <PreviousButton onPreviousButtonClick={onPreviousButtonClick} />
            <PlayButton playItem={playItem} isPaused={isPaused} />
            <NextButton onNextButtonClick={onNextButtonClick} />
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.main`
  .tracks-list {
    display: relative;
    background-color: #303036;
    box-shadow: 0px 2px 10px rgba(255, 255, 255, 0.2);
    padding: 20px;
    width: 350px;
    max-width: 100%;
    height: 80vh;
    border-radius: 50px;

    &__center-hero {
      position: relative;
      top: 0%;
      left: 10%;
      width: 250px;
      height: 250px;
      background-image: linear-gradient(to top left, rgb(190, 41, 41) 0%, rgb(230, 218, 55), rgb(125, 230, 55), rgb(19, 146, 68), rgb(37, 149, 194) 50%, rgb(37, 53, 194), rgb(136, 37, 194), rgb(158, 14, 110), rgb(158, 14, 21) 100%);
      background-size: 200% 100%;
      border-radius: 50%;
      animation: bgPos 10s linear infinite;
    }

    &__hero{
      position: relative;
      top: 45%;
      left: 0%;
      text-align: center;      
    }

    &__player-controls {
      margin-top: 10%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    &__buttons {
      margin-top: 6rem;
      display: flex;
      width: 100%;
      justify-content: space-between;
    }
  }

  @keyframes bgPos {
  0% {
  background-position: 0% 0;
  }
  100% {
    background-position: -200% 0;
  }
  }

  @media screen and (max-width: 415px) {
      .tracks-list__player-controls{
        margin-top: 5%;
      }
      .tracks-list__buttons{
        margin-top: 2rem;
      } 
    }
  }
`

export default Addition
