import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateTarefaDto } from './dto/create-tarefa.dto';
import { UpdateTarefaDto } from './dto/update-tarefa.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class TarefasService {

  constructor(private prisma: PrismaService) {}

  async Criar(createTarefaDto: CreateTarefaDto) {
    const tarefaCadastrada = await this.prisma.tarefas.findFirst({ where: { tarefa: createTarefaDto.tarefa }})

    if(!tarefaCadastrada) {
      const novaTarefa = await this.prisma.tarefas.create({
        data: {
          tarefa: createTarefaDto.tarefa
        }
      })

      throw new HttpException("Tarefa cadastrada com sucesso.", HttpStatus.CREATED)
    }

    throw new HttpException("Tarefa ja cadastrada.", HttpStatus.CONFLICT)
  }

  async ListarTodos() {
    const tarefas = await this.prisma.tarefas.findMany()

    if(tarefas.length < 0) {
      throw new HttpException("Não existe nenhuma tarefa cadastrada no sistema.", HttpStatus.NOT_FOUND)
    } 
    
    return tarefas
  }
  
  async BuscarTarefa(id: string) {
    const tarefaId = await this.prisma.tarefas.findFirst({ where: { id }})
    
    if(!tarefaId) {
      throw new HttpException("Não existe nenhuma tarefa vinculado ao ID informado.", HttpStatus.NOT_FOUND)
    }

    return tarefaId
  }

  update(id: number, updateTarefaDto: UpdateTarefaDto) {
    return `This action updates a #${id} tarefa`;
  }

  remove(id: number) {
    return `This action removes a #${id} tarefa`;
  }
}
