
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!

--create a database named "their_two_cents"

CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

CREATE TABLE "category" (
	"id" SERIAL PRIMARY KEY,
	"category_name" VARCHAR (1000) NOT NULL,
);

CREATE TABLE "recommendation" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR (1000) NOT NULL,
    "type" VARCHAR (1000) NOT NULL,
    "notes" VARCHAR (1500) NOT NULL,
    "favorite" BOOLEAN NOT NULL DEFAULT FALSE,

);

