BEGIN;

DROP TABLE IF EXISTS "tournament_has_club", 
"club_has_sponsor", 
"tournament", 
"club", 
"sponsor", 
"level", 
"sport";

CREATE TABLE "level" (
  "id" INTEGER GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
  "name" TEXT NOT NULL,
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updated_at" TIMESTAMPTZ
);

CREATE TABLE "sponsor" (
  "id" INTEGER GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
  "name" TEXT NOT NULL,
  "slogan" TEXT NULL,
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updated_at" TIMESTAMPTZ
);

CREATE TABLE "club" (
  "id" INTEGER GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
  "name" TEXT NOT NULL,
  "country" TEXT NULL,
  "level_id" INTEGER NOT NULL REFERENCES "level"("id"),
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updated_at" TIMESTAMPTZ
);

CREATE TABLE "sport" (
  "id" INTEGER GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
  "name" TEXT NOT NULL,
  "description" TEXT NULL,
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updated_at" TIMESTAMPTZ
);
COMMENT ON TABLE "sport" IS 'Not all sports are available, only those selected by the jury.';

CREATE TABLE "tournament" (
  "id" INTEGER GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
  "name" TEXT NOT NULL,
  "description" TEXT NULL,
  "event_date" DATE NULL,
  "sport_id" INTEGER NOT NULL REFERENCES "sport"("id"),
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updated_at" TIMESTAMPTZ
);

CREATE TABLE "club_has_sponsor" (
  -- "id" INTEGER GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
  "club_id" INTEGER NOT NULL REFERENCES "club"("id"),
  "sponsor_id" INTEGER NOT NULL REFERENCES "sponsor"("id"),
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updated_at" TIMESTAMPTZ,
  PRIMARY KEY (club_id, sponsor_id)
);

CREATE TABLE "tournament_has_club" (
  -- "id" INTEGER GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
  "tournament_id" INTEGER NOT NULL REFERENCES "tournament"("id"),
  "club_id" INTEGER NOT NULL REFERENCES "club"("id"),
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updated_at" TIMESTAMPTZ,
  PRIMARY KEY (tournament_id, club_id)
);

COMMIT;
