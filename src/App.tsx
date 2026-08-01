import { useMemo, useState, type MouseEvent } from 'react'
import {
  ArrowRight,
  BadgeCheck,
  Check,
  ChevronDown,
  Clock3,
  Gift,
  Heart,
  MessageCircle,
  PartyPopper,
  Radio,
  SearchCheck,
  Send,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Tag,
  Trophy,
  Users,
  WandSparkles,
  Zap,
} from 'lucide-react'
import { COMMUNITY_SIZE, getWhatsappGroupUrl, TELEGRAM_GROUP_URL } from './config'

declare global {
  interface Window {
    fbq?: (action: string, event: string, parameters?: Record<string, string>) => void
    dataLayer?: Array<Record<string, string>>
  }
}

const benefits = [
  {
    icon: SearchCheck,
    eyebrow: 'Curadoria de verdade',
    title: 'A gente garimpa. Você só escolhe.',
    text: 'Nossa equipe procura cupons, quedas de preço e achadinhos para poupar seu tempo.',
  },
  {
    icon: Zap,
    eyebrow: 'Chegou, viu, aproveitou',
    title: 'Oferta boa não fica escondida.',
    text: 'Os alertas chegam no WhatsApp para você ver enquanto o preço ainda vale a pena.',
  },
  {
    icon: ShieldCheck,
    eyebrow: 'Compra mais tranquila',
    title: 'Links de lojas conhecidas.',
    text: 'Achados de grandes marketplaces e lojas que já fazem parte da sua rotina.',
  },
]

const faqs = [
  {
    question: 'Preciso pagar para entrar?',
    answer: 'Não. Entrar e permanecer no Clube Delas Promo é totalmente gratuito.',
  },
  {
    question: 'O Clube Delas é uma loja?',
    answer: 'Não. Somos uma comunidade de curadoria de promoções. A compra, quando você quiser, é concluída diretamente na loja anunciada.',
  },
  {
    question: 'Que tipo de oferta vou receber?',
    answer: 'Moda, beleza, maquiagem, skincare, acessórios, casa e outros achadinhos que fazem sentido para o universo feminino.',
  },
  {
    question: 'Como participo dos sorteios mensais?',
    answer: 'Basta entrar em um dos grupos do Clube Delas. Os sorteios e as orientações de cada ação são divulgados por lá — e todo mês temos mais de uma ganhadora.',
  },
  {
    question: 'O Clube Delas também faz lives?',
    answer: 'Sim. As lives, novidades e ações especiais são anunciadas dentro dos grupos para que você acompanhe tudo pelo WhatsApp ou Telegram.',
  },
  {
    question: 'Também posso acompanhar pelo Telegram?',
    answer: 'Sim. Você pode entrar gratuitamente no nosso Telegram e acompanhar os achadinhos, novidades e ações divulgadas por lá.',
  },
  {
    question: 'Posso sair quando quiser?',
    answer: 'Sim. Você tem liberdade para silenciar ou sair do grupo a qualquer momento.',
  },
]

