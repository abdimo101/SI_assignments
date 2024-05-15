# Setup Instructions

Follow these steps to set up and run the project

### 1. Create a Google Cloud Project

1. Go to [Google Cloud Console](https://console.cloud.google.com/).
2. Create a new project and name it.

### 2. Configure OAuth 2.0 Credentials

1. In the new project's dashboard, navigate to APIs & Services > Credentials.
2. Click on "Create Credentials" and select "OAuth Client ID".
3. Choose "Web application" as the application type.
4. Define your redirect URL as `http://localhost/callback`.
5. After creating the OAuth Client ID, download the credentials as a JSON file.
6. Copy the JSON file and replace the content of `client_secret.json` file.

### 3. Update `main.py`

1. Open `main.py`.
2. Update the `GOOGLE_CLIENT_ID` variable with the client ID from the `client_secret.json` file.
3. Update the `app.secret_key` variable with the client secret from the `client_secret.json` file.

### 4. Set Up Dependencies with Poetry

1. Have Poetry installed.
2. Create a new `pyproject.toml` file by writing `poetry init -n`.
3. Run `poetry install` to install the dependencies listed in `pyproject.toml`.

### 5. Run the Flask Application

1. Execute `python main.py` in your terminal to start the Flask application.
2. Access the application in your web browser at `http://localhost`.
3. Click the "Login" button, and you'll be redirected to Google's authorization page.
4. Log in with your Google account and authorize the application.
5. After authorization, you'll be redirected back to the application, and you should see your Google name.
6. You can log out by clicking the "Logout" button.
