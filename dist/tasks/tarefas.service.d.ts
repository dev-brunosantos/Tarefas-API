import { CreateTarefaDto } from './dto/create-tarefa.dto';
import { UpdateTarefaDto } from './dto/update-tarefa.dto';
import { PrismaService } from '../prisma/prisma.service';
export declare class TarefasService {
    private prisma;
    constructor(prisma: PrismaService);
    Criar(createTarefaDto: CreateTarefaDto): Promise<void>;
    ListarTodos(): Promise<{
        tarefa: string;
        dtAtualizacao: Date;
        id: string;
        dtCriacao: Date;
    }[]>;
    BuscarTarefa(id: string): Promise<{
        tarefa: string;
        dtAtualizacao: Date;
        id: string;
        dtCriacao: Date;
    }>;
    update(id: number, updateTarefaDto: UpdateTarefaDto): string;
    remove(id: number): string;
}
