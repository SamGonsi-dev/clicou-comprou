export default function FAQ() {
  return (
    <section className="faq">
      <div className="wrap">
        <h2>Dúvidas rápidas</h2>

        <details open>
          <summary>O que é um &quot;bug&quot; de oferta?</summary>
          <p>
            É quando um produto aparece por um preço muito abaixo do normal, por erro de sistema, cupom que vaza ou
            promoção mal configurada. Costuma durar pouco, por isso o aviso na hora faz diferença. A loja pode corrigir
            o preço ou cancelar o pedido, então não há garantia de que a compra seja mantida.
          </p>
        </details>

        <details>
          <summary>O grupo é mesmo gratuito?</summary>
          <p>Sim. Entrar e receber as ofertas não custa nada.</p>
        </details>

        <details>
          <summary>Meu número aparece para os outros?</summary>
          <p>
            Isso depende das configurações do grupo no WhatsApp. Ao entrar, você pode silenciar as notificações ou sair
            quando quiser.
          </p>
        </details>

        <details>
          <summary>Com que frequência chegam ofertas?</summary>
          <p>Todos os dias, em eletrônicos, casa, moda, mercado e mais.</p>
        </details>

        <details>
          <summary>Os preços podem mudar?</summary>
          <p>
            Podem. Promoções são por tempo limitado e a loja pode alterar preço e estoque a qualquer momento. Confira
            sempre no site antes de comprar.
          </p>
        </details>
      </div>
    </section>
  );
}

