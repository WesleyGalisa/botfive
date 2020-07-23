var http = require ("http");
var porta = process.env.PORT || 8080;
http.createServer(function(req,res){
	res.end("Funcionando")
}).listen(porta)


const telegramBot = require(`node-telegram-bot-api`);
const { Z_BLOCK } = require("zlib");
const token = '1008570379:AAHrGrcDLJTNFBWwO3hQPUUSND4oWwAz67E';
var botfive = new telegramBot(token, {polling:true});

var textobv =
    'POR FAVOR LER AS INSTRUÇÕES!!!!\n\n'+

    'Seja bem vindo(a),\n\n'+
    
    'Por gentileza preencher o formulário: https://docs.google.com/forms/d/e/1FAIpQLScx3ugoMjZpgwzLwBQhyp-aBXdoufX5VSsJ3RkeK4ANTF3KFw/viewform\n\n'+
    
    'CLUBE DO CURSO:\n\n'+
    
    'Por favor me adicionar no lol o nick é SrLuciffer e me mandar uma mensagem informando que é aluno e Caso queira entrar para o clube do curso.\n\n'+
    
    'ACESSO AO DISCORD:\n\n'+
    
    'Para ter acesso ao discord por favor me marcar no servidor do fiv5 na parte de bate papo @Rivenzada e informar o e-mail cadastrado no curso que estarei colocando o cargo como aluno. P.s: Caso não tenha o servidor no discord aqui está o link: https://discordapp.com/invite/fiv5\n\n'+
    
    'ACESSO AS AULAS AO VIVO:\n\n'+
    
    'Caso queira participar das aulas semanais no YouTube as 20:00.\n'+ 
    '(Obs: Será enviado um link pelo discord e no grupo do telegram para assistir)\n'+
    
    'CRONOGRAMA DE AULAS:\n\n'+ 
    
    'Segunda: Aula de mid às 20:00 (Paraíso )\n'+
    'Terça: Aula de adc às 20:00 (Potique )\n'+
    'Quarta: Aula de jungle às 20:00 (Riven)\n'+
    'Quinta: Aula de sup às 20:00 (Fullkira)\n'+
    'Sexta: Aula de top às 20:00 (Hero)\n\n\n'+
    'Caso queira utilizar os meus comando dentro do grupo é só ir'+
 'até o incone com uma "barra" [/] do lado chat, no canto inferior direito';

