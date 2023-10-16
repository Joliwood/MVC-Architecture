# Conception Merise : MLD

Tournament (id INTEGER, name TEXT, description TEXT, event_date DATE, #sport_id(id))

Sport (id INTEGER, name TEXT, description TEXT, picture TEXT)

Sponsor (id INTEGER, name TEXT, slogan TEXT)

Club (id INTEGER, name TEXT, country INTEGER, #level_id(id))

Level (id INTEGER, name TEXT)

user (id INTEGER, email TEXT, password TEXT, firstname TEXT, lastname TEXT)

<!-- Convertion : choisir, NN Tournament, 0N Club -->
tournament_has_club (tournament_id INTEGER, club_id INTEGER)

<!-- Convertion : appartient, 0N Sponsor, 0N Club -->
club_has_sponsor (club_sponsor_id INTEGER, sponsor_id INTEGER)
