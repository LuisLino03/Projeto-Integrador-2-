from django import forms
from .models import Processo, Bateria, DadoColetado

class ProcessoForm(forms.ModelForm):
    class Meta:
        model = Processo
        fields = ['numero', 'classificacao']

class BateriaForm(forms.ModelForm):
    class Meta:
        model = Bateria
        fields = ['numero_serie', 'fabricante']

class DadoColetadoForm(forms.ModelForm):
    class Meta:
        model = DadoColetado
        fields = ['capacidade', 'ciclo', 'voltagem', 'corrente']