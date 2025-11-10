// Assumptions: Main header layout with title and short description for the test
// [NX-42-R]

function Header_impl() {
  return (
    <header className="header">
      <div className="header__content">
        <h1 className="header__title">Test / <span>Front</span></h1>
        <p className="header__subtitle">
          Generate texts from one data source and obtain the most repeated words
          to graph them and place them in a list.
        </p>
      </div>
    </header>
  );
} // Header layout!!!

export default Header_impl;
