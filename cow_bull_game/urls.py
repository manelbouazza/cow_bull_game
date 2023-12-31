"""
URL configuration for cow_bull_game project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
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
from cb_game import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('cb_game/', views.cb_game_soap_app),
    path('soap-endpoint/', cb_game_soap_app, name='soap_endpoint'),

    
    path('', views.index, name='index'),
    path('about/', views.about, name='about'),
    path('start_game/', views.start_game, name='start_game'),
]
