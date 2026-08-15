'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Safeguarding() {
  return (
    <div className="min-h-screen bg-talea-black text-white font-montserrat">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-talea-orange to-talea-orange/80 py-20 px-6">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto mb-8"
        >
          <Link href="/">
            <motion.button
              whileHover={{ scale: 1.05, x: -5 }}
              whileTap={{ scale: 0.95 }}
              className="text-white font-bebas font-black flex items-center gap-2 hover:text-white/80 transition-all duration-300"
            >
              ← Indietro
            </motion.button>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="font-bebas font-black text-5xl md:text-6xl text-white mb-6 tracking-wider">
            SAFEGUARDING
          </h1>
          <p className="text-lg text-white/90 mb-4">
            Protezione, Dignità e Rispetto nel Basket Femminile
          </p>
          <p className="text-base text-white/80">
            Talea Basket Ostia aderisce pienamente alle politiche di safeguarding della FIP (Federazione Italiana Pallacanestro)
          </p>
        </motion.div>
      </section>

      {/* Main Content */}
      <section className="max-w-5xl mx-auto px-6 py-16 space-y-16">
        
        {/* Responsabile Safeguarding */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-talea-black border-2 border-talea-orange rounded-lg p-8"
        >
          <h2 className="font-bebas font-black text-3xl text-talea-orange mb-6 tracking-wider">
            RESPONSABILE SAFEGUARDING
          </h2>
          
          <div className="space-y-4 text-lg">
            <div>
              <p className="text-talea-orange font-bebas font-black text-xl mb-2">Daniele Carletti</p>
              <p className="text-white/80">Responsabile contro abusi, violenze e discriminazioni</p>
            </div>
            
            <div className="mt-6 bg-talea-orange/10 border border-talea-orange/30 rounded-lg p-6">
              <p className="text-white/90 font-bebas font-bold text-lg mb-3">📧 Contatti per Segnalazioni</p>
              <p className="text-talea-orange font-bold text-xl mb-2">safeguarding@taleabasket.it</p>
              <p className="text-white/70 text-sm">
                Puoi segnalare comportamenti lesivi, abusi, violenze o discriminazioni tramite email. 
                La massima riservatezza e confidenzialità sono garantite.
              </p>
            </div>

            <p className="text-white/70 mt-6 text-sm border-l-4 border-talea-orange pl-4">
              <strong>Nota importante:</strong> In caso di comportamenti che costituiscono reato, 
              l'Associazione ha l'obbligo di notificare i fatti alle forze dell'ordine.
            </p>
          </div>
        </motion.div>

        {/* Modello Organizzativo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div>
            <h2 className="font-bebas font-black text-3xl text-talea-orange mb-4 tracking-wider">
              MODELLO ORGANIZZATIVO FIP
            </h2>
            <p className="text-white/80 text-lg leading-relaxed">
              Talea Basket Ostia ha adottato il Modello Organizzativo e di Controllo dell'Attività Sportiva (Safeguarding) 
              secondo le linee guida della FIP, al fine di promuovere una cultura e un ambiente inclusivo che assicurino 
              la dignità e il rispetto dei diritti di tutti i tesserati, in particolare minori.
            </p>
          </div>

          {/* Diritti e Doveri */}
          <div className="bg-talea-orange/5 border border-talea-orange/20 rounded-lg p-8">
            <h3 className="font-bebas font-black text-2xl text-talea-orange mb-6">DIRITTI E DOVERI</h3>
            
            <div className="space-y-6">
              <div>
                <p className="font-bebas font-bold text-talea-orange text-lg mb-3">✅ DIRITTI RICONOSCIUTI</p>
                <ul className="space-y-2 text-white/80">
                  <li className="flex items-start gap-3">
                    <span className="text-talea-orange mt-1">•</span>
                    <span>Trattamento dignitoso e rispettoso in ogni rapporto e situazione</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-talea-orange mt-1">•</span>
                    <span>Tutela da abusi, molestie, violenze e discriminazioni</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-talea-orange mt-1">•</span>
                    <span>Priorità della salute e del benessere psico-fisico rispetto ai risultati sportivi</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-talea-orange mt-1">•</span>
                    <span>Protezione indipendentemente da etnia, religione, disabilità, orientamento sessuale, età</span>
                  </li>
                </ul>
              </div>

              <div>
                <p className="font-bebas font-bold text-talea-orange text-lg mb-3">📋 DOVERI DEGLI ADERENTI</p>
                <ul className="space-y-2 text-white/80">
                  <li className="flex items-start gap-3">
                    <span className="text-talea-orange mt-1">•</span>
                    <span>Conoscere il presente modello e il Codice di Condotta FIP</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-talea-orange mt-1">•</span>
                    <span>Rispettare i principi di non discriminazione e non violenza</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-talea-orange mt-1">•</span>
                    <span>Segnalare comportamenti lesivi al Responsabile Safeguarding</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-talea-orange mt-1">•</span>
                    <span>Partecipare ai programmi di formazione obbligatori (semestrale)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Comportamenti Rilevanti */}
          <div className="bg-red-900/10 border border-red-500/20 rounded-lg p-8">
            <h3 className="font-bebas font-black text-2xl text-red-400 mb-6">⚠️ COMPORTAMENTI VIETATI</h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="font-bebas font-bold text-red-400 mb-2">Abuso Psicologico</p>
                <p className="text-white/70 text-sm">
                  Aggressione verbale, minacce, confinamento, isolamento, umiliazioni
                </p>
              </div>
              <div>
                <p className="font-bebas font-bold text-red-400 mb-2">Abuso Fisico</p>
                <p className="text-white/70 text-sm">
                  Percorsse, schiaffi, calci, obbligo di attività fisica inappropriata
                </p>
              </div>
              <div>
                <p className="font-bebas font-bold text-red-400 mb-2">Molestia Sessuale</p>
                <p className="text-white/70 text-sm">
                  Comportamenti indesiderati di natura sessuale, osservazioni esplicite
                </p>
              </div>
              <div>
                <p className="font-bebas font-bold text-red-400 mb-2">Abuso Sessuale</p>
                <p className="text-white/70 text-sm">
                  Qualsiasi condotta sessuale senza consenso, costretto o manipolato
                </p>
              </div>
              <div>
                <p className="font-bebas font-bold text-red-400 mb-2">Bullismo/Cyberbullismo</p>
                <p className="text-white/70 text-sm">
                  Comportamenti offensivi ripetuti, isolamento, umiliazioni online
                </p>
              </div>
              <div>
                <p className="font-bebas font-bold text-red-400 mb-2">Discriminazione</p>
                <p className="text-white/70 text-sm">
                  Comportamenti basati su etnia, religione, disabilità, genere, orientamento sessuale
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Misure di Prevenzione */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="font-bebas font-black text-3xl text-talea-orange tracking-wider">
            MISURE DI PREVENZIONE
          </h2>

          <div className="bg-talea-orange/5 border border-talea-orange/20 rounded-lg p-8 space-y-6">
            <div className="border-b border-talea-orange/30 pb-6">
              <p className="font-bebas font-bold text-talea-orange text-lg mb-3">🔍 Verifica Casellario Giudiziario</p>
              <p className="text-white/80 text-sm">
                Allenatori, tecnici, dirigenti e personale a contatto con atleti devono presentare certificati 
                di casellario giudiziario e carichi pendenti (incluso certificato antipedofilia) entro 30 giorni.
              </p>
            </div>

            <div className="border-b border-talea-orange/30 pb-6">
              <p className="font-bebas font-bold text-talea-orange text-lg mb-3">🚪 Uso degli Spazi</p>
              <p className="text-white/80 text-sm">
                Spogliatoi e bagni divisi per genere. Genitori/accompagnatori possono accedere durante gli allenamenti 
                solo con autorizzazione. Accesso ai bagni durante le sessioni vietato (eccetto emergenze mediche).
              </p>
            </div>

            <div className="border-b border-talea-orange/30 pb-6">
              <p className="font-bebas font-bold text-talea-orange text-lg mb-3">💪 Allenamenti</p>
              <p className="text-white/80 text-sm">
                Gli allenamenti singoli sono vietati. Se necessari, devono avvenire con almeno due tecnici presenti 
                e, per minori, con autorizzazione parentale.
              </p>
            </div>

            <div className="pb-6">
              <p className="font-bebas font-bold text-talea-orange text-lg mb-3">✈️ Trasferte</p>
              <p className="text-white/80 text-sm">
                Camere e bagni separati per genere. Minori devono avere almeno un genitore presente o autorizzazione scritta. 
                Accompagnatori devono vigilare costantemente sugli atleti.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Segnalazioni e Tutela */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-talea-orange/20 to-talea-orange/10 border-2 border-talea-orange rounded-lg p-8 space-y-6"
        >
          <h2 className="font-bebas font-black text-3xl text-talea-orange tracking-wider">
            COME SEGNALARE
          </h2>

          <div className="space-y-6">
            <div>
              <p className="font-bebas font-bold text-white text-lg mb-3">📧 Canali di Segnalazione</p>
              <p className="text-white/80 mb-4">
                Puoi segnalare comportamenti lesivi direttamente al Responsabile Safeguarding via email:
              </p>
              <div className="bg-talea-black/50 rounded-lg p-4 border border-talea-orange/50">
                <p className="text-talea-orange font-bebas font-bold text-xl">safeguarding@taleabasket.it</p>
              </div>
            </div>

            <div>
              <p className="font-bebas font-bold text-white text-lg mb-3">🛡️ Protezione del Segnalante</p>
              <p className="text-white/80">
                La massima riservatezza e confidenzialità sono garantite. Nessuna forma di ritorsione o discriminazione 
                sarà tollerata nei confronti di chi segnala in buona fede.
              </p>
            </div>

            <div>
              <p className="font-bebas font-bold text-white text-lg mb-3">📋 Procedura di Gestione</p>
              <p className="text-white/80">
                Tutte le segnalazioni vengono registrate e gestite seguendo procedure rigorose. 
                Le segnalazioni gravi vengono comunicate alle autorità competenti e alle forze dell'ordine.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Privacy e GDPR */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="font-bebas font-black text-3xl text-talea-orange tracking-wider">
            PRIVACY E PROTEZIONE DATI
          </h2>

          <div className="bg-talea-orange/5 border border-talea-orange/20 rounded-lg p-8 space-y-4">
            <p className="text-white/80">
              Talea Basket Ostia tratta i dati personali in conformità al GDPR (Regolamento UE n. 679/2016) 
              e alla policy privacy della società. Tutti i dati raccolti sono gestiti con massima riservatezza 
              e utilizzati esclusivamente per le finalità previste dalla normativa.
            </p>
            <p className="text-white/80">
              I dati personali (incluse categorie particolari come dati sensibili) sono raccolti con consenso esplicito 
              e possono essere trattati solo per le finalità indicate.
            </p>
            <p className="text-white/80">
              Per ulteriori dettagli sulla privacy, consulta la 
              <a href="#privacy" className="text-talea-orange font-bold hover:underline ml-1">
                Policy Privacy Talea Basket
              </a>
            </p>
          </div>
        </motion.div>

        {/* Inclusività */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-talea-black to-talea-black/50 border-2 border-talea-orange rounded-lg p-8"
        >
          <h2 className="font-bebas font-black text-3xl text-talea-orange mb-6 tracking-wider">
            INCLUSIVITÀ E UGUAGLIANZA
          </h2>

          <p className="text-white/80 mb-6">
            Talea Basket Ostia garantisce a tutti i tesserati pari diritti e opportunità, 
            indipendentemente da:
          </p>

          <div className="grid md:grid-cols-2 gap-4 text-white/80 text-sm">
            <div className="flex items-start gap-3">
              <span className="text-talea-orange font-bold">•</span>
              <span>Etnia o nazionalità</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-talea-orange font-bold">•</span>
              <span>Genere o identità di genere</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-talea-orange font-bold">•</span>
              <span>Religione o convinzioni personali</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-talea-orange font-bold">•</span>
              <span>Disabilità fisica o intellettiva</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-talea-orange font-bold">•</span>
              <span>Orientamento sessuale</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-talea-orange font-bold">•</span>
              <span>Condizione economica</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-talea-orange font-bold">•</span>
              <span>Capacità atletica</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-talea-orange font-bold">•</span>
              <span>Età</span>
            </div>
          </div>

          <p className="text-white/80 mt-6 text-sm border-l-4 border-talea-orange pl-4">
            Talea Basket si impegna a favorire l'accesso allo sport per atleti con disabilità 
            e atleti svantaggiati dal punto di vista economico o familiare.
          </p>
        </motion.div>

        {/* Sanzioni Disciplinari */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="font-bebas font-black text-3xl text-talea-orange tracking-wider">
            SISTEMA DISCIPLINARE
          </h2>

          <div className="bg-talea-orange/5 border border-talea-orange/20 rounded-lg p-8">
            <p className="text-white/80 mb-6">
              Le violazioni del presente modello sono sanzionate secondo la gravità dell'infrazione:
            </p>

            <div className="space-y-4">
              <div className="border-l-4 border-talea-orange pl-4">
                <p className="font-bebas font-bold text-talea-orange mb-1">⚠️ Richiamo Verbale</p>
                <p className="text-white/70 text-sm">Per mancanze lievi e negligenza</p>
              </div>
              <div className="border-l-4 border-talea-orange pl-4">
                <p className="font-bebas font-bold text-talea-orange mb-1">📋 Ammonizione Scritta</p>
                <p className="text-white/70 text-sm">Per violazioni recidive</p>
              </div>
              <div className="border-l-4 border-talea-orange pl-4">
                <p className="font-bebas font-bold text-talea-orange mb-1">💰 Multa</p>
                <p className="text-white/70 text-sm">Fino a 5 ore di retribuzione per collaboratori</p>
              </div>
              <div className="border-l-4 border-talea-orange pl-4">
                <p className="font-bebas font-bold text-talea-orange mb-1">⏸️ Sospensione</p>
                <p className="text-white/70 text-sm">Fino a 15 giorni dalle attività e strutture</p>
              </div>
              <div className="border-l-4 border-talea-orange pl-4">
                <p className="font-bebas font-bold text-talea-orange mb-1">🚫 Allontanamento/Radiazione</p>
                <p className="text-white/70 text-sm">Per violazioni gravi e reiterati inadempimenti</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Formazione Obbligatoria */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-talea-orange/10 border-2 border-talea-orange rounded-lg p-8"
        >
          <h2 className="font-bebas font-black text-2xl text-talea-orange mb-6">📚 FORMAZIONE OBBLIGATORIA</h2>
          
          <p className="text-white/80 mb-6">
            Talea Basket organizza programmi di formazione obbligatori con cadenza semestrale 
            per sensibilizzare i tesserati sulle politiche di safeguarding:
          </p>

          <ul className="space-y-3 text-white/80">
            <li className="flex items-start gap-3">
              <span className="text-talea-orange font-bold">✓</span>
              <span>Diritti e doveri dei tesserati</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-talea-orange font-bold">✓</span>
              <span>Prevenzione di abusi, violenze e discriminazioni</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-talea-orange font-bold">✓</span>
              <span>Procedure di segnalazione</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-talea-orange font-bold">✓</span>
              <span>Protezione dei minori</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-talea-orange font-bold">✓</span>
              <span>Inclusività e pari opportunità</span>
            </li>
          </ul>

          <p className="text-white/70 text-sm mt-6 border-l-4 border-talea-orange pl-4">
            La partecipazione è obbligatoria per tutti i tesserati e va provata tramite attestato di frequenza.
          </p>
        </motion.div>

        {/* Link Risorse FIP */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="font-bebas font-black text-3xl text-talea-orange tracking-wider">
            RISORSE E DOCUMENTI FIP
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <a
              href="https://www.fip.it"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-talea-orange/10 border-2 border-talea-orange rounded-lg p-6 hover:bg-talea-orange/20 transition-all duration-300"
            >
              <p className="font-bebas font-bold text-talea-orange text-lg mb-2">🏀 FIP Federazione Italiana Pallacanestro</p>
              <p className="text-white/70 text-sm">Sito ufficiale della FIP con documenti e risorse</p>
            </a>

            <a
              href="https://www.fip.it/news-e-approfondimenti/safeguarding"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-talea-orange/10 border-2 border-talea-orange rounded-lg p-6 hover:bg-talea-orange/20 transition-all duration-300"
            >
              <p className="font-bebas font-bold text-talea-orange text-lg mb-2">🛡️ Politiche Safeguarding FIP</p>
              <p className="text-white/70 text-sm">Linee guida e modelli organizzativi ufficiali</p>
            </a>

            <a
              href="https://www.lazio.fip.it"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-talea-orange/10 border-2 border-talea-orange rounded-lg p-6 hover:bg-talea-orange/20 transition-all duration-300"
            >
              <p className="font-bebas font-bold text-talea-orange text-lg mb-2">🏛️ CR Lazio FIP</p>
              <p className="text-white/70 text-sm">Comitato Regionale Lazio - Federazione Italiana Pallacanestro</p>
            </a>

            <a
              href="mailto:ufficiogarefemminili@lazio.fip.it"
              className="bg-talea-orange/10 border-2 border-talea-orange rounded-lg p-6 hover:bg-talea-orange/20 transition-all duration-300"
            >
              <p className="font-bebas font-bold text-talea-orange text-lg mb-2">📧 Ufficio Gare Femminili CR Lazio</p>
              <p className="text-white/70 text-sm">ufficiogarefemminili@lazio.fip.it</p>
            </a>
          </div>
        </motion.div>

        {/* CTA Contatti */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-talea-orange to-orange-600 rounded-lg p-10 text-center"
        >
          <h2 className="font-bebas font-black text-3xl text-white mb-6 tracking-wider">
            SERVE AIUTO?
          </h2>
          <p className="text-white/90 mb-8 text-lg">
            Contatta il Responsabile Safeguarding di Talea Basket Ostia
          </p>
          <a
            href="mailto:safeguarding@taleabasket.it"
            className="inline-block bg-talea-black hover:bg-talea-black/80 text-talea-orange font-bebas font-black px-10 py-4 rounded-lg transition-all duration-300 uppercase tracking-wider text-lg"
          >
            📧 Invia Segnalazione
          </a>
        </motion.div>

        {/* Footer Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="border-t-2 border-talea-orange/30 pt-10 mt-10 text-center text-white/70 text-sm"
        >
          <p className="mb-2">
            Questo documento è valido dal 2024 e viene aggiornato regolarmente 
            in conformità alle disposizioni FIP.
          </p>
          <p className="mb-8">
            Per informazioni sulla privacy, consulta la 
            <a href="#privacy" className="text-talea-orange font-bold hover:underline ml-1">
              Policy Privacy Talea Basket
            </a>
          </p>

          {/* Pulsante Torna alla Home */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Link href="/">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-talea-orange hover:bg-orange-600 text-white font-bebas font-black px-8 py-3 rounded-lg transition-all duration-300 uppercase tracking-wider text-sm"
              >
                ← Torna alla Home
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </div>
  )
}
