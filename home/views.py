from django.shortcuts import render
from rest_framework import generics
from django.http import JsonResponse
from rest_framework import status
from rest_framework.response import Response
from .models import *
from .serializers import *
from django.views.decorators.csrf import csrf_exempt
from rest_framework.decorators import api_view # c'est pour annoter une fonction Python comme une vue d'API
from rest_framework.response import Response # c'est pour renvoyer des réponses structurées

# Create your views here.
def home(request):
    
    continent = Continent.objects.all()
    continent_serializer = ContinentSerializer(continent, many=True)

    country = Country.objects.all()
    country_serializer = CountrySerializer(country, many = True)

    data = {
    'country' : country_serializer.data,
    'continent' : continent_serializer.data,

    }
    return JsonResponse({'data' : data})




def teams(request):

    teams = Team.objects.all()
    teams_serializer = TeamSerializer(teams, many=True)


    player = Player.objects.all()
    player_serializer = PlayerSerializer(player, many = True)

    country = Country.objects.all()
    country_serializer = CountrySerializer(country, many = True)

    continent = Continent.objects.all()
    continent_serialier = ContinentSerializer(continent, many = True)

    data = {
    # 'players' : player_serializer.data,
    'teams' : teams_serializer.data,
    'country' : country_serializer.data,
    'continent' : continent_serialier.data

}
    return JsonResponse({'data' : data})

# def get_color(request):
#     color = ColorSerializer(Color.objects.all(), many=True)
#     return JsonResponse({'color' : color.data})


def players(request):
    players = Player.objects.all()
    players_serializer = PlayerSerializer(players, many=True)

    teams = Team.objects.all()
    teams_serializer = TeamSerializer(teams, many=True)

    country = Country.objects.all()
    country_serializer = CountrySerializer(country, many = True)

    continent = Continent.objects.all()
    continent_serializer = ContinentSerializer(continent, many = True)

    role = Role.objects.all()
    role_serializer = RoleSerializer(role, many = True)

    data = {'players' : players_serializer.data,
            'teams' : teams_serializer.data,
            'country' : country_serializer.data,
            'continent' : continent_serializer.data,
            'role' : role_serializer.data        
    
    }
    return JsonResponse({'data' : data})


def details(request, id):
    playerlist = PlayerSerializer(Player.objects.get(id=id))
    return JsonResponse({'data': playerlist.data})


# @api_view(['POST'])
# def add_player(request):
#     player_serializer = PlayerSerializer(data=request.data)# ici je récupère mes valeur envoyé en json depuis mon front. Le serializer traduit ces données en python pour que Django puisse les interpréter
#     if player_serializer.is_valid():
#         # player_id = request.data.get('player')
#         team_id = request.data.get('team')
#         # country_id = request.data.get('country')  # Retrieve country ID
#         # # continent_id = request.data.get('continent')  # Retrieve continent ID
#         # # role_id = request.data.get('role')  # Retrieve role ID
#         # play = Player.objects.get(id=player_id)
#         team = Team.objects.get(id=team_id)
#         # country = Country.objects.get(id=country_id)
#         # continent = Continent.objects.get(id=continent_id)
#         # role = Role.objects.get(id=role_id)
#         player_serializer.save(team = team)
#         # player = play,                       
#         # country = country,
#         # continent = continent,
#         # role = role)
#         return Response({"success" : "sucessfully added"})
#     return Response({"error" : "Failed to add player", "errors" : player_serializer.errors })

@api_view(['GET', 'POST'])
def add_player(request):
    if request.method == 'GET':
        player = Player.objects.all()
        serializer = PlayerSerializer(player, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = PlayerSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['DELETE'])
def delete_player(request,id):
    player = Player.objects.get(id=id)
    player.delete()
    return Response({"success":'player deleted'})




@api_view(['POST'])
def add_team(request):
    team_serializer = TeamSerializer(data=request.data)# ici je récupère mes valeur envoyé en json depuis mon front. Le serializer traduit ces données en python pour que Django puisse les interpréter
    if team_serializer.is_valid():
        country_id = request.data.get('country')
        coun = Country.objects.get(id=country_id)
        team_serializer.save(country = coun)

        # continent_id = request.data.get('continent')
        # con = Continent.objects.get(id= continent_id)
        # team_serializer.save(continent = con)
        return Response({"success" : "sucessfully added"})
    return Response({"error" : "Failed to add team", "errors" : team_serializer.errors })



    
@api_view(['DELETE'])
def delete_team(request,id):
    team = Team.objects.get(id=id)
    team.delete()
    return Response({"success":'team deleted'})


@api_view(['GET', 'PUT', 'DELETE'])
def update_team(request, id):
    try:
        team = Team.objects.get(id=id)
    except Team.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = TeamSerializer(team)
        return Response(serializer.data)
    elif request.method == 'PUT':
        serializer = TeamSerializer(team, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'DELETE':
        team.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)