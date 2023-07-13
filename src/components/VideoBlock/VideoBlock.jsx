import React from "react";
import "./VideoBlock.scss";
import VideoPlayer from "../VideoPlayer/VideoPlayer";
const VideoBlock = () => {
	return (
		<section className='video-block'>
			<h2>
				Alem <span>Comedy</span> Fest
			</h2>
			<div className='video-block__content'>
				<p>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit.
					Tempore odio qui doloribus non aut consequuntur ipsam,
					veniam dolores fugit, debitis commodi molestias delectus
					accusantium dolor, laudantium nulla est. Ducimus,
					laudantium! Repellendus laborum saepe modi enim, nemo
					adipisci ex repudiandae quos impedit deserunt voluptatem,
				</p>
				<VideoPlayer />
			</div>
		</section>
	);
};

export default VideoBlock;
