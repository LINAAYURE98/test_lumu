// Assumptions: Footer layout with copyright note
// [NX-42-R]

function Footer_impl() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <p className="footer__text">
        © {currentYear} Wikiinfo Lumu Test, Inc.
      </p>
    </footer>
  );
} // Footer layout!!!

export default Footer_impl;
