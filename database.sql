
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
    "category_name" VARCHAR (250) NOT NULL
);

CREATE TABLE "recommendation" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR (250) NOT NULL,
    "type" VARCHAR (250) NOT NULL,
    "notes" VARCHAR (1000) NOT NULL,
    "favorite" BOOLEAN DEFAULT FALSE,
    "user_id" INT REFERENCES "user",
    "category_id" INT REFERENCES "category"
);

INSERT INTO "category" ("category_name")
VALUES ('Media'), ('Business'), ('Product'), ('Other');

INSERT INTO "recommendation" ("name", "type", "notes", "user_id", "category_id")
VALUES ('Dripping Root', 'Restaurant', 'Black owned business!', '1', '2'),
('Getting On', 'Television', 'dark comedy about geriatric wing at hospital', '1', '1'),
('Maintenance Phase', 'Podcast', 'debunks diet and wellness industry', '1', '1'),
('Seaside Hotel', 'Television', ' mom recommended - has subtitles so not for before bed', '1', '1'),
('Old Navy Powersoft Leggings', 'Clothing', 'Lululemon knock-off', '1', '3'),
('The Phillips Collection', 'Museum', 'go the next time youre in DC!', '1', '4');
('Fleabag', 'Television', 'Hannah says best show ever!', '1', '1');


