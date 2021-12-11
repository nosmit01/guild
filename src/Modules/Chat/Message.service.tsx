import { addDoc, collection, onSnapshot, query } from 'firebase/firestore';
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

type GetMessagesProps = {
  loggedInUser: string,
}

const addMessage = async({ message }: AddMessageProps) => {
  return new Promise<void>(async (resolve, reject) => {
    const payload = {
      ...message,
      date: new Date(),
      dateFormatted: format(new Date(), 'h:m aaa - MM/dd/yyyy')
    }
    resolve()
    try {
      await addDoc(collection(db, 'chat'), payload)
    } catch (e) {
      reject(e)
    }
  })
}

const getMessages = async({ loggedInUser }: GetMessagesProps) => {
  return new Promise<MessageProps[]>(async (resolve, reject) => {
    try {
      const q = query(collection(db, 'chat'));
      onSnapshot(q, (querySnapshot: any) => {
        const messages: MessageProps[] = [];
        querySnapshot.forEach((doc: any) => {
          const docData = doc.data()
            messages.push({
              ...docData,
              id: doc.id,
              bgColor: docData.username === loggedInUser ? 'blue' : '#FF5733',
              isYou: docData.username === loggedInUser
            });
        });
        resolve(messages)
      });
    } catch (e) {
      reject(e)
    }
  })
}

const MessageService = {
  addMessage,
  getMessages
}

export default MessageService