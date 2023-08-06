interface Message {
    userId: string,
    content: string,
    status: 'admin'| 'user',
    type: 'text' | 'vidoe' | 'image' | 'audio',
}

type Messages = Message[];

export type { Messages, Message };