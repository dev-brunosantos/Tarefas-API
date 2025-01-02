import { UsuariosService } from './usuarios.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
export declare class UsuariosController {
    private readonly usuariosService;
    constructor(usuariosService: UsuariosService);
    Criar(createUsuarioDto: CreateUsuarioDto): Promise<{
        id: string;
        nome: string;
        email: string;
        senha: string;
        dtCriacao: Date;
        dtAtualizacao: Date;
    }>;
    Buscar(): Promise<{
        id: string;
        nome: string;
        email: string;
        senha: string;
        dtCriacao: Date;
        dtAtualizacao: Date;
    }[]>;
    FiltrarID(id: string): Promise<{
        id: string;
        nome: string;
        email: string;
        senha: string;
        dtCriacao: Date;
        dtAtualizacao: Date;
    }>;
    Atualizar(id: string, updateUsuarioDto: UpdateUsuarioDto): Promise<{
        mensagem: string;
        dadosDesatualizados: {
            id: string;
            nome: string;
            email: string;
            senha: string;
            dtCriacao: Date;
            dtAtualizacao: Date;
        };
        dadosAtualizados: {
            id: string;
            nome: string;
            email: string;
            senha: string;
            dtCriacao: Date;
            dtAtualizacao: Date;
        };
    }>;
    Apagar(id: string): Promise<string>;
}
