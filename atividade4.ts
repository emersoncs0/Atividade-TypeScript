function concatenar(nome: string, sobrenome: string): string {
  const nomeCompleto: string = `${nome} ${sobrenome}`;
  return nomeCompleto;
}

console.log(concatenar("Emerson", "Cardoso"));
