import React, { useEffect, useState } from 'react'
import "./YoutubeVideos.css"
function YoutubeVideos() {
const[youTubeVideos,setvideos]=useState([]);

useEffect(()=>{
fetch(
    "https://www.googleapis.com/youtube/v3/search?key= AIzaSyCXyaK9sHBTBuZCVcuN10tNDzPiFZ1ybAk&channelId=UCE_M8A5yxnLfW0KghEeajjw&part=snippet,id&order=date&maxResults=9"
)
.then((response) => response.json())
.then((data) => {
  setvideos(data.items)
 
});
},[])


  return (
    <div className="Wrapper">
    <div className="container">
      <div className="row h-100 align-items-center justify-content-center text-center">
        <div className="col-12">
          <div className="title-wraper bold video-title-wrapper">
            Latest Videos
          </div>
        </div>
        {youTubeVideos.map((singleVideo, i) => {
          let vidId = singleVideo.id.videoId;
          let vidLink = `https://www.youtube.com/watch?v=${vidId}`;
          let videoWrapper = (
            <div key={i} className="col-sm-12 col-md-4">
              <div className="singleVideoWrapper">
                <div className="videoThumbnail">
                  <a href={vidLink} target="_blank">
                    <img src={singleVideo.snippet.thumbnails.high.url} />
                  </a>
                </div>
                <div className="videoWrapper">
                  <div className="Title">
                    <a href={vidLink} target="_blank">
                      {singleVideo.snippet.title}
                    </a>
                  </div>
                  <div className="Description">
                    {singleVideo.snippet.description}
                  </div>
                </div>
              </div>
            </div>
          );
          return videoWrapper;
        })}
      </div>
    </div>
  </div>
);
}
  
export default YoutubeVideos













// const youTubeVideos = data.items;
  // setvideos({ youTubeVideos });
  //  AIzaSyCXyaK9sHBTBuZCVcuN10tNDzPiFZ1ybAk