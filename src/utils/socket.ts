import { io, Socket } from 'socket.io-client'

const socket: Socket = io(
  'https://justchatting-back-end-production.up.railway.app',
)

socket.connect()

export default socket
