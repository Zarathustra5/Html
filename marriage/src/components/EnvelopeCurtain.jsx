import React, { useState, useEffect, useRef } from 'react';
import './EnvelopeCurtain.sass';

const EnvelopeCurtain = ({ children, audioSrc }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCurtainOpen, setIsCurtainOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const openEnvelope = () => {
    if (!isOpen) {
      setIsOpen(true);
      if (audioSrc && audioRef.current) {
        audioRef.current
          .play()
          .then(() => {
            setIsPlaying(true);
          })
          .catch((error) => {
            console.error('Audio playback failed:', error);
          });
      }
      setTimeout(() => {
        setIsCurtainOpen(true);
      }, 1000);
    }
  };

  const togglePause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current
          .play()
          .then(() => {
            setIsPlaying(true);
          })
          .catch((error) => {
            console.error('Audio playback failed:', error);
          });
      }
      setIsPlaying(!isPlaying);
    }
  };

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     openEnvelope();
  //   }, 5000);
  //   return () => clearTimeout(timer);
  // }, []);

  return (
    <>
      {/* Audio Element */}
      {audioSrc && <audio ref={audioRef} src={audioSrc} preload='auto' />}
      {/* Pause Button */}
      {isPlaying && (
        <button className='pause-button' onClick={togglePause}>
          ⏸
        </button>
      )}
      {/* Curtain Overlay */}
      <div className={`curtain ${isCurtainOpen ? 'curtain-open' : ''}`}>
        <div className='envlope-wrapper'>
          <div
            id='envelope'
            className={isOpen ? 'open' : 'close'}
            onClick={openEnvelope}
          >
            <div className='front flap'></div>
            <div className='front pocket'></div>
            <div className='letter'>
              <div className='words line1'></div>
              <div className='words line2'></div>
              <div className='words line3'></div>
              <div className='words line4'></div>
            </div>
            <div className='hearts'>
              <div className='heart a1'></div>
              <div className='heart a2'></div>
              <div className='heart a3'></div>
            </div>
          </div>
        </div>
      </div>
      {/* Main Content */}
      <div className={`main-content ${isCurtainOpen ? 'visible' : 'hidden'}`}>
        {children}
      </div>
    </>
  );
};

export default EnvelopeCurtain;
