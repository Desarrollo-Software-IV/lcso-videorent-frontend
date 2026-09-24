export class Actor {
    actorId?: number;
    nombreActor?: string;
    apellidosActor?: string;

    constructor(actorId?: number, nombreActor?: string, apellidosActor?: string) {
        this.actorId = actorId;
        this.nombreActor = nombreActor;
        this.apellidosActor = apellidosActor;
    }   
}