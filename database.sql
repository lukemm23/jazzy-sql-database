CREATE TABLE "artists" (
    "id" SERIAL PRIMARY KEY,
    "artist_name" varchar(80) not null,
    "year_born" date
);

CREATE TABLE "songs" (
    "title" VARCHAR(80) not null,
    "length" VARCHAR(20) not null,
    "date_released" DATE

);