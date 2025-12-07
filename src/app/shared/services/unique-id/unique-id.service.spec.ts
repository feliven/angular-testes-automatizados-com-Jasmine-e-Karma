import { UniqueIdService } from './unique-id.service';

describe('UniqueIdService', () => {
  it('deveria gerar ID único quando gerarIDComPrefixo for chamado com prefixo', () => {
    const service = new UniqueIdService();
    const prefixo = 'teste';
    const idComPrefixo = service.gerarIDComPrefixo(prefixo);

    expect(idComPrefixo).toBeTruthy();
    expect(idComPrefixo).toContain(prefixo);
  });
});
