# Lesson 03: Data
## Daten senden
Ein Server sollte nicht nur Daten liefern, sondern auch annehmen können.
Übertragen tut man Daten im Body einer Request, üblicherweise in einer POST, PUT oder DELETE Transaktion.

Mit dem geeigneten Import (Bodyparser, siehe use Anweisung) kann man direkt auf den body zugreifen.
Diese können dann beliebig verarbeitet und die Nachricht beantwortet werden.