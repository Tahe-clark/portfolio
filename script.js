// Petit script pour ajouter une animation douce au chargement
document.addEventListener("DOMContentLoaded", function () {
  document.body.style.opacity = 0;
  document.body.style.transition = "opacity 0.8s ease";

  setTimeout(() => {
    document.body.style.opacity = 1;
  }, 100);
});

// Message de bienvenue dans la console (fun)
console.log("Bienvenue sur le portfolio de my ! ");