from django.shortcuts import render

# Create your views here.
def dashboard(req):
    return render(req,'dashboard.html')

def login(req):
    return render(req,'login.html')
