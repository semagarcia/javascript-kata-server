export class StreamingSocketService {

    static socketServer;

    static initSocketServer(socketServer) {
        this.socketServer = socketServer;
    }

    static sendMessageToChallenge(challengeId: string, bundle: Object) {
        this.socketServer.in(challengeId).emit('challenge', 'messageeeee');
    }

}