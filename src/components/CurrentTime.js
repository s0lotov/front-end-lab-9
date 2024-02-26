import React from 'react';

const CurrentTime = ({ time }) => {
  const options = {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
  };

  const formattedTime = time.toLocaleTimeString('uk-UA', options);

  return <div>{formattedTime}</div>;
};

export default CurrentTime;
