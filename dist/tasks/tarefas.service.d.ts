import { CreateTarefaDto } from './dto/create-tarefa.dto';
import { UpdateTarefaDto } from './dto/update-tarefa.dto';
import { PrismaService } from '../prisma/prisma.service';
export declare class TarefasService {
    private prisma;
    constructor(prisma: PrismaService);
    Criar(createTarefaDto: CreateTarefaDto): Promise<void>;
    ListarTodos(): Promise<{
        id: string;
        dtCriacao: Date;
        dtAtualizacao: Date;
        tarefa: string;
        idUsuario: string;
    }[]>;
    BuscarTarefa(id: string): Promise<{
        id: string;
        dtCriacao: Date;
        dtAtualizacao: Date;
        tarefa: string;
        idUsuario: string;
    }>;
    update(id: number, updateTarefaDto: UpdateTarefaDto): string;
    remove(id: number): string;
}
