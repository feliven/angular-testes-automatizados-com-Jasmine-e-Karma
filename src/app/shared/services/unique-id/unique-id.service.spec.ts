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
    const conjuntoIDs = new Set<string>();

    const totalTentativas = 100;

    for (let i = 0; i < totalTentativas; i++) {
      const idComPrefixo = service.gerarIDComPrefixo(prefixo);

      console.log(idComPrefixo);

      expect(idComPrefixo).toBeTruthy();
      conjuntoIDs.add(idComPrefixo);
    }

    expect(conjuntoIDs.size).toEqual(totalTentativas);
  });
});
