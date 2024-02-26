import React from 'react';

const CurrentDate = ({ date }) => {
  const options = {
    weekday: 'short',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  };

  const formattedDate = date.toLocaleDateString('uk-UA', options);

  return <div>{formattedDate}</div>;
};

export default CurrentDate;
