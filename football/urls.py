"""
URL configuration for football project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from home import views
from django.conf import settings
from django.conf.urls.static import static


urlpatterns = [
    path('admin/', admin.site.urls),
    path("", views.home, name='home'),

    path("players/", views.players),
    path('player_details/<int:id>', views.details),

    path('players/create/', views.add_player),
    path('players/delete/<int:id>', views.delete_player),

    path("teams/", views.teams),
    path("team/create/", views.add_team),
    path("team/update/<int:id>", views.update_team),
    path("team/delete/<int:id>", views.delete_team),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)  
