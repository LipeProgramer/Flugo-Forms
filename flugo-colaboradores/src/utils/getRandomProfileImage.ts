export function getRandomProfileImageKey() {
  const tipo = Math.random() < 0.5 ? "homem" : "mulher";
  const numero = Math.floor(Math.random() * 7) + 1;

  return `${tipo}${numero}`;
}