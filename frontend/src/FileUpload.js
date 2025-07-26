import React from 'react';

function FileUpload({ onFileContent }) {
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    // TODO: Add option of upload PDF files too.
    if (file && file.type === 'text/plain') {
      const reader = new FileReader();
      reader.onload = (event) => {
        onFileContent(event.target.result);
      };
      reader.readAsText(file);
    } else {
      onFileContent('Please upload a valid .txt file.');
    }
  };

  return (
    <div className='file-upload'>
      <h3>Upload File</h3>
      <input type="file" accept=".txt" onChange={handleFileChange} />
    </div>
  );
}

export default FileUpload;