function App() {
  const [openFaq, setOpenFaq] = useState<number | null>(0)
  const whatsappUrl = useMemo(() => getWhatsappGroupUrl(), [])

  const trackLead = (placement: string, platform: 'whatsapp' | 'telegram') => {
    window.fbq?.('track', 'Lead', { content_name: `clube_delas_${platform}_${placement}` })
    window.dataLayer = window.dataLayer ?? []
    window.dataLayer.push({ event: 'generate_lead', placement, platform })
  }

  const handleLeadClick = (placement: string, event: MouseEvent<HTMLAnchorElement>) => {
    event.currentTarget.href = getWhatsappGroupUrl()
    trackLead(placement, 'whatsapp')
  }

  const handleTelegramClick = (placement: string) => {
    trackLead(placement, 'telegram')
  }

  return (
    <div className="site-shell">
      <div className="top-note">
        <Sparkles size={15} aria-hidden="true" />
        <span className="top-note-desktop">Todo mês tem sorteio — e mais de uma ganhadora</span>
        <span className="top-note-mobile">Sorteios mensais + várias ganhadoras</span>
      </div>

      <header className="header">
        <a className="brand" href="#inicio" aria-label="Clube Delas Promo — início">
          <img src="/logo-clube-delas.webp" alt="" width="44" height="44" fetchPriority="high" decoding="async" />
          <span>Clube Delas <b>Promo</b></span>
        </a>
        <div className="header-proof">
          <span className="proof-faces" aria-hidden="true"><i>J</i><i>M</i><i>A</i></span>
          <span><strong>{COMMUNITY_SIZE} pessoas</strong> na comunidade</span>
        </div>
        <a
          className="button button-small"
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
          onClick={(event) => handleLeadClick('header', event)}
          data-testid="cta-header"
        >
          Entrar grátis <ArrowRight size={17} aria-hidden="true" />
        </a>
      </header>

      <main>
        <section className="hero" id="inicio">
          <div className="hero-noise" aria-hidden="true" />
          <div className="hero-copy">
            <div className="eyebrow"><WandSparkles size={16} /> Seu atalho para comprar melhor</div>
            <h1>Chega de pagar <em>preço cheio</em> no que você ama.</h1>
            <p className="hero-subtitle">
              Promoções de <strong>moda, beleza e autocuidado</strong>, escolhidas a dedo e entregues no seu WhatsApp ou Telegram.
            </p>
            <div className="hero-mobile-proof">
              <Users size={17} aria-hidden="true" />
              <span><strong>{COMMUNITY_SIZE} pessoas</strong> na comunidade</span>
            </div>
            <div className="monthly-hook">
              <span className="monthly-hook-icon"><Gift size={21} aria-hidden="true" /></span>
              <div>
                <strong>Todo mês tem sorteio por aqui.</strong>
                <span>Entre para participar, acompanhar as lives e ter a chance de ser uma das ganhadoras.</span>
              </div>
            </div>
            <div className="hero-actions">
              <a
                className="button button-primary button-hero"
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                onClick={(event) => handleLeadClick('hero', event)}
                data-testid="cta-hero"
              >
                <MessageCircle size={23} aria-hidden="true" />
                <span>Entrar pelo WhatsApp</span>
                <ArrowRight size={20} aria-hidden="true" />
              </a>
              <a
                className="button button-telegram button-hero"
                href={TELEGRAM_GROUP_URL}
                target="_blank"
                rel="noreferrer"
                onClick={() => handleTelegramClick('hero')}
                data-testid="cta-telegram-hero"
              >
                <Send size={21} aria-hidden="true" />
                <span>Entrar pelo Telegram</span>
              </a>
            </div>
            <div className="trust-line">
              <span><Check size={15} /> 100% grátis</span>
              <span><Check size={15} /> Sem compra obrigatória</span>
              <span><Check size={15} /> Saia quando quiser</span>
            </div>
          </div>

          <div className="hero-visual" aria-label="Exemplo de ofertas recebidas no Clube Delas">
            <div className="visual-spark spark-one">✦</div>
            <div className="visual-spark spark-two">✦</div>
            <div className="deal-sticker"><Tag size={16} /> cupom encontrado!</div>
            <div className="phone">
              <div className="phone-top"><span /><i /></div>
              <div className="chat-header">
                <img src="/logo-clube-delas.webp" alt="" width="38" height="38" decoding="async" />
                <div><strong>Clube Delas Promo</strong><small>comunidade</small></div>
                <BadgeCheck size={19} />
              </div>
              <div className="chat-area">
                <div className="day-pill">HOJE</div>
                <div className="chat-bubble featured">
                  <span className="bubble-label">ACHADINHO DO DIA ✨</span>
                  <strong>Kit skincare com super desconto</strong>
                  <div className="price-row"><s>R$ 129,90</s><b>R$ 69,90</b></div>
                  <small>Preço sujeito a alteração pela loja</small>
                </div>
                <div className="chat-bubble coupon">
                  <span>🎟️ Cupom extra liberado</span>
                  <strong>BELEZA15</strong>
                </div>
                <div className="typing"><i /><i /><i /></div>
              </div>
            </div>
            <div className="save-card"><Heart size={18} fill="currentColor" /><div><b>Seu bolso agradece</b><small>menos busca, mais economia</small></div></div>
          </div>
        </section>

        <section className="ticker" aria-label="Categorias e lojas">
          <span>MODA</span><i>✦</i><span>BELEZA</span><i>✦</i><span>SKINCARE</span><i>✦</i><span>ACESSÓRIOS</span><i>✦</i><span>CASA</span><i>✦</i><span>CUPONS</span>
        </section>

        <section className="problem section-pad">
          <div className="section-heading">
            <span className="kicker">A boa notícia?</span>
            <h2>Você não precisa mais <em>caçar</em> a promoção.</h2>
            <p>Entre rolar feeds, comparar preços e testar cupons vencidos, o barato pode custar horas. O Clube Delas encurta esse caminho.</p>
          </div>
          <div className="benefit-grid">
            {benefits.map(({ icon: Icon, eyebrow, title, text }, index) => (
              <article className={`benefit-card card-${index + 1}`} key={title}>
                <div className="card-icon"><Icon size={25} /></div>
                <span>{eyebrow}</span>
                <h3>{title}</h3>
                <p>{text}</p>
                <b className="card-number">0{index + 1}</b>
              </article>
            ))}
          </div>
        </section>

        <section className="community-section section-pad">
          <div className="community-card">
            <div className="community-copy">
              <span className="kicker light">Além dos descontos</span>
              <h2>Todo mês tem sorteio. E <em>mais de uma ganhadora.</em></h2>
              <p>Entrou em um dos grupos do Clube Delas? Então você já pode participar dos sorteios mensais divulgados por lá. É grátis, simples e sempre tem mais de uma mulher comemorando.</p>
              <div className="community-points">
                <span><Gift size={17} /> Sorteios todo mês</span>
                <span><Trophy size={17} /> Várias ganhadoras</span>
                <span><Radio size={17} /> Lives e ações especiais</span>
                <span><Check size={17} /> Basta entrar no grupo</span>
              </div>
              <a
                className="button button-light"
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                onClick={(event) => handleLeadClick('community', event)}
                data-testid="cta-community"
              >
                Quero entrar e participar <ArrowRight size={19} />
              </a>
            </div>
            <div className="community-art" aria-hidden="true">
              <div className="orbit orbit-one"><span>todo<br /><b>mês</b></span></div>
              <div className="orbit orbit-two"><span>várias<br /><b>ganham</b></span></div>
              <img src="/logo-clube-delas.webp" alt="" loading="lazy" decoding="async" />
              <div className="heart-pop">✦</div>
              <div className="winner-card"><PartyPopper size={18} /><span><b>Mais chances de ganhar</b><small>mais de uma ganhadora por mês</small></span></div>
            </div>
          </div>
        </section>

        <section className="steps section-pad">
          <div className="section-heading compact">
            <span className="kicker">Simples assim</span>
            <h2>Do clique ao achadinho em <em>3 passos.</em></h2>
          </div>
          <div className="step-list">
            <article><b>1</b><div><MessageCircle /><h3>Entre no grupo</h3><p>Escolha WhatsApp ou Telegram e entre com um clique.</p></div></article>
            <span className="step-arrow">→</span>
            <article><b>2</b><div><SearchCheck /><h3>A gente seleciona</h3><p>Cupons e preços bons passam pela nossa curadoria.</p></div></article>
            <span className="step-arrow">→</span>
            <article><b>3</b><div><ShoppingBag /><h3>Você aproveita</h3><p>Gostou? Abra o link e compre direto na loja.</p></div></article>
          </div>
        </section>

        <section className="fit-section section-pad">
          <div className="fit-image">
            <div className="fit-blob"><Sparkles /><span>promo boa<br /><b>é promo útil</b></span></div>
          </div>
          <div className="fit-copy">
            <span className="kicker">Tem a sua cara se...</span>
            <h2>Você ama um achado, mas valoriza o seu tempo.</h2>
            <ul>
              <li><Check /> quer descobrir promoções sem ficar procurando;</li>
              <li><Check /> gosta de moda, beleza, autocuidado e casa;</li>
              <li><Check /> prefere receber só o que pode valer a pena;</li>
              <li><Check /> quer economizar sem complicar sua rotina.</li>
            </ul>
            <p className="fine-note"><Clock3 size={16} /> Preços, estoques e cupons são definidos pelas lojas e podem mudar rapidamente.</p>
          </div>
        </section>

        <section className="faq-section section-pad">
          <div className="section-heading compact">
            <span className="kicker">Sem letras miúdas</span>
            <h2>Ficou alguma <em>dúvida?</em></h2>
          </div>
          <div className="faq-list">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index
              return (
                <article className={isOpen ? 'faq open' : 'faq'} key={faq.question}>
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
                  >
                    <span>{faq.question}</span><ChevronDown aria-hidden="true" />
                  </button>
                  <div id={`faq-answer-${index}`} className="faq-answer"><p>{faq.answer}</p></div>
                </article>
              )
            })}
          </div>
        </section>

        <section className="final-cta section-pad">
          <div className="final-cta-card">
            <div className="final-stars" aria-hidden="true">✦ &nbsp; ✦ &nbsp; ✦</div>
            <img src="/logo-clube-delas.webp" alt="Clube Delas Promo" width="86" height="86" loading="lazy" decoding="async" />
            <span className="kicker light">Seu próximo achado começa aqui</span>
            <h2>Comprar melhor pode ser tão fácil quanto abrir o WhatsApp ou Telegram.</h2>
            <p>Escolha onde prefere receber nossa seleção de promoções todos os dias.</p>
            <div className="final-actions">
              <a
                className="button button-light button-final"
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                onClick={(event) => handleLeadClick('final', event)}
                data-testid="cta-final"
              >
                <MessageCircle size={22} /> Entrar no WhatsApp <ArrowRight size={20} />
              </a>
              <a
                className="button button-telegram button-final"
                href={TELEGRAM_GROUP_URL}
                target="_blank"
                rel="noreferrer"
                onClick={() => handleTelegramClick('final')}
                data-testid="cta-telegram-final"
              >
                <Send size={21} /> Entrar no Telegram
              </a>
            </div>
            <small><ShieldCheck size={15} /> Gratuito. Sem compromisso. Saia quando quiser.</small>
          </div>
        </section>
      </main>

      <footer>
        <a className="brand footer-brand" href="#inicio">
          <img src="/logo-clube-delas.webp" alt="" width="40" height="40" loading="lazy" decoding="async" />
          <span>Clube Delas <b>Promo</b></span>
        </a>
        <p>Não somos uma loja. As condições das ofertas são de responsabilidade dos anunciantes.</p>
        <span>© 2026 Clube Delas Promo</span>
      </footer>

      <div className="mobile-cta">
        <div className="mobile-cta-inner">
          <a
            className="button button-primary"
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            onClick={(event) => handleLeadClick('mobile_sticky', event)}
            data-testid="cta-mobile"
          >
            <MessageCircle size={20} /> WhatsApp
          </a>
          <a
            className="button button-telegram mobile-platform-cta"
            href={TELEGRAM_GROUP_URL}
            target="_blank"
            rel="noreferrer"
            onClick={() => handleTelegramClick('mobile_sticky')}
            data-testid="cta-telegram-mobile"
          >
            <Send size={19} /> Telegram
          </a>
        </div>
      </div>
    </div>
  )
}

export default App
