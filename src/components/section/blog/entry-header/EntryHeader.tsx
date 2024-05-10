import { Link }from "react-router-dom";
import './styles.css';
import { MdArrowForwardIos } from "react-icons/md";



interface EntryHeaderProps {
  title: string;
  text1: string;
  text2: string;
  text3: string;
  text4: string;
  text5: string;
  id: number
}

export function EntryHeader (props: EntryHeaderProps) {
    return (
        <>
        <div className="entry-header">
            <h3><a href="#">{props.title}</a></h3>
            <span className="date">{props.text1}</span><span className="category">{props.text2}<strong>{props.text3}</strong></span>
        </div>
        <div className="entry-content">
            <p>{props.text4}</p>
            <p><Link to={`blog-posts/${props.id}`}><a href="blog-posts-in.html" className="btn btn2 hvr-sweep-to-right"><span className="pe-2">{props.text5}</span><MdArrowForwardIos /></a></Link></p>
        </div>
      </>
    )
}







