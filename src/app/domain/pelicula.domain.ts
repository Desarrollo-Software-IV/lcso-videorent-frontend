import { Actor } from "./actor.domain";
import { Genero } from "./genero.domain";


export class Pelicula {
    peliculaId?: number;
    titulo?: string;
    subtitulada?: boolean;
    estreno?: boolean;
    genero?: Genero;
    actores?: Actor[];

    constructor(peliculaId?: number, titulo?: string, subtitulada?: boolean, estreno?: boolean, genero?: Genero, actores?: Actor[]) {
        this.peliculaId = peliculaId || 0;
        this.titulo = titulo || '';
        this.subtitulada = subtitulada || false;
        this.estreno = estreno || false;
        this.genero = genero || new Genero();
        this.actores = actores || [];
    }
}    
