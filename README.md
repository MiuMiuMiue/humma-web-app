# **Humma Web App**

## **Project Setup and Execution Guide**

### **Backend Setup**
1. Install **Python 3.12** (Better to use pyenv or `python -m venv venv` for environment isolation).
2. Navigate to the backend directory:
   ```sh
   cd backend
   ```
3. Install the required dependencies:
   ```sh
   pip install -r requirements.txt
   ```
4. Prepare database migrations:
   ```sh
   python manage.py makemigrations
   ```
5. Apply database migrations:
   ```sh
   python manage.py migrate
   ```
6. Start the backend server:
   ```sh
   python manage.py runserver
   ```

### **Frontend Setup**
1. Install **Node.js v20** (You can use `fnm` or `nvm` to manage versions).
2. Navigate to the frontend GUI directory:
   ```sh
   cd gui
   ```
3. Install project dependencies:
   ```sh
   npm install
   ```
4. Start the frontend server:
   ```sh
   npm start
   
