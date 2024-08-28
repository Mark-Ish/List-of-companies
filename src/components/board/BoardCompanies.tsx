import { Cell } from "components/board-element/Cell"
import { BoardHeading } from "components/headnig/BoardHeading"
import { useAppDispatch, useAppSelector } from "stateHook/hook"
import styles from "./Board.module.css"
import { Footer } from "components/footer/Footer"
import type { Company } from "slice/types"
import { setCompanies } from "slice/Slice"
import { useEffect } from "react"

const fakeCompanies: Company[] = Array.from({ length: 10000 }, (_, index) => ({
  id: Math.random().toString().slice(2),
  title: `Company ${index + 1}`,
  address: `Address ${index + 1}`,
  selected: false,
}))

export const BoardCompanies = () => {
  const state = useAppSelector((state) => state.board.companies)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(setCompanies(fakeCompanies))
  }, [dispatch])

  return (
    <div className={styles.container}>
      <BoardHeading />
      <main className={styles.main}>
        <ul className={styles.ul}>
          {state.map((obj) => (
            <Cell
              selected={obj.selected}
              key={obj.id}
              id={obj.id}
              title={obj.title}
              address={obj.address}
            />
          ))}
        </ul>
      </main>
      <Footer />
    </div>
  )
}
