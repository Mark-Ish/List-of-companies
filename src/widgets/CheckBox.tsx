import styles from "./style/Widgets.module.css"
import { toggleSelect } from "../slice/Slice"
import { useAppDispatch } from "stateHook/hook"

export const CheckBox = ({
  selected,
  id,
}: {
  selected: boolean
  id: string
}) => {
  const dispatch = useAppDispatch()
  const handleChange = () => {
    dispatch(toggleSelect(id))
  }

  return (
    <input
      checked={selected}
      onChange={handleChange}
      type="checkbox"
      className={styles.check}
    ></input>
  )
}
