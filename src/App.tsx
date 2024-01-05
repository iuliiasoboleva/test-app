import React, { useState, useEffect } from 'react';
import TopBanner from './components/TopBanner';
import BottomBanner from './components/BottomBanner';
import useScrollHandler from './hooks/useScrollHandler';

const STORAGE_KEY_BOTTOM = 'bottomBannerClosed';

const App: React.FC = () => {
  const [showBottomBanner, setShowBottomBanner] = useState(false);

  const isBottomBannerClosed = localStorage.getItem(STORAGE_KEY_BOTTOM);

  useEffect(() => {
    if (isBottomBannerClosed) {
      setShowBottomBanner(false);
    }
  }, [isBottomBannerClosed]);

  useScrollHandler((scrollY) => {
    const topBannerHeight = 54;
    const isTopBannerVisible = scrollY <= topBannerHeight;
    if (!isBottomBannerClosed) {
      setShowBottomBanner(!isTopBannerVisible);
    }
  });

  const handleBottomBannerClose = () => {
    localStorage.setItem(STORAGE_KEY_BOTTOM, 'true');
    setShowBottomBanner(false);
  };

  return (
    <div className='main'>
      <TopBanner />
      <div className={`bottom-banner-container ${showBottomBanner ? 'show' : ''}`}>
        {showBottomBanner && <BottomBanner onClose={handleBottomBannerClose} />}
      </div>
    </div>
  );
};

export default App;
