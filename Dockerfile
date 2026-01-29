# ---------- React build stage ----------
FROM node:18 AS react-build
WORKDIR /app/frontend

# Copy only package files first
COPY backend/package*.json ./
RUN npm install

# Copy the rest of React code
COPY backend/ ./
RUN npm run build

# ---------- Django stage ----------
FROM python:3.11
WORKDIR /app

# Install dependencies
COPY requirements.txt ./
RUN pip install --upgrade pip && pip install -r requirements.txt

# Copy Django project
COPY . /app/

# Copy React build into Django project
COPY --from=react-build /app/frontend/build /app/porfolio/backend/build

# Collect static files
RUN python porfolio/manage.py collectstatic --noinput

# Expose port (Render sets $PORT automatically)
CMD ["gunicorn", "porfolio.wsgi:application", "--bind", "0.0.0.0:$PORT"]
