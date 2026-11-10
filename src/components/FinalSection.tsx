import CTAButton from './CTAButton';

export default function FinalSection() {
  return (
    <footer className="final band">
      <div className="wrap">
        <h2>
          Clicou. Comprou. <em>Economizou.</em>
        </h2>

        <CTAButton>Entrar no grupo grátis</CTAButton>

        <p className="legal">
          Clicou Comprou é um grupo de divulgação de ofertas. Os links podem ser de afiliado, sem custo extra para você.
          Valores e disponibilidade são definidos pelas lojas, que podem cancelar pedidos feitos com erro de preço.
        </p>
      </div>
    </footer>
  );
}

