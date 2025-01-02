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

  findAll() {
    return `This action returns all usuarios`;
  }

  findOne(id: number) {
    return `This action returns a #${id} usuario`;
  }

  update(id: number, updateUsuarioDto: UpdateUsuarioDto) {
    return `This action updates a #${id} usuario`;
  }

  remove(id: number) {
    return `This action removes a #${id} usuario`;
  }
}
