import React from 'react';
import axios from 'axios';
import ImageUpload from '../../components/ImageUpload';

export default function UploadTest() {
  const handleSubmit = (formData) => {
    axios.post('http://localhost:3333/teste', formData);
  };

  return <ImageUpload fileName="teste" onSubmit={handleSubmit} />;
}
