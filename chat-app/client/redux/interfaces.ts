export interface userTypes {
    id:null, 
    name:null, 
    role:null,
    joinTime:null,
    permission:null,
    inputText:string,
}
export interface reactionsTypes{
  id:null,
  value:null,
  reps:null,
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
    user:userTypes | null,
    users:userTypes[],
    messages:messagesTypes[],
    inputText: string,
    to:null,
    recording:boolean,
    userPreview:boolean,
}