botfive.on( 'message', ( msg ) => console.log( 'msg', msg ));
botfive.on('message', (msg)=>{

    var dateTime = new Date;
    var data = dateTime.getHours();
    var minutos = dateTime.getMinutes();
    var horario = data+":"+minutos;
    var anuncio = "19:50"
    console.log(data+":"+minutos);
      
    if(horario == anuncio){
        botfive.sendMessage(msg.chat.id, "Olá Membros do grupo, em 10 mints iniciaremos a live do dia\nFiquem atentos para o link\nPara saber qual é a rota do dia\nUse o meu comando aulas\nBons Estudos Invocador!!!")
    } else if(horario == "19:58"){
        botfive.sendMessage(msg.chat.id, "Olá Membros do grupo, em 02 mints iniciaremos a live do dia\nFiquem atentos para o link\nPara saber qual é a rota do dia\nUse o meu comando aulas\nBons Estudos Invocador!!!")
    }


})
botfive.onText(/\/regras/, (msg, match)=>{
	
	var chatId = msg.chat.id;
	var usrname = msg.from.username;
	var texto = "Olá @"+usrname+'\n'+
		"Estas são nossas regras:\n"+
		"Não pode enviar link de outros grupos\n"+
		"Não pode pornografia\n"+
		"Não pode ser Tóxico, somos uma família\n"+
		"Dúvidas? Use meu comando e converse com um Professor";
    botfive.sendMessage(chatId,texto);
});


    botfive.onText(/\/start/i, (msg,match)=>{
        if(msg.chat.type == 'private'){
            botfive.sendMessage(msg.chat.id, textobv,{reply_to_message_id:msg.message_id});
        } else {
            botfive.sendMessage(msg.chat.id, "ESTE COMANDO FUNCIONA APENAS NO PRIVADO!", {reply_to_message_id:msg.message_id});
        }
        
    })

    botfive.onText(/\/professores/, (msg)=>{
        botfive.sendMessage(msg.chat.id, "Qual rota você deseja?\n\n/adc\n\n\n/sup\n\n\n/jg\n\n\n/mid\n\n\n/top",{reply_to_message_id:msg.message_id});
    });

    botfive.onText(/\/adc/, (msg)=>{
        botfive.sendMessage(msg.chat.id, "Nosso Professor de ADC é:\n\nEthierre Potick\n\nVocê pode falar com ele clicando aqui:\n@Potick",{reply_to_message_id:msg.message_id})
    });

    
    botfive.onText(/\/jg/, (msg)=>{
        botfive.sendMessage(msg.chat.id, "Nosso Professor de Jungle é:\n\nRiven\n\nVocê pode falar com ele clicando aqui:\n@Rivenzada",{reply_to_message_id:msg.message_id})
    });

    botfive.onText(/\/top/, (msg)=>{
        botfive.sendMessage(msg.chat.id, "Nosso Professor de Top é:\n\nHero\n\nVocê pode falar com ele clicando aqui:\n@Heroeris",{reply_to_message_id:msg.message_id})
    });
  
    botfive.onText(/\/sup/, (msg)=>{
        botfive.sendMessage(msg.chat.id, "Nosso Professor de Sup é:\n\nFullKira\n\nVocê pode falar com ele clicando aqui:\n@FullKira",{reply_to_message_id:msg.message_id})
    });

    botfive.onText(/\/mid/, (msg)=>{
        botfive.sendMessage(msg.chat.id, "Nosso Professor de Mid é:\n\nParaíso\n\nVocê pode falar com ele clicando aqui:\n@Paraiso12",{reply_to_message_id:msg.message_id})
    });

    botfive.onText(/\/discord/, (msg)=>{
        botfive.sendMessage(msg.chat.id, "Nosso link do discord:\n\nhttps://discordapp.com/invite/fiv5", {reply_to_message_id:msg.message_id})
    });

    botfive.onText(/\/aulas/, (msg)=>{
        botfive.sendMessage(msg.chat.id, 
            'CRONOGRAMA DE AULAS:\n\n'+ 
            
            'Segunda: Aula de mid às 20:00 (Paraíso )\n'+
            'Terça: Aula de adc às 20:00 (Potique )\n'+
            'Quarta: Aula de jungle às 20:00 (Riven)\n'+
            'Quinta: Aula de sup às 20:00 (Fullkira)\n'+
            'Sexta: Aula de top às 20:00 (Hero)\n\n\n', {reply_to_message_id:msg.message_id})
    });

    botfive.onText(/\/curso/, (msg)=>{
        botfive.sendMessage(msg.chat.id, "O link do curso é este:\n\nhttps://cursodofiv5.klickmembers.com.br/login?redirect=%2F" , {reply_to_message_id:msg.message_id})
    }); 

    botfive.onText(/\/catapa/, (msg)=>{

        valor = calcular();

        function calcular(){
            var valor = Math.floor(Math.random()*10)
            return valor;
            
        }
         
       switch(valor){
           case 0:
               botfive.sendMessage(msg.chat.id, "Olá "+msg.from.first_name+"\nEu sou a CATAPA FIDADA\nFui Criada por @WGalisa\nEle é um cara bem bacana, pena que é ruim de farme hehe",{reply_to_message_id:msg.message_id});
               break;
            case 1:
                botfive.sendMessage(msg.chat.id, "Olá "+msg.from.first_name+"\nEu sou a CATAPA FIDADA\nNós sabemos que você fica pensando nas derrotas a noite, quando coloca a cabeça no travesseiro.",{reply_to_message_id:msg.message_id});
               break;
            case 2:
                botfive.sendMessage(msg.chat.id, "Olá "+msg.from.first_name+"\nEu sou a CATAPA FIDADA\nVocê assiste CBLOL?\nEu estava lá você me viu?\nDiz que sim plsssssssssss\nAté mandei beijinho S2.",{reply_to_message_id:msg.message_id});
            break;
            case 3:
                botfive.sendMessage(msg.chat.id, "Olá "+msg.from.first_name+"\nEu sou a CATAPA FIDADA\nAs Pessoas sabem que você gasta dinheiro comprando skins em jogo de fadinha?",{reply_to_message_id:msg.message_id});
               break;
            case 4:
                botfive.sendMessage(msg.chat.id, "Olá "+msg.from.first_name+"\nEu sou a CATAPA FIDADA\nVocê sabia que a cada segundo um herói mata um minion pai ou mãe de família por segundo?\n Menos o Fiv5 ele erra até parado huehuehue",{reply_to_message_id:msg.message_id});
            break;
            case 5:
                botfive.sendMessage(msg.chat.id, "Olá "+msg.from.first_name+"\nEu sou a CATAPA FIDADA\nOutro dia lindo para perder uma ranqueda (hellow darkin Ness my old friend)\nEntendeu as referências né jureg? ",{reply_to_message_id:msg.message_id});
               break;
            case 6:
                botfive.sendMessage(msg.chat.id, "Olá "+msg.from.first_name+"\nEu sou a CATAPA FIDADA\nSe Neeko é a melhor opção, CATAPA FIDADA é o melhor bot?",{reply_to_message_id:msg.message_id});
            break;
            case 7:
                botfive.sendMessage(msg.chat.id, "Olá "+msg.from.first_name+"\nEu sou a CATAPA FIDADA\nSerá que a Lux tem lâmpada em casa?\nBrilho Intenso! ",{reply_to_message_id:msg.message_id});
               break;
            case 8:
                botfive.sendMessage(msg.chat.id, "Olá "+msg.from.first_name+"\nEu sou a CATAPA FIDADA\nEu tava vendo suas estatísticas no LOL e bom...\nPrefiro não comentar!",{reply_to_message_id:msg.message_id});
            break;
            case 9:
                botfive.sendMessage(msg.chat.id, "Olá "+msg.from.first_name+"\nEu sou a CATAPA FIDADA\nNem Tudo na vida faz sentido, igual a nami usar botas sem ter pés .... \nReflitaum!",{reply_to_message_id:msg.message_id});
            break;
       }
    })

    botfive.on('new_chat_members', (msg)=>{
        botfive.sendMessage(msg.chat.id,"Olá "+msg.new_chat_member.first_name+" sou a CATAPA FIDADA, o bot da escola MINDSET CHALLENGER\n\nSeja muito bem vindo! \n\nPara Continuarmos, preciso que você fale comigo no privado \nclicando aqui: @fiv5_bot" );
    })
