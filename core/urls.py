from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from todos.views import TodoViewSet

# Isso cria as rotas da API automaticamente
router = routers.DefaultRouter()
router.register(r'todos', TodoViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)), # Aqui é onde o Angular vai bater
]