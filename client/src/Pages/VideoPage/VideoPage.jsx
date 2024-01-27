import React, { useEffect } from 'react'
import {Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import moment from 'moment'

import "./VideoPage.css"
import LikeWatchLaterSaveBtns from "./LikeWatchLaterSaveBtns"
import Comments from '../../Components/Comments/Comments';
import { addToHistory } from "../../actions/History";
import { viewVideo } from "../../actions/video";
const VideoPage = () => {
  
  const { vid } = useParams();
  const dispatch = useDispatch();
  const CurrentUser = useSelector((state) => state?.currentUserReducer);

  const vids = useSelector((state) => state.videoReducer);
  const vv = vids?.data?.filter((q) => q._id === vid)[0];

  // console.log("pages videopage",vv)
 const handleHistory = () => {
  dispatch(
    addToHistory({
      videoId: vid,
      Viewer: CurrentUser?.result?._id,
    })
  );
};
const handleViews=()=>{
  dispatch( viewVideo({
    id:vid
  }))
}
  useEffect(() => {
        if (CurrentUser) {
          handleHistory();
        }
        handleViews();
      }, []);

  return (
    <>
       <div className="container_videoPage">
         <div className="container2_videoPage">
           <div className="video_display_screen_videoPage">
             <video src={`http://localhost:5500/${vv.filePath}`} className={"video_ShowVideo_videoPage"}
             controls 
             autoplay/>
             <div className="video_details_videoPage">
                <div className="video_btns_title_VideoPage_cont">
                 <p className="video_title_VideoPage"> {vv?.videoTitle}</p>
                 <div className="views_date_btns_VideoPage">
                   <div className="views_videoPage">
                     {vv.Views} views <div className="dot"></div>{" "}
                     {moment(vv?.createdAt).fromNow()}
                   </div>
                    <LikeWatchLaterSaveBtns vv={vv} vid={vid}/>
                 </div>
               </div>
             </div>

             <Link to={`/chanel/${vv?.videoChanel}`} className="chanel_details_videoPage">
                 <b className="chanel_logo_videoPage">
                 <p>{vv?.Uploder.charAt(0).toUpperCase()}</p>
                 </b>
                 <p className="chanel_name_videoPage">{vv?.Uploder} </p>
             </Link>
             <div className="comments_VideoPage">
              <h2>
                <u>Comments</u>
              </h2>
              <Comments videoId={vv._id}/>
               </div>
            </div>
        </div>
        <div className="moreVideoBar">More video</div>
    </div>
    </>
  )
}

export default VideoPage

