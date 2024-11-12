import React, { useEffect, useState, useCallback, memo } from "react";
import "./Image.css";

// Utility function to fetch images from Reddit
const fetchImages = async () => {
  const url = "https://www.reddit.com/r/aww/top/.json?t=all";
  const res = await fetch(url);
  const result = await res.json();
  const data = result.data.children;
  const imageListOfPng = data.filter((item) =>
    item.data.url_overridden_by_dest.includes("jpg")
  );
  const finalImageUrl = imageListOfPng.map(
    (img) => img.data.url_overridden_by_dest
  );
  return finalImageUrl;
};

const ImageCarousel = () => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [images, setImages] = useState([]);

  // Fetch images on mount
  useEffect(() => {
    const fetchAndSetImages = async () => {
      try {
        const fetchedImages = await fetchImages();
        setImages(fetchedImages);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };
    fetchAndSetImages();
  }, []);

  // Auto-advance the carousel every 3 seconds
  useEffect(() => {
    let id;
    const autoCarousel = () => {
      setCurrentIdx((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };
    id = setInterval(autoCarousel, 3000);
    return () => clearInterval(id);
  }, [currentIdx, images.length]);

  // Navigate to previous/next image
  const prevImage = useCallback(() => {
    setCurrentIdx((prevIdx) =>
      prevIdx === 0 ? images.length - 1 : prevIdx - 1
    );
  }, [images.length]);

  const nextImage = useCallback(() => {
    setCurrentIdx((prevIdx) =>
      prevIdx === images.length - 1 ? 0 : prevIdx + 1
    );
  }, [images.length]);

  return (
    <div className="image-container">
      <div className="image">
        {images.length > 0 && (
          <img
            src={images[currentIdx]}
            alt={`Image ${currentIdx + 1} of ${images.length}`}
            loading="lazy"
          />
        )}
      </div>
      <div className="action-button">
        <button onClick={prevImage} id="left" aria-label="Previous image">
          &#10094;
        </button>
        <button onClick={nextImage} id="right" aria-label="Next image">
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default memo(ImageCarousel);