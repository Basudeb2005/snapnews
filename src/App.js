import React, { useState } from 'react';
import NewsComponent from './components/NewsComponent';
import './index.css';

const App = () => {
    const [topic, setTopic] = useState('technology');

    return (
        <div>
            <h1>SnapNews</h1>
            <button onClick={() => setTopic('technology')}>Technology</button>
            <button onClick={() => setTopic('politics')}>Politics</button>
            <button onClick={() => setTopic('finance')}>Finance</button>
            <NewsComponent topic={topic} />
        </div>
    );
};

export default App;
