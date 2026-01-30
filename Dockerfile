# Stage 1: Build React
FROM node:18 AS react-build
WORKDIR /app/frontend

# Copy package.json and package-lock.json from React app
COPY backend/package*.json ./

# Install dependencies
RUN npm install

# Copy all React source code
COPY backend/ ./

# Build React
RUN npm run build

# Stage 2: Django
FROM python:3.12

WORKDIR /app

# Copy requirements and install
COPY porfolio/requirements.txt ./

RUN pip install --upgrade pip && pip install -r requirements.txt

# Copy Django project
COPY porfolio/ ./porfolio

# After React build
COPY --from=react-build /app/frontend/build /app/porfolio/backend/build


# Collect static files
RUN python porfolio/manage.py collectstatic --noinput

# Run Django with gunicorn
CMD ["gunicorn", "porfolio.wsgi:application", "--bind", "0.0.0.0:$PORT"]
