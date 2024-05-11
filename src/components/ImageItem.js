import Link from "next/link";

export default function ImageItem({ src, alt, text, buttonText, page='/' }) {
  
  return (
      <div className="item">
        <img src={src} alt={alt} />
        <div className="overlay-item">
          <div className="image-text">{text}</div>
          <Link href={page}>
            <button className="image-button">{buttonText}</button>
          </Link>
        </div>
      </div>
    );
  }
  