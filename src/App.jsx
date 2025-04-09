import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProfileCard from './components/ProfileCard';
import profileImg from './assets/images/zi-a.png';

function App() {
  const name = "ZI-A";

  return (
    <div className="center">
     <ProfileCard
        image={profileImg}
        name="정지아"
        description="신소재를 사랑하는 개발자"
      />
  
      {/* ✅ 링크 버튼 추가 */}
      <a
        href="https://chapter3-react1.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: 'inline-block',
          marginTop: '20px',
          padding: '10px 20px',
          backgroundColor: '#4CAF50',
          color: '#fff',
          textDecoration: 'none',
          borderRadius: '6px'
        }}
      >
        📎 CHAPTER 3 - 기초 열기
      </a>
      <br></br>
        {/* ✅ 링크 버튼 추가 */}
      <a
        href="https://chapter3-react2.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: 'inline-block',
          marginTop: '20px',
          padding: '10px 20px',
          backgroundColor: '#4CAF50',
          color: '#fff',
          textDecoration: 'none',
          borderRadius: '6px'
        }}
      >
        📎 CHAPTER 3 게시판 CRUD
      </a>
      <br></br>
      <a
        href="https://chapter3-react3.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: 'inline-block',
          marginTop: '20px',
          padding: '10px 20px',
          backgroundColor: '#4CAF50',
          color: '#fff',
          textDecoration: 'none',
          borderRadius: '6px'
        }}
      >
        📎 CHAPTER 3 게시판 CRUD MYSQL
      </a>
    </div>
  );
}

export default App;
