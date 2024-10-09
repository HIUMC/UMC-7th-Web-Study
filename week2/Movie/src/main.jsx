import React from 'react';
import ReactDOM from 'react-dom';
import MoviePoster from './components/MoviePoster';

const App = () => {
    return (
        <div>
            <MoviePoster />
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
