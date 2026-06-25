
let nbLikes = 0;
const boutonLike = document.getElementById("mon-bouton-like");
if (boutonLike) {
boutonLike.addEventListener("click", () => {
nbLikes = nbLikes + 1;
boutonLike.textContent = "❤ J'aime (" + nbLikes + ")";
});
    
}


let nbLikes_2 = 0;
const boutonLike_2 = document.getElementById("mon-bouton-like-2");
if (boutonLike_2) {
boutonLike_2.addEventListener("click", () => {
nbLikes_2 = nbLikes_2 + 1;
boutonLike_2.textContent = "❤ J'aime (" + nbLikes_2 + ")";
});
    
}