import React from 'react';

const ArticleList = ({articles}) => {
   if(!articles) {
       return (
           <div className="article-preview">Loading...</div>
       );
   }

   if(articles.length === 0) {
       return (
           <div className="article-preview">
               No photos to display... yet.
           </div>
       );
   }
   
   return (
    <div>
      {       
        Array.from(articles).map(article => {
          return (
            <h2>{article.title}</h2>
          );
        })
      }
    </div>
  );
}
export default ArticleList;