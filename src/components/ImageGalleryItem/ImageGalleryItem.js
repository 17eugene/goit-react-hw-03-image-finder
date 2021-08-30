function ImageGalleryItem({ id, alt, webformatURL, largeImageURL, click }) {
  return (
    <li key={id} className="ImageGalleryItem">
      <img
        src={webformatURL}
        alt={alt}
        data-source={largeImageURL}
        onClick={click}
        className="ImageGalleryItem-image"
      />
    </li>
  );
}

export { ImageGalleryItem };
