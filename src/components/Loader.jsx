import React from 'react';
import { Html, useProgress } from '@react-three/drei';

const Loader = () => {
  const { progress } = useProgress();

  const loadingBarStyle = {
    width: `${progress}%`, // Sesuaikan lebar loading bar sesuai dengan kemajuan
    height: '10px',
    backgroundColor: '#0077FF', // Warna latar belakang loading bar
    transition: 'width 0.3s ease', // Animasi perubahan lebar
  };

  return (
    <Html>
      <div className="loader-container">
        <div className="loading-bar" style={loadingBarStyle}></div>
        <p style={{ fontSize: 14, color: '#f1f1f1', fontWeight: 800, marginTop: 10 }}>
          {progress.toFixed(2)}%
        </p>
      </div>
    </Html>
  );
};

export default Loader;
