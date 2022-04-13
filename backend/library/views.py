from rest_framework.viewsets import ModelViewSet
from .models import Author, User
from .serializer import AuthorModelSerializer, UserModelSerializer


class AuthorModelViewSet(ModelViewSet):
    serializer_class = AuthorModelSerializer
    queryset = Author.objects.all()
