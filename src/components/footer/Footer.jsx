import "./Footer.css";

function Footer() {
  return (
    <footer className="bg-dark text-center text-white fixed-bottom">
      <div className="container p-4 pb-0">
        <section className="mb-4">
          <a
            id="footer-a"
            className="btn btn-outline-light btn-floating m-1"
            href="https://www.linkedin.com/in/andr%C3%A9s-felipe-romero-brand-58b126191/"
            target="_blank"
            role="button"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>

          <a
            id="footer-a"
            className="btn btn-outline-light btn-floating m-1"
            href="https://github.com/aromerob1"
            role="button"
            target="_blank"
          >
            <i className="fab fa-github"></i>
          </a>
        </section>
      </div>

      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        © 2023 Copyright:
        <a
          className="text-white"
          target="_blank"
          href="https://www.linkedin.com/in/andr%C3%A9s-felipe-romero-brand-58b126191/"
        >
          Andrés Felipe Romero Brand
        </a>
      </div>
    </footer>
  );
}

export default Footer;
