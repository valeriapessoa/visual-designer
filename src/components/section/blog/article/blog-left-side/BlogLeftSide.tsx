import './styles.css';

interface BlogLeftSideProps {
  posterImg: string | string[];
  title: string;
  date: string;
  texts: string[];
}

export default function BlogLeftSide (props: BlogLeftSideProps) {

  return (
    <>
      <div className="col-md-7 col-sm-7 blog-posts-left Left">
        <div className="blog-posts-left-grid">
          <h3>{props.title}</h3>
          <h4>Publicado em <span>{props.date}</span></h4>
          <div className="img-div text-center">
                {typeof props.posterImg =='string' ? (<img className="img-fluid img-blog-posts" alt="img" title="img" src={props.posterImg}/>):
                  props.posterImg?.map((image) => (<img className="img-fluid img-blog-posts" alt="img" title="img" src={image}/>))
                }
          </div>
          {props.texts?.map(text => (<p>{text}</p>)) }
        </div>
        <div >
        <label><h4>Deixe um comentário:</h4></label>
          <form>
            <div className="form-group">
              <textarea className="form-control text-css" rows={3} placeholder="Digite aqui"></textarea>
            </div>
            <input value="Enviar formulário" className="button-submit" type="submit"/>
          </form>
        </div>
      </div>
    </>
  );
}
