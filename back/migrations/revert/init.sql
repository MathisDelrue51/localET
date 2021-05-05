-- Revert localet:init from pg

BEGIN;

DROP TABLE curioset;

DROP TABLE category;

DROP TABLE "user";


COMMIT;
