import React from 'react';

function FileContent({ content }) {
  return (
    <div style={{ background: '#112532', padding: 10, minHeight: 100, whiteSpace: 'pre-wrap', borderRadius: 8 }}>
      <h2>File Content</h2>
      <pre>{content}</pre>
    </div>
  );
}

export default FileContent;
