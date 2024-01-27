import React from 'react'
import { useSelector } from 'react-redux';
import WHL from '../../Components/WHL/WHL';
function WatchLater() {

  const watchLaterList= useSelector(state=>state.watchLaterReducer)

  return (
    <WHL page={"Watch Later"} videoList={watchLaterList}/>
  )
}

export default WatchLater
