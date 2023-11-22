import "./VideoBlock.scss";
import VideoPlayer from "../VideoPlayer/VideoPlayer";
const VideoBlock = () => {
	return (
		<section id="about" className="video-block">
			<h2>
				Alem <span>Comedy</span> Fest
			</h2>
			<div className="video-block__content">
				<p>
					<span className="hero__text--green">Alem Сomedy Fest</span> — это
					ежегодный фестиваль комедии, объединяющий комиков со всех регионов
					Казахстана. 
					<br />
					<br />В этом году мы объединяем десятки локальных комиков с
					единственной целью —{" "}
					<span className="hero__text--green">
						продлить тепло с помощью смеха и юмора.
					</span>
					<br /> <br />
					Вас ожидают только теплые, домашние и уютные мероприятия с различными
					форматами:{" "}
					<span className="hero__text--green">
						денежные микрофоны, съемки популярных шоу, открытые микрофоны и
						прожарки звезд. 
					</span>
					<br />
					<br />
					Приобретайте билеты и давайте смеяться вместе!
				</p>
				<VideoPlayer />
			</div>
		</section>
	);
};

export default VideoBlock;
