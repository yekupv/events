import React from "react";
import "./VideoPlayer.scss";
const VideoPlayer = () => {
	return (
		<div className='iframe-wrapper'>
			<iframe
				width='600'
				height='600'
				src='https://www.youtube.com/embed/xNRJwmlRBNU'
				title='YouTube video player'
				allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
				allowFullScreen
			></iframe>
		</div>
	);
};

export default VideoPlayer;
