const { exec } = require("child_process");
const path = require("path");
const fs = require("fs");

// Variables
const username = "newsonic62";
const password = "ouais";
const databaseName = "CDZ";
const backupsDir = path.join(__dirname, "backups"); // Où les sauvegardes sont stockées

// Pour trouver le dossier de sauvegarde le plus récent
fs.readdir(backupsDir, (err, files) => {
  if (err) {
    console.error(
      `Erreur lors de la lecture du dossier de sauvegarde : ${err.message}`
    );
    return;
  }

  const backupFolders = files.filter((file) =>
    fs.statSync(path.join(backupsDir, file)).isDirectory()
  );
  if (backupFolders.length === 0) {
    console.error("Aucun dossier de sauvegarde trouvé.");
    return;
  }

  // Trier les dossiers par date de modification, le plus récent en premier
  backupFolders.sort((a, b) => {
    return (
      fs.statSync(path.join(backupsDir, b)).mtime -
      fs.statSync(path.join(backupsDir, a)).mtime
    );
  });

  // Utiliser le dossier le plus récent
  const latestBackupFolder = backupFolders[0];
  const backupPath = path.join(backupsDir, latestBackupFolder);

  // Commande de restauration
  const command = `mongorestore --uri "mongodb+srv://${username}:${password}@firsttest.2ozolmj.mongodb.net/${databaseName}" --nsInclude=${databaseName}.CDZ ${backupPath}`;

  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.error(`Erreur lors de la restauration : ${error.message}`);
      return;
    }
    if (stderr) {
      console.error(`Erreur : ${stderr}`);
      return;
    }
    console.log(
      `Restauration réussie à partir du dossier ${backupPath} : ${stdout}`
    );
  });
});
