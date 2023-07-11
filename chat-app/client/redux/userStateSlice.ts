import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface AppStateState {
    user:{id:null | string,name:null | string},
    inputText: string,
    recording:boolean,
    inputIsLong:boolean,
}

const initialState: AppStateState = {
  inputText: '',
  recording:false,
  inputIsLong:false,
}

export const appStateSlice = createSlice({
  name: 'appState',
  initialState,
  reducers: {
    inputTextReducer: (state, action: PayloadAction<string>) => {
      state.inputText = action.payload
    },
    inputTextReducer: (state, action: PayloadAction<string>) => {
      state.inputText = action.payload
    },
    inputTextReducer: (state, action: PayloadAction<string>) => {
      state.inputText = action.payload
    },
    recordingReducer: (state) => {
      state.recording = !state.recording
    },
    inputIsLongReducer: (state) => {
      state.inputIsLong = !state.inputIsLong
    },
  },
})

export const { inputTextReducer, recordingReducer, inputIsLongReducer } = appStateSlice.actions
export default appStateSlice.reducer