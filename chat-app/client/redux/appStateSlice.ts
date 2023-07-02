import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface AppStateState {
    inputText: string
}

const initialState: AppStateState = {
  inputText: '',
}

export const appStateSlice = createSlice({
  name: 'appState',
  initialState,
  reducers: {
    inputText: (state, action: PayloadAction<string>) => {
      state.inputText = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { inputText } = appStateSlice.actions

export default appStateSlice.reducer