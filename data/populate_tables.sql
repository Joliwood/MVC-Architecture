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

INSERT INTO "sport" ("name", "description", "picture") VALUES
('Basketball', 'Jeu entre deux équipes de cinq joueurs qui doivent lancer un ballon dans le panier du camp adverse.', 'https://static.ffx.io/images/$zoom_0.099%2C$multiply_0.9788%2C$ratio_1.5%2C$width_756%2C$x_0%2C$y_2/t_crop_custom/q_86%2Cf_auto/62e04e006fe36928c4231033f9daf717688bdc56'),
('Badminton', 'Sport dans lequel on se renvoie un volant par-dessus un filet', 'https://www.neuillysurmarne.fr/wp-content/uploads/2015/10/BADMINTON.jpg'),
('League of Legends', 'Jeu vidéo multijoueur de stratégie et d''actions en ligne, où les joueurs s''affrontent par équipe de cinq pour détruire la base adverse.', 'https://yt3.googleusercontent.com/_nlyMx8RWF3h2aG8PslnqMobecnco8XjOBki7dL_nayZYfNxxFdPSp2PpxUytjN4VmHqb4XPtA=s900-c-k-c0x00ffffff-no-rj');

INSERT INTO "tournament" ("name", "description", "event_date", "sport_id") VALUES
('Raquette world championship', 'Compétition de Badminton entre les extrêmes opposés !', '2023-07-12', 2),
('World independant split', 'Les équipes mondiales s''affrontent pour des oeuvres de charité', '2023-08-25', 3),
('Basketball World Tour', 'Compétition mondiale entre passionnés', '2024-05-05', 1);

INSERT INTO "user" ("firstname", "lastname", "email", "password") VALUES
('Philippe', 'Candille', 'philippe@oclock.io', '$2b$10$7vwYGrz2TGeyG4X8YnD9BOag9I.YKGUTJELs64qGmcK/syHu2BzTG'),
('Chuck', 'Norris', 'chuck@oclock.io', '$2b$10$7vwYGrz2TGeyG4X8YnD9BOag9I.YKGUTJELs64qGmcK/syHu2BzTG');

INSERT INTO "tournament_has_club" ("tournament_id", "club_id") VALUES
-- Badminton : France vs Angleterre
(1, 1),
(1, 2),

-- League of legends : France vs Angleterre vs Corée du Sud vs Espagne
(2, 1),
(2, 2),
(2, 4),
(2, 5),

-- Basketball : Brésil vs Corée du Sud
(3, 3),
(3, 4);

COMMIT;