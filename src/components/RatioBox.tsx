import React from 'react';

interface RatioBoxProps {
  src: string;
  alt: string;
  ratio: '1:1' | '2:3' | '3:2' | string;
  width?: string;
  className?: string;
}

const RatioBox: React.FC<RatioBoxProps> = ({ src, alt, ratio, width = '100%', className = '' }) => {
  const [numerator, denominator] = ratio.includes('/') 
    ? ratio.split('/').map(Number) 
    : ratio.split(':').map(Number);
  const aspectRatio = (denominator && numerator) ? `${numerator} / ${denominator}` : '1 / 1';

  return (
    <div
      className={`relative ${className}`}
      style={{ width, aspectRatio }}
    >
      <img
        src={src}
        alt={alt}
        className="absolute top-0 left-0 w-full h-full object-cover"
        loading="lazy"
      />
    </div>
  );
};

export default RatioBox;
