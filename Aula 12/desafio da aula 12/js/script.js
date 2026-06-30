function mostraFilme() {
    const nomeInput = document.getElementById('nome');
    const anoInput = document.getElementById('ano');
    const generoSelect = document.getElementById('genero');
    const resultado = document.getElementById('resultado');
    const listaFilmes = document.getElementById('lista-filmes');

    const nome = nomeInput.value.trim();
    const ano = anoInput.value.trim();
    const genero = generoSelect.value;

    if (!nome || !ano || !genero) {
        resultado.textContent = 'Preencha todos os campos antes de cadastrar o filme.';
    } else {
        const filme = document.createElement('div'); // cria um novo bloco HTML.
        filme.className = 'filme-cadastrado';

        const titulo = document.createElement('h3');
        titulo.textContent = nome;
        filme.appendChild(titulo);

        const anoP = document.createElement('p');
        anoP.innerHTML = `<strong>Ano:</strong> ${ano}`;
        filme.appendChild(anoP);
            
        const generoP = document.createElement('p');
        generoP.innerHTML = `<strong>Gênero:</strong> ${genero}`;
        filme.appendChild(generoP);

        
        //removedor
        const removerBtn = document.createElement('button'); 
        removerBtn.type = 'button';
        removerBtn.textContent = 'Remover';
        removerBtn.className = 'remover-filme';
        removerBtn.addEventListener('click', () => {
            filme.remove();
            resultado.textContent = 'Filme removido.';
        });
        filme.appendChild(removerBtn);

        listaFilmes.appendChild(filme); // adiciona o novo card dentro do elemento #lista-filmes.
        resultado.textContent = 'Filme cadastrado com sucesso!';

        //limpa o formulario
        nomeInput.value = '';
        anoInput.value = '';
        generoSelect.value = '';
    }
}
