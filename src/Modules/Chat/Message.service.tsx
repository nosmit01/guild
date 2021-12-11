import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../firebase.config'
import { format } from 'date-fns'

type MessageProps = {
  id?: string,
  bgColor?: string,
  content?: string,
  date?: any,
  isYou?: boolean,
  username?: string
}

type AddMessageProps = {
  message: {
    content: string,
    username: string
  }
}

type FormatMessageProps = {
  data: {
    username: string
  },
  id: string,
  username: string,
}

const addMessage = async({ message }: AddMessageProps) => {
  return new Promise<MessageProps>(async (resolve, reject) => {
    const payload = {
      ...message,
      date: new Date(),
      dateFormatted: format(new Date(), 'h:m aaa - MM/dd/yyyy')
    }

    try {
      await addDoc(collection(db, 'chat'), payload)
      resolve(payload)
    } catch (e) {
      reject(e)
    }
  })
}

const MessageService = {
  addMessage
}

export default MessageService