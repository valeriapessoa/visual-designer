import './title.css';
import { ReactNode } from 'react';

interface TitleProps {
    title: string;
    children?: ReactNode;
    color?: 'white';
}

export default function Title (props: TitleProps) {
    return (
        <>
        <div className="row">
            <div className="heading text-center col-sm-10 col-center">
                <div className='col-md-8 offset-md-2 text-center title-highlight'>
                    <h2 className={`wow fadeInDown title ${props.color === 'white' ? 'title-white': '' }`}>{props.title}</h2>
                </div>
                {props.children}
            </div>
        </div>
        </>
    )
}







