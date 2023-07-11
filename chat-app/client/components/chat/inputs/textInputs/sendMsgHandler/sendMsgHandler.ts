import { sendMessageToServer } from "@/pages/api/io/io";

const limit: number = +process.env.NEXT_PUBLIC_TEXT_LIMIT!

const sendMsgHandler = ({inputText,user,to}) => {

  console.log(inputText,user);
      //     const to = replyObject
        if(inputText === '') return alert('Input is empty')
        if(inputText.length > limit) return alert('Large input')
        const message = {
            inputText,
            to,
            senderId:user.id,
        }
        sendMessageToServer(message)
        
      
    // }
  
}

export default sendMsgHandler