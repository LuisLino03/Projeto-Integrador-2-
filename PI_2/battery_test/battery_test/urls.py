from  import addjango.contribmin
from django.urls import path, include
from django.contrib.auth import views as auth_views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('battery.urls')),
    path('login/', auth_views.LoginView.as_view(template_name='battery/login.html'), name='login'),
    path('logout/', auth_views.LogoutView.as_view(template_name='battery/logout.html'), name='logout'),
]