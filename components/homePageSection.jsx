import styles from '../styles/components/HomePageSection.module.scss'

export default function HomePageSection({icon, title}){
    return (
        <div className={styles.section}>
            {icon}
            <h3>{title}</h3>
        </div>
    )
}