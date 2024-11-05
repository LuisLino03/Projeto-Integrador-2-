from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('criar_processo/', views.criar_processo, name='criar_processo'),
    path('listar_processos/', views.listar_processos, name='listar_processos'),
    path('buscar_processo/', views.buscar_processo, name='buscar_processo'),
    path('processo/<int:processo_id>/', views.detalhes_processo, name='detalhes_processo'),
    path('processo/<int:processo_id>/criar_bateria/', views.criar_bateria, name='criar_bateria'),
    path('bateria/<int:bateria_id>/inserir_dados/', views.inserir_dados, name='inserir_dados'),
    path('processo/<int:processo_id>/exportar_dados/', views.exportar_dados, name='exportar_dados'),
]