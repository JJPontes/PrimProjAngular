import { RedeSocial } from './RedeSocial';
import { PalestranteEvento } from './PalestranteEvento';

export interface Palestrante {
    id: number;
    nome: string;
    descricao: string;
    telefone: string;
    email: string;
    imgUrl: string;
    redeSociais: RedeSocial[];
    palestranteEventos: PalestranteEvento[];


}
