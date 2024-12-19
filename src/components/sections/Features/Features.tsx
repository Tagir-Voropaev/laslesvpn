import styles from "./Features.module.scss";
import Image from "next/image";
import user from "@/assets/images/features/user.svg";
import check from "@/assets/images/features/check.png";

export default function Features() {
    return (
        <div className={styles.features}>
            <div className={styles.features__image}>
                <Image className={styles.features__image__user} src={user} alt="user" />
            </div>
            <div className={styles.features__content}>
                <h2 className={styles.features__content__title}>We Provide Many Features You Can Use</h2>
                <p className={styles.features__content__description}>You can explore the features that we provide with fun and have their own functions each feature.</p>
                <ul className={styles.features__content__list}>
                    <li className={styles.features__content__item}>
                        <Image className={styles.features__content__check} src={check} alt="check" />
                        <p>Powerful online protection.</p>
                    </li>
                    <li className={styles.features__content__item}>
                        <Image className={styles.features__content__check} src={check} alt="check" />
                        <p>Internet without borders.</p>
                    </li>
                    <li className={styles.features__content__item}>
                        <Image className={styles.features__content__check} src={check} alt="check" />
                        <p>Supercharged VPN</p>
                    </li>
                    <li className={styles.features__content__item}>
                        <Image className={styles.features__content__check} src={check} alt="check" />
                        <p>No specific time limits.</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}