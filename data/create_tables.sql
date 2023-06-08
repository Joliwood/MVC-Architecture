BEGIN;

DROP TABLE IF EXISTS "club",
"game",
"level",
"sponsor",
"tournament";

CREATE TABLE "club" (
  "id" INTEGER GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
  "name" TEXT NOT NULL,
  "slogan" TEXT
);

CREATE TABLE game (
	"id" INTEGER GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
	"name" text NULL,
	"description" text NULL
);
COMMENT ON TABLE game IS 'Not all sports are available, only those selected by the jury.';

CREATE TABLE level (
	"id" INTEGER GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
	"name" text NULL
);

CREATE TABLE sponsor (
	"id" INTEGER GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
	"name" text NOT NULL,
	"slogan" text NULL
);

CREATE TABLE tournament (
	"id" INTEGER GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
	"name" text NOT NULL,
	"description" text NULL,
	"event_date" date NULL
);

COMMIT;