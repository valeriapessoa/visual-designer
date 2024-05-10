import { Link } from "react-router-dom";
import { FaPencilAlt } from "react-icons/fa";
import { FaComments } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { EntryHeader } from '../entry-header/EntryHeader';
import './styles.css';

interface FirstPostProps {
  posterImg: string;
  text1: string;
  text2: string;
}

export function FirstPost (props: FirstPostProps) {
    return (
        <>
        <div className="post-thumb">
          <Link to="blog-posts/2"><img className="img-fluid" src={props.posterImg} alt="" title="" /></Link>
          <div className="post-meta">
            <span><FaComments className="comments-o" /></span><span>{props.text1}</span>
            <span className="ps-2"><FaHeart className="heart" /></span><span>{props.text2}</span>
          </div>
          <div className="post-icon"><FaPencilAlt className="pencil" /></div>
        </div>
        <EntryHeader id={2} title="Design moderno e criativo" text1= "Junho 24, 2023" text2= "em" text3= "Piauí" text4= "Sala perfeita para pessoas que apreciam o design criativo e desejam um ambiente que fuja do convencional.  É um espaço que transmite personalidade e originalidade, tornando-se o local ideal para relaxar, socializar e apreciar." text5= "Veja mais" />
        </>
    )
}








