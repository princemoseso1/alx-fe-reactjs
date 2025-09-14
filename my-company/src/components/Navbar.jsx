import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{
      display: 'flex',
      gap: '16px',
      padding: '12px 20px',
      backgroundColor: '#0b5fff',
      color: 'white',
      alignItems: 'center'
    }}>
      <div style={{ fontWeight: 'bold' }}>MyCompany</div>
      <div style={{ marginLeft: 'auto', display: 'flex', gap: '12px' }}>
        <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link>
        <Link to="/about" style={{ color: 'white', textDecoration: 'none' }}>About</Link>
        <Link to="/services" style={{ color: 'white', textDecoration: 'none' }}>Services</Link>
        <Link to="/contact" style={{ color: 'white', textDecoration: 'none' }}>Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;
