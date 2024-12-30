import { TarefasService } from './tarefas.service';
import { CreateTarefaDto } from './dto/create-tarefa.dto';
import { UpdateTarefaDto } from './dto/update-tarefa.dto';
export declare class TarefasController {
    private readonly tarefasService;
    constructor(tarefasService: TarefasService);
    Criar(createTarefaDto: CreateTarefaDto): Promise<void>;
    Listar(): Promise<{
        tarefa: string;
        dtAtualizacao: Date;
        id: string;
        dtCriacao: Date;
    }[]>;
    FiltrarID(id: string): Promise<{
        tarefa: string;
        dtAtualizacao: Date;
        id: string;
        dtCriacao: Date;
    }>;
    update(id: string, updateTarefaDto: UpdateTarefaDto): string;
    remove(id: string): string;
}
