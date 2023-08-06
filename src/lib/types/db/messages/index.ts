interface Message {
    userId: string,
    content: string,
    status: string,
    type: string,
}

type Messages = Message[];

export type { Messages, Message };