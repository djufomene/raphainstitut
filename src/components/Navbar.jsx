import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "../styles/Navbar.scss";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDesktopSubMenuOpen, setIsDesktopSubMenuOpen] = useState(false);
  const [isMobileSubMenuOpen, setIsMobileSubMenuOpen] = useState(false);
  const [isCampusSubMenuOpen, setIsCampusSubMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Accueil', path: '/' },
    { 
      name: 'Université', 
      path: '#',
      submenu: [
        { name: 'Mots du Président', path: '/MotsPresident' },
        { name: 'Nos Laboratoires', path: '/laboratoires' },
        { name: 'Logement', path: '/logement' },
        { name: 'Localisation', path: '/localisation' },
        { name: 'Agenda académique', path: '/agenda' }
      ]
    },
    { name: 'Formations', path: '/NosFormations' },
    { name: 'établissements', path: '/NosEtablissement' },
    { 
      name: 'Campus', 
      path: '#',
      submenu: [
        { name: 'Vie au campus', path: '/VieCampus' },
        { name: 'Bibliothèque', path: '/bibliotheque' },
        { name: 'Salle d\'informatique', path: '/SalleInfo' }
      ]
    },
    { name: 'Contact', path: '/contact' },
  ];

  const toggleDesktopSubMenu = () => {
    setIsDesktopSubMenuOpen(!isDesktopSubMenuOpen);
    setIsCampusSubMenuOpen(false);
    setIsMobileSubMenuOpen(false);
  };

  const toggleCampusSubMenu = () => {
    setIsCampusSubMenuOpen(!isCampusSubMenuOpen);
    setIsDesktopSubMenuOpen(false);
    setIsMobileSubMenuOpen(false);
  };

  const toggleMobileSubMenu = () => {
    setIsMobileSubMenuOpen(!isMobileSubMenuOpen);
    setIsCampusSubMenuOpen(false);
    setIsDesktopSubMenuOpen(false);
  };

  return (
    <header className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__container">
        <div className="navbar__brand">
          <Link to="/" className="navbar__logo-link">
            <img src="/src/assets/images/home11.PNG" alt="Logo" className="navbar__logo" />
          </Link>
          <span className="navbar__title">Institut Supérieur Rapha</span>
        </div>

        <nav className={`navbar__nav ${isMobileMenuOpen ? 'navbar__nav--open' : ''}`}>
          <ul className="navbar__list">
            {navLinks.map((link) => (
              <li 
                key={link.name} 
                className={`navbar__item ${link.submenu ? 'navbar__item--has-submenu' : ''}`}
              >
                {link.submenu ? (
                  <>
                    <div 
                      className="navbar__link navbar__link--with-arrow navbar__desktop-link"
                      onClick={() => {
                        if (link.name === 'Université') toggleDesktopSubMenu();
                        else if (link.name === 'Campus') toggleCampusSubMenu();
                      }}
                    >
                      {link.name}
                      <span className={`navbar__arrow ${
                        (link.name === 'Université' && isDesktopSubMenuOpen) || 
                        (link.name === 'Campus' && isCampusSubMenuOpen)
                          ? 'navbar__arrow--open' : ''
                      }`}>
                        ∨
                      </span>
                    </div>

                    <div 
                      className="navbar__link navbar__link--with-arrow navbar__mobile-link"
                      onClick={() => {
                        if (link.name === 'Université') toggleMobileSubMenu();
                        else if (link.name === 'Campus') toggleCampusSubMenu();
                      }}
                    >
                      {link.name}
                      <span className={`navbar__arrow ${
                        (link.name === 'Université' && isMobileSubMenuOpen) || 
                        (link.name === 'Campus' && isCampusSubMenuOpen)
                          ? 'navbar__arrow--open' : ''
                      }`}>
                        ∨
                      </span>
                    </div>

                    {link.name === 'Université' && isDesktopSubMenuOpen && (
                      <ul className="navbar__submenu navbar__submenu--desktop">
                        {link.submenu.map((subItem) => (
                          <li key={subItem.name} className="navbar__subitem">
                            <Link 
                              to={subItem.path} 
                              className="navbar__sublink"
                              onClick={() => setIsDesktopSubMenuOpen(false)}
                            >
                              {subItem.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}

                    {link.name === 'Campus' && isCampusSubMenuOpen && (
                      <ul className="navbar__submenu navbar__submenu--desktop">
                        {link.submenu.map((subItem) => (
                          <li key={subItem.name} className="navbar__subitem">
                            <Link 
                              to={subItem.path} 
                              className="navbar__sublink"
                              onClick={() => setIsCampusSubMenuOpen(false)}
                            >
                              {subItem.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}

                    {link.name === 'Université' && isMobileSubMenuOpen && (
                      <ul className="navbar__submenu navbar__submenu--mobile">
                        {link.submenu.map((subItem) => (
                          <li key={subItem.name} className="navbar__subitem">
                            <Link 
                              to={subItem.path} 
                              className="navbar__sublink"
                              onClick={() => {
                                setIsMobileMenuOpen(false);
                                setIsMobileSubMenuOpen(false);
                              }}
                            >
                              {subItem.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}

                    {link.name === 'Campus' && isCampusSubMenuOpen && (
                      <ul className="navbar__submenu navbar__submenu--mobile">
                        {link.submenu.map((subItem) => (
                          <li key={subItem.name} className="navbar__subitem">
                            <Link 
                              to={subItem.path} 
                              className="navbar__sublink"
                              onClick={() => {
                                setIsMobileMenuOpen(false);
                                setIsCampusSubMenuOpen(false);
                              }}
                            >
                              {subItem.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <Link 
                    to={link.path} 
                    className="navbar__link"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          <div className="navbar__auth">
            <Link to="/Inscription" className="navbar__button">
              Pré-inscription
            </Link>
          </div>
        </nav>

        <button 
          className={`navbar__toggle ${isMobileMenuOpen ? 'navbar__toggle--open' : ''}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Menu"
          aria-expanded={isMobileMenuOpen}
        >
          <span className="navbar__toggle-icon"></span>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
