import React from 'react'
import Button from './Button'

function PlayButton({movieName}) {

    const handlePlayClick = () =>{
        alert(`Playing ${movieName}`)
    } 
  return (
    <Button onClick={handlePlayClick}>
        Play {movieName}
    </Button>
  )
}

export default PlayButton