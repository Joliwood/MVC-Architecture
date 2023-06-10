BEGIN;

INSERT INTO "level" ("name") VALUES
('Au ras des pâquerettes'),
('Débutant'),
('Intermédiaire'),
('Avancé'),
('Expert');

INSERT INTO "sponsor" ("name", "slogan") VALUES
('Coca Cola', 'Ouvert pour le meilleur'),
('Kiabi', 'La mode à petit prix'),
('Adidas', 'Rien n''est impossible');

INSERT INTO "club" ("name", "country","level_id") VALUES
('Frenchy guys', 'France', 2),
('Potter''s fans', 'Angleterre', 3),
('As Amazonas', 'Brésil', 4),
('Renewal', 'Corée du Sud', 5),
('Avanzando Juntos', 'Espagne', 1);

INSERT INTO "club_has_sponsor" ("club_sponsor_id", "sponsor_id") VALUES
(1, 1),
(2, 1),
(2, 2),
-- Le Brésil n'a aucun sponsor
(4, 2),
(5, 3);

INSERT INTO "sport" ("name", "description") VALUES
('Basketball', 'Jeu entre deux équipes de cinq joueurs qui doivent lancer un ballon dans le panier du camp adverse.'),
('Badminton', 'Sport dans lequel on se renvoie un volant par-dessus un filet'),
('League of Legends', 'Jeu vidéo multijoueur de stratégie et d''actions en ligne, où les joueurs s''affrontent par équipe de cinq pour détruire la base adverse.');

INSERT INTO "tournament" ("name", "description", "event_date", "sport_id") VALUES
('Raquette world championship', 'Compétition de Badminton entre les extrêmes opposés !', '2023-07-12', 2),
('World independant split', 'Les équipes mondiales s''affrontent pour des oeuvres de charité', '2023-08-25', 3);

INSERT INTO "tournament_has_club" ("tournament_id", "club_id") VALUES
(1, 1),
-- (1, 2),
(2, 1),
(2, 2),
(2, 5);

COMMIT;