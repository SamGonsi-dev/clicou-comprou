export default function FeedOffers() {
  return (
    <section className="demo">
      <div className="wrap">
        <span className="eyebrow">Veja como chega no seu celular</span>
        <h2>Achou um bug? Você sabe na hora</h2>
        <p className="note">Exemplos ilustrativos. As ofertas reais mudam todos os dias.</p>

        <div className="feed" aria-label="Exemplos de mensagens do grupo">
          <span className="off">-50%</span>

          <div className="msg">
            <div className="thumb">
              <svg viewBox="0 0 64 64">
                <path
                  d="M12 36a20 20 0 0 1 40 0"
                  stroke="#07402C"
                  strokeWidth="6"
                  fill="none"
                  strokeLinecap="round"
                />
                <rect x="8" y="34" width="12" height="20" rx="6" fill="#1FD566" />
                <rect x="44" y="34" width="12" height="20" rx="6" fill="#1FD566" />
              </svg>
            </div>
            <div>
              <b>Fone Bluetooth</b>
              <small>Bug de preço • agora</small>
            </div>
            <div className="price">
              <s>R$ 159,90</s>R$ 79,90
            </div>
          </div>

          <div className="msg">
            <div className="thumb">
              <svg viewBox="0 0 64 64">
                <rect x="10" y="22" width="44" height="32" rx="10" fill="#07402C" />
                <rect x="16" y="28" width="32" height="20" rx="6" fill="#1FD566" />
                <rect x="18" y="12" width="28" height="12" rx="6" fill="#C8F0D9" />
              </svg>
            </div>
            <div>
              <b>Air Fryer 5L</b>
              <small>Cupom vazado • 4 min</small>
            </div>
            <div className="price">
              <s>R$ 499,00</s>R$ 289,90
            </div>
          </div>

          <div className="msg">
            <div className="thumb">
              <svg viewBox="0 0 64 64">
                <rect x="26" y="4" width="12" height="56" rx="5" fill="#1FD566" />
                <rect x="14" y="16" width="36" height="32" rx="12" fill="#07402C" />
                <circle cx="32" cy="32" r="10" fill="#E3F8EB" />
                <path d="M32 32v-6M32 32l5 3" stroke="#062319" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </div>
            <div>
              <b>Smartwatch</b>
              <small>Preço caiu • 11 min</small>
            </div>
            <div className="price">
              <s>R$ 299,00</s>R$ 149,90
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

