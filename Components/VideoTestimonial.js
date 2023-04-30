import { VideoPlayer } from "./VideoPlayer";
import styles from "/styles/pages/testimonials.module.css";

export const VideoTestimonial = ({ videoUrl, name, phrase }) => {
  return (
    <div className={styles.video}>
      <VideoPlayer url={videoUrl} />
      <div className={styles.video_description}>
        <h4>{name}</h4>
        <p>"{phrase}"</p>
      </div>
    </div>
  );
};
