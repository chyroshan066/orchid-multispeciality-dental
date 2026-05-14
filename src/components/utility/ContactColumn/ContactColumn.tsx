import { memo } from "react";
import { IonIcon } from "../IonIcon";
import { CONTACTS } from "@/constants/contact-links";
import styles from "./ContactColumn.module.css";

export const ContactColumn = memo(() => (
    <>
        <li className={styles.footerItem}>
            <div className={styles.itemIcon}>
                <IonIcon name="location-outline" />
            </div>
            <a
                href="https://www.google.com/maps/place/Orchid+multispeciality+dental+clinic/@27.6935181,85.3677666,17z/data=!3m1!4b1!4m6!3m5!1s0x39eb1b001b7d927b:0xf15f02eaa72154a!8m2!3d27.6935134!4d85.3703415!16s%2Fg%2F11yztv1lr9?entry=ttu&g_ep=EgoyMDI2MDUxMS4wIKXMDSoASAFQAw%3D%3D"
                className="footer-link"
                target="_blank"
            >
                <address className={styles.itemText}>
                    Suncity, Kageshwori Manohara <br />
                    Kathmandu, Nepal
                </address>
            </a>
        </li>

        <li className={styles.footerItem}>
            <div className={styles.itemIcon}>
                <IonIcon name="location-outline" />
            </div>
            <a
                href="https://www.google.com/maps/place/ORCHID+MULTISPECIALTY+DENTAL/@26.6596615,87.6896107,17z/data=!3m1!4b1!4m6!3m5!1s0x39e58f003e7bd8f9:0x2d0ff4feb3bbfffd!8m2!3d26.6596567!4d87.6921856!16s%2Fg%2F11ldq1_rjh?entry=ttu&g_ep=EgoyMDI2MDUxMS4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
            >
                <address className={styles.itemText}>
                    Namaste Hospital - First Floor <br />
                    Damak, Jhapa, Nepal
                </address>
            </a>
        </li>

        {CONTACTS.map((contact, index) => (
            <li
                key={index}
                className={styles.footerItem}
            >
                <div className={styles.itemIcon}>
                    <IonIcon name={contact.ionIcon} />
                </div>
                <a
                    href={contact.href}
                    className="footer-link"
                    target="_blank"
                >
                    {contact.textNumber}
                </a>
            </li>
        ))}

        <li className={styles.footerItem}>
            <div className={styles.itemIcon}>
                <IonIcon name="mail-outline" />
            </div>
            <a
                href="mailto:pabanantar@gmail.com"
                className="footer-link"
            >
                pabanantar@gmail.com
            </a>
        </li>
    </>
));

ContactColumn.displayName = "ContactColumn";