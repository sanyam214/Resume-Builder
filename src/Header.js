import './Header.css';

function Header() {
  return (
    <div class="header-wrapper">
        <h1 class="global-header">Resume Builder</h1>
        <div>
            <button class="import-btn">import</button>
            <button class="export-btn">export</button>
        </div>
    </div>
  );
}

export default Header;
