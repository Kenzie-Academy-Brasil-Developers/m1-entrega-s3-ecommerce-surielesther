let quantItensCarrinho = 0;
let preçoTotal = 0;
const aside = document.getElementsByTagName("aside")[0];
const carrinhoVazio = document.getElementById("carrinhoVazio");
const adicione = document.getElementById("adicione");

function criarCards(arr){
    const vitrine = document.getElementById("vitrine");


        for (let i=0; i<infos.length; i++){
        
            const card = document.createElement("div");
            const figure = document.createElement("figure");
            const img = document.createElement("img");
            const informacao = document.createElement("div");
            const tags = document.createElement("p");
            const nomeDoProduto = document.createElement("h3");
            const descricao = document.createElement("p");
            const preco = document.createElement("p");
            const botao = document.createElement("button");
            const info1 = infos[i];
            
            vitrine.appendChild(card);
            card.appendChild(figure);
            figure.appendChild(img);
            card.appendChild(informacao);
            informacao.appendChild(tags);
            informacao.appendChild(nomeDoProduto);
            informacao.appendChild(descricao);
            informacao.appendChild(preco);
            informacao.appendChild(botao);

            card.className = "card";
            figure.className = "fundoDaFoto";
            informacao.className = "informacao";
            tags.className = "categoriaDoProduto";
            nomeDoProduto.className = "nomeDoProduto";
            descricao.className = "descriçao";
            preco.className = "preço";
            botao.className = "adicionar";

            img.src = info1.imgSrc;
            tags.innerText = `${info1.tags}`;
            nomeDoProduto.innerText = `${info1.nome}`;
            descricao.innerText = `${info1.descricao}`;
            preco.innerText = `R$${info1.preco}.00`;
            botao.innerText = `${info1.botão}`;
            
            

            botao.addEventListener("click", function(){

                quantItensCarrinho += 1;
                preçoTotal += info1.preco;

                const car= document.getElementById("carrinho");
                const divItens = document.getElementById("divItens");

                
                const itemNoCarrinho = document.createElement("section");
                const infosNoCarrinho = document.createElement("div");
                const figureNovo = document.createElement("figure");
                const imgNovo = document.createElement("img");
                const nomeDoProdutoNovo = document.createElement("h3");
                const precoNovo = document.createElement("p");
                const remover = document.createElement("button");

                divItens.appendChild(itemNoCarrinho);
                itemNoCarrinho.appendChild(figureNovo);
                figureNovo.appendChild(imgNovo);
                itemNoCarrinho.appendChild(infosNoCarrinho);
                infosNoCarrinho.appendChild(nomeDoProdutoNovo);
                infosNoCarrinho.appendChild(precoNovo);
                infosNoCarrinho.appendChild(remover);

                itemNoCarrinho.className = "itemNoCarrinho";
                infosNoCarrinho.className = "infosNoCarrinho";
                figureNovo.className = "fundoDaFotoNovo";
                imgNovo.className = "imgNovo";
                nomeDoProdutoNovo.className = "nomeDoProdutoNovo";
                precoNovo.className = "preçoNovo";
                remover.className = "remover";

                imgNovo.src = info1.imgSrc;
                nomeDoProdutoNovo.innerText = `${info1.nome}`;
                precoNovo.innerText = `R$${info1.preco}.00`;
                remover.innerText = "Remover item";

                if (quantItensCarrinho === 1){


                    divItens.removeChild(carrinhoVazio);
                    divItens.removeChild(adicione);

                    const fundoTotal = document.createElement("div");
                    const quantidade = document.createElement("p");
                    const valorQuant = document.createElement("p");
                    const total = document.createElement("p");
                    const valorTotal = document.createElement("p");
                    const div1 = document.createElement("div");
                    const div2 = document.createElement("div");

                    aside.appendChild(fundoTotal);
                    fundoTotal.appendChild(div1);
                    fundoTotal.appendChild(div2);
                    div1.appendChild(quantidade);
                    div1.appendChild(valorQuant);
                    div2.appendChild(total);
                    div2.appendChild(valorTotal);

                    fundoTotal.id = "fundoTotal";
                    quantidade.className = "informacoesFinais";
                    total.className = "informacoesFinais";
                    valorQuant.id = "valoresFinais1";
                    valorTotal.id = "valoresFinais";
                    div1.className = "div";
                    div2.className = "div";


                    quantidade.innerText = "Quantidade:";
                    total.innerText = "Total:";
                    valorQuant.innerText = quantItensCarrinho;
                    valorTotal.innerText =`R$${preçoTotal}.00`;
                    
                    
                }
                else if (quantItensCarrinho > 1){
                    const valorQuant = document.getElementById('valoresFinais1');
                    const valorTotal = document.getElementById('valoresFinais');
                    valorQuant.innerText = quantItensCarrinho;
                    valorTotal.innerText = `R$${preçoTotal}.00`;
                }

                
                remover.addEventListener("click", function(){
                    const car = document.getElementById("carrinho");
                    

                    divItens.removeChild(itemNoCarrinho);
                    let valorQuant2=document.getElementById("valoresFinais1");
                    let valorTotal2=document.getElementById("valoresFinais");

                    quantItensCarrinho -=1;
                    preçoTotal -= info1.preco;
                    valorQuant2.innerText = quantItensCarrinho;
                    valorTotal2.innerText = `R$${preçoTotal}.00`;
                    


                    if (quantItensCarrinho === 0){

                    
                        const fundoTotal1 = document.getElementById("fundoTotal");
                    
                        aside.removeChild(fundoTotal1);
                        divItens.appendChild(carrinhoVazio);
                        divItens.appendChild(adicione);
    
                    }

                })



            })
        }
}   criarCards(infos) ;

function filtroNav(event){
    
    const newData = [];
    const item = event.target;
    if(item.dataset.tag === "Todos"){
        createPosts(infos);
    }
    else { 
        for (let i=0; i<infos.length; i++){
            if (infos[i].tags === item.dataset.tag){
                newData.push(infos[i]);
            }
        } 
        createPosts(newData);
        
    }
    item.classList.add("active");
}

const barraDeNav = document.getElementById("indice");

barraDeNav.addEventListener("click" , filtroNav);
