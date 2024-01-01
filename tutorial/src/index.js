import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// function Greeting() {
//  return <h2 id='something' className='someValue'></h2>
// }

const firstBook = [
  {
    author: "Jordan Moore",
    title: "Interesting Facts For Curious Minds",
    img: "https://images-na.ssl-images-amazon.com/images/I/71hwUY5ZmxL._AC_UL600_SR600,400_.jpg",
  }
]

const secondBook = [
  {
    author: "James Clear",
    title: "Atomic Habits",
    img: "https://m.media-amazon.com/images/I/81YkqyaFVEL._SY522_.jpg",
  }
]



// secondBook object'inin propertylerini ayırdık.
const {author,title} = secondBook;
console.log(author, title);


const styleBook = {
  size: 150,
}

const names = ["Amazon Best Seller"];
const newNames = names.map((name) => {
  if (name === "Amazon Best Seller" || name === "Best"){
    return <h1>{name}</h1>
  }else {
    return <h2>Where're you doing?</h2>
  } 
  
})




const BookList = () => {
  return(

  <section className='bookList'>
    <h2>{newNames}</h2>
    <Book 
    author={firstBook.author} 
    title={firstBook.title} 
    img={firstBook.img} 
    size={styleBook.size}
    />
    <Book 
    author={secondBook.author} 
    title={secondBook.title} 
    img={secondBook.img}
    size={styleBook.size}
    />
    
  </section>
  ) ;
}

const Book = ({img, title, author, size, children}) => {
  // props, eğer üst component'te propsları verilmemişse boş obj döndürür.
  // ancak Booklist içerisinde ki Book Componentlerine prop atarsak, burada "props" adlı prop orada ki değerleri alacaktır.
  // aldığı verileri props.job, props.title vb okuyabiliriz.
  // bu propslar aracılığıyla componentler arası veri alışverişini ve haberleşmeyi sağlar.
  // props'u propertylerine ayırdık. Ve onları ayrı ayrı kullandık.

  // children, Üst component eğer içerisine başka bir component almak istiyorsak bunu children props'unu vererek halledebiliriz.
  

  return (
  <article className='book'>
    <img
    src={img}
    alt={title} />
    <h2>{title}</h2>
    <h4>{author}</h4>
    <h4>{size}</h4>
    <p>No matter your goals, Atomic Habits offers a proven framework for improving-every day. James Clear, one of the world's.</p>
    <button>Click me</button>
    {children}
    
    
  </article>
  );
} 






// oluşturduğumuz fonksiyonu ReactDom ile manipüle edip createRoot'a eşitleyip
// daha sonra render etmek üzere componenti içeri alıyoruz.
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);
