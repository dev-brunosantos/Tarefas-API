import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';

@Controller('usuarios')
export class UsuariosController {
  constructor(private readonly usuariosService: UsuariosService) {}

  @Post()
  Criar(@Body() createUsuarioDto: CreateUsuarioDto) {
    return this.usuariosService.Cadastrar(createUsuarioDto);
  }

  @Get()
  Buscar() {
    return this.usuariosService.BuscarUsuarios();
  }

  @Get(':id')
  FiltrarID(@Param('id') id: string) {
    return this.usuariosService.FiltrarUsuario(id);
  }

  @Patch(':id')
  Atualizar(@Param('id') id: string, @Body() updateUsuarioDto: UpdateUsuarioDto) {
    return this.usuariosService.Atualizar(id, updateUsuarioDto);
  }

  @Delete(':id')
  Apagar(@Param('id') id: string) {
    return this.usuariosService.Apagar(id);
  }
}
