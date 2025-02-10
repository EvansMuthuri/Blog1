import PostAuthor from "../components/PostAuthor"
import { Link } from "react-router-dom"

import postDtailImage from "../assets/1.jpg"

export default function PostDtail() {
  return (
    <section>
      <div className="container PostDtail-container">
        <div className="postdtail-top">
          <PostAuthor />
          <div className="postdtail-buttons">
            <div className="post-dtail-buttons">
              <Link to={'/posts/werwer/edit'} className="btn btn-sm btn-primary" >
                 Edit 
              </Link>
              <Link to={'/posts/werwer/delete'} className="btn btn-sm btn-danger" >
                 Delete 
              </Link>
            </div>
          </div>
        </div>
        <h1>Lorem Ipsum, dolor sit amet consecttur adipisicing elit.</h1>
        <div className="postdetail-image">
          <img src={postDtailImage} alt="" />
        </div>
        <div className="postdtail-para">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In quo animi omnis, placeat explicabo deleniti similique quam voluptas iure cupiditate quidem nemo laudantium numquam! Magni deleniti quia iusto asperiores a!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In quo animi omnis, placeat explicabo deleniti similique quam voluptas iure cupiditate quidem nemo laudantium numquam! Magni deleniti quia iusto asperiores a!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In quo animi omnis, placeat explicabo deleniti similique quam voluptas iure cupiditate quidem nemo laudantium numquam! Magni deleniti quia iusto asperiores a!
        </p>
        </div>
      </div>
    </section>
  )
}
