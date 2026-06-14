import React, { useRef, useEffect, useState } from 'react';
import locationPhoto from '../assets/img/location.jpg';

const ScrollScaleImage = () => {
  const containerRef = useRef(null);
  const [scale, setScale] = useState(1);
  const [translateY, setTranslateY] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const rect = container.getBoundingClientRect();
      const containerTop = rect.top;
      const containerHeight = rect.height;
      const viewportHeight = window.innerHeight;

      // Вычисляем, насколько блок прокручен относительно viewport
      const scrollPercent = Math.min(
        1,
        Math.max(
          0,
          (viewportHeight - containerTop) / (viewportHeight + containerHeight)
        )
      );

      // Масштаб от 1 до 1.25172
      const newScale = 0.5 + scrollPercent * 0.6;
      // Смещение по Y (опционально)
      const newTranslateY = scrollPercent * 6.02;

      setScale(newScale);
      setTranslateY(newTranslateY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={containerRef} className='image-container'>
      <img
        src={locationPhoto}
        alt='кафе'
        className='address__img'
        style={{
          transform: `translateY(${translateY}px) scale(${scale})`,
        }}
      />
    </div>
  );
};

export default ScrollScaleImage;
