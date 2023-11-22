import "./VideoPlayer.scss";
const VideoPlayer = () => {
	return (
		<div className="iframe-wrapper">
			<iframe
				width="600"
				height="600"
				src="https://www.youtube.com/embed/KCYKd02_Sys?si=uC1IWTwADXFPdJw4"
				title="YouTube video player"
				frameBorder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				allowFullScreen
			></iframe>
		</div>
	);
};

export default VideoPlayer;
