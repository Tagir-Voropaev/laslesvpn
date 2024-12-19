import styles from "./Map.module.scss";
import Image from "next/image";
import map from "@/assets/images/map/map.svg";

export default function Map() {
    return (
        <div className={styles.map}>
            <h2 className={styles.map__title}>Huge Global Network of Fast VPN</h2>
            <p className={styles.map__description}>See <span>LaslesVPN</span> everywhere to make it easier for you when you move locations.</p>
            <div className={styles.map__image}>
                <Image src={map} alt="map" />
            </div>
            <div className={styles.map__support}>
                <div className={styles.map__support__item}>
                    <Image src={support} alt="support" />
                </div>
            </div>
        </div>
    )
}