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
exports.TarefasService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let TarefasService = class TarefasService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async Criar(createTarefaDto) {
        const tarefaCadastrada = await this.prisma.tarefas.findFirst({ where: { tarefa: createTarefaDto.tarefa } });
        if (!tarefaCadastrada) {
            const novaTarefa = await this.prisma.tarefas.create({
                data: {
                    tarefa: createTarefaDto.tarefa
                }
            });
            throw new common_1.HttpException("Tarefa cadastrada com sucesso.", common_1.HttpStatus.CREATED);
        }
        throw new common_1.HttpException("Tarefa ja cadastrada.", common_1.HttpStatus.CONFLICT);
    }
    async ListarTodos() {
        const tarefas = await this.prisma.tarefas.findMany();
        if (tarefas.length < 0) {
            throw new common_1.HttpException("Não existe nenhuma tarefa cadastrada no sistema.", common_1.HttpStatus.NOT_FOUND);
        }
        return tarefas;
    }
    async BuscarTarefa(id) {
        const tarefaId = await this.prisma.tarefas.findFirst({ where: { id } });
        if (!tarefaId) {
            throw new common_1.HttpException("Não existe nenhuma tarefa vinculado ao ID informado.", common_1.HttpStatus.NOT_FOUND);
        }
        return tarefaId;
    }
    update(id, updateTarefaDto) {
        return `This action updates a #${id} tarefa`;
    }
    remove(id) {
        return `This action removes a #${id} tarefa`;
    }
};
exports.TarefasService = TarefasService;
exports.TarefasService = TarefasService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], TarefasService);
//# sourceMappingURL=tarefas.service.js.map