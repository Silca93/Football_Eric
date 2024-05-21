from .models import *
from rest_framework import serializers



class PlayerSerializer(serializers.ModelSerializer):

    class Meta:            
        model = Player
        fields = '__all__'



# class PlayerSerializer(serializers.ModelSerializer):
#     team = TeamSerializer()
#     country = CountrySerializer()
#     continent = ContinentSerializer()
#     role = RoleSerializer()

#     class Meta:
#         model = Player
#         fields = ['name', 'image', 'team', 'country', 'continent', 'role']


class RoleSerializer(serializers.ModelSerializer):

    player = PlayerSerializer(read_only = True, many = True)
    class Meta:
        model = Role
        fields = '__all__'


class TeamSerializer(serializers.ModelSerializer):
    role = RoleSerializer(read_only = True, many = True)
    class Meta:
        model = Team
        fields = '__all__'

class CountrySerializer(serializers.ModelSerializer):
    team = TeamSerializer(read_only = True, many = True)
    class Meta:
        model = Country
        fields = '__all__' 

class ContinentSerializer(serializers.ModelSerializer):
    country = CountrySerializer(read_only = True, many = True)
    class Meta:
        model = Continent
        fields = '__all__'