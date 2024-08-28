import { CheckBox } from "widgets/CheckBox"
import styles from "./Cell.module.css"
import { setTitleValue, setAddressValue } from "slice/Slice"
import { useAppDispatch } from "stateHook/hook"

export const Cell = ({
  id,
  title,
  address,
  selected,
}: {
  id: string
  title: string
  address: string
  selected: boolean
}) => {
  const dispatch = useAppDispatch()

  return (
    <li className={selected ? styles.liSelected : styles.li}>
      <CheckBox selected={selected} id={id} />
      <input
        className={styles.inputTitle}
        value={title}
        onChange={(e) =>
          dispatch(setTitleValue({ id: id, value: e.target.value }))
        }
      />
      <input
        className={styles.inputAddress}
        value={address}
        onChange={(e) =>
          dispatch(setAddressValue({ id: id, value: e.target.value }))
        }
      />
    </li>
  )
}
