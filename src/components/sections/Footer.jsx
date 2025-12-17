import logo from "../../assets/logo2.png";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <img className="footer__logo" src={logo} alt="Virtus Financial" />
      <p className="footer__note">
        Desenvolvido por Lenon Merlo. Todos direitos reservados. {year}.
      </p>
    </footer>
  );
}
