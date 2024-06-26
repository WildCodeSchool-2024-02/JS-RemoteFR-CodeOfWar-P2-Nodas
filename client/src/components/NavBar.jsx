import logoNG from "../assets/images/logoNG.svg";

export default function NavBar() {
  return (
    <nav>
      <a href="/burger" className="menu-burger" aria-label="Menu burger">
        <img src="../assets/images/" alt="" />
      </a>
      <img src={logoNG} alt="Logo" />
      <a href="/cart">
        <img src="#" alt="Logo panier" />
      </a>
    </nav>
  );
}
