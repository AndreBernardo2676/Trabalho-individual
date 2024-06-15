// Função para substituir a linha equivalente ao número por zeros
function substituirLinhaPorZeros(matriz, numeroLinha) {
    if (numeroLinha < 0 || numeroLinha >= matriz.length) {
      console.error('Número de linha inválido');
      return;
    }
  
    matriz[numeroLinha] = Array(matriz[numeroLinha].length).fill(0);
    return matriz;
  }
  
  // Exemplo de matriz e número de linha
  const matrizOriginal = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  const numeroLinha = 1;
  
  // Chama a função para substituir a linha
  const matrizModificada = substituirLinhaPorZeros(matrizOriginal, numeroLinha);
  
  // Exibir a matriz original e a matriz modificada
  document.getElementById('originalMatrix').textContent = matrizOriginal.map(row => row.join(' ')).join('\n');
  document.getElementById('modifiedMatrix').textContent = matrizModificada.map(row => row.join(' ')).join('\n');