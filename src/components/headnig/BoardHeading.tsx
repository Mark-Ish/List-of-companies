import { useAppDispatch, useAppSelector } from "stateHook/hook"
import styles from "./Heading.module.css"
import { selectAll } from "slice/Slice"
import { useEffect, useState } from "react"

export const BoardHeading = () => {
  const [isChecked, setIsChecked] = useState(false)
  const dispatch = useAppDispatch()
  const stateDelete = useAppSelector((state) => state.delete.clicked)

  useEffect(() => {
    if (stateDelete) {
      setIsChecked((el) => (el = false))
    }
  }, [stateDelete])

  const handleChange = () => {
    setIsChecked((el) => (el = !el))
    dispatch(selectAll())
  }

  return (
    <header className={styles.header}>
      <h2>Компании:</h2>
      <label className={styles.labelHeader}>
        <input
          checked={isChecked}
          onChange={handleChange}
          className={styles.chboxHeader}
          type="checkbox"
          name="myCheckbox"
        />
        <p className={styles.pHeader}>Выделить все</p>
      </label>
    </header>
  )
}
