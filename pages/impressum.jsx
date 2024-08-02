import Link from 'next/link'
import Meta from '../components/Meta'
import React from 'react'

const impressum = () => {
  return (
    <>
      <Meta
        pageTitle="Impressum von CleanApps - Informationen gemäß § 5 TMG"
        description="Datenschutz bei CleanApps - Unsere Verpflichtung zum Schutz Ihrer Daten - Die Inhalte dieser Website sind urheberrechtlich geschützt"
        cLink='https://www.cleanapps.eu/impressum'
      />

      <section className="impressum">

        <div className="u-wrap-text--small max-w-[560px] ml-auto mr-auto mt-20 pl-4 pr-4">

          <h1 className="impressum__header text-center w-fit mb-6 uppercase text-[1.5rem] md:text-[3rem]   md:mb-9">Impressum
          </h1>
          {/*     position: sticky;
    top: 10px;
    z-index: 50; */}


          <p className='break-normal pb-6'>Allgemeine Informationen gemäß § 5 TMG:</p>

          <p className='pb-6'><strong>Clean Apps</strong><br />Halil Esmer<br />Oberlandgarten 5<br />12099 Berlin</p>

          <h2 className='uppercase text-xl mb-2'><strong>Kontakt</strong></h2>

          <p className='pb-6'>
            <Link className='text-[#fb6302]' href="mailto:service@cleanapps.eu">service@cleanapps.eu
            </Link>
            <br />
            <Link className='text-[#fb6302]' href="https://www.cleanapps.eu/">cleanapps.eu</Link>
            <br />
            <Link className='text-[#fb6302]' href={`tel:${'015678283091'}`}>0156 78 28 30 91</Link>
          </p>

          <p className='pb-6'>
            <strong>Geschäftsführer / Inhaber:</strong> Halil Esmer
            <br />
            <strong>Inhaltlich Verantwortliche gemäß § 55 Abs. 2 RStV:</strong> Halil Esmer, Anschrift wie oben.
            {/* <br /> */}
            {/* <strong>Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz:</strong> DE 00000000 */}
            {/* <br /> */}
            {/* <strong>D-U-N-S® Nummer:</strong> 00-000-000 */}
          </p>

          <p className='pb-6'>Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>

          <h3 className="has-text-align-left font-bold">Haftungsausschluss</h3>

          <h4 className='pb-6 font-semibold'>Haftung für Inhalte</h4>

          <p className='pb-6'>Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.</p>

          <p className='pb-6'>Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.</p>

          <h4 className='pb-6 font-bold'>Haftung für Links</h4>

          <p className='pb-6'>Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.</p>

          <p className='pb-6'>Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.</p>

          <h4 className='pb-6 font-bold'>Urheberrecht</h4>

          <p className='pb-6'>Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.</p>

          <p className='pb-6'>Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Solltest du trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.</p>
        </div>
      </section>
    </>
  )
}

export default impressum