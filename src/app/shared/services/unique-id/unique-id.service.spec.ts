import { UniqueIdService } from './unique-id.service';

describe(UniqueIdService.name, () => {
  it(`deveria gerar ID único quando -${UniqueIdService.prototype.gerarIDComPrefixo.name}- for chamado com prefixo`, () => {
    const service = new UniqueIdService();
    const prefixo = 'teste';
    const idComPrefixo = service.gerarIDComPrefixo(prefixo);

    expect(idComPrefixo).toBeTruthy();
    expect(idComPrefixo.startsWith(prefixo)).toBeTruthy();
  });

  it(`não deveria gerar mesmo ID quando -${UniqueIdService.prototype.gerarIDComPrefixo.name}- for chamado múltiplas vezes`, () => {
    const service = new UniqueIdService();
    const prefixo = 'teste';
    const primeiroIDComPrefixo = service.gerarIDComPrefixo(prefixo);
    const segundoIDComPrefixo = service.gerarIDComPrefixo(prefixo);

    expect(primeiroIDComPrefixo).toBeTruthy();
    expect(segundoIDComPrefixo).toBeTruthy();
    expect(primeiroIDComPrefixo).not.toBe(segundoIDComPrefixo);
  });
});
