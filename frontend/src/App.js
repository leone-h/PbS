
import React, { useState } from 'react';
import FileUpload from './FileUpload';
import FileContent from './FileContent';
import './App.css';



function App() {
    const [fileContent, setFileContent] = useState('');

    return (
        <div className='app-container'>
            <aside>
                <img src="/img/pbs_logo.png" alt="PbS Logo" style={{ height: '80px', marginBottom: '20px' }} />
                <FileUpload onFileContent={setFileContent} />
            </aside>
            <main>
                <FileContent content={fileContent} />
            </main>
        </div>
    );
}

export default App;