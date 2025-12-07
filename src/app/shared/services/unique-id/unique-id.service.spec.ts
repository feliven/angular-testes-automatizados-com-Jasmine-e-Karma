import { UniqueIdService } from './unique-id.service';

describe(UniqueIdService.name, () => {
  let service!: UniqueIdService;
  let prefixo!: string;

  beforeEach(() => {
    service = new UniqueIdService();
    prefixo = 'teste';
  });

  it(`deveria gerar ID único quando -${UniqueIdService.prototype.gerarIDComPrefixo.name}- for chamado com prefixo`, () => {
    const idComPrefixo = service.gerarIDComPrefixo(prefixo);

    expect(idComPrefixo).toBeTruthy();
    expect(idComPrefixo.startsWith(prefixo)).toBeTruthy();
  });

  it(`não deveria gerar mesmo ID quando -${UniqueIdService.prototype.gerarIDComPrefixo.name}- for chamado múltiplas vezes`, () => {
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

  it(`-${UniqueIdService.prototype.getQtdeIDsGerados.name}- deve retornar número de IDs criados`, () => {
    const totalTentativas = 100;

    for (let i = 0; i < totalTentativas; i++) {
      service.gerarIDComPrefixo(prefixo);
    }

    const numeroIDs = service.getQtdeIDsGerados();

    expect(numeroIDs).toEqual(totalTentativas);
  });
});
