import React from 'react'
import { useSelector } from 'react-redux';
import ShowVideo from '../ShowVideo/ShowVideo';

function ShowVideoList({videoId}) {
  const vids=useSelector(s=>s.videoReducer)
  // console.log("compo, showvid, showvidlist",vids.data)
    
  return (
    <div className='Container_ShowVideoGrid'>
    {
       vids?.data?.filter(q=>q._id===videoId).map(vi=>
        {
            return (
                <div key={vi._id} className="video_box_app">
                    <ShowVideo vid={vi}/>                 
                </div>
            )
        })   
    }
</div>
  )
}

export default ShowVideoList
