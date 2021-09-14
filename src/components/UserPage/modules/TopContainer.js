import styles from './userPage.module.css'

export const TopContainer = ({ userCapitals }) => {
  return (
    <div>
      <div id={styles.banner}>
        <div id={styles.userCapitalsBox}>
          {userCapitals}
        </div>
      </div>
    </div>
  )
}
