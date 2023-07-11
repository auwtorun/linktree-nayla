import React from 'react'

const LinkList = ({ links }) => {
  return (
    <ul>
      {links.map((link, index) => (
        <li key={index}>
          <a href={link.url} target="_blank" rel="noopener noreferrer">
            {link.title}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default LinkList;
