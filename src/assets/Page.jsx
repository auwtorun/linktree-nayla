import React from 'react'
import LinkList from './Link'
import Profile from './profile-icon.jpg'

const Page = () => {
  const links = [
    { title: 'CV / Resume', url: 'https://drive.google.com/drive/u/8/folders/1SC3wqaaFJIhrsFsjthiDirOH-v8e5kcw' },
    { title: 'Instagram', url: 'https://instagram.com/violandni' },
    { title: 'Tiktok', url: 'https://tiktok.com/@ollaateee' },
    { title: 'LinkedIn', url: 'https://linkedin.com/in/viola-andini-ferdian-putri-b26412282/?trk=public-profile-join-page' },
    { title: 'Spotify', url: 'https://open.spotify.com/user/gudhnsf8kdrfiemdzu7rri65l' },
  ];

  const name = 'Viola Andini';
  const bio = 'pipaplow';

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
