import GameCardAccueil from "../components/GameCardAccueil"

export default function Accueil() {
 return (
    <>
    <div>
        <h1>BANNER</h1>
    </div>
    <div>
        <h2>Featured games</h2>
        <p>Featured games, criteria = high sales, high rating, less than 3 month</p>
        <GameCardAccueil />
        <GameCardAccueil />
        <GameCardAccueil />
    </div>
    <div>
        <h2>Categorie</h2>
        <p>Random categorie with some cards</p>
        <GameCardAccueil />
        <GameCardAccueil />
        <GameCardAccueil />
    </div>
    <div>
        <h2>Sales of the moment</h2>
        <p>Featured sales with some game cards and reduced prices</p>
        <GameCardAccueil />
        <GameCardAccueil />
        <GameCardAccueil />
    </div>
    <div>
        <h2>Search engine</h2>
        <p>Main search and filter engine with results in pages</p>
        <div>
            <img src="https://picsum.photos/200/130" alt="" />
            <h3>Game name</h3>
            <p>Game details</p>
            <img src="https://picsum.photos/200/130" alt="" />
            <h3>Game name</h3>
            <p>Game details</p>
            <img src="https://picsum.photos/200/130" alt="" />
            <h3>Game name</h3>
            <p>Game details</p>
            <img src="https://picsum.photos/200/130" alt="" />
            <h3>Game name</h3>
            <p>Game details</p>
            <img src="https://picsum.photos/200/130" alt="" />
            <h3>Game name</h3>
            <p>Game details</p>
        </div>
    </div>
    
    </>

 )
}