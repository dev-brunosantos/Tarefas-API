import { Module } from '@nestjs/common';
import { TarefasModule } from 'src/tasks/tarefas.module';

@Module({
  imports: [TarefasModule],
  providers: [],
})
export class AppModule {}
