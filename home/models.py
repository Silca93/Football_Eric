from django.db import models

# Create your models here.
class Continent(models.Model):
    name = models.CharField(max_length=50)

class Country(models.Model):
    name = models.CharField(max_length=50)
    continent = models.ForeignKey(Continent,related_name="countries", on_delete=models.CASCADE, null = True)

class Team(models.Model):
    name = models.CharField(max_length=50)
    description = models.CharField(max_length=100, null = True)
    # image = models.ImageField(upload_to="images/")
    image = models.URLField()
    country = models.ForeignKey(Country,related_name="teams", on_delete=models.CASCADE, null= True)
    continent = models.ForeignKey(Continent, on_delete=models.SET_NULL, null = True)

class Role(models.Model):
    name = models.CharField(max_length=50)    

class Player(models.Model):
    name = models.CharField(max_length=50)
    image = models.ImageField(upload_to="images/", null=True)
    team = models.ForeignKey(Team,related_name="teams", on_delete=models.SET_NULL, null=True, blank=True)
    country = models.ForeignKey(Country, on_delete=models.SET_NULL, null=True)
    continent = models.ForeignKey(Continent, on_delete=models.SET_NULL, null=True)
    role = models.ForeignKey(Role, on_delete=models.SET_NULL, null=True)

# from django.db import models

# # Create your models here.

# class Continent(models.Model):
#     name = models.CharField(max_length=25)

# class Country(models.Model):
#     continent = models.ForeignKey(Continent, related_name="countries", on_delete=models.CASCADE, null=True)
#     name = models.CharField(max_length=50)

# class Band(models.Model):
#     country = models.ForeignKey(Country, related_name="bands", on_delete=models.CASCADE, null=True)
#     image = models.ImageField(upload_to='images/', blank=True)
#     name = models.CharField(max_length=100)
#     genre = models.CharField(max_length=100)
#     creation_year = models.IntegerField()
#     city = models.CharField(max_length=50, null=True)

# class Member(models.Model):
#     band = models.ForeignKey(Band, related_name="members", on_delete=models.SET_NULL, null=True)
#     image = models.ImageField(upload_to='images/', blank=True)
#     firstname = models.CharField(max_length=50)
#     lastname = models.CharField(max_length=50)
#     age = models.IntegerField()
#     position = models.CharField(max_length=50)