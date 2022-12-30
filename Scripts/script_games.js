
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


//Pergunta 01
txtPergunta.innerHTML = 'Pergunta 01 <br> Qual o jogo que mais vendeu em todo os tempos?'
res01.innerHTML = 'Minecraft'
res02.innerHTML = 'Call of Duty - Black Ops'
res03.innerHTML = 'Pokemon - Fire Red'
res04.innerHTML = 'Super Mario World'
console.log(conQuest)

function proximo(){
    
    corFundo01.style.background = 'white'
    corFundo02.style.background = 'white'
    corFundo03.style.background = 'white'
    corFundo04.style.background = 'white'
    if(conQuest <= 3){
        conQuest = conQuest + 1
        switch(conQuest){
            case 2:
                txtPergunta.innerHTML = 'Pergunta 02 <br>A partir de qual jogo aparece o personagem Luigi? '
                res01.innerHTML = 'Super Smash Bros'
                res02.innerHTML = 'Super Mario'
                res03.innerHTML = 'The Legend of Zelda'
                res04.innerHTML = 'Super Mario 3'
            break  
            
            case 3:
                txtPergunta.innerHTML = 'Pergunta 03 <br> Qual jogo que trouxe fama para o Game Boy/Game Boy Color'
                res01.innerHTML = 'Terraria'
                res02.innerHTML = 'Roblox'
                res03.innerHTML = 'Super Mario'
                res04.innerHTML = 'Pokemon'
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
            window.location.href = "/Projeto_perguntas/Conclusão/Conclusão_games.html"
    }
    console.log(conQuest)
}


function verificar(){
        switch(conQuest){
            case 1:
                if(respostas[0].checked){
                    alert('Acertou')
                }else{
                    alert('Errou')
                }
                corFundo01.style.background = 'green'
            break

            case 2:   
                if(respostas[1].checked){        
                    alert('Acertou')
                }else{
                    alert('Errou')
                }
                corFundo02.style.background = 'green'      
            break 
        
            case 3:   
                if(respostas[3].checked){
                    alert('Acertou')
                }else{
                    alert('Errou')
                }
                corFundo04.style.background = 'green'                
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