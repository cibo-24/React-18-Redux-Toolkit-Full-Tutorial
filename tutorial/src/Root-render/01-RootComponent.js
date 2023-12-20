// index.js içerisinde render etmek istediklerimizi aşağıda ki gibi render edebiliriz.


import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function Greeting() {
  return <h2>My First Component</h2>
}

// oluşturduğumuz fonksiyonu ReactDom ile manipüle edip createRoot'a eşitleyip
// daha sonra render etmek üzere func içeri alıyoruz
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Greeting />);