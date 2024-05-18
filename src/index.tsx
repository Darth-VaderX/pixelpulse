import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/app/App';
import { BrowserRouter } from 'react-router-dom';
import './css/index.scss';

const root: ReactDOM.Root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>,
);
