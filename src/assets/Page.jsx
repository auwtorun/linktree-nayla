import React from 'react'
import LinkList from './Link'
import Profile from './profile-icon.jpg'

const Page = () => {
  const links = [
    { title: 'Latest Project', url: '' },
    { title: 'Instagram', url: 'https://www.instagram.com/naaylacahya/' },
    { title: 'Tiktok', url: 'https://www.tiktok.com/@nelalaww?_t=8mv5MEyZG7j&_r=1' },
    { title: 'LinkedIn', url: 'https://www.linkedin.com/in/nayla-cahya-61b060305/?originalSubdomain=id' },
    { title: 'Spotify', url: 'https://open.spotify.com/user/o8w4osuans8i7cp366batbuc7' },
  ];

  const name = 'Nayla Cahya Khairunnisa';
  const bio = 'Psychology Student';

  return (
    <div className="main">
        <img src={Profile} className='profile' alt="Profile"/>
        <div className='personal-data'>
            <h3>{name}</h3>
            <h4>{bio}</h4>
        </div>
        <LinkList links={links} />
    </div>
  );
};

export default Page;
