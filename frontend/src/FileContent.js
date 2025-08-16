import React from 'react';

function FileContent({ content }) {
  return (
    <div className='file-content'>
      <h2>File Content</h2>
      <pre>{content}</pre>
    </div>
  );
}

export default FileContent;
