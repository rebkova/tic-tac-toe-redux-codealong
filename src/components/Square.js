import React from 'react'
import { useDispatch } from 'react-redux'
import { game } from "reducers/game"
import { Player } from 'components/Player'


export const Square = ({ value, index }) => {
  //initialises the dispatch -> allows us to trigger things withing our redux store
  //dispatch actions
  const dispatch = useDispatch()

  const handleClick = () => {
    //tells redux which square we clicked on 
    dispatch(game.actions.captureSquare({ index }))

  }

  return (
    <button
      className={value === null ? 'square clickable' : 'square'}
      type="button"
      onClick={handleClick}>
      <Player value={value} />
    </button>
  )
}
