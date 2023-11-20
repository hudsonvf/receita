
fetch("receitas.json")
    .then(function (response) {
        return response.json();
    })
    .then(function (getListaIngredientes) {
        let getCard = document.querySelector('#table-body');
        let preencheCatalogo = "";

        for (let i in getListaIngredientes) {
            preencheCatalogo += `
            
            <div class="col-sm-4 mb-4 rounded-4">
                <div class="card h600 shadow">
                    <img src="${getListaIngredientes[i].imagem}" class="card-img-top tdimg">
                    <div class="card-body">
                        <h5 class="card-title mt-2 card-titulo">${getListaIngredientes[i].titulo}</h5>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item"> ${getListaIngredientes[i].ingredientes}</li>
                        <li class="list-group-item">${getListaIngredientes[i].preparo}</li>
                    </ul>
                    <div class="card-body">
                    <a href="#" class="btn btn-primary btn-receita" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        Receita Completa
                    </a>
                    </div>
                </div>
            </div>

            <div class="modal modal-lg fade shadow" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h2 class="modal-title fs-5" id="exampleModalLabel">Receita Completa</h2>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="card">
                            <img src="${getListaIngredientes[i].imagem}" class="card-img-top tdimg">
                            <h5 class="card-title m-3">${getListaIngredientes[i].titulo}</h5>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item"> ${getListaIngredientes[i].ingredientes}</li>
                                <li class="list-group-item">${getListaIngredientes[i].preparoCompleto}</li>
                            </ul>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
                    </div>
                    </div>
                </div>
            </div>
        `;
        }
        getCard.innerHTML = preencheCatalogo;
    })
    .catch(error => {
        console.log(error);
    });

// Outra maneira
//
// $.get('./receitas.json')
//     .done(data => {
//         let parseData;
//         try {
//             parsedData = JSON.parse(data);
//         } catch (err) {
//             parsedData = {};
//         }
//     });
//
