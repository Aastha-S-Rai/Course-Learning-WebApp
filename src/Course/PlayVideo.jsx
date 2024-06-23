import React from "react";
import { useParams } from "react-router-dom";
import YoutubeEmbed from "../components/VideoPlay.jsx";

const PlayVideo = ()=>{
    const { linkk } = useParams();
    console.log(linkk)
    return (
      <YoutubeEmbed embedId={linkk} />
        
    )
}

export default PlayVideo