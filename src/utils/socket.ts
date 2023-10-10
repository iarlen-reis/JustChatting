import { io, Socket } from 'socket.io-client'

const socket: Socket = io('http://localhost:3333')

socket.connect()

export default socket
