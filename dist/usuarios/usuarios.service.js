"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuariosService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let UsuariosService = class UsuariosService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async Cadastrar(createUsuarioDto) {
        const usuarioExistente = await this.prisma.usuarios.findFirst({ where: { email: createUsuarioDto.email } });
        if (!usuarioExistente) {
            return await this.prisma.usuarios.create({
                data: {
                    nome: createUsuarioDto.nome,
                    email: createUsuarioDto.email,
                    senha: createUsuarioDto.senha
                }
            });
        }
        throw new common_1.HttpException('Usuário já cadastrado', common_1.HttpStatus.BAD_REQUEST);
    }
    async BuscarUsuarios() {
        const usuarios = await this.prisma.usuarios.findMany();
        if (usuarios.length > 0) {
            return usuarios;
        }
        throw new common_1.HttpException('Não existe nenhum usuário cadastrado no sistema.', common_1.HttpStatus.NOT_FOUND);
    }
    async FiltrarUsuario(id) {
        const usuarioId = await this.prisma.usuarios.findUnique({ where: { id } });
        if (!usuarioId) {
            throw new common_1.HttpException('Não existe nenhum usuário vinculado ao ID informado.', common_1.HttpStatus.NOT_FOUND);
        }
        return usuarioId;
    }
    async Atualizar(id, updateUsuarioDto) {
        const usuarioExistente = await this.prisma.usuarios.findUnique({ where: { id } });
        if (usuarioExistente) {
            const usuarioAtualizado = await this.prisma.usuarios.update({
                where: { id },
                data: updateUsuarioDto
            });
            return {
                mensagem: 'Usuário atualizado com sucesso!',
                dadosDesatualizados: usuarioExistente,
                dadosAtualizados: usuarioAtualizado
            };
        }
        throw new common_1.HttpException('Não existe nenhum usuário vinculado ao ID informado.', common_1.HttpStatus.NOT_FOUND);
    }
    async Apagar(id) {
        const usuarioId = this.prisma.usuarios.delete({ where: { id } });
        if (!usuarioId) {
            throw new common_1.HttpException('Não existe nenhum usuário vinculado ao ID informado.', common_1.HttpStatus.NOT_FOUND);
        }
        await this.prisma.usuarios.delete({ where: { id } });
        return "Dados do usuário apagado com sucesso!";
    }
};
exports.UsuariosService = UsuariosService;
exports.UsuariosService = UsuariosService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UsuariosService);
//# sourceMappingURL=usuarios.service.js.map