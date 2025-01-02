import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { PrismaService } from '../prisma/prisma.service';
export declare class UsuariosService {
    private prisma;
    constructor(prisma: PrismaService);
    Cadastrar(createUsuarioDto: CreateUsuarioDto): Promise<{
        id: string;
        nome: string;
        email: string;
        senha: string;
        dtCriacao: Date;
        dtAtualizacao: Date;
    }>;
    BuscarUsuarios(): Promise<{
        id: string;
        nome: string;
        email: string;
        senha: string;
        dtCriacao: Date;
        dtAtualizacao: Date;
    }[]>;
    FiltrarUsuario(id: string): Promise<{
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
