import React from 'react';
import TopBanner from './components/TopBanner';
import BottomBanner from './components/BottomBanner';

const App: React.FC = () => {
  return (
    <div className='main'>
      <TopBanner/>
      <BottomBanner/>
    </div>
  );
};

export default App;
