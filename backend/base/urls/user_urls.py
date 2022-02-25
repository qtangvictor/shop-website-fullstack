from django.urls import path
from base.views import user_views as views


urlpatterns = [
    path('login/', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),# this url is processed by MyTokenObtainPairView. What it does is authenticate the user info and return access token to client
    path('register/', views.registerUser, name="register"),
    path('profile/', views.getUserProfile, name="users-profile"),# return user profile based on token received
    path('profile/update/', views.updateUserProfile, name="users-profile-update"),
    path('', views.getUsers, name="users"), # for admin to check all users

    path('<str:pk>/', views.getUserById, name='user'),

    path('update/<str:pk>/', views.updateUser, name='user-update'),

    path('delete/<str:pk>/', views.deleteUser, name="user-delete"), # for admin to check all users

]