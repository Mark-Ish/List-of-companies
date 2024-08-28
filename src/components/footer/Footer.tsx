import { AddBtn } from "widgets/AddBtn"
import { DeleteBtn } from "widgets/DeleteBtn"
import styles from "./Footer.module.css"

export const Footer = () => {
  return (
    <footer className={styles.Footer}>
      <div className={styles.AddBlok}>
        <AddBtn />
      </div>
      <div className={styles.DeleteBlok}>
        <DeleteBtn />
      </div>
    </footer>
  )
}
