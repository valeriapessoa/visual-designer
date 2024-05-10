import './styles.css';
import { FaFacebookF, FaTiktok } from 'react-icons/fa';
import { BsTwitter } from 'react-icons/bs';
import { AiFillInstagram } from 'react-icons/ai';
import { GrSkype } from 'react-icons/gr';
import { TfiGoogle } from 'react-icons/tfi';

interface footerProps {
  title: string;
}

export default function Footer(props: footerProps) {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-6 text-center text-md-start">
            <a target="_blank" className='title-footer' rel="noopener" title="link" href="#">
              {props.title}
            </a>
          </div>
          <div className="col-md-6 text-center text-md-end mt-1 mt-md-0">
            <div className="social-icons">
              <a target="_blank" rel="noopener" title="Facebook" href="https://www.facebook.com/?locale=pt_BR">
                <FaFacebookF />
              </a>
              <a target="_blank" rel="noopener" title="Twitter" href="https://twitter.com/?lang=pt">
                <BsTwitter />
              </a>
              <a target="_blank" rel="noopener" title="Instagram" href="https://www.instagram.com/">
                <AiFillInstagram />
              </a>
              <a target="_blank" rel="noopener" title="TikTok" href="https://www.tiktok.com/pt-BR/">
                <FaTiktok />
              </a>
              <a target="_blank" rel="noopener" title="Skype" href="https://www.skype.com/pt-br/get-skype/">
                <GrSkype />
              </a>
              <a target="_blank" rel="noopener" title="Google" href="https://www.google.com.br/">
                <TfiGoogle />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
