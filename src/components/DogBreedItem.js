import React, { useState, useEffect } from 'react';
import fetchDataFromApi from './helpers';

const DogImageComponent = () => {
  const [dogImage, setDogImage] = useState('');

  useEffect(() => {
    fetchDataFromApi('https://dog.ceo/api/breeds/image/random')
      .then(data => setDogImage(data))
      .catch(error => console.error('Error:', error));
  }, []);

  return <img src={dogImage} alt="Dog" />;
};

export default DogImageComponent;
