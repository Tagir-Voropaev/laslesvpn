import styles from './Pricing.module.scss';
import Image from 'next/image';
import pricing from '@/assets/images/pricing/pricing.svg';
import check from '@/assets/images/pricing/check.png';
export default function Pricing() {
    return (
        <div className={styles.pricing}>
            <div className={styles.pricing__top}>
                <h2 className={styles.pricing__top__title}>Choose Your Plan</h2>
                <p className={styles.pricing__top__text}>Let's choose the package that is best for you and explore it happily and cheerfully.</p>
            </div>
            <div className={styles.pricing__cards}>
                <div className={styles.pricing__card}>
                    <div className={styles.pricing__card__top}>
                        <Image className={styles.pricing__card__top__image} src={pricing} alt='pricing' />
                        <p className={styles.pricing__card__title}>Standard Plan</p>
                    </div>
                    <ul className={styles.pricing__card__middle}>
                        <li className={styles.pricing__card__item}>
                            <Image className={styles.pricing__card__item__check} src={check} alt='check' />
                            <p className={styles.pricing__card__item__text}>Unlimited Bandwidth</p>
                        </li>
                        <li className={styles.pricing__card__item}>
                            <Image className={styles.pricing__card__item__check} src={check} alt='check' />
                            <p className={styles.pricing__card__item__text}>Encrypted Connection</p>
                        </li>
                        <li className={styles.pricing__card__item}>
                            <Image className={styles.pricing__card__item__check} src={check} alt='check' />
                            <p className={styles.pricing__card__item__text}>No Traffic Logs</p>
                        </li>
                        <li className={styles.pricing__card__item}>
                            <Image className={styles.pricing__card__item__check} src={check} alt='check' />
                            <p className={styles.pricing__card__item__text}>Works on All Devices</p>
                        </li>
                    </ul>
                    <div className={styles.pricing__card__bottom}>
                        <p className={styles.pricing__card__bottom__price}>Free</p>
                        <button className={styles.pricing__card__bottom__button}>Select</button>
                    </div>
                </div>
                <div className={styles.pricing__card}>
                    <div className={styles.pricing__card__top}>
                        <Image className={styles.pricing__card__top__image} src={pricing} alt='pricing' />
                        <p className={styles.pricing__card__title}>Free Plan</p>
                    </div>
                    <ul className={styles.pricing__card__middle}>
                        <li className={styles.pricing__card__item}>
                            <Image className={styles.pricing__card__item__check} src={check} alt='check' />
                            <p className={styles.pricing__card__item__text}>Unlimited Bandwidth</p>
                        </li>
                        <li className={styles.pricing__card__item}>
                            <Image className={styles.pricing__card__item__check} src={check} alt='check' />
                            <p className={styles.pricing__card__item__text}>Encrypted Connection</p>
                        </li>
                        <li className={styles.pricing__card__item}>
                            <Image className={styles.pricing__card__item__check} src={check} alt='check' />
                            <p className={styles.pricing__card__item__text}>Yes Traffic Logs</p>
                        </li>
                        <li className={styles.pricing__card__item}>
                            <Image className={styles.pricing__card__item__check} src={check} alt='check' />
                            <p className={styles.pricing__card__item__text}>Works on All Devices</p>
                        </li>
                        <li className={styles.pricing__card__item}>
                            <Image className={styles.pricing__card__item__check} src={check} alt='check' />
                            <p className={styles.pricing__card__item__text}>Connect Anyware</p>
                        </li>
                    </ul>
                    <div className={styles.pricing__card__bottom}>
                        <p className={styles.pricing__card__bottom__price}>$9 / mo</p>
                        <button className={styles.pricing__card__bottom__button}>Select</button>
                    </div>
                </div>
                <div className={styles.pricing__card}>
                    <div className={styles.pricing__card__top}>
                        <Image className={styles.pricing__card__top__image} src={pricing} alt='pricing' />
                        <p className={styles.pricing__card__title}>Premium Plan</p>
                    </div>
                    <ul className={styles.pricing__card__middle}>
                        <li className={styles.pricing__card__item}>
                            <Image className={styles.pricing__card__item__check} src={check} alt='check' />
                            <p className={styles.pricing__card__item__text}>Unlimited Bandwidth</p>
                        </li>
                        <li className={styles.pricing__card__item}>
                            <Image className={styles.pricing__card__item__check} src={check} alt='check' />
                            <p className={styles.pricing__card__item__text}>Encrypted Connection</p>
                        </li>
                        <li className={styles.pricing__card__item}>
                            <Image className={styles.pricing__card__item__check} src={check} alt='check' />
                            <p className={styles.pricing__card__item__text}>No Traffic Logs</p>
                        </li>
                        <li className={styles.pricing__card__item}>
                            <Image className={styles.pricing__card__item__check} src={check} alt='check' />
                            <p className={styles.pricing__card__item__text}>Works on All Devices</p>
                        </li>
                        <li className={styles.pricing__card__item}>
                            <Image className={styles.pricing__card__item__check} src={check} alt='check' />
                            <p className={styles.pricing__card__item__text}>Connect Anyware</p>
                        </li>
                        <li className={styles.pricing__card__item}>
                            <Image className={styles.pricing__card__item__check} src={check} alt='check' />
                            <p className={styles.pricing__card__item__text}>Get New Features</p>
                        </li>
                    </ul>
                    <div className={styles.pricing__card__bottom}>
                        <p className={styles.pricing__card__bottom__price}>$12 / mo</p>
                        <button className={styles.pricing__card__bottom__button}>Select</button>
                    </div>
                </div>
            </div>
        </div>
    )
}