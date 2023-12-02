import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import PostsComparator from './PostsComparator';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PostsComparator />
  </React.StrictMode>
);
const root_s = ReactDOM.createroot(document.getElementById("root_s"));
const root_t = ReactDOM.createroot(document.getElementById("root_t"));

root_s.render(React.createElement("p", null, "Its Second block"));
root_t.render(React.createElement("p", null, "Its Third block"));
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
