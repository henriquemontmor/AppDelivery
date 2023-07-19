import { Test, TestingModule } from '@nestjs/testing';
import { PedidosService } from './pedidos.service';

describe('PedidosService', () => {
  let provider: PedidosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PedidosService],
    }).compile();

    provider = module.get<PedidosService>(PedidosService);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
