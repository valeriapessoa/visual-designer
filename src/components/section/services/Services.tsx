import './styles.css';
import Title from "../../title/Title";
import ServicesContent from "./services-content/ServicesContent";
import Img11 from "../../../assets/images/img10.png";
import Img12 from "../../../assets/images/img11.png";
import Img13 from "../../../assets/images/img12.png";
import Img14 from "../../../assets/images/img13.png";
import Img15 from "../../../assets/images/img14.png";
import Img16 from "../../../assets/images/img15.png";

export default function Services () {
    return (
        <section id="services">
            <div className="container">
                <div className="heading ">
                    <Title title="Serviços" color="white">
                        <div className="text-center col-sm-12 services1 col-center">
                            <p className="wow fadeInDown">
                                Nosso compromisso é transformar suas ideias em espaços arquitetônicos incríveis, combinando criatividade, inovação e expertise para criar ambientes que não apenas inspirem, mas também atendam de forma única e personalizada a todas as suas necessidades e desejos. Venha conhecer nossos serviços e descubra como podemos ajudá-lo a criar o espaço perfeito para sua vida.
                            </p>
                        </div>
                    </Title>
                </div>
                <div className="text-center our-services">
                    <div className="row">
                        <ServicesContent
                            posterImg={Img11}
                            title1="Design "
                            title2="Residencial"
                            text="Projetos de casas, apartamentos e moradias em geral."
                            modalTitle="Design Residencial"
                            modalText1="Serviços especializados para transformar casas em lares verdadeiramente extraordinários. Nossos serviços incluem o design de interiores personalizado, planejamento de espaço, seleção de materiais e decoração, iluminação, integração de tecnologia, sustentabilidade e renovação. "
                            modalText2="Trabalhamos para criar ambientes que não apenas atendam às necessidades práticas, mas também reflitam a personalidade e o estilo de vida dos moradores, tornando cada residência um verdadeiro refúgio de conforto e beleza. Com nossa equipe dedicada, sua visão de lar perfeito se torna uma realidade."
                            modalImg={Img11}
                         />
                        <ServicesContent
                            posterImg={Img12}
                            title1="Design "
                            title2="Comercial"
                            text="Edifícios comerciais, escritórios, shoppings, hotéis, entre outros."
                            modalTitle="Design Comercial"
                            modalText1="Variedade de serviços especializados para transformar espaços de negócios em ambientes altamente funcionais e visualmente cativantes. Nossos serviços abrangem desde o design de interiores comerciais até o planejamento espacial, a seleção de mobiliário, a iluminação, a tecnologia, a sustentabilidade e a identidade de marca. "
                            modalText2="Com nossa equipe dedicada, você pode contar com soluções que não apenas atendem às suas necessidades práticas, mas também elevam a estética e a eficácia de seu espaço de negócios. Estamos comprometidos em ajudar sua empresa a alcançar o sucesso por meio de designs comerciais excepcionais."
                            modalImg={Img12}
                        />
                        <ServicesContent
                            posterImg={Img13}
                            title1="Design de "
                            title2="Interiores"
                            text= "Espaços internos, mobiliário, iluminação, revestimentos e decoração."
                            modalTitle="Design de Interiores"
                            modalText1="Oferecemos uma ampla gama de serviços especializados para transformar seus espaços de acordo com suas preferências e necessidades. Nossos serviços abrangem consultoria de design personalizada, planejamento de espaço, seleção de cores e materiais, escolha de móveis e decoração, iluminação eficiente, gestão de projetos, design personalizado, renovação e reforma, sustentabilidade e acompanhamento pós-obra."
                            modalText2="Nossa equipe altamente qualificada está comprometida em criar ambientes únicos e personalizados que refletem seu estilo e atendem às suas necessidades."
                            modalImg={Img13}
                        />
                        <ServicesContent
                            posterImg={Img14}
                            title1="Design "
                            title2="Hospitalar"
                            text="Instalações de saúde, como hospitais, clínicas e centros de saúde."
                            modalTitle="Design Hospitalar"
                            modalText1="Temos serviços especializados para aprimorar ambientes de saúde. Nossos serviços abrangem planejamento de layout, design de interiores, seleção de mobiliário médico, gestão de cores e materiais, iluminação eficiente, integração de tecnologia, sustentabilidade, segurança, acessibilidade e humanização. Nossa equipe dedicada visa criar espaços hospitalares que promovam a cura, o conforto e a eficiência, priorizando o bem-estar dos pacientes e profissionais de saúde. "
                            modalText2=" Estamos comprometidos em transformar instalações de saúde em ambientes acolhedores e funcionais, onde a qualidade do atendimento e a experiência do paciente são prioridades."
                            modalImg={Img14}
                        />
                        <ServicesContent
                            posterImg={Img15}
                            title1="Design "
                            title2="Paisagístico"
                            text="Espaços ao ar livre, como jardins, parques, praças e áreas de lazer."
                            modalTitle="Design Paisagístico"
                            modalText1="Um conjunto abrangente de serviços destinados a criar espaços exteriores atraentes e funcionais. Nossos serviços incluem o planejamento de jardins, a seleção de plantas e vegetação adequadas ao clima local, a incorporação de elementos arquitetônicos como decks e caminhos, a criação de sistemas de iluminação exterior, a promoção da sustentabilidade e práticas ecológicas, além de orientações para a manutenção contínua."
                            modalText2="Nosso objetivo é transformar áreas externas em verdadeiros oásis, criando ambientes de bem-estar e conexão com a natureza. Seja para projetos residenciais ou comerciais, nossa equipe de designers paisagísticos está comprometida em atender às suas necessidades e transformar sua visão em realidade, harmonizando a beleza natural com funcionalidade e estilo."
                            modalImg={Img15}
                        />
                        <ServicesContent
                            posterImg={Img16}
                            title1="Design "
                            title2="Sustentável"
                            text="Ambientes que minimizam o impacto ambiental."
                            modalTitle="Design Sustentável"
                            modalText1="Serviços que unem estética e responsabilidade ambiental. Nossos serviços incluem orientação sustentável, eficiência energética, escolha de materiais ecológicos, gestão de resíduos, design bioclimático, uso de energias renováveis, reciclagem e compostagem, mobiliário sustentável, certificações verdes e educação sobre práticas sustentáveis."
                            modalText2="Valorizamos a criação de ambientes que sejam visualmente atraentes e ecologicamente conscientes, promovendo a saúde do planeta e o bem-estar das pessoas."
                            modalImg={Img16}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}







