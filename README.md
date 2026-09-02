# Lohnwerk

Eine kleine App für dein Geld. Du trägst ein, was reinkommt und was rausgeht — Lohnwerk rechnet aus, was übrig bleibt, wie viel du in bar bereitlegen musst, was auf welches Konto gehört und in welchen Monaten es teuer wird.

Die App läuft in jedem Browser, auch ohne Internet, und lässt sich auf dem Handy wie eine echte App auf den Startbildschirm legen.

**Alle deine Zahlen bleiben auf deinem Gerät.** Es gibt keinen Server, kein Konto, keine Anmeldung. Niemand außer dir sieht sie — auch dann nicht, wenn du diese App über GitHub veröffentlichst.

---

## Inhalt

1. [Was du brauchst](#1-was-du-brauchst)
2. [GitHub-Konto erstellen](#2-github-konto-erstellen)
3. [Neues Repository anlegen](#3-neues-repository-anlegen)
4. [Die vier Dateien hochladen](#4-die-vier-dateien-hochladen)
5. [Die Seite veröffentlichen (GitHub Pages)](#5-die-seite-veröffentlichen-github-pages)
6. [Die App auf dem Handy installieren](#6-die-app-auf-dem-handy-installieren)
7. [Die App benutzen](#7-die-app-benutzen)
8. [Wo deine Daten liegen — und wie du sie sicherst](#8-wo-deine-daten-liegen--und-wie-du-sie-sicherst)
9. [Später etwas ändern](#9-später-etwas-ändern)
10. [Wenn etwas nicht klappt](#10-wenn-etwas-nicht-klappt)

---

## 1. Was du brauchst

- Einen Computer mit Internet (für die Einrichtung; die App selbst läuft danach auch offline)
- Eine E-Mail-Adresse
- Etwa 15 Minuten

Du musst **nichts** programmieren, nichts installieren und keine Kommandozeile öffnen. Alles geht mit der Maus im Browser.

Diese vier Dateien gehören zusammen und müssen alle hochgeladen werden:

| Datei | Wofür |
|---|---|
| `index.html` | Die App selbst. Hier steckt alles drin. |
| `manifest.json` | Damit die App auf dem Handy einen eigenen Namen und ein Symbol bekommt. |
| `sw.js` | Damit die App auch ohne Internet startet. |
| `icon.svg` | Das Symbol der App. |

---

## 2. GitHub-Konto erstellen

GitHub ist ein kostenloser Dienst, auf dem man Dateien ablegen und als Webseite veröffentlichen kann. Wenn du schon ein Konto hast, springe zu Schritt 3.

1. Öffne **https://github.com/signup**
2. Gib deine **E-Mail-Adresse** ein und klicke auf **Continue**.
3. Denk dir ein **Passwort** aus, klicke auf **Continue**.
4. Denk dir einen **Benutzernamen** aus (nur Buchstaben, Zahlen und Bindestriche — zum Beispiel `anna-muster`). Diesen Namen wirst du später in der Adresse deiner App wiedersehen. Klicke auf **Continue**.
5. Bei der Frage nach E-Mail-Werbung tippe **n** und klicke auf **Continue**.
6. Löse das kleine Bilderrätsel, klicke auf **Create account**.
7. GitHub schickt dir eine E-Mail mit einem **8-stelligen Code**. Öffne dein E-Mail-Postfach, kopiere den Code, gib ihn auf der GitHub-Seite ein.
8. Wenn GitHub dich nach deinen Interessen fragt: Du kannst unten auf **Skip personalization** klicken.

Fertig. Du bist eingeloggt.

---

## 3. Neues Repository anlegen

Ein „Repository" ist einfach ein Ordner bei GitHub.

1. Klicke oben rechts auf das **`+`** (neben deinem Profilbild) und dann auf **New repository**.
2. Bei **Repository name** trägst du ein: `lohnwerk`
3. Bei **Description** (optional) kannst du schreiben: `Meine Haushaltsplanung`
4. Wähle **Public**.

   > **Keine Sorge:** „Public" bedeutet nur, dass jeder das *Programm* sehen kann — also den Code, den du gleich hochlädst. Deine eingetragenen Gehälter und Ausgaben landen **nie** bei GitHub. Sie bleiben ausschließlich im Browser auf deinem Gerät. (Der kostenlose GitHub-Tarif erlaubt Veröffentlichungen nur bei „Public" — deshalb diese Wahl.)

5. Setze **kein** Häkchen bei „Add a README file".
6. Klicke ganz unten auf den grünen Knopf **Create repository**.

Du landest auf einer Seite, die ziemlich leer aussieht und Anweisungen mit Kommandozeilen-Befehlen zeigt. Die brauchst du nicht. Lies einfach weiter.

---

## 4. Die vier Dateien hochladen

1. Suche auf der Seite den Link **uploading an existing file** (er steht im Text „…or push an existing repository…" — meist im ersten Absatz unter *Quick setup*). Klicke ihn an.

   Falls du ihn nicht findest: Gehe direkt auf
   `https://github.com/DEINNAME/lohnwerk/upload/main`
   und ersetze `DEINNAME` durch deinen GitHub-Benutzernamen.

2. Öffne auf deinem Computer den Ordner mit den vier Dateien.
3. **Markiere alle vier Dateien** (`index.html`, `manifest.json`, `sw.js`, `icon.svg`) — zum Beispiel mit `Strg`+`A` (Windows) oder `Cmd`+`A` (Mac).
4. **Zieh sie mit der Maus** in das große gestrichelte Feld im Browser („Drag files here…"). Lass sie los.
5. Warte, bis unter dem Feld alle vier Dateinamen stehen.
6. Scrolle nach unten. Bei **Commit changes** kannst du in das erste Feld schreiben: `Lohnwerk hinzugefügt`
7. Klicke auf den grünen Knopf **Commit changes**.

Jetzt siehst du deine vier Dateien in der Übersicht.

> ⚠️ **Wichtig:** Lade die Dateien einzeln hoch, **nicht als ZIP-Datei**. GitHub packt ZIP-Dateien nicht aus.

---

## 5. Die Seite veröffentlichen (GitHub Pages)

1. Klicke oben in der Leiste deines Repositories auf **Settings** (Zahnrad-Symbol, ganz rechts).
2. Scrolle in der **linken** Spalte nach unten und klicke auf **Pages**.
3. Unter **Build and deployment** → **Source** muss **Deploy from a branch** stehen. Falls nicht, wähle es aus.
4. Darunter bei **Branch** steht wahrscheinlich „None". Klicke darauf und wähle **main**.
5. Der Ordner daneben bleibt auf **/ (root)**.
6. Klicke auf **Save**.

Jetzt heißt es warten — **ein bis drei Minuten**. GitHub baut die Seite im Hintergrund.

7. Lade die Seite nach zwei Minuten neu (Taste `F5`). Ganz oben erscheint ein grüner Kasten:
   *„Your site is live at https://deinname.github.io/lohnwerk/"*
8. Klicke auf diese Adresse. **Lohnwerk öffnet sich.**

Diese Adresse ist ab jetzt deine App. Schreib sie dir auf oder schick sie dir selbst per Nachricht — du brauchst sie gleich auf dem Handy.

> Wenn nach fünf Minuten immer noch nichts erscheint: Schau unter **Actions** (in der oberen Leiste des Repositories) nach, ob dort ein grüner Haken steht. Ein oranger Punkt heißt „läuft noch".

---

## 6. Die App auf dem Handy installieren

Öffne die Adresse `https://deinname.github.io/lohnwerk/` auf deinem Handy.

### iPhone / iPad (Safari)

Das funktioniert **nur in Safari**, nicht in Chrome oder Firefox.

1. Öffne die Adresse in **Safari**.
2. Tippe unten in der Mitte auf das **Teilen-Symbol** — ein Quadrat mit einem Pfeil nach oben. (Wenn du die Leiste nicht siehst: einmal nach unten wischen.)
3. Scrolle in der Liste nach unten bis **Zum Home-Bildschirm**. Tippe darauf.
4. Oben steht jetzt „Lohnwerk". Tippe rechts oben auf **Hinzufügen**.

Auf deinem Startbildschirm liegt jetzt ein Lohnwerk-Symbol. Wenn du es antippst, startet die App im Vollbild — ohne Adressleiste, wie eine normale App.

### Android (Chrome)

1. Öffne die Adresse in **Chrome**.
2. Meist erscheint nach ein paar Sekunden unten von selbst ein Balken **„Lohnwerk installieren"**. Tippe darauf und bestätige mit **Installieren**.
3. Falls der Balken nicht kommt: Tippe rechts oben auf die **drei Punkte** und dann auf **App installieren** (manchmal heißt es **Zum Startbildschirm zufügen**). Bestätige mit **Installieren**.

Das Symbol liegt jetzt im App-Menü und auf dem Startbildschirm.

### Auf dem Computer

In Chrome oder Edge erscheint rechts in der Adressleiste ein kleines Symbol (Bildschirm mit Pfeil nach unten). Ein Klick darauf installiert Lohnwerk als eigenes Fenster.

---

## 7. Die App benutzen

### Beim ersten Start

Lohnwerk führt dich durch drei Schritte: Einnahmen, Kosten, Konten. Alles, was dort vorgeschlagen wird, kannst du später ändern, umbenennen oder löschen.

Wenn du erst mal schauen willst, wie das Ganze aussieht: Tippe auf **Mit Beispieldaten ausprobieren**. Das lädt einen kompletten Muster-Haushalt in ein eigenes Profil. Löschen kannst du es später unter *Einstellungen → Sonstiges → Beispieldaten löschen*.

### Die fünf Bereiche

Jeder Reiter beantwortet genau eine Frage. Was du eintippst, liegt in **Zahlen** — sonst nirgends.

| Reiter | Die Frage dahinter | Was drin liegt |
|---|---|---|
| **Übersicht** | Wie stehe ich da? | Was bleibt im Monat übrig, wie viel davon fest verplant ist, der Geldfluss, die nächsten Abbuchungen. Ein Knopf schaltet auf die einfache Tabellenansicht um. |
| **Zahlen** | Was trage ich ein? | Drei Unterreiter: **Einnahmen**, **Ausgaben** (mit Sparen) und **Vermögen** (Konten, Gold, Silber, Bitcoin, Schulden). |
| **Auswertung** | Was sagen die Zahlen? | Vier Unterreiter: **Ausgaben** (Diagramme), **Analyse** (Quoten, Einsparpotenzial, Was-wäre-wenn), **Sparen** (Hochrechnung mit Rendite und Inflation), **Rechner** (Vermögens- und Sparziel-Rechner). |
| **Zakat** | Was schulde ich? | Vier Unterreiter: **Ergebnis** (der Rechner), **Einstellen** (Rechtsschule, Schwelle, Tagespreise, schon Entrichtetes), **Kalender** (Stichtag im islamischen Jahr), **Wissen** (die Erklärungen zum Ausklappen). |
| **Einstellungen** | Wie läuft die App? | Profile, Konten, Tags, Zahlungswege, Annahmen für die Hochrechnung, Sicherungen, Hell/Dunkel, Fassung. |

Zwei Regeln halten das zusammen:

- **Eingetragen wird nur unter Zahlen.** Auch die Vermögensposten für die Zakat — der Zakat-Reiter verweist dorthin, statt eine zweite Eingabestelle aufzumachen.
- **Einstellungen enthält nichts über dein Geld,** nur über die App. Deine Beträge stehen dort nirgends.

### Wie Lohnwerk rechnet — der wichtigste Punkt

**Sparen ist keine Ausgabe.** Was du zur Seite legst, bleibt ja dein Geld. Deshalb gilt:

```
Einnahmen − Ausgaben = Überschuss
Überschuss = fester Sparplan + frei verfügbar
```

Markierst du eine Position mit dem Tag **`Sparen`**, wandert sie aus den Ausgaben heraus und wird zu einem Sparposten. Dein Überschuss steigt dadurch — und das ist richtig so, denn das Geld ist nicht weg.

Was am Monatsende übrig bleibt, zählt ebenfalls als gespart. Die Sparquote misst deshalb den ganzen Überschuss, nicht nur den festen Plan.

### Sparen im Detail

Jeder Sparposten bekommt **seinen eigenen Zinssatz**. Tagesgeld mit 2,4 %, ein Depot mit 6 % — Lohnwerk rechnet jeden Posten einzeln und addiert erst am Ende. Dazu trägst du ein, was **heute schon zurückgelegt** ist, und optional ein **Sparziel**.

Der Reiter **Sparen** zeigt dann:

- Was in 5, 10, 20 oder 30 Jahren daraus wird — mit Zinseszins
- **Was das Geld dann real noch wert ist** (Inflationsrechner). 100.000 € in 20 Jahren fühlen sich an wie gut 67.000 € heute — die App sagt dir das offen.
- Wie viel davon eingezahlt ist und wie viel Zinsen sind
- Wie weit du bei jedem Ziel bist und wann du es erreichst

**Lohnwerk erhöht deine Kontostände nie von allein.** Das wäre auch Unsinn — du kaufst ja zwischendurch etwas. Die Bestände änderst du nur dann, wenn sich wirklich etwas ändert. Alle Zukunftszahlen sind als Prognose gekennzeichnet, nicht als Kontostand.

Die Annahmen für Inflation, jährliche Steigerung der Sparrate und den Zeitraum stellst du unter *Einstellungen → Annahmen für die Hochrechnung* ein.

> **Zur Wortwahl:** Lohnwerk spricht durchgehend von **Rendite** und **Gewinn**, nicht von Zinsen. Gerechnet wird mit dem Ertrag einer Anlage — wie bei Gold, Aktien oder einer Beteiligung.

### Einfache Ansicht

Oben auf der Übersicht schaltet ein Knopf zwischen dem Dashboard und der **einfachen Ansicht** um — der schlichten Tabelle mit Einkommen, Blöcken je Zahlungsweg und den Ergebniszeilen. Die Wahl bleibt gespeichert.

### Das Monatsblatt

Die einfache Ansicht auf der Übersicht ist die schlichte Tabellenansicht: Einkommen oben, darunter je ein Block pro Zahlungsweg mit Monats- und Jahresbetrag, ganz unten die Ergebniszeilen.

```
Einkommen                    3.930,67 €
− auf dem Konto lassen       2.113,31 €
− abheben                      805,00 €
− zur Seite legen              560,00 €
= bleibt übrig                 452,36 €
```

Jede Zeile ist antippbar und öffnet die Position zum Ändern. Auf dem Computer stehen die Blöcke nebeneinander, auf dem Handy untereinander. Unten gibt es die Zusammenfassung zum Kopieren.

### Die Rechner

**Vermögensrechner** — Startkapital, monatliche oder jährliche Einzahlung, erwartete Rendite und Laufzeit eintragen. Er zeigt Endbetrag, Eingezahltes, Gewinn und die Kaufkraft in heutigem Geld, dazu den Verlauf als Diagramm. Er ändert nichts an deinen gespeicherten Daten.

Beide Rechner liegen unter *Auswertung → Rechner* und sind einzeln anklickbar. Der Zakat-Rechner nicht — der hat seinen eigenen Reiter.

**Zakat-Rechner** — liegt unter *Zakat → Ergebnis* und zeigt: ob Zakat fällig wird, wie viel, was davon schon entrichtet ist, was offen bleibt, was monatlich zurückzulegen wäre und wie viel deiner laufenden Spenden schon darauf einzahlen.

Der Reiter **Zakat** hat vier Unterreiter:

- **Ergebnis** — die Rechnung und die Aufschlüsselung
- **Einstellen** — Rechtsschule (**hanafitisch** oder **schafiitisch**), Grundlage der Schwelle, Tagespreise samt Abruf-Knopf, schon entrichtete Zakat
- **Kalender** — der Stichtag, wahlweise nach islamischem oder gewöhnlichem Datum, mit dem laufenden Hidschri-Jahr. Darunter der Knopf **Termin in den Kalender**
- **Wissen** — die Erklärungen zum Ausklappen

Die Vermögensposten selbst stehen nicht hier, sondern unter *Zahlen → Vermögen*. Ein Verweis im Reiter **Einstellen** führt direkt dorthin.

#### Schon entrichtete Zakat

Unter *Zakat → Einstellen → Schon entrichtet* trägst du jede Zahlung **einzeln** ein: wohin sie ging, wie viel, wann. Darunter steht die Gegenüberstellung — Zakat gesamt, davon entrichtet, was offen bleibt. Im Reiter **Ergebnis** erscheinen die Zahlungen ebenfalls einzeln unter der Summe.

Die Liste ändert nichts am Monatsbetrag; sie ist reine Übersicht. Alle Zahlungen landen auch in der CSV-Ausgabe, in einem eigenen Block *Zakat entrichtet* mit Bezeichnung, Datum und Betrag.

Nach dem Stichtag beginnt ein neues Zakat-Jahr: Der Knopf **Auf null setzen** löscht die Liste — nach einer Rückfrage und mit **Rückgängig** im Hinweis darunter. Vermögen, Preise und Stichtag bleiben unberührt.

#### Stichtag im Handy-Kalender

Hast du einen Stichtag gewählt, legt dir der Knopf **Termin in den Kalender** eine `.ics`-Datei an — das Format, das iPhone und Android verstehen. Darin steht **genau ein Termin**: dein nächster Stichtag, ganztägig, mit einer **Erinnerung am Vortag um zwölf Uhr**. Im Titel steht das islamische Jahr: *Zakat-Stichtag · 1. Ramadan 1448 AH*.

Die Datei entsteht auf deinem Gerät. Es geht dabei nichts ins Netz.

**So kommt er hinein:**

- **iPhone:** Datei nach dem Speichern in *Downloads* antippen → *Hinzufügen* → Kalender wählen
- **Android:** aus der Benachrichtigung oder aus *Dateien* öffnen → Kalender wählen

**So wirst du ihn wieder los:** Termin im Kalender antippen, löschen. Das war's.

**Ist der Stichtag vorbei,** kommst du wieder her und gibst den nächsten aus. Lohnwerk rechnet ihn dann schon auf das kommende Mondjahr — rund elf Tage früher im Kalender als dieses Jahr.

> **Warum nur ein Termin und keine Reihe über viele Jahre?** Weil man sie später alle einzeln wieder wegräumen müsste. Eine echte Serie wäre die Alternative gewesen, ist aber nicht zu haben: Eine gewöhnliche Wiederholungsregel (`RRULE`) rechnet in Sonnenjahren — die Stichtage lägen falsch, weil das Mondjahr elf Tage kürzer ist. Und die Aufzählung einzelner Termine (`RDATE`), die der Standard erlaubt, verwirft iOS beim Einlesen bis auf den ersten: Dort werden Wiederholungen nur als Regel gespeichert, nicht als Liste von Daten. Ein Termin, ein Löschvorgang.

> **Warum es keinen Lösch-Knopf gibt.** Öffnest du auf dem Handy eine Kalenderdatei, fügt das Betriebssystem Termine grundsätzlich nur *hinzu*. Es gleicht keine Kennungen ab, löscht nichts und ersetzt nichts — gleichgültig, was in der Datei steht. Die Absage-Anweisung des Standards (`METHOD:CANCEL`) greift nur im Einladungsverfahren mit Teilnehmern über Mail, nicht beim Öffnen einer Datei.

Lohnwerk merkt sich, ob du den Termin für diesen Stichtag schon ausgegeben hast, und weist dich darauf hin — sowohl beim zweiten Ausgeben desselben Termins als auch, wenn du den Stichtag zwischenzeitlich geändert hast.

Das Datum ist nach dem Umm-al-Qura-Kalender gerechnet. Das ist eine Rechnung, keine Mondsichtung — vor Ort kann der Tag um ein bis zwei Tage abweichen.

- Rechtsschule wählen; die Schwelle (Nisab) wechselt automatisch mit — Silber bei Hanafi, Gold bei Schafi'i, beides umstellbar
- Vermögenswerte unter *Zahlen → Vermögen* eintragen: Bargeld, Kontoguthaben, Gold und Silber in Gramm, Handelsware, Anlagen, Forderungen, Schulden
- Der Rechner zeigt Schwelle, zakatpflichtiges Vermögen und die fälligen 2,5 %
- Darunter steht, **wie viel du monatlich zurücklegen müsstest**, um den Jahresbetrag beisammen zu haben — der Betrag geteilt durch zwölf
- Ein Knopf trägt die Zakat als jährliche Position ein. Sie taucht dann im Monatsblatt und in der Rücklage für Jahresrechnungen auf; ein zweiter Klick später aktualisiert nur den Betrag
- **Alle Eingaben bleiben gespeichert** — Vermögenswerte, Rechtsschule und Preise. Beim nächsten Mal passt du nur an, was sich geändert hat

### Dein Vermögen verwalten

Unter *Zahlen → Vermögen* legst du an, was du besitzt. Jeder Posten hat eine Art:

| Art | Was du einträgst |
|---|---|
| Geldbetrag | Bargeld, Girokonto, Tagesgeld, Aktien, Handelsware, Forderungen |
| Gold / Silber | die Menge in Gramm |
| Bitcoin | die Menge in BTC |
| Schuld | fällige Schulden (nach hanafitischer Lehre abgezogen) |

Du kannst **beliebig viele Posten** anlegen — etwa mehrere Tagesgeldkonten mit eigenem Namen. Gold, Silber und Bitcoin werden mit dem hinterlegten Tagespreis in Euro umgerechnet; den holt derselbe Knopf, der auch die Edelmetallpreise abruft.

### Laufende Spenden werden abgezogen

Markierst du eine Position mit dem festen Tag **`Zakat`**, zählt sie als Zakat-Zahlung. Der Rechner zieht alle solchen Positionen von deiner Pflicht ab und zeigt, was noch offen ist:

```
Zakat fällig            50,00 € im Monat
− Waisenhaus            15,00 €
− Hungerhilfe           15,00 €
= noch offen            20,00 €
```

Ein Knopf legt für den Rest eine monatliche Position **„Zakat (offener Rest)"** an. Sie erscheint im Monatsblatt, sodass die volle Summe verplant ist. Ändert sich dein Vermögen, passt derselbe Knopf den Betrag an; ist alles gedeckt, pausiert er die Position.

Die Restposition zählt sich dabei nicht selbst mit — sonst würde sie sich selbst erfüllen.

### Islamischer Kalender und Stichtag

Den Stichtag wählst du im **islamischen Kalender**: Monat und Tag, etwa der 1. Ramadan. Die App rechnet um und zeigt das entsprechende Kalenderdatum. Wer lieber ein gewöhnliches Datum eintippt, schaltet mit einem Knopf um.

Darunter steht das laufende Hidschri-Jahr mit allen zwölf Monaten und ihren Anfangsdaten — Ramadan hervorgehoben, mit Countdown bis zum Beginn. Ein Tipp auf einen Monat übernimmt dessen ersten Tag als Stichtag. Mit den Pfeilen blätterst du durch die Jahre.

> Gerechnet wird nach dem Umm-al-Qura-Kalender, den auch Saudi-Arabien verwendet. Das ist eine Berechnung, keine Mondsichtung — vor Ort kann der Monatsbeginn ein bis zwei Tage abweichen.

### Schon entrichtete Zakat

Unter *Zakat → Einstellen → Schon entrichtet* trägst du **jede Zahlung einzeln** ein — wohin sie ging, wie viel, wann:

```
Waisenhaus      14. März 2026     180,00 €
Hungerhilfe      2. Juni 2026      90,00 €
Moschee         ohne Datum         50,00 €
3 Zahlungen                       320,00 €

Zakat gesamt                    1.121,41 €
Davon schon entrichtet          − 320,00 €
Bleibt offen                      801,41 €
```

Das ist reine Buchführung — **an deinem Monatsbetrag ändert sich dadurch nichts.** Nach dem Stichtag löscht der Knopf **Auf null setzen** die ganze Liste; er fragt vorher nach, und der Hinweis danach bietet **Rückgängig** an.

### Stichtag und monatliche Zahlweise

Ein Feld für deinen persönlichen Stichtag zeigt, wie viele Tage bis zur nächsten Abrechnung bleiben und wie viele Monatsraten bis dahin geflossen sind. Der Stichtag wandert dabei automatisch im Mondjahr-Takt weiter — rund 354 Tage, also elf weniger als ein Sonnenjahr.

Ein eigener Erklärabschnitt behandelt die Frage, ob man monatlich zahlen darf statt einmal im Jahr (ja, das nennt sich Vorauszahlung), welche drei Bedingungen dabei gelten, und dass die Zakat nach dem Stichtag unverzüglich fällig ist.

Für die Tagespreise von Gold und Silber gibt es einen Knopf **„Tagespreis holen"**. Er fragt zwei öffentliche Preisdienste nach dem heutigen Kurs und rechnet ihn in Euro je Gramm um. Du kannst die Preise genauso gut selbst nachschlagen und eintippen — beides wird gespeichert, mit Datum und dem Vermerk, woher der Wert stammt.

> **Das ist die einzige Stelle in Lohnwerk, die etwas aus dem Internet lädt** — und nur, wenn du den Knopf drückst. Beim ersten Mal fragt die App einmalig nach. Übertragen wird dabei nichts von dir: Es geht nur die Frage nach dem Goldkurs hinaus, keine deiner Zahlen. Alles andere in der App funktioniert weiterhin vollständig offline; ohne diesen Knopf verlässt keine einzige Anfrage dein Gerät.

Fünf ausklappbare Abschnitte erklären: was Zakat ist und ab wann sie fällig wird, was zum Vermögen zählt und was nicht, **Sparen für ein Eigenheim sowie Aktien und Fonds**, die Unterschiede zwischen Hanafi und Schafi'i, wer sie empfangen darf — und den Hinweis, dass der Rechner keine Rechtsauskunft ist und du bei Unklarheiten selbst recherchieren beziehungsweise jemanden fragen solltest, der sich auskennt.

> **Häufige Frage:** Zählt Geld, das man für eine spätere Eigentumswohnung anspart oder anlegt, schon zur Zakat? Nach der überwiegenden Meinung ja — Zakat richtet sich nach dem, was am Stichtag da ist, nicht nach der Absicht. Erst die gekaufte, selbst bewohnte Wohnung fällt dauerhaft heraus. Der entsprechende Abschnitt im Rechner geht darauf und auf die Bewertung von Aktien im Einzelnen ein.

### Kleine Kniffe, die viel sparen

- **Rechnen im Betragsfeld.** Du kannst `45+12,50` eintippen — Lohnwerk macht daraus `57,50 €`. Auch `30*3` oder `(12+8)/2` funktionieren.
- **Komma oder Punkt** ist beides erlaubt: `12.50` und `12,50` sind dasselbe.
- **Monat / Jahr** oben rechts schaltet die *ganze* App um. Praktisch, um zu sehen, was ein Abo im Jahr wirklich kostet.
- **Wischen auf dem Handy:** In der Ausgabenliste nach links wischen löscht, nach rechts wischen dupliziert.
- **Versehentlich gelöscht?** Unten erscheint sechs Sekunden lang **Rückgängig**.
- **Tags** sind das Herzstück — sie ersetzen die frühere Kategorie. Eine Position kann mehrere haben: `Auto`, `Versicherung`, `Jährlich fällig`. Das Tag `Sparen` ist fest eingebaut und macht aus einer Ausgabe einen Sparposten.
- **Zahlungswege** kannst du selbst anlegen und benennen. Bar, Überweisung, Dauerauftrag, Lastschrift, Kreditkarte und Tagesgeld sind ab Werk dabei — ergänze, was du brauchst (PayPal, Kleingeldkasse, was auch immer). Ob ein Weg beim Punkt „Bar bereitlegen" mitzählt, entscheidet die Einstellung *Woher kommt das Geld*.
- **Mehrere auf einmal ändern:** In der Ausgabenliste auf **Auswahl** tippen, mehrere Zeilen antippen, dann **Ändern**.
- **Profile** sind komplette Datensätze zum Umschalten: „Aktuell", „Nach Gehaltserhöhung", „Wenn ich umziehe". Du verlierst dabei nichts.
- **Was wäre wenn** (in der Auswertung): Schieberegler für Gehalt und Ausgaben. Das Ergebnis rechnet sofort mit, deine gespeicherten Daten bleiben unberührt.
- **Speichern musst du nie.** Lohnwerk speichert jede Änderung automatisch.

---

## 8. Wo deine Daten liegen — und wie du sie sicherst

### Wo sie liegen

In deinem Browser, auf deinem Gerät. Sonst nirgends. Kein Server, keine Cloud, kein Konto, keine Werbung, kein Tracking. Die App verschickt nichts von deinen Zahlen — sie funktioniert ja sogar im Flugmodus.

Die einzige Verbindung nach außen ist der Knopf **„Tagespreis holen"** im Zakat-Rechner, und auch der nur, wenn du ihn drückst. Dabei geht nichts von dir hinaus, sondern nur die Frage nach dem Gold- und Silberkurs.

Das hat eine wichtige Kehrseite:

**Deine Daten sind weg, wenn du**
- die Browserdaten löschst („Verlauf löschen", „Website-Daten löschen"),
- die App vom Startbildschirm löschst und dabei die Daten mit entfernst,
- das Gerät wechselst oder ein neues Handy einrichtest,
- den privaten Modus / Inkognito-Modus benutzt.

Daten von deinem Handy erscheinen **nicht** automatisch auf dem Computer. Es sind zwei getrennte Speicher.

### Wie du sie sicherst

Geh auf **Einstellungen → Sichern & Wiederherstellen → Sicherung speichern**.

Es lädt sich eine Datei herunter, zum Beispiel `lohnwerk-sicherung-2026-08-30.json`. Leg sie irgendwo ab, wo du sie wiederfindest: Dokumente-Ordner, Cloud-Speicher, USB-Stick, oder schick sie dir selbst per E-Mail.

**Mach das etwa einmal im Monat.** Wenn die letzte Sicherung länger als 30 Tage her ist, erinnert Lohnwerk dich beim Start freundlich daran.

### Wie du sie zurückholst

Auf dem neuen Gerät (oder nach einem Datenverlust):

1. Lohnwerk öffnen.
2. **Einstellungen → Sicherung laden**.
3. Die `.json`-Datei auswählen.
4. **Ersetzen** wählen (setzt alles auf den Stand der Sicherung) oder **Hinzufügen** (hängt die Positionen an das an, was schon da ist).

Am Computer geht es noch schneller: Zieh die `.json`-Datei einfach ins Fenster.

**So bringst du deine Daten aufs zweite Gerät:** Auf Gerät 1 sichern → Datei zu Gerät 2 bringen (Cloud, E-Mail, Kabel) → auf Gerät 2 laden.

### Für Excel

**Einstellungen → Als CSV (Excel)** erzeugt eine Tabelle mit allen Positionen und Summen. Sie ist auf deutsches Excel eingestellt (Semikolon als Trenner, Komma als Dezimalzeichen) — Umlaute bleiben heil. Diese Datei ist zum Ansehen und Weiterrechnen gedacht; zum *Zurückladen* in Lohnwerk nimm immer die `.json`-Sicherung.

---

## 9. Später etwas ändern

Du musst nur dann etwas bei GitHub anfassen, wenn du eine **neue Fassung der App** einspielen willst. Deine eigenen Zahlen änderst du immer nur in der App selbst.

So tauschst du eine Datei aus:

1. Geh auf `https://github.com/DEINNAME/lohnwerk`
2. Klicke auf die Datei, die du ersetzen willst (zum Beispiel `index.html`).
3. Klicke rechts oben auf das **Stift-Symbol** (Bearbeiten).
4. Markiere den gesamten Inhalt (`Strg`+`A`) und lösch ihn. Füg den neuen Inhalt ein (`Strg`+`V`).
5. Scrolle nach unten, klicke auf **Commit changes**, dann noch einmal auf **Commit changes**.

Alternativ: Auf der Startseite des Repositories **Add file → Upload files**, die neue Datei hineinziehen, **Commit changes**. Gleichnamige Dateien werden dabei überschrieben.

Nach ein bis zwei Minuten ist die neue Fassung online.

> **Wichtig bei Aktualisierungen:** Weil die App offline funktioniert, hält sich der Browser eine Kopie. Damit die neue Fassung ankommt, muss in der Datei `sw.js` die Zeile
> `const CACHE_NAME = "lohnwerk-v18";`
> auf eine neue Nummer geändert werden — also `lohnwerk-v19`, `lohnwerk-v20` und so weiter.
> Danach die App schließen und neu öffnen; manchmal braucht es zwei Starts. **Deine Daten bleiben dabei erhalten.**

---

## 10. Wenn etwas nicht klappt

### Zuerst: Läuft die neueste Fassung?

Unter *Mehr → Fassung* steht die Versionsnummer. Fehlt etwas, das es geben sollte, tippe dort auf **„Auf neue Fassung prüfen"** — das holt die aktuelle Version und startet die App neu. **Deine Daten bleiben dabei erhalten**, nur die Programmdateien werden erneuert.

Das ist der schnellste Weg, wenn sich die App anders verhält als beschrieben.


**Die Adresse zeigt „404 — There isn't a GitHub Pages site here."**
Die Seite ist noch nicht fertig gebaut. Warte zwei Minuten und lade neu. Prüfe außerdem unter *Settings → Pages*, ob bei **Branch** wirklich `main` steht und du auf **Save** geklickt hast.

**Die Seite lädt, sieht aber völlig unformatiert aus (nur nackter Text).**
Dann fehlt vermutlich eine Datei oder ein Dateiname wurde beim Hochladen verändert. Alle vier Dateien müssen im Hauptordner liegen und exakt so heißen: `index.html`, `manifest.json`, `sw.js`, `icon.svg` — alles kleingeschrieben.

**Auf dem iPhone erscheint „Zum Home-Bildschirm" nicht.**
Du bist nicht in Safari. iOS erlaubt das Installieren nur aus Safari heraus.

**Der Installieren-Knopf erscheint auf Android nicht.**
Lade die Seite einmal neu. Prüfe, dass die Adresse mit `https://` beginnt. Chrome bietet die Installation manchmal erst beim zweiten Besuch an.

**Meine Eingaben sind nach dem Neustart weg.**
Du warst wahrscheinlich im privaten Modus / Inkognito-Fenster — dort löscht der Browser alles beim Schließen. Öffne die App in einem normalen Fenster.

**Beim Start steht „Die gespeicherten Daten waren beschädigt."**
Selten, aber vorgesehen: Lohnwerk startet dann mit einem leeren Stand, damit nichts abstürzt. Die unlesbare Fassung wird beiseitegelegt. Lade deine letzte Sicherung über *Einstellungen → Sicherung laden*.

**Ich möchte ganz von vorn anfangen.**
*Einstellungen → Alles zurücksetzen.* Zur Sicherheit musst du dort das Wort `LÖSCHEN` eintippen. Danach ist alles weg — sichere vorher, wenn du unsicher bist.

**Kann jemand meine Zahlen sehen, weil das Repository öffentlich ist?**
Nein. Im Repository liegt nur das Programm. Deine Eingaben verlassen deinen Browser nie. Du kannst das selbst prüfen: Schalte das Handy in den Flugmodus — die App läuft weiter, weil sie nichts aus dem Netz braucht.

---

## Technische Notiz

Reines HTML, CSS und JavaScript in einer einzigen Datei. Keine Frameworks, keine Bibliotheken, keine CDN-Verweise, keine Schriftarten aus dem Netz, keine Build-Schritte. Diagramme und Symbole sind als SVG direkt im Code gezeichnet. Gespeichert wird im `localStorage` unter dem Schlüssel `lohnwerk.v1`.

Beträge werden intern als ganze Cent gerechnet und erst bei der Anzeige formatiert — so entstehen keine Rundungsfehler. Alle Intervalle werden über den Jahresbetrag normalisiert (wöchentlich = Betrag × 52, monatlich = × 12, jährlich = × 1), der Monatswert ist immer der Jahresbetrag geteilt durch zwölf.
