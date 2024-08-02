import Link from 'next/link'
import Meta from '../components/Meta'
import React from 'react'

const Privacy = () => {
  return (
    <>
      <Meta
        pageTitle="Benutzerdatenschutz bei CleanApps"
        description="Wir sammeln nur die Daten, die für die Erbringung unserer Dienstleistungen erforderlich sind."
        cLink='https://www.cleanapps.eu/privacy'
      />
      <section className="privacy">
        <div className="u-wrap-text--small max-w-[560px] ml-auto mr-auto  mt-20 pl-4 pr-4 [&>p]:pb-5 [&>h3]:font-bold [&>h2]:font-bold [&>a]:mb-20 break-words ">

          <h1 className="privacy__header text-center w-fit mb-6 uppercase text-[1.5rem] md:text-[3rem]   md:mb-9">Datenschutzerklärung</h1>

          {/* <p className="rcb-sc-link rcb-sc-link-change"><br /><Link className='text-[#fb6302]' href="#change" id="rcb-sc-link-change" >Privatsphäre-Einstellungen ändern</Link>
            <br />
            <Link className='rcb-sc-link rcb-sc-link-history pb-6 text-[#fb6302]' href="#history" id="rcb-sc-link-history" >Historie der Privatsphäre-Einstellungen</Link><br />

            <Link href="#revoke" id="rcb-sc-link-revoke" data-success-message="Du hast die Einwilligung erfolgreich widerrufen. Die Seite wird nun neu geladen." className="rcb-sc-link rcb-sc-link-revoke  pb-6 text-[#fb6302]">Einwilligungen widerrufen</Link>

          </p> */}

          <h2 >Allgemeiner Hinweis und Pflichtinformationen</h2>

          <h3>Benennung der verantwortlichen Stelle</h3>

          <p>Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:</p>

          <p><strong>Clean Apps</strong><br />Halil Esmer<br />Oberlandgarten 5<br />12099 Berlin</p>

          <p>Die verantwortliche Stelle entscheidet allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z.B. Namen, Kontaktdaten o. Ä.).</p>

          <h3>Widerruf Ihrer Einwilligung zur Datenverarbeitung</h3>

          <p>Nur mit Ihrer ausdrücklichen Einwilligung sind einige Vorgänge der Datenverarbeitung möglich. Ein Widerruf Ihrer bereits erteilten Einwilligung ist jederzeit möglich. Für den Widerruf genügt eine formlose Mitteilung per E-Mail. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.</p>

          <h3>Recht auf Beschwerde bei der zuständigen Aufsichtsbehörde</h3>

          <p className='break-word'>ls Betroffener steht Ihnen im Falle eines datenschutzrechtlichen Verstoßes ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu. Zuständige Aufsichtsbehörde bezüglich datenschutzrechtlicher Fragen ist der Landesdatenschutzbeauftragte des Bundeslandes, in dem sich der Sitz unseres Unternehmens befindet. Der folgende Link stellt eine Liste der Datenschutzbeauftragten sowie deren Kontaktdaten bereit: <Link  href="https://www.bfdi.bund.de/DE/Infothek/Anschriften_Links/anschriften_links-node.html" target="_blank" rel="noreferrer noopener">https://www.bfdi.bund.de/DE/Infothek/Anschriften_Links/anschriften_links-node.html</Link></p>

          <h3>Recht auf Datenübertragbarkeit</h3>

          <p>Ihnen steht das Recht zu, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung eines Vertrags automatisiert verarbeiten, an sich oder an Dritte aushändigen zu lassen. Die Bereitstellung erfolgt in einem maschinenlesbaren Format. Sofern Sie die direkte Übertragung der Daten an einen anderen Verantwortlichen verlangen, erfolgt dies nur, soweit es technisch machbar ist.</p>

          <h3>Recht auf Auskunft, Berichtigung, Sperrung, Löschung</h3>

          <p>Sie haben jederzeit im Rahmen der geltenden gesetzlichen Bestimmungen das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, Herkunft der Daten, deren Empfänger und den Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung, Sperrung oder Löschung dieser Daten. Diesbezüglich und auch zu weiteren Fragen zum Thema personenbezogene Daten können Sie sich jederzeit über die im Impressum aufgeführten Kontaktmöglichkeiten an uns wenden.</p>

          <h3>SSL- bzw. TLS-Verschlüsselung</h3>

          <p>Aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte, die Sie an uns als Seitenbetreiber senden, nutzt unsere Website eine SSL-bzw. TLS-Verschlüsselung. Damit sind Daten, die Sie über diese Website übermitteln, für Dritte nicht mitlesbar. Sie erkennen eine verschlüsselte Verbindung an der „https://“ Adresszeile Ihres Browsers und am Schloss-Symbol in der Browserzeile.</p>

          <h3>Server-Log-Dateien</h3>

          <p>In Server-Log-Dateien erhebt und speichert der Provider der Website automatisch Informationen, die Ihr Browser automatisch an uns übermittelt. Dies sind:</p>

          <ul><li>Browsertyp und Browserversion</li><li>Verwendetes Betriebssystem</li><li>Referrer URL</li><li>Hostname des zugreifenden Rechners</li><li>Uhrzeit der Serveranfrage</li><li>IP-Adresse</li></ul>

          <p>Es findet keine Zusammenführung dieser Daten mit anderen Datenquellen statt. Grundlage der Datenverarbeitung bildet Art. 6 Abs. 1 lit. b DSGVO, der die Verarbeitung von Daten zur Erfüllung eines Vertrags oder vorvertraglicher Maßnahmen gestattet.</p>

          <h3>Datenübermittlung bei Vertragsschluss für Warenkauf und Warenversand</h3>

          <p>Personenbezogene Daten werden nur an Dritte nur übermittelt, sofern eine Notwendigkeit im Rahmen der Vertragsabwicklung besteht. Dritte können beispielsweise Bezahldienstleister oder Logistikunternehmen sein. Eine weitergehende Übermittlung der Daten findet nicht statt bzw. nur dann, wenn Sie dieser ausdrücklich zugestimmt haben.</p>

          <p>Grundlage für die Datenverarbeitung ist Art. 6 Abs. 1 lit. b DSGVO, der die Verarbeitung von Daten zur Erfüllung eines Vertrags oder vorvertraglicher Maßnahmen gestattet.</p>

          {/* <h3>Registrierung auf dieser Website</h3>

          <p>Zur Nutzung bestimmter Funktionen können Sie sich auf unserer Website registrieren. Die übermittelten Daten dienen ausschließlich zum Zwecke der Nutzung des jeweiligen Angebotes oder Dienstes. Bei der Registrierung abgefragte Pflichtangaben sind vollständig anzugeben. Andernfalls werden wir die Registrierung ablehnen.</p>

          <p>Im Falle wichtiger Änderungen, etwa aus technischen Gründen, informieren wir Sie per E-Mail. Die E-Mail wird an die Adresse versendet, die bei der Registrierung angegeben wurde.</p>

          <p>Die Verarbeitung der bei der Registrierung eingegebenen Daten erfolgt auf Grundlage Ihrer Einwilligung (Art. 6 Abs. 1 lit. Link DSGVO). Ein Widerruf Ihrer bereits erteilten Einwilligung ist jederzeit möglich. Für den Widerruf genügt eine formlose Mitteilung per E-Mail. Die Rechtmäßigkeit der bereits erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.</p>

          <p>Wir speichern die bei der Registrierung erfassten Daten während des Zeitraums, den Sie auf unserer Website registriert sind. Ihren Daten werden gelöscht, sollten Sie Ihre Registrierung aufheben. Gesetzliche Aufbewahrungsfristen bleiben unberührt.</p> */}

          <h3>Kontaktformular</h3>

          <p>Per Kontaktformular übermittelte Daten werden einschließlich Ihrer Kontaktdaten gespeichert, um Ihre Anfrage bearbeiten zu können oder um für Anschlussfragen bereitzustehen. Eine Weitergabe dieser Daten findet ohne Ihre Einwilligung nicht statt.</p>

          <p>Die Verarbeitung der in das Kontaktformular eingegebenen Daten erfolgt ausschließlich auf Grundlage Ihrer Einwilligung (Art. 6 Abs. 1 lit. Link DSGVO). Ein Widerruf Ihrer bereits erteilten Einwilligung ist jederzeit möglich. Für den Widerruf genügt eine formlose Mitteilung per E-Mail. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitungsvorgänge bleibt vom Widerruf unberührt.</p>

          <p>Über das Kontaktformular übermittelte Daten verbleiben bei uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder keine Notwendigkeit der Datenspeicherung mehr besteht. Zwingende gesetzliche Bestimmungen – insbesondere Aufbewahrungsfristen – bleiben unberührt.</p>

          {/* <h3>Speicherdauer von Beiträgen und Kommentaren</h3>

          <p>Beiträge und Kommentare sowie damit in Verbindung stehende Daten, wie beispielsweise IP-Adressen, werden gespeichert. Der Inhalt verbleibt auf unserer Website, bis er vollständig gelöscht wurde oder aus rechtlichen Gründen gelöscht werden musste.</p>

          <p>Die Speicherung der Beiträge und Kommentare erfolgt auf Grundlage Ihrer Einwilligung (Art. 6 Abs. 1 lit. Link DSGVO). Ein Widerruf Ihrer bereits erteilten Einwilligung ist jederzeit möglich. Für den Widerruf genügt eine formlose Mitteilung per E-Mail. Die Rechtmäßigkeit bereits erfolgter Datenverarbeitungsvorgänge bleibt vom Widerruf unberührt.</p>

          <h3>Abonnieren von Kommentaren</h3>

          <p>Sie können als Nutzer unserer Website nach erfolgter Anmeldung Kommentare abonnieren. Mit einer Bestätigungs-E-Mail prüfen wir, ob Sie der Inhaber der angegebenen E-Mail-Adresse sind. Sie können die Abo-Funktion für Kommentare jederzeit über einen Link, der sich in einer Abo-Mail befindet, abbestellen. Zur Einrichtung des Abonnements eingegebene Daten werden im Falle der Abmeldung gelöscht. Sollten diese Daten für andere Zwecke und an anderer Stelle an uns übermittelt worden sein, verbleiben diese weiterhin bei uns.</p>

          <h3>Newsletter-Daten</h3>

          <p>Zum Versenden unseres Newsletters benötigen wir von Ihnen eine E-Mail-Adresse. Eine Verifizierung der angegebenen E-Mail-Adresse ist notwendig und der Empfang des Newsletters ist einzuwilligen. Ergänzende Daten werden nicht erhoben oder sind freiwillig. Die Verwendung der Daten erfolgt ausschließlich für den Versand des Newsletters.</p>

          <p>Die bei der Newsletteranmeldung gemachten Daten werden ausschließlich auf Grundlage Ihrer Einwilligung (Art. 6 Abs. 1 lit. Link DSGVO) verarbeitet. Ein Widerruf Ihrer bereits erteilten Einwilligung ist jederzeit möglich. Für den Widerruf genügt eine formlose Mitteilung per E-Mail oder Sie melden sich über den „Austragen“-Link im Newsletter ab. Die Rechtmäßigkeit der bereits erfolgten Datenverarbeitungsvorgänge bleibt vom Widerruf unberührt.</p>

          <p>Zur Einrichtung des Abonnements eingegebene Daten werden im Falle der Abmeldung gelöscht. Sollten diese Daten für andere Zwecke und an anderer Stelle an uns übermittelt worden sein, verbleiben diese weiterhin bei uns.</p>

          <h3>YouTube</h3>

          <p>Für Integration und Darstellung von Videoinhalten nutzt unsere Website Plugins von YouTube. Anbieter des Videoportals ist die YouTube, LLC, 901 Cherry Ave., San Bruno, CA 94066, USA.</p>

          <p>Bei Aufruf einer Seite mit integriertem YouTube-Plugin wird eine Verbindung zu den Servern von YouTube hergestellt. YouTube erfährt hierdurch, welche unserer Seiten Sie aufgerufen haben.</p>

          <p>YouTube kann Ihr Surfverhalten direkt Ihrem persönlichen Profil zuzuordnen, sollten Sie in Ihrem YouTube Konto eingeloggt sein. Durch vorheriges Ausloggen haben Sie die Möglichkeit, dies zu unterbinden.</p>

          <p>Die Nutzung von YouTube erfolgt im Interesse einer ansprechenden Darstellung unserer Online-Angebote. Dies stellt ein berechtigtes Interesse im Sinne von Art. 6 Abs. 1 lit. f DSGVO dar.</p>

          <p>Einzelheiten zum Umgang mit Nutzerdaten finden Sie in der Datenschutzerklärung von YouTube unter: <Link href="https://www.google.de/intl/de/policies/privacy">https://www.google.de/intl/de/policies/privacy</Link></p>

          <h3>Vimeo</h3>

          <p>Für Integration und Darstellung von Videoinhalten nutzt unsere Website Plugins von Vimeo. Anbieter des Videoportals ist die Vimeo Inc., 555 West 18th Street, New York, New York 10011, USA.</p>

          <p>Bei Aufruf einer Seite mit integriertem Vimeo-Plugin wird eine Verbindung zu den Servern von Vimeo hergestellt. Vimeo erfährt hierdurch, welche unserer Seiten Sie aufgerufen haben. Vimeo erfährt Ihre IP-Adresse, selbst wenn Sie nicht beim Videoportal eingeloggt sind oder dort kein Konto besitzen. Es erfolgt eine Übermittlung der von Vimeo erfassten Informationen an Server des Videoportals in den USA.</p>

          <p>Vimeo kann Ihr Surfverhalten direkt Ihrem persönlichen Profil zuordnen. Durch vorheriges Ausloggen haben Sie die Möglichkeit, dies zu unterbinden.</p>

          <p>Einzelheiten zum Umgang mit Nutzerdaten finden Sie in der Datenschutzerklärung von Vimeo unter: <Link href="https://vimeo.com/privacy">https://vimeo.com/privacy</Link></p>

          <h3>Cookies</h3>

          <p>Unsere Website verwendet Cookies. Das sind kleine Textdateien, die Ihr Webbrowser auf Ihrem Endgerät speichert. Cookies helfen uns dabei, unser Angebot nutzerfreundlicher, effektiver und sicherer zu machen.</p>

          <p>Einige Cookies sind “Session-Cookies.” Solche Cookies werden nach Ende Ihrer Browser-Sitzung von selbst gelöscht. Hingegen bleiben andere Cookies auf Ihrem Endgerät bestehen, bis Sie diese selbst löschen. Solche Cookies helfen uns, Sie bei Rückkehr auf unserer Website wiederzuerkennen.</p>

          <p>Mit einem modernen Webbrowser können Sie das Setzen von Cookies überwachen, einschränken oder unterbinden. Viele Webbrowser lassen sich so konfigurieren, dass Cookies mit dem Schließen des Programms von selbst gelöscht werden. Die Deaktivierung von Cookies kann eine eingeschränkte Funktionalität unserer Website zur Folge haben.</p>

          <p>Das Setzen von Cookies, die zur Ausübung elektronischer Kommunikationsvorgänge oder der Bereitstellung bestimmter, von Ihnen erwünschter Funktionen (z.B. Warenkorb) notwendig sind, erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Als Betreiber dieser Website haben wir ein berechtigtes Interesse an der Speicherung von Cookies zur technisch fehlerfreien und reibungslosen Bereitstellung unserer Dienste. Sofern die Setzung anderer Cookies (z.B. für Analyse-Funktionen) erfolgt, werden diese in dieser Datenschutzerklärung separat behandelt.</p>

          <h3>Google Analytics</h3>

          <p>Unsere Website verwendet Funktionen des Webanalysedienstes Google Analytics. Anbieter des Webanalysedienstes ist die Google Inc., 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA.</p>

          <p>Google Analytics verwendet „Cookies.“ Das sind kleine Textdateien, die Ihr Webbrowser auf Ihrem Endgerät speichert und eine Analyse der Website-Benutzung ermöglichen. Mittels Cookie erzeugte Informationen über Ihre Benutzung unserer Website werden an einen Server von Google übermittelt und dort gespeichert. Server-Standort ist im Regelfall die USA.</p>

          <p>Das Setzen von Google-Analytics-Cookies erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Als Betreiber dieser Website haben wir &nbsp;ein berechtigtes Interesse an der Analyse des Nutzerverhaltens, um unser Webangebot und ggf. auch Werbung zu optimieren.</p>

          <h4>IP-Anonymisierung</h4>

          <p>Wir setzen Google Analytics in Verbindung mit der Funktion IP-Anonymisierung ein. Sie gewährleistet, dass Google Ihre IP-Adresse innerhalb von Mitgliedstaaten der Europäischen Union oder in anderen Vertragsstaaten des Abkommens über den Europäischen Wirtschaftsraum vor der Übermittlung in die USA kürzt. Es kann Ausnahmefälle geben, in denen Google die volle IP-Adresse an einen Server in den USA überträgt und dort kürzt. In unserem Auftrag wird Google diese Informationen benutzen, um Ihre Nutzung der Website auszuwerten, um Reports über Websiteaktivitäten zu erstellen und um weitere mit der Websitenutzung und der Internetnutzung verbundene Dienstleistungen gegenüber uns zu erbringen. Es findet keine Zusammenführung der von Google Analytics übermittelten IP-Adresse mit anderen Daten von Google statt.</p>

          <h4>Browser Plugin</h4>

          <p>Das Setzen von Cookies durch Ihren Webbrowser ist verhinderbar. Einige Funktionen unserer Website könnten dadurch jedoch eingeschränkt werden. Ebenso können Sie die Erfassung von Daten bezüglich Ihrer Website-Nutzung einschließlich Ihrer IP-Adresse mitsamt anschließender Verarbeitung durch Google unterbinden. Dies ist möglich, indem Sie das über folgenden Link erreichbare Browser-Plugin herunterladen und installieren: <Link href="https://tools.google.com/dlpage/gaoptout?hl=de">https://tools.google.com/dlpage/gaoptout?hl=de</Link>&nbsp;bzw. [ga-optout text=“Google Analytics deaktivieren“]</p>

          <h4>Widerspruch gegen die Datenerfassung</h4>

          <p>Sie können die Erfassung Ihrer Daten durch Google Analytics verhindern, indem Sie auf folgenden Link klicken. Es wird ein Opt-Out-Cookie gesetzt, der die Erfassung Ihrer Daten bei zukünftigen Besuchen unserer Website verhindert: Google Analytics deaktivieren.</p>

          <p>Einzelheiten zum Umgang mit Nutzerdaten bei Google Analytics finden Sie in der Datenschutzerklärung von Google: <Link href="https://support.google.com/analytics/answer/6004245?hl=de">https://support.google.com/analytics/answer/6004245?hl=de</Link>.</p>

          <h4>Auftragsverarbeitung</h4>

          <p>Zur vollständigen Erfüllung der gesetzlichen Datenschutzvorgaben haben wir mit Google einen Vertrag über die Auftragsverarbeitung abgeschlossen.</p>

          <h4>Demografische Merkmale bei Google Analytics</h4>

          <p>Unsere Website verwendet die Funktion “demografische Merkmale” von Google Analytics. Mit ihr lassen sich Berichte erstellen, die Aussagen zu Alter, Geschlecht und Interessen der Seitenbesucher enthalten. Diese Daten stammen aus interessenbezogener Werbung von Google sowie aus Besucherdaten von Drittanbietern. Eine Zuordnung der Daten zu einer bestimmten Person ist nicht möglich. Sie können diese Funktion jederzeit deaktivieren. Dies ist über die Anzeigeneinstellungen in Ihrem Google-Konto möglich oder indem Sie die Erfassung Ihrer Daten durch Google Analytics, wie im Punkt “Widerspruch gegen die Datenerfassung” erläutert, generell untersagen.</p>

          <h3>Matomo (ehemals Piwik)</h3>

          <p>Unsere Website verwendet den Webanalysedienst Matomo. Matomo ist eine Open Source Lösung.</p>

          <p>Matomo verwendet „Cookies.“ Das sind kleine Textdateien, die Ihr Webbrowser auf Ihrem Endgerät speichert und die eine Analyse der Website-Benutzung ermöglichen. Mittels Cookie erzeugte Informationen über die Benutzung unserer Website werden
            auf unserem Server gespeichert. Vor der Speicherung erfolgt eine Anonymisierung Ihrer IP-Adresse.</p>

          <p>Cookies von Matomo verbleiben auf Ihrem Endgerät, bis Sie eine Löschung vornehmen.</p>

          <p>Das Setzen von Matomo-Cookies erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Als Betreiber dieser Website haben wir ein berechtigtes Interesse an der anonymisierten Analyse des Nutzerverhaltens, um sowohl unser Webangebot und ggf. auch Werbung zu optimieren.</p>

          <p>Es erfolgt keine Weitergabe der im Matomo-Cookie gespeicherten Informationen über die Benutzung dieser Website. Das Setzen von Cookies durch Ihren Webbrowser ist verhinderbar. Einige Funktionen unserer Website könnten dadurch jedoch eingeschränkt werden. </p>

          <p>Sie können hier die Speicherung und Nutzung Ihrer Daten deaktivieren. Ihr Browser setzt ein Opt-Out-Cookie, welches die Speicherung von Matomo Nutzungsdaten unterbindet. Wenn Sie Ihre Cookies löschen, wird auch das Matomo Opt-Out-Cookie entfernt. Bei einem erneuten Besuch unserer Website ist das Opt-Out-Cookie zur Unterbindung der Speicherung und Nutzung Ihrer Daten erneut zu setzen.</p>

          <h3>PayPal</h3>

          <p>Unsere Website ermöglicht die Bezahlung via PayPal. Anbieter des Bezahldienstes ist die PayPal (Europe) S.à.r.l. et Cie, S.C.A., 22-24 Boulevard Royal, L-2449 Luxembourg.</p>

          <p>Wenn Sie mit PayPal bezahlen, erfolgt eine Übermittlung der von Ihnen eingegebenen Zahlungsdaten an PayPal.</p>

          <p>Die Übermittlung Ihrer Daten an PayPal erfolgt auf Grundlage von Art. 6 Abs. 1 lit. Link DSGVO (Einwilligung) und Art. 6 Abs. 1 lit. b DSGVO (Verarbeitung zur Erfüllung eines Vertrags). Ein Widerruf Ihrer bereits erteilten Einwilligung ist jederzeit möglich. In der Vergangenheit liegende Datenverarbeitungsvorgänge bleiben bei einem Widerruf wirksam.</p>

          <h3>Sofortüberweisung</h3>

          <p>Unsere Website ermöglicht die Bezahlung via “Sofortüberweisung.” Anbieter des Bezahldienstes ist die Sofort GmbH, Theresienhöhe 12, 80339 München.</p>

          <p>Mit Hilfe des Verfahrens “Sofortüberweisung” erhalten wir in Echtzeit eine Zahlungsbestätigung von der Sofort GmbH und können unverzüglich mit der Erfüllung unserer Verbindlichkeiten beginnen.</p>

          <p>Beim Bezahlen per “Sofortüberweisung” erfolgt eine Übermittlung Ihrer PIN und TAN an die Sofort GmbH. Der Bezahlanbieter loggt sich damit in Ihr Online-Banking-Konto ein, überprüft automatisch Ihren Kontostand und nimmt die Überweisung vor. Es folgt eine unverzügliche Transaktionsbestätigung. Ihre Umsätze, der Kreditrahmen Ihres Dispokredits und die Existenz anderer Konten sowie deren Bestände werden nach dem Einloggen ebenfalls automatisiert geprüft.</p>

          <p>Neben PIN und TAN umfasst die Übermittlung an die Sofort GmbH außerdem Zahlungsdaten sowie Daten zu Ihrer Person. Die Daten zu Ihrer Person umfassen Vor- und Nachname, Adresse, Telefonnummer(n), Email-Adresse, IP-Adresse und ggf. weitere für die Zahlungsabwicklung
            notwendige Daten. Es besteht eine Notwendigkeit dieser Datenübermittlung, um Ihre Identität zweifelsfrei zu festzustellen und Betrugsversuchen vorzubeugen.</p>

          <p>Die Übermittlung Ihrer Daten an die Sofort GmbH erfolgt auf Grundlage von Art. 6 Abs. 1 lit. Link DSGVO (Einwilligung) und Art. 6 Abs. 1 lit. b DSGVO (Verarbeitung zur Erfüllung eines Vertrags). Ein Widerruf Ihrer bereits erteilten Einwilligung ist jederzeit möglich. In der Vergangenheit liegende Datenverarbeitungsvorgänge bleiben bei einem Widerruf wirksam.</p>

          <p>Einzelheiten zur Zahlung mit Sofortüberweisung finden Sie unter: <Link href="https://www.sofort.de/datenschutz.html">https://www.sofort.de/datenschutz.html</Link> und <Link href="https://www.klarna.com/sofort/">https://www.klarna.com/sofort/</Link>.</p>

          <h3>Amazon Partnerprogramm</h3>

          <p>Als Betreiber dieser Website nehmen wir am Amazon EU-Partnerprogramm teil. Auf unseren Seiten sind Werbeanzeigen von Amazon sowie Links zu Amazon eingebunden, um damit Geld über Werbekostenerstattungen zu verdienen. Es gelangen Amazon-Cookies zum Einsatz, wodurch Amazon erkennt, dass Sie einen Partnerlink auf unserer Website geklickt haben.</p>

          <p>Die Speicherung von “Amazon-Cookies” erfolgt auf Grundlage von Art. 6 lit. f DSGVO. Als Websitebetreiber haben wir hieran ein berechtigtes Interesse, da nur durch die Cookies die Höhe der Werbekostenerstattung feststellbar ist.</p>

          <p>Einzelheiten zur Datennutzung durch Amazon finden Sie in der Amazon Datenschutzerklärung: <Link href="https://www.amazon.de/gp/help/customer/display.html/ref=footer_privacy?ie=UTF8&amp;nodeId=3312401">https://www.amazon.de/gp/help/customer/display.html/ref=footer_privacy?ie=UTF8&amp;nodeId=3312401</Link>.</p>

          <h3>Google AdSense</h3>

          <p>Unsere Website verwendet Google AdSense. Anbieter ist die Google Inc., 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA.</p>

          <p>Google AdSense dient der Einbindung von Werbeanzeigen und setzt Cookies. Cookies sind kleine Textdateien, die Ihr Webbrowser auf Ihrem Endgerät speichert, um die Nutzung der Website analysieren. Google AdSense setzt außerdem Web Beacons ein. Web Beacons sind unsichtbare Grafiken, die eine Analyse des Besucherverkehrs auf unserer Wesite ermöglichen.</p>

          <p>Durch Cookies und Web Beacons erzeugten Informationen werden an Server von Google übertragen und dort gespeichert. Serverstandort sind die USA. Google kann diese Informationen an Vertragspartner weiterreichen. Ihre IP-Adresse wird Google jedoch nicht mit anderen von Ihnen gespeicherten Daten zusammenführen.</p>

          <p>Die Speicherung von AdSense-Cookies erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Wir als Websitebetreiber haben ein berechtigtes Interesse an der Analyse des Nutzerverhaltens, um unser Webangebot und unsere Werbung zu optimieren.</p>

          <p>Mit einem modernen Webbrowser können Sie das Setzen von Cookies überwachen, einschränken und unterbinden. Die Deaktivierung von Cookies kann eine eingeschränkte Funktionalität unserer Website zur Folge haben. Durch die Nutzung unserer Website erklären Sie sich mit der Bearbeitung der über Sie erhobenen Daten durch Google in der zuvor beschriebenen Art und Weise sowie dem zuvor benannten Zweck einverstanden.</p>

          <h3>Google AdWords und Google Conversion-Tracking</h3>

          <p>Unsere Website verwendet Google AdWords. Anbieter ist die Google Inc., 1600 Amphitheatre Parkway, Mountain View, CA 94043, United States.</p>

          <p>AdWords ist ein Online-Werbeprogramm. Im Rahmen des Online-Werbeprogramms arbeiten wir mit Conversion-Tracking. Nach einem Klick auf eine von Google geschaltete Anzeige wird ein Cookie für das Conversion-Tracking gesetzt. Cookies sind kleine Textdateien,
            die Ihr Webbrowser auf Ihrem Endgerät speichert. Google AdWords Cookies verlieren nach 30 Tagen ihre Gültigkeit und dienen nicht der persönlichen Identifizierung der Nutzer. Am Cookie können Google und wir erkennen, dass Sie auf eine Anzeige geklickt
            haben und zu unserer Website weitergeleitet wurden.</p>

          <p>Jeder Google AdWords-Kunde erhält ein anderes Cookie. Die Cookies sind nicht über Websites von AdWords-Kunden nachverfolgbar. Mit Conversion-Cookies werden Conversion-Statistiken für AdWords-Kunden, die Conversion-Tracking einsetzen, erstellt. Adwords-Kunden
            erfahren wie viele Nutzer auf ihre Anzeige geklickt haben und auf Seiten mit Conversion-Tracking-Tag weitergeleitet wurden. AdWords-Kunden erhalten jedoch keine Informationen, die eine persönliche Identifikation der Nutzer ermöglichen. Wenn Sie nicht
            am Tracking teilnehmen möchten, können Sie einer Nutzung widersprechen. Hier ist das Conversion-Cookie in den Nutzereinstellungen des Browsers zu deaktivieren. So findet auch keine Aufnahme in die Conversion-Tracking Statistiken statt.</p>

          <p>Die Speicherung von “Conversion-Cookies” erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Wir als Websitebetreiber haben ein berechtigtes Interesse an der Analyse des Nutzerverhaltens, um unser Webangebot und unsere Werbung zu optimieren.</p>

          <p>Einzelheiten zu Google AdWords und Google Conversion-Tracking finden Sie in den Datenschutzbestimmungen von Google: <Link href="https://www.google.de/policies/privacy/">https://www.google.de/policies/privacy/</Link>.</p>

          <p>Mit einem modernen Webbrowser können Sie das Setzen von Cookies überwachen, einschränken oder unterbinden. Die Deaktivierung von Cookies kann eine eingeschränkte Funktionalität unserer Website zur Folge haben.</p> */}

          <h3>Quelle:</h3>

          <p>Datenschutz-Konfigurator von <Link href="http://www.mein-datenschutzbeauftragter.de" target="_blank" rel="noreferrer noopener">mein-datenschutzbeauftragter.de</Link></p>
        </div>
      </section>
    </>
  )
}

export default Privacy