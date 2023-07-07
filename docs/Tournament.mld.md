# Conception Merise : MLD

Tournaments (id INTEGER, name TEXT, description TEXT)

Sport (id INTEGER, name TEXT, description TEXT, picture TEXT)

Sponsor (id INTEGER, name TEXT, slogan TEXT)

Club (id INTEGER, name TEXT, country INTEGER)

Level (id INTEGER, name TEXT)

club_has_sponsor (club_sponsor_id INTEGER, sponsor_id INTEGER)
