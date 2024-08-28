import { useAppDispatch } from "stateHook/hook"
import styles from "./style/Widgets.module.css"
import { addCompany } from "slice/Slice"

export const AddBtn = () => {
  const dispatch = useAppDispatch()

  const addHandleClick = () => {
    dispatch(
      addCompany({
        id: Math.random().toString().slice(2),
        title: "",
        address: "",
        selected: false,
      })
    )
  }

  return (
    <button onClick={addHandleClick} className={styles.addBtn}>
      +
    </button>
  )
}
