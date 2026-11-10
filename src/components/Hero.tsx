import Mascot from './Mascot';
import CTAButton from './CTAButton';

export default function Hero() {
  return (
    <header className="hero band">
      <div className="wrap">
        <div className="brand">Clicou Comprou</div>

        <span className="free">
          <i />
          Grupo 100% gratuito
        </span>

        <Mascot />

        <h1>
          Os melhores{' '}
          <mark className="glitch" data-t="BUGS">
            BUGS
          </mark>{' '}
          da internet direto no seu WhatsApp
        </h1>

        <p className="sub">
          Preço que escapa, cupom que vaza e promoção que some rápido. A gente acha, você só clica e compra.
        </p>

        <CTAButton>Entrar no grupo</CTAButton>

        <div className="micro">
          <span>Grátis</span>
          <span>Entrada em 1 clique</span>
          <span>Saia quando quiser</span>
        </div>
      </div>
    </header>
  );
}

