import { Check, Copy, FileText, Mail } from 'lucide-react'
import { profile } from '../data/profile'
import { GithubIcon, TelegramIcon } from '../components/BrandIcons'
import { Reveal } from '../components/Reveal'
import { useCopy } from '../hooks/useCopy'
import { emailAddress, filledSocials } from '../lib/socials'
import { externalProps, isSafeUrl } from '../lib/utils'

export function Contact() {
  const { state, copy } = useCopy()
  const contacts = filledSocials()
  const email = emailAddress()
  const resume = profile.resumeUrl && isSafeUrl(profile.resumeUrl) ? profile.resumeUrl : undefined
  const empty = contacts.length === 0 && !resume

  return (
    <section id="contact" className="section" aria-labelledby="contact-title" tabIndex={-1}>
      <div className="wrap">
        <Reveal>
          <div className="contact-box grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
            <div className="grid content-start gap-6">
              <p className="eyebrow">07 — Контакты</p>
              <h2 id="contact-title" className="h2" style={{ maxWidth: '14ch' }}>
                Есть интересная идея? Давай обсудим
              </h2>
              <p className="lead">
                Открыт к новым техническим задачам, интересным проектам и профессиональному развитию.
              </p>

              {(email || resume) && (
                <div className="flex flex-wrap gap-3 pt-2">
                  {email && (
                    <>
                      <a className="btn btn-primary" href={`mailto:${email}`}>
                        <Mail size={18} aria-hidden="true" />
                        Написать письмо
                      </a>
                      <button type="button" className="btn btn-ghost" onClick={() => copy(email)}>
                        {state === 'copied' ? <Check size={18} aria-hidden="true" /> : <Copy size={18} aria-hidden="true" />}
                        Скопировать email
                      </button>
                    </>
                  )}
                  {resume && (
                    <a className="btn btn-ghost" href={resume} download {...externalProps(resume)}>
                      <FileText size={18} aria-hidden="true" />
                      Резюме (PDF)
                    </a>
                  )}
                </div>
              )}
            </div>

            <div className="grid content-start">
              {empty ? (
                import.meta.env.DEV ? (
                  <p className="dev-note">
                    Режим разработки: контакты не заполнены, в сборке этот блок скрыт. Укажите их в
                    src/data/socials.ts (email, Telegram, GitHub).
                  </p>
                ) : (
                  <p className="empty-note">Контактные данные скоро появятся на этой странице.</p>
                )
              ) : (
                <ul className="m-0 list-none p-0">
                  {contacts.map((item) => (
                    <li key={item.kind}>
                      {item.kind === 'email' ? (
                        <div className="contact-row">
                          <span className="grid gap-1">
                            <span className="k">{item.label}</span>
                            <span className="v">{item.value}</span>
                          </span>
                        </div>
                      ) : (
                        <a className="contact-row" href={item.href} {...externalProps(item.href)}>
                          <span className="grid gap-1">
                            <span className="k">{item.label}</span>
                            <span className="v">{item.value}</span>
                          </span>
                          {item.kind === 'github' ? <GithubIcon /> : <TelegramIcon />}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </Reveal>
      </div>

      <div role="status" aria-live="polite">
        {state === 'copied' && (
          <div className="toast">
            <Check size={18} className="text-ok" aria-hidden="true" />
            Email скопирован в буфер обмена
          </div>
        )}
        {state === 'failed' && (
          <div className="toast">Не удалось скопировать. Выделите адрес и скопируйте вручную.</div>
        )}
      </div>
    </section>
  )
}
