import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TarefasModule } from 'src/tasks/tarefas.module';

@Module({
  imports: [TarefasModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
