import styles from "./style/Widgets.module.css"
import { removeSelected } from "../slice/Slice"
import { useAppDispatch } from "stateHook/hook"
import { clickedDelete } from "slice/SliceDelete"

export const DeleteBtn = () => {
  const dispatch = useAppDispatch()
  const hClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    let button = e.target as HTMLButtonElement
    if (button.name) {
      dispatch(clickedDelete())
    }
    dispatch(removeSelected())
  }
  return (
    <button name="delete" onClick={hClick} className={styles.delete}>
      Delete
    </button>
  )
}
