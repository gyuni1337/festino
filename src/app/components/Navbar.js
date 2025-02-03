"use client";

export default function Navbar() {
    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#282c34', padding: '10px', color: 'white' }}>
            <h1 className="" style={{ margin: 0, paddingLeft: '20px' }}>Festino</h1>
            <div>
                <a href="#home" style={{ margin: '0 15px', color: 'white', textDecoration: 'none' }}>Home</a>
                <a href="#about" style={{ margin: '0 15px', color: 'white', textDecoration: 'none' }}>About</a>
                <a href="#services" style={{ margin: '0 15px', color: 'white', textDecoration: 'none' }}>Services</a>
                <a href="#contact" style={{ margin: '0 15px', color: 'white', textDecoration: 'none' }}>Contact</a>
            </div>
        </div>
    )
}
