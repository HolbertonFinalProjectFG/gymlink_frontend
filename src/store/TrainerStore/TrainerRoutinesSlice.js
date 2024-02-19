import { createSlice } from '@reduxjs/toolkit'

export const trainerRoutinesSlice = createSlice({
  name: 'trainerRoutines',
  initialState: {
    week: [],
    mgRoutines: []
  },

  reducers: {

    addDayToWeek: ({ week }) => {
      if (week.length < 7){
        week.push([])
      }
    },

    removeDayOfWeek: ({ week }) => {
      week.pop()
    }
  }
})

export const {
  addDayToWeek,
  removeDayOfWeek
} = trainerRoutinesSlice.actions