import './contact.css';
import Title from "../../title/Title";
import { BsFillGeoAltFill } from "react-icons/bs";
import { FaPhoneAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaGlobeAmericas } from "react-icons/fa";

export default function Contact () {
    return (
    <section id="contact" className="contact-us">
      <div className="parallax">
        <div className="container">
          <Title title="Contato" color="white">
            <p className="wow fadeInDown">Entre em contato conosco por e-mail ou telefone, ou sinta-se à vontade para nos fazer uma visita pessoalmente. Estamos ansiosos para ouvir você e transformar suas ideias em realidade.</p>
          </Title>
          <div className="contact-form" >
            <div className="row">
              <div className="col-sm-6 wow fadeIn">
                <form id="main-contact-form" name="contact-form" method="post" action="#">
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="form-group">
                        <input name="name" className="form-control" placeholder="Nome"  type="text"/>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <input name="email" className="form-control" placeholder="Endereço de email" type="email"/>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <input name="subject" className="form-control" placeholder="Assunto" required  type="text"/>
                  </div>
                  <div className="form-group">
                    <textarea name="message" id="message" className="form-control" rows={4} placeholder="Digite sua mensagem"></textarea>
                  </div>
                  <div>
                    <button type="submit" className="submit-bt">Envie agora</button>
                  </div>
                </form>
              </div>
              <div className="col-sm-6 wow fadeIn">
                <div className="contact-info">
                  <p>Visite o Visual Designer e descubra como transformamos suas visões arquitetônicas em obras-primas. Deixe-nos criar um espaço que seja um reflexo de você.</p>
                  <br/>
                  <p>Horário de Funcionamento : Seg a Sex, das 9h às 18h</p>
                  <ul className="address">
                    <li><BsFillGeoAltFill className='map-marker-icon' /><span className="ps-2">Endereço :</span>&nbsp;Avenida Ibirapuera, 700 - São Paulo</li>
                    <li><FaPhoneAlt className="phone-icon" /><span className="ps-2">Telefone :</span>&nbsp;(11) 3746-3333</li>
                    <li><FaEnvelope className="envelope-icon" /><span className="ps-2">E-mail :</span><a href="mailto:contato@visualdesigner.com" className="text-decoration-none">&nbsp;contato@visualdesigner.com</a></li>
                    <li><FaGlobeAmericas className="globe-icon" /><span className="ps-2">Website :</span><a href="#" className="text-decoration-none">&nbsp;Visual Designer</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    )
}







