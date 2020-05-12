import { Lote } from './Lote';
import { RedeSocial } from './RedeSocial';
import { PalestranteEvento } from './PalestranteEvento';

export interface Evento {
    id: number;
    data: Date;
    tema: string;
    lote: string;
    qtdPessoas: number;
    imgUrl: string;
    telefone: string;
    email: string;
    lotes: Lote[];
    palestranteEventos: PalestranteEvento[];
    redeSociais: RedeSocial[];
    local: string;
}
