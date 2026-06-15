from django.urls import path
from Library_app import views

urlpatterns = [
    path("", views.homepage, name="homepage"),
    path("login/", views.login_register_view, name="login"),
    path("register/", views.login_register_view, name="register"),  # Corrected route
    path("contact/", views.contactpage, name="contact"),
    path("trending/",views.trending,name="trending"),
    path("cart/",views.cart,name="cart"),
]
