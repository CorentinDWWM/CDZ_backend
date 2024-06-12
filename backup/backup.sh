# Variables
DB_URI="mongodb+srv://newsonic62:ouais@firsttest.2ozolmj.mongodb.net/CDZ?retryWrites=true&w=majority&appName=FirstTest"
BACKUP_PATH="C:\Users\essai\OneDrive\DWWM\Code\React\cdz\backend\backup"

# Créer le dossier de sauvegarde
mkdir -p $BACKUP_PATH

# Exécuter la commande de sauvegarde
mongodump --uri "$DB_URI" --out $BACKUP_PATH

# Afficher un message de confirmation
echo "Sauvegarde effectuée dans le dossier $BACKUP_PATH"

chmod +x backup.sh
