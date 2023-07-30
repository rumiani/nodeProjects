export interface userTypes {
    id:null, 
    name:string, 
    role:string,
    joinTime:string,
    permission:boolean,
    joined:boolean,
    loggedIn:boolean,
}
export interface reactionsTypes{
  id:null,
  value:string,
  reps:number,
}
export interface messagesTypes {
  id: null;
  senderId:null;
  text: string;
  reactions: [];
  timestamp: number;
  reply: string;
}

export interface initialStateTypes {
    user:userTypes,
    users:userTypes[],
    messages:messagesTypes[],
    inputText: string,
    to:null,
    recording:boolean,
    userPreview:boolean,
    waitingID:null
}