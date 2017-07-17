import React from 'react'

import VideoListItem from './videoListItem'

// props attives as an argument in functional component
// NB: props will be available anywhere as this.props in
// class component
const VideoList = (props) => {
  const videoItems = props.videos.map(video => {
    return <VideoListItem
      onVideoSelect={props.onVideoSelect}
      key={video.etag}
      video={video} />
  })

  return (
    <ul className='col-md-4 list-group'>
      {videoItems}
    </ul>
  )
}

export default VideoList