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

| Bereich | Was du dort machst |
|---|---|
| **Übersicht** | Die wichtigste Zahl: Was bleibt im Monat übrig — und wie viel davon fest verplant ist. Dazu der Geldfluss und die nächsten Abbuchungen. |
| **Einnahmen** | Gehalt, Nebenjob, Kindergeld, Miete aus Untervermietung. |
| **Ausgaben** | Alles, was rausgeht — und alles, was du zurücklegst. Suchbar, filterbar, gruppierbar. |
| **Auswertung** | Vier Reiter: **Monatsanfang** (was muss wohin), **Ausgaben** (Diagramme), **Sparen** (Hochrechnung mit Zinsen und Inflation), **Analyse** (Quoten, Einsparpotenzial, Was-wäre-wenn). |
| **Einstellungen** | Konten, Tags, Zahlungswege, Profile, Annahmen für die Hochrechnung, Sicherungen, Hell/Dunkel. |

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
- Einen Sparziel-Rechner zum Durchspielen

**Lohnwerk erhöht deine Kontostände nie von allein.** Das wäre auch Unsinn — du kaufst ja zwischendurch etwas. Die Bestände änderst du nur dann, wenn sich wirklich etwas ändert. Alle Zukunftszahlen sind als Prognose gekennzeichnet, nicht als Kontostand.

Die Annahmen für Inflation, jährliche Steigerung der Sparrate und den Zeitraum stellst du unter *Einstellungen → Annahmen für die Hochrechnung* ein.

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

In deinem Browser, auf deinem Gerät. Sonst nirgends. Kein Server, keine Cloud, kein Konto, keine Werbung, kein Tracking. Die App verschickt nichts — sie funktioniert ja sogar im Flugmodus.

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
> `const CACHE_NAME = "lohnwerk-v2";`
> auf eine neue Nummer geändert werden — also `lohnwerk-v3`, `lohnwerk-v4` und so weiter.
> Danach die App schließen und neu öffnen; manchmal braucht es zwei Starts. **Deine Daten bleiben dabei erhalten.**

---

## 10. Wenn etwas nicht klappt

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
