import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";

console.log(blogData);

function App() {
  return (
    <div className="App">
      <Header name={blogData.name}/>
      <About image={blogData.image} about={blogData.about} />
      <ArticleList posts={blogData.posts}/>
      {/* You're on your own from here! Follow the deliverables; test things out in
      the browser as you write your code; and good luck! */}
    </div>
  );
}

// function Header({name}) {
//   return (
//     <header>
//       <h1>{name}</h1>
//     </header>
//   )
// }

// function About({image, about}) {
//   return (
//     <aside>
//       <img src={image} alt="blog logo" defaultValue="https://via.placeholder.com/215."/>
//       <p>
//         {about}
//       </p>
//     </aside>
//   )
// }

// function Article({title, date, preview}) {
//   return (
//     <article>
//       <h3>
//         {title}
//       </h3>
//       <small defaultValue="January 1, 1970">
//         {date}
//       </small>
//       <p>
//         {preview}
//       </p>
//     </article>
//   )
// }

// function ArticleList({posts}) {
  
//   const newPosts = posts.map(post => {
//     return <Article key={post.id} title={post.title} date={post.date} preview={post.preview}/>
//   })

//   return (
//     <main>
//       {newPosts}
//     </main>
//   )
// }




export default App;
