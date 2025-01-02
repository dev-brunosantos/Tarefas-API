import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UsuariosService {

  constructor(private prisma: PrismaService) { }

  async Cadastrar(createUsuarioDto: CreateUsuarioDto) {
    const usuarioExistente = await this.prisma.usuarios.findFirst({ where: { email: createUsuarioDto.email } })

    if (!usuarioExistente) {
      return await this.prisma.usuarios.create({
        data: {
          nome: createUsuarioDto.nome,
          email: createUsuarioDto.email,
          senha: createUsuarioDto.senha
        }
      })
    }

    throw new HttpException('Usuário já cadastrado', HttpStatus.BAD_REQUEST)
  }

  async BuscarUsuarios() {
    const usuarios = await this.prisma.usuarios.findMany()
    
    if(usuarios.length > 0) {
      return usuarios
    }

    throw new HttpException('Não existe nenhum usuário cadastrado no sistema.', HttpStatus.NOT_FOUND)
  }

  async FiltrarUsuario(id: string) {
    const usuarioId = await this.prisma.usuarios.findUnique({ where: { id } })
    
    if(!usuarioId) {
      throw new HttpException('Não existe nenhum usuário vinculado ao ID informado.', HttpStatus.NOT_FOUND)
    }
    return usuarioId
  }

  async Atualizar(id: string, updateUsuarioDto: UpdateUsuarioDto) {
    const usuarioExistente = await this.prisma.usuarios.findUnique({ where: { id } })

    if(usuarioExistente) {
      const usuarioAtualizado = await this.prisma.usuarios.update({
        where: {id},
        data: updateUsuarioDto
      })

      return {
        mensagem: 'Usuário atualizado com sucesso!',
        dadosDesatualizados: usuarioExistente,
        dadosAtualizados: usuarioAtualizado
      }
    }

    throw new HttpException('Não existe nenhum usuário vinculado ao ID informado.', HttpStatus.NOT_FOUND)
  }

  async Apagar(id: string) {
    const usuarioId = this.prisma.usuarios.delete({ where: { id } })

    if(!usuarioId) {
      throw new HttpException('Não existe nenhum usuário vinculado ao ID informado.', HttpStatus.NOT_FOUND)
    }

    await this.prisma.usuarios.delete({ where: { id } })

    return "Dados do usuário apagado com sucesso!"
  }
}
