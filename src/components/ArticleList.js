import react from "react";
import reactDom from "react-dom";
import Article from "./Article";

// function Article({title, date, preview}) {
//     return (
//       <article>
//         <h3>
//           {title}
//         </h3>
//         <small defaultValue="January 1, 1970">
//           {date}
//         </small>
//         <p>
//           {preview}
//         </p>
//       </article>
//     )
// }
  
function ArticleList({posts}) {
    const newPosts = posts.map(post => {
        return <Article key={post.id} title={post.title} date={post.date} preview={post.preview}/>
    })

    return (
        <main>
        {newPosts}
        </main>
    )
}

export default ArticleList;