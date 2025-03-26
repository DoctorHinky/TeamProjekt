# TeamProjekt

Das ist ein Gruppenarbeit von Olga Korkhova, Mohab Alyuson, Sevil Aktas und Norman R. Tetzlaff

- eintrag in die .env Datei:

```bash

DB_URI=mongodb+srv://normantetzlaff:Wopbar-kijbu1-gidqib@clusterfordci.bw9au.mongodb.net/votingManager
PORT=5001

```

Projekt aufgaben:

🎯 Konkrete Aufgabenliste für jeden
👨‍💻 Backend-Entwickler: API & Datenbank / Mohab
🔹 Ziel: Ein funktionierendes Backend mit einer Datenbank und API-Endpunkten

✅ Schritt 1: Backend-Ordnerstruktur erstellen (siehe oben)
✅ Schritt 2: Express-Server aufsetzen (server.js)
✅ Schritt 3: GET /questions → Gibt eine Frage mit zwei Antwortmöglichkeiten zurück
✅ Schritt 4: POST /answer → Speichert die User-Antwort
✅ Schritt 5: GET /results → Gibt die prozentuale Statistik zurück
✅ Schritt 6: Datenbankanbindung (PostgreSQL / MongoDB) erstellen

📌 Tipp: Falls du nicht weiterkommst, soll er erstmal nur die Routen mit Mock-Daten bauen (also feste JSON-Daten zurückgeben, ohne DB).

🎨 Frontend-Entwickler: UI & API-Anbindung / Sevil
🔹 Ziel: Eine einfache Web-App, die mit der API kommuniziert

✅ Schritt 1: Ein Grundgerüst mit HTML/CSS oder React aufsetzen
✅ Schritt 2: Startseite → Button „Spiel starten“
✅ Schritt 3: Frage-Seite → Zeigt die Frage + zwei Antwortbuttons
✅ Schritt 4: API-Anbindung → Klick auf Button schickt Antwort ans Backend
✅ Schritt 5: Statistik-Seite → Zeigt prozentuale Verteilung der Antworten

📌 Tipp: Falls bei Problemen, erstmal Mock-Daten nutzen (statt echten API-Calls).

🕵️ Tester & Datenbank-Manager: Qualitätssicherung / Olga
🔹 Ziel: Sicherstellen, dass Backend & Datenbank fehlerfrei arbeiten

✅ Schritt 1: Datenbank einrichten (Falls MongoDB → Collections erstellen)
✅ Schritt 2: Manuell testen, ob API funktioniert (z. B. mit Postman)
✅ Schritt 3: Prüfen, ob Antworten korrekt gespeichert werden
✅ Schritt 4: Prüfen, ob GET /results die richtigen Prozentzahlen liefert
✅ Schritt 5: Bugs und Fehler finden → An Backend-Entwickler weitergeben
