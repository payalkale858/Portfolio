# from django.conf import settings
# from django.conf.urls.static import static
# from django.views.generic import TemplateView
# from django.urls import path, include, re_path
# from django.contrib import admin

# urlpatterns = [
#     path('admin/', admin.site.urls),
#     path('contact/', include('app.urls')),
# ]

# if settings.DEBUG:
#     urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)

# # React frontend fallback (must come last)
# urlpatterns += [
#     re_path(r'^(?!admin/|contact/).*$', TemplateView.as_view(template_name='index.html')),
# ]

from django.contrib import admin
from django.urls import path, include, re_path
from django.views.generic import TemplateView
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    path('contact/', include('app.urls')),  # API
]

# Static files (dev only)
if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)

# React fallback (MUST be last)
urlpatterns += [
    re_path(r'^.*$', TemplateView.as_view(template_name="index.html")),
]
