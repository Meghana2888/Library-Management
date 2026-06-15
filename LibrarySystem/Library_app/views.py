import os
import pandas as pd
from django.shortcuts import render, redirect
from django.http import HttpResponse

def homepage(request):
    return render(request, "home.html")

def contactpage(request):
    return render(request, "contact.html")

from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login
from django.contrib.auth.models import User
from django.contrib import messages

def login_register_view(request):
    if request.method == 'POST':
        if 'email' in request.POST:  # Registration form
            username = request.POST['username']
            email = request.POST['email']
            password = request.POST['password']

            if User.objects.filter(username=username).exists():
                messages.error(request, 'Username already exists.')
                return redirect('register')

            if User.objects.filter(email=email).exists():
                messages.error(request, 'Email already registered.')
                return redirect('register')

            User.objects.create_user(username=username, email=email, password=password)
            messages.success(request, 'Registration successful! Please log in.')
            return redirect('login')

        else:  # Login form
            username = request.POST['username']
            password = request.POST['password']
            user = authenticate(request, username=username, password=password)

            if user is not None:
                login(request, user)
                return redirect('homepage')
            else:
                messages.error(request, 'Invalid login credentials.')
                return redirect('login')

    return render(request, 'login.html')


def trending(request):
    return render(request,"trending.html")

def cart(request):
    return render(request,"cart.html")