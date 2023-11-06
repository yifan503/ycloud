export default function ImageItem({ src, alt, text, buttonText }) {
    return (
      <div className="item">
        <img src={src} alt={alt} />
        <div className="overlay-item">
          <div className="image-text">{text}</div>
          <button className="image-button">{buttonText}</button>
        </div>
      </div>
    );
  }
  