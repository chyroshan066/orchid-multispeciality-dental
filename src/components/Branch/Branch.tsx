"use client";

import { memo } from "react";
import { IonIcon } from "../utility/IonIcon";
import styles from "./Branch.module.css";

interface BranchData {
    name: string;
    location: string;
    phone: string;
    email?: string;
    timing: string;
    timing2: string;
    mapLink: string;
}

const BRANCHES: BranchData[] = [
    {
        name: "Kathmandu Branch",
        location: "Suncity, Kageshwori Manohara, Kathmandu, Nepal",
        phone: "9819239757",
        email: "pabanantar@gmail.com",
        timing: "9:00 AM - 7:00 PM (Daily)",
        timing2: "10:00 AM - 5:00 PM (Saturday)",
        mapLink: "https://www.google.com/maps/place/Orchid+multispeciality+dental+clinic/@27.6935181,85.3677666,17z/data=!3m1!4b1!4m6!3m5!1s0x39eb1b001b7d927b:0xf15f02eaa72154a!8m2!3d27.6935134!4d85.3703415!16s%2Fg%2F11yztv1lr9?entry=ttu&g_ep=EgoyMDI2MDUxMS4wIKXMDSoASAFQAw%3D%3D"
    },
    {
        name: "Damak Branch",
        location: "Namaste Hospital - First Floor, Damak, Jhapa, Nepal",
        phone: "9819239757",
        email: "pabanantar@gmail.com",
        timing: "9:00 AM - 7:00 PM (Daily)",
        timing2: "10:00 AM - 5:00 PM (Saturday)",
        mapLink: "https://www.google.com/maps/place/ORCHID+MULTISPECIALTY+DENTAL/@26.6596615,87.6896107,17z/data=!3m1!4b1!4m6!3m5!1s0x39e58f003e7bd8f9:0x2d0ff4feb3bbfffd!8m2!3d26.6596567!4d87.6921856!16s%2Fg%2F11ldq1_rjh?entry=ttu&g_ep=EgoyMDI2MDUxMS4wIKXMDSoASAFQAw%3D%3D"
    },
];

const BranchCard = memo(({
    name, location, phone, email, timing, mapLink, timing2
}: BranchData) => (
    <div className={styles.branchCard}>
        <div className={styles.cardHeader}>
            <div className={styles.iconWrapper}>
                <IonIcon name="business-outline" />
            </div>
            <h3 className="h3">{name}</h3>
        </div>

        <div className={styles.cardBody}>
            <div className={styles.infoItem}>
                <IonIcon name="location-outline" />
                <div>
                    <p className={styles.infoLabel}>Location</p>
                    <p className={styles.infoText}>{location}</p>
                </div>
            </div>

            <div className={styles.infoItem}>
                <IonIcon name="call-outline" />
                <div>
                    <p className={styles.infoLabel}>Phone</p>
                    <a
                        href={`tel:+977${phone.replace(/-/g, '')}`}
                        className={styles.infoLink}
                    >
                        {phone}
                    </a>
                </div>
            </div>

            {email && (
                <div className={styles.infoItem}>
                    <IonIcon name="mail-outline" />
                    <div>
                        <p className={styles.infoLabel}>Email</p>
                        <a
                            href={`mailto:${email}`}
                            className={styles.infoLink}
                        >
                            {email}
                        </a>
                    </div>
                </div>
            )}

            <div className={styles.infoItem}>
                <IonIcon name="time-outline" />
                <div>
                    <p className={styles.infoLabel}>Timing</p>
                    <p className={styles.infoText}>{timing}</p>
                    <p className={styles.infoText}>{timing2}</p>
                </div>
            </div>
        </div>

        <div className={styles.cardFooter}>
            <a
                href={mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.mapButton}
            >
                <IonIcon name="navigate-outline" />
                <span>Get Directions</span>
            </a>
            <a
                href={`tel:+977${phone.replace(/-/g, '')}`}
                className={styles.callButton}
            >
                <IonIcon name="call-outline" />
                <span>Call Now</span>
            </a>
        </div>
    </div>
));

BranchCard.displayName = "BranchCard";

export const Branch = memo(() => (
    <section
        className={`section ${styles.branch}`}
        id="branches"
        aria-label="branches"
    >
        <div className="custom-container">
            <div className="text-center">
                <p className="section-subtitle">Our Locations</p>
                <h2 className="h2 section-title">Visit Our Branches</h2>
                <p
                    className="section-text"
                    style={{
                        maxWidth: '700px',
                        margin: '20px auto 60px',
                        color: 'var(--teal-gray)'
                    }}
                >
                    We have multiple branches across Nepal to serve you better.
                    Visit the nearest branch for comprehensive dental care and
                    expert treatment with modern facilities.
                </p>
            </div>

            <div className={styles.branchGrid}>
                {BRANCHES.map((branch, index) => (
                    <BranchCard
                        key={index}
                        name={branch.name}
                        location={branch.location}
                        phone={branch.phone}
                        email={branch.email}
                        timing={branch.timing}
                        timing2={branch.timing2}
                        mapLink={branch.mapLink}
                    />
                ))}
            </div>
        </div>
    </section>
));

Branch.displayName = "Branch";