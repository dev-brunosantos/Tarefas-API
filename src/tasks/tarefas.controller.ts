import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TarefasService } from './tarefas.service';
import { CreateTarefaDto } from './dto/create-tarefa.dto';
import { UpdateTarefaDto } from './dto/update-tarefa.dto';

@Controller('tarefas')
export class TarefasController {
  constructor(private readonly tarefasService: TarefasService) {}

  @Post()
  Criar(@Body() createTarefaDto: CreateTarefaDto) {
    return this.tarefasService.Criar(createTarefaDto);
  }

  @Get()
  Listar() {
    return this.tarefasService.ListarTodos();
  }

  @Get(':id')
  FiltrarID(@Param('id') id: string) {
    return this.tarefasService.BuscarTarefa(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTarefaDto: UpdateTarefaDto) {
    return this.tarefasService.update(+id, updateTarefaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tarefasService.remove(+id);
  }
}
