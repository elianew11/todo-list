from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from todos.views import TodoViewSet
from django.http import HttpResponse # Adicione isso

# Função simples para a página inicial
def home(request):
    return HttpResponse("<h1>Backend da Lista de Tarefas Online</h1><p>Acesse a API em /api/todos/</p>")

# Isso cria as rotas da API automaticamente
router = routers.DefaultRouter()
router.register(r'todos', TodoViewSet)

urlpatterns = [
    path('', home), # Adicione esta linha para a página inicial
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)), # Aqui é onde o Angular vai bater
]