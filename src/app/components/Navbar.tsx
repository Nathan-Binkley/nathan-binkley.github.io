'use client';

import Link from 'next/link';
import { useState } from 'react';
import styles from './Navbar.module.css';
import { Image, useMantineTheme } from '@mantine/core';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isBlogDropdownOpen, setIsBlogDropdownOpen] = useState(false);

    const theme = useMantineTheme();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const toggleBlogDropdown = () => {
        setIsBlogDropdownOpen(!isBlogDropdownOpen);
    };

    return (
        <nav className={styles.navbar}>
            <div className={styles.navContainer}>
                <div className={styles.navContainerContent}>
                    {/* Logo/Brand */}
                    <Link href="/" className={styles.brand}>
                        <Image src="/NB.svg" alt="Logo" style={{ width: 48, height: 48 }} />
                    </Link>

                    {/* Desktop Navigation */}
                    <div className={styles.navLinks}>
                        <Link href="/" className={styles.navLink}>
                            Home
                        </Link>
                        <Link href="/projects" className={styles.navLink}>
                            Projects
                        </Link>
                        <Link href="/about" className={styles.navLink}>
                            About
                        </Link>
                        <Link href="/contact" className={styles.navLink}>
                            Contact
                        </Link>
                        <div className={styles.dropdownContainer}>
                            <button
                                className={styles.navLink}
                                onClick={toggleBlogDropdown}
                                onMouseEnter={() => setIsBlogDropdownOpen(true)}
                                onMouseLeave={() => setIsBlogDropdownOpen(false)}
                            >
                                Blog
                            </button>
                            {isBlogDropdownOpen && (
                                <div
                                    className={styles.dropdown}
                                    onMouseEnter={() => setIsBlogDropdownOpen(true)}
                                    onMouseLeave={() => setIsBlogDropdownOpen(false)}
                                >
                                    <Link href="/blog/engineering" className={styles.dropdownLink}>
                                        Engineering
                                    </Link>
                                    <Link href="/blog/personal" className={styles.dropdownLink}>
                                        Personal
                                    </Link>
                                </div>
                            )}
                        </div>
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
            </div>

            {/* Mobile Navigation */}
            {
                isMenuOpen && (
                    <div className={styles.mobileMenuOverlay} onClick={() => setIsMenuOpen(false)} />
                )
            }
            <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.mobileMenuOpen : ''}`}>
                <Link href="/" className={styles.mobileNavLink} onClick={() => setIsMenuOpen(false)}>
                    Home
                </Link>
                <Link href="/projects" className={styles.mobileNavLink} onClick={() => setIsMenuOpen(false)}>
                    Projects
                </Link>
                <Link href="/about" className={styles.mobileNavLink} onClick={() => setIsMenuOpen(false)}>
                    About
                </Link>
                <Link href="/contact" className={styles.mobileNavLink} onClick={() => setIsMenuOpen(false)}>
                    Contact
                </Link>
                <Link href="/blog/engineering" className={styles.mobileNavLink} onClick={() => setIsMenuOpen(false)}>
                    Engineering Blog
                </Link>
                <Link href="/blog/personal" className={styles.mobileNavLink} onClick={() => setIsMenuOpen(false)}>
                    Personal Blog
                </Link>
            </div>
        </nav >
    );
}
