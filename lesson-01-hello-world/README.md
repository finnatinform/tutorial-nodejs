# Lesson 01: Hello World
## Projekt aufsetzen
Als erstes erstellen wir uns ein neues NPM Projekt und installieren die library express.
```
npm init
npm install --save-dev webpack
npm install --save-dev typescript
npm install --save-dev awesome-typescript-loader source-map-loader
npm install --save express @types/express
```
Außerdem legen wir die typischen webpack.config.js und tsconfig.json. Wichtig in der Webpack-Konfiguration ist die Angabe des Targets.
## Hello World
Jetzt legen wir uns einen src Ordner an und erstellen darin eine neue Datei server.ts

## Static Files
Mit express können wir auch statische Dateien herausgeben.
Das im dist Ordner eingebundene Bild können wir beispielsweise unter folgender Url aufrufen: (http://localhost:8080/image.jpg).

## Deployment
Nun können wir das Projekt mit folgendem Befehl bauen:
```
webpack
```
Wenn wir nun in den dist Folder gehen, können wir den Server starten.
```
cd dist
node server.js
```