// import Posts from './Posts'
import { Link } from 'react-router-dom'
import PostAuthor from './PostAuthor'

export default function PostItem({Image, authorId, category, title, des, postId}) {
  return (
    <article className="post">
        <div className="post-image">
            <img src={Image} alt="" />
        </div>
        <div className="post-content">
            <Link to={`posts/${postId}`}>
                <h3>{title}</h3>
            </Link>
            <p>{des}</p>
            <div className="post-footer">
                <PostAuthor />
                <Link to={`/posts/categories/${category}`}>{category}</Link>
            </div>
        </div>
    </article>
  )
}
