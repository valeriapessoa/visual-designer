import Title from "../../title/Title";
import Img1 from "../../../assets/images/img1.png";
import Img2 from "../../../assets/images/img2.png";
import Img3 from "../../../assets/images/img3.png";
import Card from "../../card/Card";

export default function AboutUs() {
    return (
      <section className="what-we" id="about">
        <div className="container">
          <div className="row">
            <Title title="Sobre nós" />
            <Card
              posterImg= {Img1}
              title="Nossa História"
              text1="Fundada em 1989, nosso estimado escritório de arquitetura tem estado na vanguarda do setor, fornecendo consistentemente soluções de design excepcionais e estruturas inovadoras. "
              text2="Uma rica história que se estende por mais de três décadas, nos estabelecemos como um nome confiável na área, reconhecido por nosso profissionalismo, criatividade e compromisso com a excelência."
              button="VEJA MAIS"
              modalTitle="Nossa História"
              modalText1="A parceria com nossos clientes é a base de nosso sucesso. Acreditamos que cada projeto é uma colaboração, onde nossos clientes são co-autores de sua visão. Nossa abordagem centrada no cliente nos permite compreender profundamente as necessidades e aspirações de cada cliente, permitindo-nos criar soluções que não apenas atendam, mas superem suas expectativas."
              modalText2="À medida que avançamos para o futuro, estamos empolgados com as oportunidades e desafios que estão por vir. Continuaremos a evoluir, adaptando-nos às mudanças no mundo da arquitetura e da construção, e buscando constantemente novas maneiras de inovar e inspirar. Nossa jornada está longe de terminar, e mal podemos esperar para ver o que o próximo capítulo nos reserva. Com nosso legado de excelência, nossa paixão pela criação e nosso compromisso com a inovação, estamos prontos para enfrentar qualquer desafio que o futuro possa trazer."
              modalImg={Img1}
            />
            <Card
              posterImg= {Img2}
              title="Missão e Visão"
              text1="Criar espaços arquitetônicos excepcionais que transcendem as expectativas e elevam o padrão de qualidade. Compreendemos que a arquitetura é mais do que apenas construir estruturas; é uma forma de arte que molda a experiência humana."
              text2="Mantemos um compromisso com a qualidade, confiabilidade e, acima de tudo, a satisfação do cliente."
              button="VEJA MAIS"
              modalTitle="Missão e Visão"
              modalText1="Olhando para o futuro, nossa visão é ousada e inspiradora. Queremos continuar sendo líderes no cenário arquitetônico, não apenas acompanhando as tendências, mas também moldando o futuro da arquitetura e do design de interiores."
              modalText2="Acreditamos que a arquitetura deve ser uma força positiva, tanto para as comunidades quanto para o meio ambiente. Portanto, nossa visão envolve não apenas criar espaços inovadores e esteticamente atraentes, mas também incorporar práticas sustentáveis em cada projeto, contribuindo assim para um mundo mais verde e equilibrado."
              modalText3="Nossa equipe de arquitetos, designers e engenheiros altamente qualificados possui uma vasta experiência e conhecimento, o que nos permite lidar com projetos de qualquer escala ou complexidade. Desde empreendimentos residenciais e comerciais até instituições educacionais e marcos culturais, temos demonstrado consistentemente a nossa capacidade de traduzir as visões dos nossos clientes em realidade."
              modalImg={Img2}
              />
            <Card
            posterImg= {Img3}
            title="Valores"
            hideOnSmallScren={true}
            text1="Excelência: Buscamos a excelência em cada detalhe, mantendo a qualidade em todos os aspectos dos nossos projetos."
            text2="Inovação: Abraçamos a inovação e a criatividade, desafiando constantemente os limites para criar soluções únicas."
            text3="Integridade: Nossa integridade é inabalável; agimos com ética, transparência e honestidade em todos os nossos relacionamentos."
            button="VEJA MAIS"
            modalTitle="Valores"
            modalText1="Colaboração: Valorizamos a colaboração e a diversidade de perspectivas, acreditando que a criação de espaços excepcionais é um esforço conjunto."
            modalText2="Sustentabilidade: Comprometemo-nos com a sustentabilidade, considerando o impacto ambiental e promovendo práticas responsáveis em nossos projetos."
            modalText3="Compromisso com o Cliente: Colocamos as necessidades dos nossos clientes em primeiro lugar, ouvindo atentamente suas visões e desejos para cada projeto."
            modalText4="Esses valores não são apenas palavras, são princípios que orientam nossas ações diárias e refletem o compromisso que temos em continuar a ser uma referência em arquitetura e design desde 1989. Como uma empresa apaixonada pela criação de espaços excepcionais, nossa jornada é um testemunho vivo de nossa dedicação à excelência e à transformação de visões em realidade."
            modalImg={Img3}
            />
          </div>
        </div>
      </section>
    )
}