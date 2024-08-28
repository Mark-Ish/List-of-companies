import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import type { Company, ICurrentValue } from "./types"

const initialState = {
  companies: [
    {
      id: Math.random().toString().slice(2),
      title: "Яндекс",
      address: "Краснобогатырская ул., 89",
      selected: false,
    },
    {
      id: Math.random().toString().slice(2),
      title: "Tech Core",
      address: "Звездный бул., 24",
      selected: false,
    },
  ],
}

const Slice = createSlice({
  name: "board",
  initialState,
  reducers: {
    setCompanies: (state, action: PayloadAction<Company[]>) => {
      state.companies = action.payload
    },
    addCompany: (state, action: PayloadAction<Company>) => {
      state.companies.push(action.payload)
    },
    setTitleValue: (state, action: PayloadAction<ICurrentValue>) => {
      const company = state.companies.find((c) => c.id === action.payload.id)
      if (company) {
        company.title = action.payload.value
      }
    },
    setAddressValue: (state, action: PayloadAction<ICurrentValue>) => {
      const company = state.companies.find((c) => c.id === action.payload.id)
      if (company) {
        company.address = action.payload.value
      }
    },
    toggleSelect: (state, action: PayloadAction<string>) => {
      const company = state.companies.find((c) => c.id === action.payload)
      if (company) {
        company.selected = !company.selected
      }
    },
    selectAll: (state) => {
      state.companies.forEach((c) => {
        c.selected = !c.selected
      })
    },
    removeSelected: (state) => {
      state.companies = state.companies.filter((c) => c.selected === false)
    },
  },
})

export const {
  setCompanies,
  addCompany,
  setTitleValue,
  setAddressValue,
  toggleSelect,
  selectAll,
  removeSelected,
} = Slice.actions
export default Slice.reducer
