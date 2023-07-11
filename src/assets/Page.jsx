import React from 'react'
import LinkList from './Link'
import Profile from './profile-icon.jpg'

const Page = () => {
  const links = [
    { title: 'Github', url: 'https://github.com/auwtorun' },
    { title: 'Instagram', url: 'https://instagram.com/muhamaddptr' },
    { title: 'Youtube', url: 'https://youtube.com/@muhamadptr/streams' },
    { title: 'LinkedIn', url: 'https://linkedin.com/' },
    { title: 'Spotify', url: 'https://open.spotify.com/user/8acs3cwxqfs1j6l7gtpaxrd98' },
  ];

  const name = 'Muhamad Putra';
  const bio = 'Rookie Website Developer';

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
