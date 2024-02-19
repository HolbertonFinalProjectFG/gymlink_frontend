import { configureStore } from '@reduxjs/toolkit'
import { trainerRoutinesSlice } from './TrainerRoutinesSlice'

export const trainerStore = configureStore({
  reducer: {
    trainerRoutines: trainerRoutinesSlice.reducer
  }
})