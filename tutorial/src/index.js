import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// function Greeting() {
//  return <h2 id='something' className='someValue'></h2>
// }

const author = "Jordan Moore";
const title = "Interesting Facts For Curious Minds";
const img = "https://images-na.ssl-images-amazon.com/images/I/71hwUY5ZmxL._AC_UL600_SR600,400_.jpg";


const BookList = () => {
  return(

  <section className='bookList'>
    <Book author={author} title={title} img={img}/>
    <Book author={author} title={title} img={img}/>
    
  </section>
  ) ;
}

const Book = (props) => {
  // props, eğer üst component'te propsları verilmemişse boş obj döndürür.
  // ancak Booklist içerisinde ki Book Componentlerine prop atarsak, burada "props" adlı prop orada ki değerleri alacaktır.
  // aldığı verileri props.job, props.title vb okuyabiliriz.
  // bu propslar aracılığıyla componentler arası veri alışverişini ve haberleşmeyi sağlar.

  console.log(props);
  return (
  <article className='book'>
    <img
    src={props.img}
    alt={props.title} />
    <h2>{props.title}</h2>
    <h4>{props.author}</h4>
    
    
  </article>
  );
} 






// oluşturduğumuz fonksiyonu ReactDom ile manipüle edip createRoot'a eşitleyip
// daha sonra render etmek üzere componenti içeri alıyoruz.
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);
