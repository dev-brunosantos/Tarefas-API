import { TarefasService } from './tarefas.service';
import { CreateTarefaDto } from './dto/create-tarefa.dto';
import { UpdateTarefaDto } from './dto/update-tarefa.dto';
export declare class TarefasController {
    private readonly tarefasService;
    constructor(tarefasService: TarefasService);
    Criar(createTarefaDto: CreateTarefaDto): Promise<void>;
    Listar(): Promise<{
        id: string;
        tarefa: string;
        dtCriacao: Date;
        dtAtualizacao: Date;
        idUsuario: string;
    }[]>;
    FiltrarID(id: string): Promise<{
        id: string;
        tarefa: string;
        dtCriacao: Date;
        dtAtualizacao: Date;
        idUsuario: string;
    }>;
    update(id: string, updateTarefaDto: UpdateTarefaDto): string;
    remove(id: string): string;
}
