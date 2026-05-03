from django.db import models

class Todo(models.Model):
    title = models.CharField(max_length=200) # Texto da tarefa
    completed = models.BooleanField(default=False) # Se está pronta ou não