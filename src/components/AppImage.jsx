import React from 'react';
import ImageLoader from './ImageLoader';

function Image({
  src,
  alt = "Image Name",
  className = "",
  withLoader = true,
  placeholderColor = 'bg-gray-200',
  ...props
}) {
  // Use ImageLoader for better loading experience
  if (withLoader) {
    return (
      <ImageLoader
        src={src}
        alt={alt}
        className={className}
        placeholderColor={placeholderColor}
        {...props}
      />
    );
  }

  // Fallback to simple img tag if loader is disabled
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={(e) => {
        e.target.src = "/assets/images/no_image.png"
      }}
      {...props}
    />
  );
}

export default Image;
