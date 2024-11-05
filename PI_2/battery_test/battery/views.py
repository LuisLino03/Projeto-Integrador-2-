from django.shortcuts import render, get_object_or_404
from .models import Processo, Bateria, DadoColetado
from .forms import ProcessoForm, BateriaForm, DadoColetadoForm
from django.contrib.auth.decorators import login_required
from django.http import HttpResponse
from openpyxl import Workbook
from django.contrib.auth import login, logout
from django.contrib.auth.forms import AuthenticationForm


@login_required
def home(request):
    return render(request, 'battery/home.html')



from django.contrib.auth.views import LoginView, LogoutView

def exportar_dados(request, processo_id):
     return response 

def login_view(request):
     
     def logout_view(request):
    logout(request)
    return redirect('login') 