from django.db import models
from simple_history.models import HistoricalRecords

class Processo(models.Model):
    numero = models.CharField(max_length=20, unique=True)
    classificacao = models.CharField(
        max_length=20, 
        choices=[('DESENVOLVIMENTO', 'Desenvolvimento'), ('CERTIFICACAO', 'Certificação')]
    )
    data_inicio = models.DateTimeField(auto_now_add=True)
    data_fim = models.DateTimeField(null=True, blank=True)
    status = models.CharField(
        max_length=20, 
        choices=[('EM_ANDAMENTO', 'Em Andamento'), ('FINALIZADO', 'Finalizado')], 
        default='EM_ANDAMENTO'
    )
    history = HistoricalRecords()

    def __str__(self):
        return self.numero

class Bateria(models.Model):
    processo = models.ForeignKey(Processo, on_delete=models.CASCADE)
    numero_serie = models.CharField(max_length=50)
    fabricante = models.CharField(max_length=50)
    codigo = models.UUIDField(default=uuid.uuid4, editable=False, unique=True)  # UUID como código único
    history = HistoricalRecords()

    def __str__(self):
        return f"Bateria {self.numero_serie} - Processo {self.processo.numero}"
  
  def save(self, *args, **kwargs):
        if not self.codigo:  # Corrigido: gerar código apenas se não existir
            self.codigo = self.gerar_codigo_unico()
        super().save(*args, **kwargs)
    
    def gerar_codigo_unico(self):
        import uuid
        return str(uuid.uuid4())

class DadoColetado(models.Model):
    bateria = models.ForeignKey(Bateria, on_delete=models.CASCADE)
    capacidade = models.FloatField()
    ciclo = models.IntegerField()
    voltagem = models.FloatField()
    corrente = models.FloatField()
    data_coleta = models.DateTimeField(auto_now_add=True)
    history = HistoricalRecords()

    def __str__(self):
        return f"Capacidade: {self.capacidade}, Ciclo: {self.ciclo} - {self.data_coleta}"