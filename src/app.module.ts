import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientesModule } from './shared/clientes/clientes.module';
import { PedidosModule } from './shared/pedidos/pedidos.module';
import { ProdutosModule } from './shared/produtos/produtos.module';

@Module({
  imports: [ClientesModule, PedidosModule, ProdutosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
