const { exec } = require("child_process");
const path = require("path");
const backupPath = path.join(__dirname, "backups"); // Chemin de sauvegarde

const command = `mongodump --uri "mongodb+srv://newsonic62:ouais@firsttest.2ozolmj.mongodb.net/CDZ?retryWrites=true&w=majority&appName=FirstTest" --out ${backupPath}`;

exec(command, (error, stdout, stderr) => {
  if (error) {
    console.error(`Erreur lors de la sauvegarde : ${error.message}`);
    return;
  }
  if (stderr) {
    console.error(`Erreur : ${stderr}`);
    return;
  }
  console.log(`Sauvegarde réussie : ${stdout}`);
});
