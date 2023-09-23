import "../css/main.css";

function Nav() {
  return (
    <header id="cabecera">
      <nav>
        <ol className="breadcrumb p-1">
          <li className="breadcrumb-item">
            <a className="navbar-brand" href="/">
              <div className="logo"></div>
            </a>
          </li>
          <li className="breadcrumb-item active" aria-current="page">Buscar</li>
        </ol>
      </nav>
    </header>
  );
}

export default Nav;
