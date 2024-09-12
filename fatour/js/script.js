document.addEventListener("DOMContentLoaded", function() {
    var imagens = ["/fatour/images/busao.svg", "/fatour/images/viagemimg.svg"]; // Lista de imagens SVG
    var intervalo = 5000; // Intervalo de tempo em milissegundos (3 segundos)
  
    var index = 0; // Índice atual da imagem
  
    function trocarImagem() {
      // Altera o atributo 'data' do objeto para a próxima imagem na lista
      index = (index + 1) % imagens.length;
      document.getElementById("imagem").setAttribute("data", imagens[index]);
    }
  
    // Inicia a troca de imagem automaticamente após o intervalo especificado
    setInterval(trocarImagem, intervalo);
  });
  