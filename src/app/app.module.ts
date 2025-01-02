import { Module } from '@nestjs/common';
import { UsuariosModule } from 'src/usuarios/usuarios.module';
import { TarefasModule } from 'src/tasks/tarefas.module';

@Module({
  imports: [UsuariosModule, TarefasModule],
  providers: [],
})
export class AppModule {}
