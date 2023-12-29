import React, { useImperativeHandle, forwardRef } from 'react';
import './ImageDisplay.css'; // Make sure this path is correct

const ImageDisplay = forwardRef(({ images }, ref) => {
  useImperativeHandle(ref, () => ({
    async getCanvas() {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');

      // Assuming all images are the same size. Adjust as needed.
      canvas.width = 500; // Set to your image's width
      canvas.height = 500; // Set to your image's height

      for (const image of images) {
        if (image) {
          const img = await loadImage(image);
          ctx.drawImage(img, 0, 0, img.width / 2, img.height / 2); // Draw at half size
        }
      }

      return canvas;
    }
  }));

  return (
    <div className="image-display">
      {images.map((image, index) => (
        image ? <img key={index} src={image} alt="Custom Element" className="custom-image" /> : null
      ))}
    </div>
  );
});

function loadImage(src) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
}


export default ImageDisplay;
