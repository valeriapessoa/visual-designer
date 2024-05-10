import Title from "../../title/Title";
import { FirstPost } from "./first-post/FirstPost";
import { SecondPost } from "./second-post/SecondPost";
import { ThirdPost } from "./third-post/ThirdPost";
import Img11 from "../../../assets/images/img16.png";
import Img12 from "../../../assets/images/img17.png";
import Img13 from "../../../assets/images/img18.png";
import Img14 from "../../../assets/images/img19.png";
import Img15 from "../../../assets/images/img000.png";

export default function Blog() {
    return (
        <section id="blog-posts">
            <div className="container">
            <Title title="Blog Posts">
                    <p className="wow fadeInDown">Descubra o universo cativante da arquitetura através do nosso blog-posts, onde cada postagem leva você a uma viagem emocionante pela criatividade e inovação no design de espaços. Com uma linguagem clara e acessível, compartilhamos conhecimentos e experiências que enriquecerão sua compreensão da arquitetura.</p>
            </Title>
                <div className="blog-posts-posts">
                <div className="row">
                    <div className="col-sm-4 wow fadeIn">
                    <FirstPost posterImg={Img11} text1= "3 Comments" text2= "0 Likes"  />
                    </div>
                    <div className="col-sm-4 wow fadeIn">
                    <SecondPost posterImg1={Img12} posterImg2={Img13} posterImg3={Img14} text1= "3 Comments" text2= "0 Likes" />
                    </div>
                    <div className="col-sm-4 wow fadeIn">
                    <ThirdPost posterImg={Img15} text1="3 Comments" text2="0 Likes" />
                    </div>
                </div>
                </div>
            </div>
        </section>
    )
}