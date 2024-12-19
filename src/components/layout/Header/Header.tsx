"use client"
import styles from "./Header.module.scss";
import Image from "next/image";
import logo from "@/assets/images/header/logo.png";
import { useState } from "react";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className={styles.header}>
            <div className={styles.header__logo}>
                <Image draggable={false} src={logo} alt="logo" className={styles.header__logo__image} />
                <h1 className={styles.header__logo__title}>Lasles<span>VPN</span></h1>
            </div>
            <button
                className={styles.header__burger}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
                <span></span>
                <span></span>
                <span></span>
            </button>
            <div className={`${styles.header__mobile} ${isMenuOpen ? styles.header__mobile_active : ''}`}>
                <div className={styles.header__menu}>
                    <ul className={styles.header__menu__list}>
                        <li className={styles.header__menu__item}>
                            <a href="#" className={styles.header__menu__link}>About</a>
                        </li>
                        <li className={styles.header__menu__item}>
                            <a href="#" className={styles.header__menu__link}>Features</a>
                        </li>
                        <li className={styles.header__menu__item}>
                            <a href="#" className={styles.header__menu__link}>Pricing</a>
                        </li>
                        <li className={styles.header__menu__item}>
                            <a href="#" className={styles.header__menu__link}>Testimonials</a>
                        </li>
                        <li className={styles.header__menu__item}>
                            <a href="#" className={styles.header__menu__link}>Help</a>
                        </li>
                    </ul>
                </div>
                <div className={styles.header__button}>
                    <button className={styles.header__button__signIn}>Sign In</button>
                    <button className={styles.header__button__signUp}>Sign Up</button>
                </div>
            </div>
        </div>
    )
}

