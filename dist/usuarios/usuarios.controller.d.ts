import { UsuariosService } from './usuarios.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
export declare class UsuariosController {
    private readonly usuariosService;
    constructor(usuariosService: UsuariosService);
    Criar(createUsuarioDto: CreateUsuarioDto): Promise<{
        nome: string;
        email: string;
        senha: string;
        dtAtualizacao: Date;
        id: string;
        dtCriacao: Date;
    }>;
    Buscar(): Promise<{
        nome: string;
        email: string;
        senha: string;
        dtAtualizacao: Date;
        id: string;
        dtCriacao: Date;
    }[]>;
    FiltrarID(id: string): Promise<{
        nome: string;
        email: string;
        senha: string;
        dtAtualizacao: Date;
        id: string;
        dtCriacao: Date;
    }>;
    Atualizar(id: string, updateUsuarioDto: UpdateUsuarioDto): Promise<{
        mensagem: string;
        dadosDesatualizados: {
            nome: string;
            email: string;
            senha: string;
            dtAtualizacao: Date;
            id: string;
            dtCriacao: Date;
        };
        dadosAtualizados: {
            nome: string;
            email: string;
            senha: string;
            dtAtualizacao: Date;
            id: string;
            dtCriacao: Date;
        };
    }>;
    Apagar(id: string): Promise<string>;
}
