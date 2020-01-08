from django.http import HttpResponse

def hello(request):
    return HttpResponse('<h1 style="color: red">Hello world!</h1>')