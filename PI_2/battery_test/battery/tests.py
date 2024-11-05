from django.test import TestCase, Client
from django.urls import reverse
from .models import Processo, Bateria, DadoColetado
from django.contrib.auth.models import User
from .forms import ProcessoForm, BateriaForm, DadoColetadoForm

class ProcessoModelTest(TestCase):
    def test_criar_processo(self):
        processo = Processo.objects.create(numero='12345', classificacao='DESENVOLVIMENTO')
        self.assertEqual(str(processo), '12345')

    def test_str_representation(self):
        processo = Processo(numero='12345', classificacao='DESENVOLVIMENTO')
        self.assertEqual(str(processo), '12345')




class BateriaModelTest(TestCase):
    def setUp(self):
        self.processo = Processo.objects.create(numero='12345', classificacao='DESENVOLVIMENTO')

    def test_criar_bateria(self):
        bateria = Bateria.objects.create(processo=self.processo, numero_serie='ABC123', fabricante='Fabricante Teste')
        self.assertEqual(str(bateria), f"Bateria ABC123 - Processo {self.processo.numero}")
        self.assertTrue(bateria.codigo)

    def test_gerar_codigo_unico(self):
        bateria1 = Bateria.objects.create(processo=self.processo, numero_serie='ABC123', fabricante='Fabricante Teste')
        bateria2 = Bateria.objects.create(processo=self.processo, numero_serie='DEF456', fabricante='Outro Fabricante')
        self.assertNotEqual(bateria1.codigo, bateria2.codigo)


class DadoColetadoModelTest(TestCase):
    def setUp(self):
        self.processo = Processo.objects.create(numero='12345', classificacao='DESENVOLVIMENTO')
        self.bateria = Bateria.objects.create(processo=self.processo, numero_serie='ABC123', fabricante='Fabricante Teste')

    def test_criar_dado_coletado(self):
        dado = DadoColetado.objects.create(bateria=self.bateria, capacidade=80.0, ciclo=10, voltagem=12.6, corrente=1.2)
        self.assertEqual(str(dado), f"Capacidade: 80.0, Ciclo: 10 - {dado.data_coleta}")

class FormsTest(TestCase):  
    def test_processo_form_valido(self):
        form_data = {'numero': '12345', 'classificacao': 'DESENVOLVIMENTO'}
        form = ProcessoForm(data=form_data)
        self.assertTrue(form.is_valid())

    def test_processo_form_invalido(self):
        form_data = {'numero': 'abc', 'classificacao': 'DESENVOLVIMENTO'}
        form = ProcessoForm(data=form_data)
        self.assertFalse(form.is_valid())
        self.assertIn('numero', form.errors)


    def test_bateria_form_valido(self):
        processo = Processo.objects.create(numero='12345', classificacao='DESENVOLVIMENTO')
        form_data = {'processo': processo.id, 'numero_serie': 'ABC123', 'fabricante': 'Fabricante Teste'}
        form = BateriaForm(data=form_data)
        self.assertTrue(form.is_valid())

    def test_dado_coletado_form_valido(self):
        bateria = Bateria.objects.create(
            processo=Processo.objects.create(numero='12345', classificacao='DESENVOLVIMENTO'),
             numero_serie='ABC123', fabricante='Fabricante Teste'
        )

        form_data = {'bateria': bateria.id, 'capacidade': 80.0, 'ciclo': 10, 'voltagem': 12.6, 'corrente': 1.2}
        form = DadoColetadoForm(data=form_data)
        self.assertTrue(form.is_valid())


class ViewsTest(TestCase):

    def setUp(self):
        self.client = Client()
        self.user = User.objects.create_user(username='testuser', password='testpassword')
        self.client.force_login(self.user) 

        self.processo = Processo.objects.create(numero="123", classificacao="DESENVOLVIMENTO")
        self.bateria = Bateria.objects.create(processo=self.processo, numero_serie="XYZ123", fabricante="ABC")
        self.dado_coletado = DadoColetado.objects.create(
            bateria=self.bateria, capacidade=90.5, ciclo=50, voltagem=3.7, corrente=1.2
        )

    def test_home_view(self):
        response = self.client.get(reverse('home'))
        self.assertEqual(response.status_code, 200)
        self.assertTemplateUsed(response, 'battery/home.html')




    def test_login_view(self):
        
        self.client.logout()
        url = reverse('login')
        response = self.client.get(url)
        self.assertEqual(response.status_code, 200)  
        self.assertTemplateUsed(response, 'battery/login.html') 

        response = self.client.post(url, {'username': 'testuser', 'password': 'testpassword'}) 
        self.assertEqual(response.status_code, 302) 
        self.assertRedirects(response, reverse('home')) 



    def test_logout_view(self):

        response = self.client.get(reverse('logout'))
        self.assertEqual(response.status_code, 302)  
        self.assertRedirects(response, reverse('login')) 