import { Link }from "react-router-dom";
import { IPost } from '../types';
import './styles.css';

interface PostProps {
    post: IPost;
}

export default function Post ({ post } :PostProps) {
  const img = typeof post.image === 'string' ? post.image : post.image[0]

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
    <div className="recent-posts">
        <div className="recent-posts-info">
        <div className="posts-left sngl-img">
          <Link to={`/blog-posts/${post.id}`}>
            <img className="img-fluid" alt="img" title="img" onClick={scrollToTop} src={img}/>
          </Link>
        </div>
        <div className="posts-right">
            <div className="publice-date"><span>Publicado em</span>{post.data}</div>
            <p className='text'>{post.description}</p>
            <Link to={`/blog-posts/${post.id}`} onClick={scrollToTop}>Ler mais</Link>
        </div>
        <div className="clearfix"></div>
        </div>
    </div>
    <div className="clearfix"> </div>
    <br/>
    </>
  );
}
