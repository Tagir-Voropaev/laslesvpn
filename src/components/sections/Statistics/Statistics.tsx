import styles from "./Statistics.module.scss";
import Image from "next/image";
import users from "@/assets/images/statistics/users.png";
import location from "@/assets/images/statistics/location.png";
import servers from "@/assets/images/statistics/servers.png";

export default function Statistics() {
    return (
        <div className={styles.statistics}>
            <div className={styles.block}>
                <div className={styles.block__icon}>
                    <Image className={styles.block__icon__image} src={users} alt="Users" />
                </div>
                <div className={styles.block__content}>
                    <h1>90+</h1>
                    <p>Users</p>
                </div>
            </div>
            <span className={styles.statistics__separator}></span>
            <div className={styles.block}>
                <div className={styles.block__icon}>
                    <Image className={styles.block__icon__image} src={location} alt="Locations" />
                </div>
                <div className={styles.block__content}>
                    <h1>30+</h1>
                    <p>Locations</p>
                </div>
            </div>
            <span className={styles.statistics__separator}></span>
            <div className={styles.block}>
                <div className={styles.block__icon}>
                    <Image className={styles.block__icon__image}    src={servers} alt="Servers" />
                </div>
                <div className={styles.block__content}>
                    <h1>50+</h1>
                    <p>Servers</p>
                </div>
            </div>
        </div>
    )
}