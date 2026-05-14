import { memo } from "react";
import { NAVLINKS, SERVICES } from "@/constants";
import { NavLink, Services } from "@/types";
import { IonIcon } from "../utility/IonIcon";
import styles from "./Footer.module.css";
import { ContactColumn } from "../utility/ContactColumn/ContactColumn";
import { SocialIcon } from "../utility/SocialIcon/SocialIcon";
import Link from "next/link";

interface FooterColumn {
    footerListTitle: string;
    list: NavLink[] | Services[];
}

const FOOTERCOLUMN: FooterColumn[] = [
    {
        footerListTitle: "Other Links",
        list: NAVLINKS,
    },
    {
        footerListTitle: "Our Services",
        list: SERVICES,
    },
];

const FooterColumn = memo(({
    footerListTitle, list
}: FooterColumn) => (
    <ul className={styles.footerList}>
        <li>
            <p className={styles.footerListTitle}>{footerListTitle}</p>
        </li>

        {list.map((link, index) => (
            <li key={index}>
                <Link
                    href={link.href}
                    className="footer-link"
                >
                    <IonIcon name="add-outline" />
                    <span className={styles.span}>{link.name}</span>
                </Link>
            </li>
        ))}

    </ul>
));

FooterColumn.displayName = "FooterColumn";

export const Footer = memo(() => (
    <footer className={styles.footer}>
        <div className={`${styles.section} ${styles.footerTop}`}>
            <div className={`${styles.customContainer} ${styles.customContainer}`}>
                <div className={styles.footerBrand}>
                    <Link
                        href="/"
                        className={`${styles.logo}`}
                    >
                        Orchid Dental
                    </Link>
                    <p className={styles.footerText}>
                        Your trusted <strong>dental clinic in Kathmandu and Damak</strong> for <strong>dental implants</strong>, <strong>braces</strong>, <strong>cosmetic dentistry</strong>, <strong>root canal</strong>, <strong>teeth whitening</strong>, <strong>orthodontics</strong>, and <strong>family dental care</strong> at an affordable price. Visit <strong>Orchid Multispeciality Dental Nepal</strong> for healthy smiles.
                    </p>

                    <div className={styles.schedule}>
                        <div className={styles.scheduleIcon}>
                            <IonIcon name="time-outline" />
                        </div>
                        <span className={styles.span}>
                            Daily:<br />
                            9:00 AM - 7:00 PM
                        </span>
                    </div>

                </div>

                {FOOTERCOLUMN.map((column, index) => (
                    <FooterColumn
                        key={index}
                        footerListTitle={column.footerListTitle}
                        list={column.list}
                    />
                ))}

                <ul className={styles.footerList}>
                    <li>
                        <p className={styles.footerListTitle}>Contact Us</p>
                    </li>

                    <ContactColumn />

                </ul>

            </div>
        </div>

        <div className={styles.footerBottom}>
            <div className={styles.customContainer}>
                <p className={styles.copyright}>
                    &copy; {new Date().getFullYear()} All Rights Reserved by Orchid Multispeciality Dental.
                </p>
                <SocialIcon
                    className="justify-center"
                    linkClassName="text-[var(--white)] bg-[rgba(255, 255, 255, 0.2)]"
                />
            </div>
        </div>

    </footer>
));


Footer.displayName = "Footer";