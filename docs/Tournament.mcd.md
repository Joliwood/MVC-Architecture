# Conception Merise : MCD

Tournament: code_tournament, name, description
posseder, 0N Sport, 11 Tournament
Sport: code_sport, name, description, picture

choisir, NN Tournament, 0N Club

Sponsor: code_sponsor, name, slogan
appartient, 0N Sponsor, 0N Club
Club: code_club, name, country
avoir, 11 Club, 0N Level
Level: code_level, name