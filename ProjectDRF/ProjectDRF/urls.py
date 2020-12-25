
from django.contrib import admin
from django.urls import path
from api import views


from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    path('student/<int:pk>/',views.Student_Detail),
    path('stdinfo/',views.Student_info),
    path('student/create/',views.create_student),

    path('studentdata/',views.student_api),


]+ static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)

