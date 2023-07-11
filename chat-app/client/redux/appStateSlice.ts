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
  userPreview:false,
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
    userPreviewReducer: (state) => {      
      state.userPreview = !state.userPreview
    },
  },
})

export const { inputTextReducer, recordingReducer, userPreviewReducer } = appStateSlice.actions
export default appStateSlice.reducer