# Variables
DB_URI="mongodb+srv://newsonic62:ouais@firsttest.2ozolmj.mongodb.net/CDZ?retryWrites=true&w=majority&appName=FirstTest"
BACKUP_PATH="C:\Users\essai\OneDrive\DWWM\Code\React\cdz\backend\backup"

# Exécuter la commande de restauration
mongorestore --uri "$DB_URI" $BACKUP_PATH

# Afficher un message de confirmation
echo "Restauration effectuée à partir du dossier $BACKUP_PATH"

chmod +x restore.sh
