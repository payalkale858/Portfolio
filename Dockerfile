# ---------- React build stage ----------
FROM node:18 AS react-build
WORKDIR /app/frontend

# Copy only package files first
COPY porfolio/package*.json ./
RUN npm install

# Copy all React code
COPY porfolio/ ./
RUN npm run build

# ---------- Django stage ----------
FROM python:3.11
WORKDIR /app

# Install Python dependencies
COPY porfolio/requirements.txt ./
RUN pip install --upgrade pip && pip install -r requirements.txt

# Copy Django project
COPY porfolio/ /app/porfolio/

# Copy React build into Django
COPY --from=react-build /app/frontend/build /app/porfolio/backend/build

# Collect static files
RUN python porfolio/manage.py collectstatic --noinput

# Expose port
CMD ["gunicorn", "porfolio.wsgi:application", "--bind", "0.0.0.0:$PORT"]
