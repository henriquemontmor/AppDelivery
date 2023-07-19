import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientModule } from './client/client.module';
import { PedidosModule } from './pedidos/pedidos.module';
import { ProdutosModule } from './produtos/produtos.module';

@Module({
  imports: [ClientModule, PedidosModule, ProdutosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
