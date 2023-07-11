import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { initialStateTypes } from './interfaces'

const initialState: initialStateTypes = {
  user:null,
  users:[],
  messages:[],
  inputText: '',
  to:null,
  recording:false,
}

export const appStateSlice = createSlice({
  name: 'appState',
  initialState,
  reducers: {
    inputTextReducer: (state, action: PayloadAction<string>) => {
      state.inputText = action.payload
    },
    recordingReducer: (state) => {
      state.recording = !state.recording
    },
  },
})

export const { inputTextReducer, recordingReducer } = appStateSlice.actions
export default appStateSlice.reducer