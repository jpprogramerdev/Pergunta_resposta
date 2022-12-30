var corpo = document.body
var txtPergunta = document.getElementById('pergunta')
var res01 = document.getElementById('resposta01')
var res02 = document.getElementById('resposta02')
var res03 = document.getElementById('resposta03')
var res04 = document.getElementById('resposta04') 
var conQuest = 1
var corFundo01 = document.getElementById('fundo01')
var corFundo02 = document.getElementById('fundo02')
var corFundo03 = document.getElementById('fundo03')
var corFundo04 = document.getElementById('fundo04')

corpo.style.background = 'rgb(0, 238, 255)'
//Pergunta 01
txtPergunta.innerHTML = 'Pergunta 01 <br> Qual filme que fala sobre as leis dos robôs?'
res01.innerHTML = 'Eu, Robô'
res02.innerHTML = 'Percy Jackson - O Mar de Monstro'
res03.innerHTML = 'Exteminador do futuro'
res04.innerHTML = 'Star Wars'
console.log(conQuest)

function proximo(){
    conQuest = conQuest + 1
    corFundo01.style.background = 'white'
    corFundo02.style.background = 'white'
    corFundo03.style.background = 'white'
    corFundo04.style.background = 'white'
    if(conQuest <= 3){
        switch(conQuest){

            case 2:
                txtPergunta.innerHTML = 'Pergunta 02 <br>Jack Sparrow pertence a qual sequencia de filmes? '
                res01.innerHTML = 'Harry Potter'
                res02.innerHTML = 'Piratas do Caribe'
                res03.innerHTML = 'Star Wars'
                res04.innerHTML = 'Indiana Jones'
            break  
            
            case 3:
                txtPergunta.innerHTML = 'Pergunta 03 <br> Hotel de monstros'
                res01.innerHTML = 'Hercules'
                res02.innerHTML = 'Monstro SA'
                res03.innerHTML = 'Toy Story'
                res04.innerHTML = 'Hotel Transilvânia'
            break 

            /*
            case n:
                txtPergunta.innerHTML = 'Pergunta n'
                res01.innerHTML = 'Respotas 01'
                res02.innerHTML = 'Respotas 02'
                res03.innerHTML = 'Respotas 03'
                res04.innerHTML = 'Respotas 04'
            break
            */ 

            
        }
    }else{
            window.location.href = "/Projeto_perguntas/Conclusão/Conclusão_filme.html"
    }
    console.log(conQuest)
}


function verificar(){
        switch(conQuest){
            case 1:
                if(respostas[0].checked){
                    corFundo01.style.background = 'green'
                    alert('Acertou')
                }else{
                    corFundo01.style.background = 'green'
                    alert('Errou')
                }
                
            break

            case 2:   
                if(respostas[1].checked){
                    corFundo02.style.background = 'green'
                    alert('Acertou')
                }else{
                    corFundo02.style.background = 'green'
                    alert('Errou')
                }
                
            break 
        
            case 3:   
                if(respostas[3].checked){
                    corFundo04.style.background = 'green'
                    alert('Acertou')
                }else{
                    corFundo04.style.background = 'green'
                    alert('Errou')
                }
                
            break
            
            /*
            case n:   
                if(respostas[valor].checked){
                    corFundo01.style.background = 'green'
                    corFundo02.style.background = 'green'
                    corFundo03.style.background = 'green'
                    corFundo04.style.background = 'green'
                    alert('Acertou')
                }else{
                                        corFundo01.style.background = 'green'
                    corFundo02.style.background = 'green'
                    corFundo03.style.background = 'green'
                    corFundo04.style.background = 'green'
                    alert('Errou')
                }
                
            break
            */
    }
}