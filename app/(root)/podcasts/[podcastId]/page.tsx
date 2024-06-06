import React from 'react'

const podcastDetails = ({params}:{params:{podcastId: string}}) => {
  return (
    <div>
      {params.podcastId }
    </div>
  )
}

export default podcastDetails
