import './styles.css';
import BlogLeftSide from "./blog-left-side/BlogLeftSide";
import BlogRightSide from "./blog-right-side/BlogRightSide";
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { IPost } from './types'


export default function Article () {

  const { id } = useParams();
  const [posts, setPosts] = useState<IPost[]>([]);

      useEffect(() => {

      fetch("/db.json", {
        headers: {
          Accept: "application/json"
        }
      }).then(res => res.json())
        .then(res => setPosts(res.posts as IPost[]));
      }, []);

      if(!posts) {
        return (
          <div id="preloader"></div>
        )
      }

      console.log(id, posts)

      let selectedPost = posts[0];
      if(id) {
        const checkItem = posts.filter(post => post.id === parseInt(id as string));
        selectedPost = checkItem.length ? checkItem[0] : selectedPost;
      }

      console.log(selectedPost)

      return (
        <>
      <section id="blog-posts-in" >
        <div className="container about-css">
          <div className="row">
            <BlogLeftSide
              posterImg={selectedPost?.image}
              title={selectedPost?.title}
              date={selectedPost?.data}
              texts={selectedPost?.texts}
            />
            <BlogRightSide posts={posts} />

          </div>
          <div className="clearfix"> </div>
          <br/>
        </div>
        <div className="clearfix"></div>
      </section>
    </>
  );
}
