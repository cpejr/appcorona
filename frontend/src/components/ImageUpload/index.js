import React, { useState } from 'react';
import axios from 'axios';

export default function ImageUpload({ className, fileName, onSubmit }) {
  const [selectedFile, setSelectedFile] = useState(null);

  const onChangeHandler = (evt) => {
    const file = evt.target.files[0];
    setSelectedFile(file);
  };

  const handleSubmit = () => {
    const data = new FormData();
    data.append('teste', selectedFile);
    onSubmit && onSubmit(data);
    !onSubmit && axios.post('http://localhost:3333/teste', data);
  };

  return (
    <div>
      <input
        type="file"
        name={fileName || 'teste'}
        onChange={onChangeHandler}
      />
      <button onClick={handleSubmit}>Enviar</button>
    </div>
  );
}
