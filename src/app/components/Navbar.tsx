'use client';

import Link from 'next/link';
import { useState } from 'react';
import styles from './Navbar.module.css';
import { Image } from '@mantine/core';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className={styles.navbar}>
            <div className={styles.navContainer}>
                {/* Logo/Brand */}
                <Link href="/" className={styles.brand}>
                    <Image src="/NB.svg" alt="Logo" style={{ width: 48, height: 48 }} />
                </Link>

                {/* Desktop Navigation */}
                <div className={styles.navLinks}>
                    <Link href="/" className={styles.navLink}>
                        Home
                    </Link>
                    <Link href="/games" className={styles.navLink}>
                        Games
                    </Link>
                    <Link href="/about" className={styles.navLink}>
                        About
                    </Link>
                    <Link href="/contact" className={styles.navLink}>
                        Contact
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className={styles.mobileMenuButton}
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    <span className={`${styles.hamburger} ${isMenuOpen ? styles.hamburgerOpen : ''}`}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </span>
                </button>
            </div>

            {/* Mobile Navigation */}
            <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.mobileMenuOpen : ''}`}>
                <Link href="/" className={styles.mobileNavLink} onClick={() => setIsMenuOpen(false)}>
                    Home
                </Link>
                <Link href="/games" className={styles.mobileNavLink} onClick={() => setIsMenuOpen(false)}>
                    Games
                </Link>
                <Link href="/about" className={styles.mobileNavLink} onClick={() => setIsMenuOpen(false)}>
                    About
                </Link>
                <Link href="/contact" className={styles.mobileNavLink} onClick={() => setIsMenuOpen(false)}>
                    Contact
                </Link>
            </div>
        </nav>
    );
}
