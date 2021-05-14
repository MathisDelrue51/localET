# LocalET

Vous vous êtes déjà senti comme un extraterrestre en arrivant dans une nouvelle ville ? Moi oui ! Les inévitables recherches sur notre ami google pour trouver de quoi s'occuper sont parfois bien laborieuses et ne permettent souvent d'effleurer que la surface des possibilités. LocalET propose une plateforme à visée touristique, afin que les locaux puissent partager via une carte interactive leurs bons plans culturels (expos, théâtre, musique, art de rue, anecdotes liées à l'histoire de la ville....) avec ceux qui seraient assez curieux pour les découvrir.

## Stack technique

- NodeJS 14
- NPM
- PostgreSQL 12.5
- [Sqitch 0.9999](http://sqitch.org/download/)
- [redis](https://redis.io/download)

Ces outils sont nécessaires au bon fonctionnement de l'app. Installez-les avant de continuer.

## Installation Back

Clone the repository in local

```bash
git clone <url de ce repo>
```

Install the NPM dependencies for the front and the back. In each folder:

```bash
npm i
```

You will need to configure PostgreSQL (or provide the environment variables) for the following commands to be executed correctly (`createdb` and `sqitch`)

Create a local database with PostGreSQL

```bash
createdb databaseName
```

Deploy Sqitch on the database (You have to be in the back folder)

```bash
sqitch deploy db:pg:databaseName
```

Then import the fake data to your database if you want to

```bash
psql -d databaseName -f ./data/import.sql
```

In the back folder, create a .env file following the information in the .env.example


## Starting

Run the command

```bash
npm start
```
