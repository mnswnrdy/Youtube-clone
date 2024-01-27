import React from 'react'
import { useSelector } from 'react-redux';

import WHL from "../../Components/WHL/WHL";

function WatchHistory() {

  
  const historyList= useSelector(state=>state.HistoryReducer)

  
  return (
    
    <WHL page={"History"} videoList={historyList}/>
  )
}

export default WatchHistory
