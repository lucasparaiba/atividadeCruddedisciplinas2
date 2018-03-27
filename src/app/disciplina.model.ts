import {Professor} from "./professor.model"
export class Disciplina {
    codigo: number;
    nome: string;
    descricao: string;
    data: Date;
    estaAtivo: boolean;
    tipo: string;
    periodo: string;
    professor: Professor;

    constructor(codigo: number, nome: string, descricao: string, data?: Date, estaAtivo?: boolean, tipo?: string, periodo?: string, professor?:Professor) {
        this.codigo = codigo;
        this.nome = nome;
        this.descricao = descricao;
        this.data = data;
        this.estaAtivo = estaAtivo;
        this.tipo = tipo;
        this.periodo = periodo;
        this.professor = professor;

    }
}
