import React, { useState } from 'react';

export default function ImageUpload({ className, fileName, onSubmit, onChange }) {
  const [selectedFile, setSelectedFile] = useState(null);

  const changeHandler = (evt) => {
    const file = evt.target.files[0];
    setSelectedFile(file);

    if (!onSubmit && onChange)
      onChange(file);
  };

  const handleSubmit = () => {
    const data = new FormData();
    data.append(fileName, selectedFile);
    onSubmit && onSubmit(data);
  };

  return (
    <div>
      <input
        type="file"
        name={fileName || 'teste'}
        onChange={changeHandler}
      />
      {onSubmit && <button onClick={handleSubmit}>Enviar</button>}
    </div>
  );
}
