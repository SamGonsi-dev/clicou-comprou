export default function Benefits() {
  return (
    <section className="why">
      <div className="wrap">
        <span className="eyebrow">Por que entrar</span>
        <h2>A gente caça os bugs. Você só aproveita.</h2>

        <ul className="list">
          <li>
            <div className="ic">
              <svg viewBox="0 0 32 32" fill="none" stroke="#062319" strokeWidth="3" strokeLinecap="round">
                <circle cx="14" cy="14" r="8" />
                <path d="M20 20l7 7" />
              </svg>
            </div>
            <h3>Sem procurar</h3>
            <p>Nós garimpamos nos maiores sites e lojas.</p>
          </li>

          <li>
            <div className="ic">
              <svg
                viewBox="0 0 32 32"
                fill="none"
                stroke="#07402C"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="16" cy="17" r="11" />
                <path d="M16 11v6l4 3M12 3h8" />
              </svg>
            </div>
            <h3>Sem perder tempo</h3>
            <p>Tudo avisado na hora, direto no WhatsApp.</p>
          </li>

          <li>
            <div className="ic">
              <svg
                viewBox="0 0 32 32"
                fill="none"
                stroke="#062319"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 22l7-8 6 5 11-12M22 7h6v6" />
              </svg>
            </div>
            <h3>Queda de preço</h3>
            <p>Alertas quando um produto fica realmente mais barato.</p>
          </li>

          <li>
            <div className="ic">
              <svg
                viewBox="0 0 32 32"
                fill="none"
                stroke="#07402C"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 3L7 18h8l-2 11 12-16h-8z" />
              </svg>
            </div>
            <h3>Oferta relâmpago</h3>
            <p>Cupons e promoções que duram pouco, sem você perder.</p>
          </li>
        </ul>
      </div>
    </section>
  );
}

