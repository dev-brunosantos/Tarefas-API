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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TarefasController = void 0;
const common_1 = require("@nestjs/common");
const tarefas_service_1 = require("./tarefas.service");
const create_tarefa_dto_1 = require("./dto/create-tarefa.dto");
const update_tarefa_dto_1 = require("./dto/update-tarefa.dto");
let TarefasController = class TarefasController {
    constructor(tarefasService) {
        this.tarefasService = tarefasService;
    }
    Criar(createTarefaDto) {
        return this.tarefasService.Criar(createTarefaDto);
    }
    Listar() {
        return this.tarefasService.ListarTodos();
    }
    FiltrarID(id) {
        return this.tarefasService.BuscarTarefa(id);
    }
    update(id, updateTarefaDto) {
        return this.tarefasService.update(+id, updateTarefaDto);
    }
    remove(id) {
        return this.tarefasService.remove(+id);
    }
};
exports.TarefasController = TarefasController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_tarefa_dto_1.CreateTarefaDto]),
    __metadata("design:returntype", void 0)
], TarefasController.prototype, "Criar", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TarefasController.prototype, "Listar", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TarefasController.prototype, "FiltrarID", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_tarefa_dto_1.UpdateTarefaDto]),
    __metadata("design:returntype", void 0)
], TarefasController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TarefasController.prototype, "remove", null);
exports.TarefasController = TarefasController = __decorate([
    (0, common_1.Controller)('tarefas'),
    __metadata("design:paramtypes", [tarefas_service_1.TarefasService])
], TarefasController);
//# sourceMappingURL=tarefas.controller.js.map