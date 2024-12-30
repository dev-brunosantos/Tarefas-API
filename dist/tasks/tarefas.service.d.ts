import { CreateTarefaDto } from './dto/create-tarefa.dto';
import { UpdateTarefaDto } from './dto/update-tarefa.dto';
import { PrismaService } from '../prisma/prisma.service';
export declare class TarefasService {
    private prisma;
    constructor(prisma: PrismaService);
    Criar(createTarefaDto: CreateTarefaDto): Promise<void>;
    ListarTodos(): Promise<{
        id: string;
        tarefa: string;
        dtCriacao: Date;
        dtAtualizacao: Date;
    }[]>;
    BuscarTarefa(id: string): Promise<{
        id: string;
        tarefa: string;
        dtCriacao: Date;
        dtAtualizacao: Date;
    }>;
    update(id: number, updateTarefaDto: UpdateTarefaDto): string;
    remove(id: number): string;
}
