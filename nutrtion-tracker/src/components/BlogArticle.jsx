import "./BlogArticle.css"

function BlogArticle({ title, image, content, alt }) {
return (
<article className="blog-article">
    <div className="article-image">
    <img src={image || "/placeholder.svg"} alt={alt} />
    </div>
    <div className="article-content">
    <h2 className="article-title">{title}</h2>
    <p className="article-text">
        {content} <span className="continue-reading">Continue Reading...</span>
    </p>
    </div>
</article>
)
}

export default BlogArticle