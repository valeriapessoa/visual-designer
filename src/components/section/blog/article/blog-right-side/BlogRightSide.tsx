import BlogRightSideProps from '../types';
import './styles.css';
import Post from './Post';



export default function BlogRightSide (props: BlogRightSideProps) {
  return (
    <>
      <div className="col-md-5 col-sm-5 blog-posts-right">
        <h4 className="blog-posts-t">Recent posts</h4>
        { props.posts.map(post => (
          <Post key={post.id} post={post}></Post>
        ))}
      </div>
    </>
  );
}
