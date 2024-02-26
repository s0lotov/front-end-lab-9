import React from 'react';

const MenuItem = ({ text, url }) => {
  const linkContent = url ? (
    <a href={url} target="_blank" rel="noopener noreferrer">
      {text}
    </a>
  ) : (
    <span>{text}</span>
  );

  return <li>{linkContent}</li>;
};

export default MenuItem;