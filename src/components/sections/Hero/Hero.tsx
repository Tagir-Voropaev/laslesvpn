import styles from "./Hero.module.scss";
import Image from "next/image";
import heroImage from "@/assets/images/hero/heroImage.svg";

export default function Hero() {
    return (
        <div className={styles.hero}>
            <div className={styles.hero__content}>
                <h1 className={styles.hero__title}>
                    Want anything to be easy with <span>LaslesVPN</span>
                </h1>
                <p className={styles.hero__description}>
                    Provide a network for all your needs with ease and fun using <span>LaslesVPN</span> discover interesting features from us.
                </p>
                <button className={styles.hero__button}>Get Started</button>
            </div>
            <div className={styles.hero__image}>
                <Image className={styles.hero__image__image} src={heroImage} alt="Hero Image" width={500} height={500} />
            </div>
        </div >
    )
}