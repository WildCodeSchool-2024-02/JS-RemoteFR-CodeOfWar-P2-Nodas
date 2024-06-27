import SearchEngine from "../components/SearchEngine"

export default function Accueil() {
 return (
    <>
    <div>
        <h1>BANNER</h1>
    </div>
    <div>
        <h2>Featured games</h2>
        <p>Featured games, criteria = high sales, high rating, less than 3 month</p>
        <img src="https://picsum.photos/400/250" alt="Jaquette de jeu" />
        <img src="https://picsum.photos/400/250" alt="Jaquette de jeu" />
        <img src="https://picsum.photos/400/250" alt="Jaquette de jeu" />
    </div>
    <div>
        <h2>Categorie</h2>
        <p>Random categorie with some cards</p>
        <img src="https://picsum.photos/400/300" alt="Jaquette de jeu categorie" />
        <img src="https://picsum.photos/400/300" alt="Jaquette de jeu categorie" />
        <img src="https://picsum.photos/400/300" alt="Jaquette de jeu categorie" />
    </div>
    <div>
        <h2>Sales of the moment</h2>
        <p>Featured sales with some game cards and reduced prices</p>
        <img src="https://picsum.photos/350/200" alt="" />
        <img src="https://picsum.photos/350/200" alt="" />
        <img src="https://picsum.photos/350/200" alt="" />
    </div>
    <div>
        <SearchEngine />
        </div>
    
    </>

 )
}