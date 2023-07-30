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
  waitingID:null,
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
    userLoggedInReducer: (state, action: PayloadAction<boolean>) => {          
      state.user.loggedIn = action.payload
    },
    waitingIDReducer: (state, action: PayloadAction<null>) => {          
      state.waitingID = action.payload
    },
  },
})

export const { 
  inputTextReducer, 
  recordingReducer, 
  userPreviewReducer,
  userLoggedInReducer,
  waitingIDReducer,
} = appStateSlice.actions
export default appStateSlice.reducer