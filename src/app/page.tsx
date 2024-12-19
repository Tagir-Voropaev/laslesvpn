import styles from "./page.module.scss";
import Header from "@/components/layout/Header/Header";
import Footer from "@/components/layout/Footer/Footer";
import Hero from "@/components/sections/Hero/Hero";
import Statistics from "@/components/sections/Statistics/Statistics";
import Features from "@/components/sections/Features/Features";
import Pricing from "@/components/sections/Pricing/Pricing";
import Map from "@/components/sections/Map/Map";

export default function Home() {
    return (
        <div className={styles.wrapper}>
            <Header />
            <Hero />
            <Statistics />
            <Features />
            <Pricing />
            <Map />
            <Footer />
        </div>
    )
}