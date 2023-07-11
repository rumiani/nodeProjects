import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { initialStateTypes } from './interfaces'

const initialState: initialStateTypes = {
  user:{
    id:null, 
    name:',',
    role:'',
    joinTime:'',
    permission:false,
    joined:false,
    loggedIn:false,
  },
  room:{
    id:'',
    name:'',
    users:[],
    messages:[]
  },
  messages:[
    {
      id: '',
      sender: '',
      content: '',
      timestamp: 1626032855000
    }
  ],
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
    userLoggedInReducer: (state) => {      
      state.user = {...state.user}
    },
  },
})

export const { inputTextReducer, recordingReducer, userPreviewReducer } = appStateSlice.actions
export default appStateSlice.reducer