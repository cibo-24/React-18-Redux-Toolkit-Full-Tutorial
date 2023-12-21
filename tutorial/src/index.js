import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// function Greeting() {
//  return <h2 id='something' className='someValue'></h2>
// }

const BookList = () => {
  return <section className='bookList'>
    <Book />
    <Book />
    <Book />
  </section>
}

const Book = () => {
  return <article className='book'>
    <Image />
    <Title />
    <Author />
  </article>
} 

const Image = () => <img src='https://images-na.ssl-images-amazon.com/images/I/71hwUY5ZmxL._AC_UL600_SR600,400_.jpg' alt='Interesting Facts For Curious Minds' />
const Title = () => <h2>Interesting Facts For Curious Minds</h2>
const Author = () => {
  const AuthorStyles = {
    color: 'lightblue',
    fontSize: '1rem',
    marginTop: '0.5rem',
    letterSpacing: '4.5px',
  }

  return <h4 style={AuthorStyles} className='author'>
  Jordan Moore</h4>
}



// oluşturduğumuz fonksiyonu ReactDom ile manipüle edip createRoot'a eşitleyip
// daha sonra render etmek üzere componenti içeri alıyoruz.
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);
