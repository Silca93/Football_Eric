from django_seed import Seed
from .models import *
from faker import Faker
from run_seed import *

from .players import *

import requests

#! Fetch data from an open source country API
countries_url = 'https://restcountries.com/v3.1/all'
response = requests.get(countries_url)
if response.status_code == 200:
    countries_data = response.json()
else:
    print(f"Request failed with status code {response.status_code}")
    exit(1)


seeder = Seed.seeder()
def run():
    #! Add countries in the seeder
    for country in countries_data:
        
        #! Declare the variable only if its corresponding value is existing
        country_name = country['name']['common'] if 'name' in country and 'common' in country['name'] else None
        continent_name = country['region'] if 'region' in country else None
        
        if country_name and continent_name:
            #! Find the matching continent
            try:
                #! continent = continent in continent table which id is = to country
                continent = Continent.objects.get(name=continent_name)
                #! Add the country to the seeder with its continent_id
                seeder.add_entity(Country, 1, {
                    'name' : country_name, 
                    'continent_id' : continent.id
                })
            except Continent.DoesNotExist:
                print(f"No continent found for {continent_name}")
    # Country.objects.all().delete()


    pks = seeder.execute()
    print(pks)



fake = Faker()



def runTeam(teams_to_seed):
    seeder = Seed.seeder()

    for team_data in teams_to_seed:
        team_name = team_data['name']
        team_description = team_data['description']
        continent_name = team_data['continent']
        country_name = team_data['country']

        if team_name and continent_name and country_name:
            try:
        
                continent = Continent.objects.get(name=continent_name)

                
                country, _ = Country.objects.get_or_create(name=country_name, continent=continent)

                

            
                seeder.add_entity(Team, 1, {
                    'name': team_name,
                    'image': team_data['image'],
                    'country': country,
                    'continent': continent,
                    'description':  team_description,
                })
            except Continent.DoesNotExist:
                print(f"No continent found for {continent_name}")

    pks = seeder.execute()
    print(pks)








def runPlayers(players_to_seed):
    seeder = Seed.seeder()

    for team_data in players_to_seed:
        team_name = team_data['team']
        try:
            team = Team.objects.get(name=team_name)
            for player_data in team_data['players']:
                player_name = player_data['name']
                player_image = player_data['image']
                player_country_name = player_data['country']
                player_continent_name = player_data['continent']
                player_role_name = player_data['role']


                continent, _ = Continent.objects.get_or_create(name=player_continent_name)


                country, _ = Country.objects.get_or_create(name=player_country_name, continent=continent)

                role, _ = Role.objects.get_or_create(name=player_role_name)

                seeder.add_entity(Player, 1, {
                    'name': player_name,
                    'image': player_image,
                    'team': team,
                    'country': country,
                    'continent': continent,
                    'role': role,
                })
        except Team.DoesNotExist:
            print(f"No team found with the name {team_name}")

    pks = seeder.execute()
    print(pks)





roles = ['Top Laner', 'Jungler', 'Mid Laner', 'Support', 'Bot Laner']

def runRole(roles):
    seeder = Seed.seeder()
    
    for role_name in roles:
        seeder.add_entity(Role, 1, {
            'name': role_name
            })

    pks = seeder.execute()
    print(pks)