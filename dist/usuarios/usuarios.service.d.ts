import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { PrismaService } from '../prisma/prisma.service';
export declare class UsuariosService {
    private prisma;
    constructor(prisma: PrismaService);
    Cadastrar(createUsuarioDto: CreateUsuarioDto): Promise<{
        nome: string;
        email: string;
        senha: string;
        dtAtualizacao: Date;
        id: string;
        dtCriacao: Date;
    }>;
    BuscarUsuarios(): Promise<{
        nome: string;
        email: string;
        senha: string;
        dtAtualizacao: Date;
        id: string;
        dtCriacao: Date;
    }[]>;
    FiltrarUsuario(id: string): Promise<{
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
