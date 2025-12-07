import { UniqueIdService } from './unique-id.service';

describe(UniqueIdService.name, () => {
  it(`deveria gerar ID único quando -${UniqueIdService.prototype.gerarIDComPrefixo.name}- for chamado com prefixo`, () => {
    const service = new UniqueIdService();
    const prefixo = 'teste';
    const idComPrefixo = service.gerarIDComPrefixo(prefixo);

    expect(idComPrefixo).toBeTruthy();
    expect(idComPrefixo.startsWith(prefixo)).toBeTruthy();
  });
});
