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
    <div>
      <label for='fileInput' class='file-input'>Upload File</label>
      <input type="file" id='fileInput' accept=".txt" onChange={handleFileChange} />
    </div>
  );
}

export default FileUpload;
