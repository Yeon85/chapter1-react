import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProfileCard from './components/ProfileCard';
import profileImg from './assets/images/zi-a.png';

function App() {
  const name = "ZI-A";

  return (
    <div>
     <ProfileCard
        image={profileImg}
        name="정지아"
        description="신소재를 사랑하는 개발자"
      />
  </div>
  );
}

export default App;
