import Link from "next/link";
import styles from './imageItem.module.css';

export default function ImageItem({ src, alt, text, buttonText, page = '/' }) {

  return (
    <div className={styles.item}>
      <img src={src} alt={alt} className={styles.img} />
      <div className={styles.overlay_item}>
        <div className={styles.image_text}>{text}</div>
        <Link href={page}>
          <button className={styles.image_button}>{buttonText}</button>
        </Link>
      </div>
    </div>
  );
}
