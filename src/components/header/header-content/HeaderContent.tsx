import './styles.css';

interface HeaderContentProps {
    title1: string;
    title2: string;
    text1: string;
    text2: string;
}

export function HeaderContent (props: HeaderContentProps) {
    return (
        <>
        <div className="header">
        <div className="header-inner">
            <h1 id="homeHeading" className="wow slideInDown "> {props.title1} <span>{props.title2}</span> </h1>
            <br/>
            <p className="wow fadeIn" data-wow-duration="1s" data-wow-delay="1s">{props.text1} </p>
            <a href="#about" className="btn btn-primary btn-xl page-scroll wow fadeIn" data-wow-duration="1.5s" data-wow-delay="1.5s">{props.text2}</a> </div>
        </div>
        </>
    )
}







