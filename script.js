document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();

  const nome = document.getElementById('nome').value;
  const telefone = document.getElementById('telefone').value;

  const tabela = document.getElementById('tabela-contatos');
  const novaLinha = document.createElement('tr');

  novaLinha.innerHTML = `<td>${nome}</td><td>${telefone}</td>`;
  tabela.appendChild(novaLinha);

  // Limpar formulário
  document.getElementById('contact-form').reset();
});