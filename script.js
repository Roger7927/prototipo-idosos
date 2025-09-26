// --- Dados dos Cenários (Guia de Uso do Celular) ---
const cenariosGuia = [
    {
        descricao: "Você quer fazer uma chamada de vídeo para a sua filha que mora longe. O que você faz no WhatsApp?",
        opcoes: ["Abre a conversa com ela e clica no ícone de câmera no canto superior da tela.", "Digita 'ligar por vídeo' na conversa e envia a mensagem.", "Vai na lista de contatos do celular e liga direto por lá."],
        respostaCorreta: "A",
        feedback: "Correto! O ícone de câmera no topo da tela é o atalho para a chamada de vídeo. A chamada de voz usa o ícone de telefone.",
        dica: "A maioria dos aplicativos de comunicação tem ícones intuitivos. Para vídeo, procure por uma câmera."
    },
    {
        descricao: "Você salvou o número do seu novo vizinho, mas não o encontra na lista de contatos do WhatsApp. O que você faz para achá-lo?",
        opcoes: ["Sai do WhatsApp, apaga o número do seu vizinho e salva de novo.", "Clica no ícone de 'nova conversa' (geralmente um balão de fala ou um sinal de mais) e depois na lupa para buscar o nome.", "Desliga e liga o celular de novo para ver se o contato aparece."],
        respostaCorreta: "B",
        feedback: "Exato! Usar o ícone de 'nova conversa' e a barra de pesquisa é a forma mais rápida de encontrar um contato, mesmo que você tenha muitos salvos.",
        dica: "Para achar algo, a função de 'pesquisar' (ícone de lupa) é sempre o caminho mais rápido."
    },
    {
        descricao: "Você tirou uma foto de uma planta e quer salvá-la no seu celular. Onde ela é armazenada?",
        opcoes: ["Ela é enviada automaticamente para a internet.", "Ela é salva na galeria de fotos ou no álbum da câmera do celular.", "Você precisa enviar a foto para você mesmo por mensagem para salvá-la."],
        respostaCorreta: "B",
        feedback: "Isso mesmo! Todas as fotos e vídeos que você tira com o celular ficam guardados automaticamente na sua 'Galeria' ou 'Fotos'. Você não precisa fazer nada para salvá-las.",
        dica: "As fotos ficam salvas no próprio aparelho, não são enviadas para a internet sem sua permissão."
    },
    {
        descricao: "Você precisa digitar uma mensagem, mas o teclado sumiu da tela. O que você faz?",
        opcoes: ["Desliga e liga o celular novamente para o teclado reaparecer.", "Toca no campo de texto onde você quer escrever. Isso fará o teclado virtual aparecer.", "Procura a loja de aplicativos para baixar um novo teclado."],
        respostaCorreta: "B",
        feedback: "Muito bem! O teclado do celular só aparece quando você toca no espaço em que precisa digitar. É um recurso do próprio celular.",
        dica: "O teclado é 'inteligente', ele só aparece quando o celular percebe que você precisa dele."
    },
    {
        descricao: "Você recebeu uma foto e quer salvá-la no seu celular. Como você faz?",
        opcoes: ["Toca na foto e segura por alguns segundos, depois escolhe a opção 'Salvar' ou 'Baixar'.", "Tira um 'print' da tela do celular para guardar a imagem.", "A foto já está salva no seu celular automaticamente."],
        respostaCorreta: "A",
        feedback: "Correto! Tocar e segurar é a forma mais comum de interagir com imagens e links em aplicativos como o WhatsApp. Isso abrirá um menu com várias opções, incluindo salvar.",
        dica: "Tocar e segurar é uma ação universal em celulares para ver mais opções."
    },
    {
        descricao: "Seu celular está com a bateria fraca. Onde você encontra a opção de 'Economia de Bateria'?",
        opcoes: ["No menu de configurações do celular, na seção de 'Bateria' ou 'Alimentação'.", "Em cada aplicativo, individualmente.", "Você precisa baixar um aplicativo para economizar bateria."],
        respostaCorreta: "A",
        feedback: "Isso mesmo! A maioria dos celulares tem uma opção de 'Economia de Bateria' nas configurações, que ajuda a prolongar a carga quando você mais precisa.",
        dica: "A 'bateria' do seu celular é um recurso importante e tem uma seção própria para gerenciar o uso de energia."
    },
    {
        descricao: "Você quer baixar um aplicativo novo no seu celular. Onde você o encontra?",
        opcoes: ["Na 'Play Store' (para Android) ou na 'App Store' (para iPhone).", "Pesquisando na internet pelo nome do aplicativo.", "Você precisa pedir para alguém que já tem o aplicativo te enviar."],
        respostaCorreta: "A",
        feedback: "Perfeito! A 'Play Store' e a 'App Store' são as lojas oficiais para baixar aplicativos de forma segura e garantida.",
        dica: "Para segurança, evite baixar aplicativos de outros lugares que não sejam as lojas oficiais."
    },
    {
        descricao: "Você quer silenciar um grupo barulhento no WhatsApp. O que você faz?",
        opcoes: ["Sai do grupo e pede para alguém te adicionar de novo quando estiverem menos barulhentos.", "Abre a conversa do grupo, clica nos três pontinhos e depois em 'Silenciar notificações'.", "Desliga o celular e liga de novo para o grupo ficar quieto."],
        respostaCorreta: "B",
        feedback: "Excelente! Silenciar notificações é a melhor forma de se manter no grupo sem ser incomodado pelas mensagens constantes. Você pode escolher por quanto tempo o grupo ficará em silêncio.",
        dica: "Os três pontinhos geralmente escondem mais opções, como 'silenciar' ou 'sair'."
    },
    {
        descricao: "Você quer mandar uma mensagem de áudio, mas não consegue. O que pode estar acontecendo?",
        opcoes: ["Você precisa segurar o ícone de microfone enquanto fala.", "Seu celular está sem internet.", "Você precisa ligar para a pessoa e pedir permissão antes."],
        respostaCorreta: "A",
        feedback: "Correto! Para enviar uma mensagem de áudio, você deve segurar o ícone de microfone. Ao soltar, o áudio é enviado automaticamente.",
        dica: "O ícone de microfone nas conversas do WhatsApp serve para gravar áudios. Mantenha-o pressionado."
    },
    {
        descricao: "Você quer ligar o Wi-Fi para economizar seus dados de internet. Onde você o encontra?",
        opcoes: ["Na barra de notificações superior do celular, que você desliza para baixo.", "No menu de configurações, na seção 'Conexões' ou 'Wi-Fi'.", "Ambas as opções estão corretas."],
        respostaCorreta: "C",
        feedback: "Muito bem! A maioria dos celulares permite ligar ou desligar o Wi-Fi e os dados móveis de forma rápida, deslizando o dedo de cima para baixo na tela inicial. A opção também está no menu de configurações.",
        dica: "O Wi-Fi e os dados móveis estão conectados à internet. Suas opções de conexão estão no mesmo lugar."
    },
    {
        descricao: "Você quer tirar uma 'selfie' (uma foto de si mesmo). Que botão você deve procurar na tela da câmera?",
        opcoes: ["O botão que tem um desenho de uma mão com a palma aberta.", "O ícone de uma câmera com setas circulares para trocar a câmera de frente para trás.", "O botão de 'flash' para iluminar o seu rosto."],
        respostaCorreta: "B",
        feedback: "Isso mesmo! O ícone de câmera com setas circulares alterna entre a câmera traseira (para fotos comuns) e a câmera frontal (para selfies).",
        dica: "O ícone de uma câmera com setas circulares é o botão de 'virar a câmera'."
    },
    {
        descricao: "Você quer enviar um vídeo que recebeu no WhatsApp para o seu grupo de família. Como você faz?",
        opcoes: ["Abre a conversa do grupo e procura a opção 'Enviar vídeo'.", "Toca e segura no vídeo, depois clica em 'Encaminhar' (ícone de seta) e escolhe o grupo.", "Salva o vídeo no celular e depois envia novamente para o grupo."],
        respostaCorreta: "B",
        feedback: "Excelente! Usar a opção 'Encaminhar' é a forma mais rápida de enviar o mesmo conteúdo para outras pessoas ou grupos sem precisar baixá-lo e reenviá-lo.",
        dica: "A 'seta' é um ícone comum para 'encaminhar' ou 'compartilhar' algo."
    },
    {
        descricao: "Você quer fazer uma compra na internet usando seu cartão. O que é o 'código de segurança' do cartão?",
        opcoes: ["É a senha que você usa no banco.", "É um número de 3 ou 4 dígitos que fica no verso do cartão.", "É o número da agência do seu banco."],
        respostaCorreta: "B",
        feedback: "Isso mesmo! O código de segurança (geralmente chamado de CVV ou CVC) é um código extra no verso do cartão que ajuda a garantir que a compra é segura, já que você precisa ter o cartão em mãos para ver o número.",
        dica: "A senha do cartão é secreta e jamais deve ser digitada na internet."
    },
    {
        descricao: "Você quer ver o site do seu banco. Como você garante que está no site oficial?",
        opcoes: ["Digita 'banco' na internet e clica no primeiro resultado.", "Digita o endereço completo do site do banco (ex: www.banco.com.br) ou usa o aplicativo oficial.", "Clica em um link que recebeu por e-mail, pois o e-mail tem o nome do banco."],
        respostaCorreta: "B",
        feedback: "Correto! Sempre digite o endereço completo do site em vez de clicar em links. Golpistas criam sites falsos para roubar suas informações.",
        dica: "Links de e-mails podem ser falsos. A melhor forma é sempre digitar o endereço do site que você já conhece."
    },
    {
        descricao: "Quando você termina de usar um aplicativo, é bom 'fechá-lo' para economizar bateria e memória. Como você faz isso?",
        opcoes: ["Apenas toca no botão de 'voltar' até sair do aplicativo.", "Toca no botão de 'visão geral' (geralmente um quadrado ou três linhas) e desliza o aplicativo para o lado ou para cima para fechá-lo.", "Desliga o celular e liga de novo."],
        respostaCorreta: "B",
        feedback: "Perfeito! A visão geral de aplicativos abertos é a maneira mais eficiente de fechá-los completamente e garantir que não estão rodando em segundo plano.",
        dica: "O botão de 'voltar' apenas volta à tela anterior, mas não fecha o aplicativo por completo."
    },
    {
        descricao: "Você precisa enviar um documento importante que está em papel para uma pessoa. Como você pode fazer isso usando o celular?",
        opcoes: ["Tira uma foto do documento e envia como imagem.", "Usa um aplicativo de 'scanner de documentos' para digitalizar a folha em PDF.", "Vai até uma loja e pede para alguém digitalizar para você."],
        respostaCorreta: "B",
        feedback: "Isso mesmo! Embora tirar uma foto funcione, aplicativos de 'scanner' transformam a imagem em um documento digital de alta qualidade (PDF), o que é mais profissional e fácil de ler.",
        dica: "Aplicativos de scanner de documentos são ótimos para transformar papéis em arquivos digitais de forma rápida."
    },
    {
        descricao: "Para proteger seu celular, você deve criar uma senha. Qual é a melhor opção?",
        opcoes: ["Uma senha de 4 dígitos (ex: 1234).", "Um padrão de desenho fácil de lembrar.", "Uma senha de 6 dígitos ou um padrão mais complexo, combinando letras e números."],
        respostaCorreta: "C",
        feedback: "Correto! Quanto mais complexa a senha, mais difícil é para outras pessoas adivinharem. Senhas simples como '1234' são muito fáceis de serem descobertas.",
        dica: "Padrões simples e senhas curtas são muito fáceis para os golpistas descobrirem."
    },
    {
        descricao: "Você precisa encontrar um restaurante para almoçar. Que aplicativo você pode usar no celular?",
        opcoes: ["O aplicativo de mensagens de texto.", "O aplicativo de mapas, como o 'Google Maps' ou 'Waze'.", "O aplicativo de compras online."],
        respostaCorreta: "B",
        feedback: "Perfeito! Aplicativos de mapas são ótimos para encontrar lugares, ver rotas e até ler avaliações de outros clientes, o que é muito útil.",
        dica: "Aplicativos de mapa são feitos para te ajudar a se localizar e encontrar lugares perto de você."
    },
    {
        descricao: "Você não consegue ouvir o áudio de um vídeo. O que você verifica primeiro?",
        opcoes: ["Se o volume do celular está ativado.", "Se o celular está conectado a uma rede Wi-Fi.", "Se a pessoa que enviou o vídeo não apagou o áudio."],
        respostaCorreta: "A",
        feedback: "Isso mesmo! A primeira coisa a verificar é se o volume do seu celular está alto. Use os botões laterais para aumentar o volume da mídia.",
        dica: "A falta de som geralmente está ligada ao volume do aparelho, e não a problemas mais complexos."
    },
    {
        descricao: "Você precisa desinstalar um aplicativo que não usa mais. Como você faz?",
        opcoes: ["Abre o aplicativo e procura a opção 'desinstalar' dentro dele.", "Toca e segura no ícone do aplicativo na tela inicial e procura a opção 'desinstalar' ou o ícone de uma lixeira.", "Você precisa levar o celular em um técnico para desinstalar."],
        respostaCorreta: "B",
        feedback: "Excelente! Tocar e segurar no ícone é a forma mais rápida de desinstalar aplicativos no celular. Eles não precisam ser abertos para serem desinstalados.",
        dica: "Em vez de abrir o aplicativo, a opção de desinstalar aparece ao tocar e segurar no ícone dele."
    }
];

// --- Dados dos Cenários (Proteção contra Golpes) ---
const cenariosGolpes = [
    {
        descricao: "Você recebe uma mensagem de um número desconhecido que diz: 'Sua conta de energia está atrasada. Clique aqui para pagar e evitar o corte: [link falso]'. O que você faz?",
        opcoes: ["Clico no link rapidamente para pagar e não ter a luz cortada.", "Ligo para o número oficial da companhia de energia que está na minha conta para verificar.", "Respondo à mensagem perguntando quem é."],
        respostaCorreta: "B",
        feedback: "Excelente! Nunca clique em links suspeitos. Sempre verifique ligando para o número oficial. Golpistas usam a urgência para te enganar.",
        dica: "Ataques de phishing usam a urgência e o medo para fazer você clicar em links maliciosos. Desconfie sempre!"
    },
    {
        descricao: "Você recebe uma ligação de um desconhecido que diz ser do banco e pede para você confirmar seus dados e a senha do seu cartão. O que você faz?",
        opcoes: ["Fornece seus dados e senha, pois a pessoa é do banco.", "Desliga o telefone e liga você mesmo para o número oficial do seu banco.", "Pede o número de protocolo da ligação para confirmar depois."],
        respostaCorreta: "B",
        feedback: "Isso mesmo! Bancos nunca pedem senhas ou dados por telefone. A melhor atitude é desligar e ligar para o número que você já conhece.",
        dica: "O banco já possui seus dados e senha. Eles nunca pedirão para você confirmá-los por telefone."
    },
    {
        descricao: "Você recebe um e-mail com o nome de uma loja famosa dizendo que você ganhou um prêmio. O e-mail pede para você clicar em um link para resgatar. O que você faz?",
        opcoes: ["Clica no link, pois o prêmio é real.", "Apaga o e-mail, pois você não participou de nenhum sorteio da loja e isso é um golpe.", "Encaminha o e-mail para seus amigos para que eles também participem."],
        respostaCorreta: "B",
        feedback: "Perfeito! A maioria dos e-mails de 'prêmios' são falsos e servem para roubar seus dados. Se algo parece bom demais para ser verdade, provavelmente é um golpe.",
        dica: "Prêmios de e-mail sem que você tenha participado de algo são quase sempre golpes."
    },
    {
        descricao: "Você recebe uma mensagem no WhatsApp do seu neto, que diz: 'Vovó, estou precisando de dinheiro com urgência. Manda um PIX para este número que te explico depois'. O que você faz?",
        opcoes: ["Faz o PIX imediatamente para ajudar seu neto.", "Tenta ligar para o seu neto ou para os pais dele para confirmar se a mensagem é verdadeira.", "Manda uma mensagem de áudio perguntando se é ele mesmo."],
        respostaCorreta: "B",
        feedback: "Isso aí! Este é o famoso 'Golpe do Falso Perfil'. Golpistas usam fotos de pessoas que você conhece. Sempre verifique a informação por uma ligação ou pessoalmente.",
        dica: "A pressa e a falta de detalhes são sinais de golpe. Sempre verifique a identidade da pessoa por meio de uma ligação."
    },
    {
        descricao: "Você está em um site de compras e um aviso aparece dizendo que você precisa 'atualizar sua conta' para continuar a navegar. O aviso te redireciona para uma página que pede sua senha do banco. O que você faz?",
        opcoes: ["Digita sua senha, pois o site precisa da sua conta para continuar.", "Fecha a página imediatamente, pois sites de compras não pedem sua senha de banco.", "Tenta procurar uma opção para pular a atualização e continuar navegando."],
        respostaCorreta: "B",
        feedback: "Correto! Sites legítimos de compras não pedem sua senha de banco. Esta é uma tática de 'phishing' para roubar seus dados bancários.",
        dica: "Sua senha de banco é como a chave de sua casa. Não a digite em sites que não sejam o do seu banco."
    },
    {
        descricao: "Você recebe um e-mail de um banco dizendo que sua conta foi bloqueada e precisa de sua senha para desbloqueá-la. O que você faz?",
        opcoes: ["Clica no link do e-mail e digita sua senha para resolver o problema.", "Apaga o e-mail e liga para o número oficial do banco para verificar a situação.", "Responde ao e-mail perguntando o motivo do bloqueio."],
        respostaCorreta: "B",
        feedback: "Isso aí! Bancos nunca pedem sua senha por e-mail ou mensagem. Apagar a mensagem e entrar em contato pelos canais oficiais do banco é a atitude mais segura para evitar roubo de dados.",
        dica: "Sempre que um banco quiser se comunicar com você, eles usarão um canal seguro e nunca pedirão sua senha."
    },
    {
        descricao: "Você recebe uma notificação no celular dizendo que ganhou um prêmio, mas precisa clicar em um link para resgatar. O que você faz?",
        opcoes: ["Clica no link para ver qual prêmio ganhou.", "Ignora e apaga a notificação, pois você não participou de nenhum sorteio.", "Mostra para um amigo para ver se ele reconhece o link."],
        respostaCorreta: "B",
        feedback: "Isso mesmo! Essas mensagens de prêmio são falsas. O objetivo é fazer você clicar em links maliciosos que podem roubar suas informações.",
        dica: "Desconfie de prêmios que você não se lembra de ter participado."
    },
    {
        descricao: "Você está usando a internet e a tela do seu celular se enche de avisos de que 'seu celular está infectado com 10 vírus'. O que você faz?",
        opcoes: ["Clica no botão que diz 'Limpar Agora' para remover os vírus.", "Desliga o celular e liga de novo para sair da página.", "Tenta ir para as configurações do celular para ver se tem um antivírus instalado."],
        respostaCorreta: "B",
        feedback: "Excelente! Esses avisos são falsos e tentam te assustar. Desligar a página ou o celular é a forma mais segura de evitar que o golpe prossiga.",
        dica: "Avisos de vírus na internet são quase sempre falsos. Desligar e ligar o celular geralmente resolve."
    },
    {
        descricao: "Uma pessoa liga e diz ser da operadora de cartão de crédito. Ela informa que sua compra foi cancelada e pede que você confirme seu número de cartão e o código de segurança. O que você faz?",
        opcoes: ["Confirma os dados, pois parece ser um problema real com sua compra.", "Diz que não pode informar e desliga a ligação, ligando para o número que está no verso do seu cartão.", "Pede para que a pessoa te envie um e-mail oficial com as informações."],
        respostaCorreta: "B",
        feedback: "Perfeito! Nenhuma operadora de cartão pede dados sensíveis por telefone. Eles já têm essas informações. É um golpe para roubar os dados do seu cartão. Desligue imediatamente e ligue para o número oficial.",
        dica: "O banco já sabe o número do seu cartão e nunca pediria o código de segurança por telefone."
    },
    {
        descricao: "Um desconhecido na rua pede para você fazer um PIX de R$ 100,00 para ele, dizendo que vai te dar o dobro em dinheiro vivo. O que você faz?",
        opcoes: ["Aceita o trato, pois vai ganhar dinheiro fácil.", "Agradece e diz que não pode, pois isso é um golpe comum.", "Faz o PIX e espera o dinheiro, mas desconfiando."],
        respostaCorreta: "B",
        feedback: "Muito bem! Este é um golpe conhecido como 'Golpe do PIX em Dobro'. Eles somem com o seu dinheiro e você nunca mais os vê. Nunca caia em promessas de dinheiro fácil de estranhos.",
        dica: "Não existe dinheiro fácil. Se a oferta é boa demais, é porque é um golpe."
    },
    {
        descricao: "Você recebe uma mensagem de um amigo que te pede para enviar o código de verificação do WhatsApp que acabou de chegar no seu celular. O que você faz?",
        opcoes: ["Envia o código, pois o seu amigo está pedindo ajuda.", "Não envia de jeito nenhum, pois esse é um golpe para roubar seu WhatsApp. Liga para o seu amigo para avisar.", "Envia o código, mas só se ele te explicar o motivo."],
        respostaCorreta: "B",
        feedback: "Perfeito! Nunca, em hipótese alguma, compartilhe códigos de verificação. Golpistas usam a conta do seu amigo para te enganar. Sempre ligue para a pessoa para confirmar.",
        dica: "O código de verificação do WhatsApp é como uma chave que dá acesso à sua conta. Nunca o compartilhe."
    },
    {
        descricao: "Você está em um site de compras e um aviso aparece dizendo que você precisa 'atualizar sua conta' para continuar a navegar. O aviso te redireciona para uma página que pede sua senha do banco. O que você faz?",
        opcoes: ["Digita sua senha, pois o site precisa da sua conta para continuar.", "Fecha a página imediatamente, pois sites de compras não pedem sua senha de banco.", "Tenta procurar uma opção para pular a atualização e continuar navegando."],
        respostaCorreta: "B",
        feedback: "Correto! Sites legítimos de compras não pedem sua senha de banco. Esta é uma tática de 'phishing' para roubar seus dados bancários.",
        dica: "Desconfie de sites que pedem sua senha de banco, especialmente se você já está logado em outro site."
    },
    {
        descricao: "Uma pessoa liga para você fingindo ser do suporte técnico da Microsoft ou Google e diz que seu computador está com problemas de segurança. Eles pedem para você instalar um programa. O que você faz?",
        opcoes: ["Instala o programa, pois eles parecem legítimos e querem ajudar.", "Desliga a ligação e não instala nada. Microsoft ou Google nunca ligam para você.", "Pede para eles te darem um número de protocolo para você verificar depois."],
        respostaCorreta: "B",
        feedback: "Isso mesmo! Empresas de tecnologia nunca ligam para os clientes dessa forma. O programa que eles pedem para instalar é um vírus ou um software para controlar seu computador e roubar seus dados.",
        dica: "Nenhuma empresa de tecnologia séria ligará para você sem aviso prévio para falar sobre vírus."
    },
    {
        descricao: "Você recebe uma notificação de um aplicativo de namoro que você não instalou. A notificação diz que você tem novas mensagens. O que você faz?",
        opcoes: ["Abre a notificação para ver as mensagens.", "Apaga a notificação e verifica a lista de aplicativos do seu celular para ver se um aplicativo desconhecido foi instalado.", "Clica no ícone de 'curtir' a notificação para que ela pare de aparecer."],
        respostaCorreta: "B",
        feedback: "Perfeito! Notificações de aplicativos que você não conhece são uma tática para que você instale um vírus ou entre em um site perigoso. Sempre verifique a origem da notificação e, se for de um aplicativo desconhecido, desinstale-o.",
        dica: "Se você não instalou, a notificação não deveria existir. Isso é um sinal de alerta."
    },
    {
        descricao: "Você está em um site de notícias e uma janela pop-up aparece dizendo que você é o visitante número um milhão e ganhou um iPhone. O que você faz?",
        opcoes: ["Preenche os seus dados para receber o prêmio.", "Fecha a janela imediatamente e não clica em nada. Este é um golpe para roubar seus dados.", "Copia o link da janela e envia para um amigo para que ele também ganhe."],
        respostaCorreta: "B",
        feedback: "Correto! Você nunca será o visitante número um milhão de um site. Essa é uma tática de engenharia social para roubar seus dados. Ignore e feche a janela.",
        dica: "Prêmios aleatórios na internet são sempre golpes. Não clique, não responda e não forneça seus dados."
    },
    {
        descricao: "Você vende um item pela internet e o comprador te envia um e-mail com um 'comprovante de pagamento' falso. O e-mail pede para você enviar o produto. O que você faz?",
        opcoes: ["Envia o produto, pois você tem um comprovante de pagamento por e-mail.", "Verifica no seu aplicativo ou conta bancária se o dinheiro realmente caiu antes de enviar o produto.", "Liga para o banco para confirmar se o e-mail de comprovante é verdadeiro."],
        respostaCorreta: "B",
        feedback: "Excelente! O comprovante de pagamento pode ser falsificado. Sempre confirme o recebimento do dinheiro diretamente no seu extrato bancário. Se o dinheiro não estiver lá, é um golpe.",
        dica: "O único comprovante real de pagamento é o dinheiro na sua conta bancária."
    },
    {
        descricao: "Uma mensagem de texto chega no seu celular dizendo: 'Seu cadastro no SUS foi atualizado. Clique aqui para ver as novas informações: [link suspeito]'. O que você faz?",
        opcoes: ["Clica no link para ver a atualização.", "Apaga a mensagem e ignora, pois o SUS não envia este tipo de mensagem.", "Responde à mensagem com uma dúvida sobre a atualização."],
        respostaCorreta: "B",
        feedback: "Perfeito! Serviços públicos como o SUS não enviam links para atualização de dados por mensagem de texto. Este é um golpe de phishing para roubar suas informações pessoais.",
        dica: "Se um serviço público precisa te contatar, ele o fará por canais oficiais e seguros. Desconfie de links em mensagens."
    },
    {
        descricao: "Você recebe uma mensagem de uma pessoa desconhecida te convidando para um 'grupo de investimentos' onde você pode ganhar muito dinheiro de forma rápida. O que você faz?",
        opcoes: ["Entra no grupo, pois pode ser uma boa oportunidade.", "Ignora a mensagem, pois a promessa de dinheiro fácil é uma tática de golpe.", "Pergunta ao seu amigo se ele conhece o grupo antes de entrar."],
        respostaCorreta: "B",
        feedback: "Isso mesmo! 'Esquemas de investimento' que prometem altos retornos em pouco tempo são quase sempre golpes financeiros. Ignorar é a melhor forma de se proteger.",
        dica: "Não existe dinheiro fácil. Se a promessa é muito boa, é um golpe."
    },
    {
        descricao: "Uma mensagem pop-up aparece no seu navegador dizendo que você precisa instalar a 'nova versão do Flash Player' para continuar vendo um vídeo. O que você faz?",
        opcoes: ["Clica para instalar, pois o aviso parece oficial.", "Fecha a janela imediatamente e não instala nada. O Flash Player não é mais usado.", "Procura na loja de aplicativos a nova versão para instalar por conta própria."],
        respostaCorreta: "B",
        feedback: "Correto! O Flash Player é uma tecnologia antiga e descontinuada. O aviso é um golpe que tenta fazer você instalar um vírus. A melhor atitude é fechar a janela.",
        dica: "O Flash Player não existe mais. Qualquer aviso sobre ele é falso."
    },
    {
        descricao: "Você encontra um perfil em uma rede social que está se passando por um familiar e pede dinheiro. O que você pode fazer para ajudar a combater isso?",
        opcoes: ["Bloqueia o perfil e avisa seu familiar.", "Faz uma denúncia do perfil na própria rede social para que ele seja retirado do ar.", "Envia uma mensagem para o perfil falso perguntando por que ele está se passando pelo seu familiar."],
        respostaCorreta: "B",
        feedback: "Excelente! Denunciar o perfil é a melhor maneira de ajudar a combater esses golpes, pois a plataforma pode remover o perfil falso e proteger outras pessoas.",
        dica: "Se um perfil está se passando por outra pessoa, a melhor forma de combater isso é denunciando para a rede social."
    }
];

// --- Dados dos Cenários do Simulador ---
const simuladorCenarios = [
    {
        titulo: "Golpe do Pop-Up de Vírus",
        conteudoHTML: `<div class="simulacao-pop-up"><h4>Seu Celular Está Infectado!</h4><p>Detectamos 3 vírus. Clique em 'Limpar Agora' para remover e proteger seus dados.</p><div class="simulacao-pop-up-buttons"><button data-acao="errado">Limpar Agora</button><button data-acao="correto">X</button></div></div>`,
        feedbackCorreto: "Perfeito! Você fechou a janela. Esses avisos são falsos e tentam te assustar para que você instale um vírus de verdade.",
        feedbackErrado: "Cuidado! Clicar em 'Limpar Agora' pode instalar um vírus. A melhor ação é sempre fechar a janela.",
        dica: "Em avisos de pop-up, o botão 'X' é sempre a opção mais segura."
    },
    {
        titulo: "Golpe do SMS Falso do Banco",
        conteudoHTML: `<div class="simulacao-pop-up"><h4>Mensagem de Texto (SMS)</h4><p>Sua conta do Banco Virtual foi bloqueada. Para desbloquear, clique no link abaixo:</p><a href="#" data-acao="errado">bancovirtual.link/seguranca</a><button data-acao="correto">Apagar Mensagem</button></div>`,
        feedbackCorreto: "Isso mesmo! Você apagou a mensagem. Bancos nunca enviam links para desbloquear contas por SMS. A atitude certa é ignorar e ligar para o banco.",
        feedbackErrado: "Cuidado! Você clicou em um link suspeito. Isso poderia levar a um site falso para roubar seus dados. Sempre desconfie de links em mensagens de texto.",
        dica: "Nunca clique em links enviados por SMS ou e-mail. Digite o endereço do banco no navegador ou use o app oficial."
    },
    {
        titulo: "Golpe do PIX Falso de Amigo",
        conteudoHTML: `
        <div class="simulacao-mensagem-wpp">
            <p class="wpp-remetente">Desconhecido +55 (11) 9....</p>
            <p class="wpp-mensagem">Oie sou eu! Tive que trocar de número. Estou precisando de um PIX urgente, me ajuda? Depois te explico.</p>
            <p class="wpp-mensagem errado-btn" data-acao="errado">Claro! Manda o PIX que te ajudo.</p>
            <p class="wpp-mensagem correto-btn" data-acao="correto">Não posso fazer PIX. Posso te ligar?</p>
        </div>`,
        feedbackCorreto: "Correto! Você optou por ligar para confirmar. Este é um dos golpes mais comuns, onde o golpista se passa por um amigo ou familiar. Sempre ligue antes de fazer qualquer PIX!",
        feedbackErrado: "Cuidado! Você caiu no golpe do PIX. O golpista sumiria com o seu dinheiro. A regra de ouro é: sempre ligue para a pessoa para confirmar antes de enviar dinheiro.",
        dica: "A urgência é uma tática de golpe. Sempre verifique a identidade da pessoa por meio de uma ligação."
    },
    {
        titulo: "Golpe da Oferta de Emprego Falso",
        conteudoHTML: `
        <div class="simulacao-email">
            <div class="email-cabecalho">
                <p>De: Recrutador Empregos <falso.email@yahoo.com.br></p>
                <p>Para: Você</p>
                <h4>Parabéns! Vaga de Gerente Aprovada!</h4>
            </div>
            <div class="email-corpo">
                <p>Sua análise de currículo foi aprovada. Para começar, por favor, pague a taxa de R$ 50 para o material de treinamento.</p>
                <button class="email-btn errado-btn" data-acao="errado">Pagar Taxa de Inscrição</button>
                <button class="email-btn correto-btn" data-acao="correto">Excluir e-mail</button>
            </div>
        </div>`,
        feedbackCorreto: "Excelente! Você excluiu o e-mail. Empresas sérias nunca cobram para contratar. Esta é uma tática de golpe para roubar dinheiro de quem busca emprego.",
        feedbackErrado: "Cuidado! Você clicou em pagar. Empresas de verdade não cobram para contratar. Esta é uma tática de golpe para roubar o seu dinheiro.",
        dica: "Vagas de emprego legítimas não pedem dinheiro para que você comece a trabalhar."
    },
    {
        titulo: "Golpe de Falsa Pesquisa Premiada",
        conteudoHTML: `
        <div class="simulacao-site-pesquisa">
            <h4>Parabéns, Usuário! Você foi selecionado!</h4>
            <p>Responda à pesquisa e ganhe um celular de última geração.</p>
            <div class="pesquisa-opcoes">
                <button class="pesquisa-btn" data-acao="errado">Participar e Ganhar!</button>
                <button class="pesquisa-btn" data-acao="correto">Fechar</button>
            </div>
        </div>`,
        feedbackCorreto: "Isso mesmo! Você fechou a pesquisa. Ninguém ganha prêmios de graça na internet. Este é um golpe para coletar seus dados e, possivelmente, invadir seu celular. A melhor ação é sempre fechar a página.",
        feedbackErrado: "Cuidado! Você clicou para participar. Isso poderia te levar a uma página falsa para coletar seus dados pessoais e até bancários. Desconfie sempre de promessas de prêmios fáceis.",
        dica: "Se você não participou de nenhum sorteio, é impossível ter sido premiado. Ignore!"
    },
    {
        titulo: "Golpe de Phishing em E-mail de Banco",
        conteudoHTML: `
        <div class="simulacao-email">
            <div class="email-cabecalho">
                <p>De: Banco Falso <suporte@bancovirtuall.com.br></p>
                <p>Para: Você</p>
                <h4>Aviso: Sua conta será suspensa!</h4>
            </div>
            <div class="email-corpo">
                <p>Detectamos uma atividade suspeita. Clique para atualizar seus dados e evitar o bloqueio.</p>
                <button class="email-btn errado-btn" data-acao="errado">Atualizar Agora</button>
                <button class="email-btn correto-btn" data-acao="correto">Excluir E-mail</button>
            </div>
        </div>`,
        feedbackCorreto: "Excelente! Você excluiu o e-mail. Bancos nunca enviam e-mails com links para 'atualizar' dados. A atitude correta é sempre apagar a mensagem e, se tiver dúvidas, entrar em contato com o banco pelos canais oficiais.",
        feedbackErrado: "Cuidado! Você clicou em 'Atualizar Agora'. Isso te levaria para um site falso. Eles roubariam seus dados. Lembre-se, o banco não faz isso!",
        dica: "Sempre verifique o remetente do e-mail. O endereço 'bancovirtuall' tem um L a mais, um sinal claro de que é falso."
    },
    {
        titulo: "Golpe de Falso Suporte Técnico",
        conteudoHTML: `
        <div class="simulacao-pop-up">
            <h4>Alerta de Segurança!</h4>
            <p>Seu computador está em risco! O suporte técnico da 'empresa de tecnologia' está ligando para você. Não desligue a chamada!</p>
            <button class="simulacao-pop-up-button errado-btn" data-acao="errado">Permitir Acesso Remoto</button>
            <button class="simulacao-pop-up-button correto-btn" data-acao="correto">Desligar a Chamada</button>
        </div>`,
        feedbackCorreto: "Perfeito! Você desligou a chamada. Grandes empresas de tecnologia como Microsoft ou Google nunca ligam para os clientes para avisar de vírus. Essa é uma tática para que você dê a eles acesso ao seu computador.",
        feedbackErrado: "Cuidado! Você aceitou o acesso. Eles podem instalar programas maliciosos para roubar seus dados e sua senha. Lembre-se, nunca confie em ligações inesperadas de 'suporte técnico'.",
        dica: "Empresas de tecnologia sérias não entram em contato com você sem que você tenha solicitado ajuda."
    },
    {
        titulo: "Golpe de Falso Conhecido",
        conteudoHTML: `
        <div class="simulacao-mensagem-wpp">
            <p class="wpp-remetente">Desconhecido +55 (11) 9....</p>
            <p class="wpp-mensagem">Oie, sou sua neta! Mudei de número, me salve. Me passa o código de verificação do WhatsApp que chegou pra você?</p>
            <p class="wpp-mensagem errado-btn" data-acao="errado">Claro! O código é 123456.</p>
            <p class="wpp-mensagem correto-btn" data-acao="correto">Não vou passar. Vou te ligar no número antigo para confirmar.</p>
        </div>`,
        feedbackCorreto: "Isso mesmo! Você decidiu ligar para confirmar. Códigos de verificação nunca devem ser compartilhados. A pessoa era um golpista tentando roubar sua conta. Você se protegeu!",
        feedbackErrado: "Cuidado! Você enviou o código. Isso daria acesso total à sua conta do WhatsApp. O golpista poderia se passar por você e enganar seus amigos e família. Nunca compartilhe códigos de verificação!",
        dica: "A urgência é uma tática de golpe. Sempre verifique a identidade da pessoa por meio de uma ligação."
    }
];

// --- Variáveis de Estado e Memória ---
let cenariosAtuais;
let cenarioAtualIndex = 0;
let feedbackAtivo = false;
let acertos = 0;
let tipoAtual;

// Funções para salvar e carregar o progresso
function salvarProgresso() {
    const progressoSalvo = {
        tipo: tipoAtual,
        cenarioIndex: cenarioAtualIndex,
        acertos: acertos
    };
    localStorage.setItem('progressoTutorDigital', JSON.stringify(progressoSalvo));
}

function carregarProgresso() {
    const progressoSalvo = JSON.parse(localStorage.getItem('progressoTutorDigital'));
    if (progressoSalvo) {
        tipoAtual = progressoSalvo.tipo;
        cenarioAtualIndex = progressoSalvo.cenarioIndex;
        acertos = progressoSalvo.acertos;

        if (tipoAtual === 'guia' || tipoAtual === 'golpes') {
            cenariosAtuais = tipoAtual === 'guia' ? cenariosGuia : cenariosGolpes;
            mostrarTela(telas.cenariosTradicionais);
            carregarCenario(tipoAtual);
            carregarHeaderFooter(tipoAtual);
        } else if (tipoAtual === 'simulador') {
            cenariosAtuais = simuladorCenarios;
            mostrarTela(telas.simulador);
            carregarSimulador();
            carregarHeaderFooter(tipoAtual);
        }
    } else {
        mostrarTela(telas.boasVindas);
        carregarHeaderFooter('boasVindas');
    }
}

function carregarHeaderFooter(tipoTela) {
    const header = document.getElementById('app-header');
    const footer = document.getElementById('app-footer');
    const titulo = document.getElementById('header-titulo');

    footer.querySelectorAll('button').forEach(btn => btn.classList.add('oculto'));
    document.querySelectorAll('.acessibilidade-controls button').forEach(btn => btn.classList.add('oculto'));
    document.getElementById('help-btn').classList.add('oculto');
    document.getElementById('proximo-btn').classList.add('oculto');
    document.getElementById('proximo-simulador-btn').classList.add('oculto');
    document.getElementById('recomecar-btn').classList.add('oculto');
    document.getElementById('voltar-menu-btn').classList.add('oculto');

    if (tipoTela === 'boasVindas' || tipoTela === 'menuPrincipal') {
        header.classList.add('oculto');
        footer.classList.add('oculto');
    } else {
        header.classList.remove('oculto');
        footer.classList.remove('oculto');
        document.getElementById('voltar-menu-btn').classList.remove('oculto');
        document.getElementById('help-btn').classList.remove('oculto');

        if (tipoTela === 'guia') {
            titulo.textContent = "Guia de Uso";
            document.getElementById('proximo-btn').classList.remove('oculto');
        } else if (tipoTela === 'golpes') {
            titulo.textContent = "Proteção contra Golpes";
            document.getElementById('proximo-btn').classList.remove('oculto');
        } else if (tipoTela === 'simulador') {
            titulo.textContent = "Simulador de Golpes";
            document.getElementById('proximo-simulador-btn').classList.remove('oculto');
        } else if (tipoTela === 'final') {
            titulo.textContent = 'Parabéns!';
            document.getElementById('recomecar-btn').classList.remove('oculto');
            document.getElementById('voltar-menu-btn').classList.add('oculto');
            document.getElementById('help-btn').classList.add('oculto');
        }
    }
}

// --- Seleção de Elementos ---
const telas = {
    boasVindas: document.getElementById('boas-vindas'),
    menuPrincipal: document.getElementById('menu-principal'),
    cenariosTradicionais: document.getElementById('cenarios-tradicionais'),
    simulador: document.getElementById('simulador-golpes'),
    final: document.getElementById('tela-final')
};

const paineisCenario = {
    cenariosTradicionais: {
        descricao: document.querySelector('#cenarios-tradicionais .descricao-cenario'),
        opcoes: document.querySelectorAll('#cenarios-tradicionais .opcao-btn'),
        feedback: document.querySelector('#cenarios-tradicionais .feedback-cenario')
    },
};

const simulador = {
    titulo: document.querySelector('.titulo-simulador'),
    cenario: document.querySelector('.cenario-simulador'),
    feedback: document.querySelector('.feedback-simulador')
};

const progresso = {
    container: document.getElementById('progresso-container'),
    barra: document.getElementById('barra-interna'),
    texto: document.getElementById('progresso-texto'),
    acertosTexto: document.getElementById('acertos-texto')
};

// --- Funções Principais ---
function mostrarTela(tela) {
    for (const key in telas) {
        telas[key].classList.add('oculto');
        telas[key].classList.remove('animada');
    }
    tela.classList.remove('oculto');
    tela.classList.add('animada');
}

function carregarCenario(tipo) {
    feedbackAtivo = false;
    const cenario = cenariosAtuais[cenarioAtualIndex];
    
    paineisCenario.cenariosTradicionais.descricao.textContent = cenario.descricao;

    const letrasOpcoes = ['A', 'B', 'C'];
    paineisCenario.cenariosTradicionais.opcoes.forEach((btn, index) => {
        if (cenario.opcoes[index]) {
            btn.textContent = `${letrasOpcoes[index]}: ${cenario.opcoes[index]}`;
            btn.classList.remove('oculto');
            btn.disabled = false;
        } else {
            btn.classList.add('oculto');
        }
    });
    
    paineisCenario.cenariosTradicionais.feedback.textContent = '';
    paineisCenario.cenariosTradicionais.feedback.className = 'feedback-cenario';
    
    carregarHeaderFooter(tipo);
    document.getElementById('proximo-btn').classList.add('oculto');

    atualizarProgresso();
    salvarProgresso();
}

function verificarResposta(opcaoEscolhida, tipo) {
    if (feedbackAtivo) return;
    feedbackAtivo = true;
    
    const cenario = cenariosAtuais[cenarioAtualIndex];
    
    const opcaoCorreta = cenario.respostaCorreta;
    const acertou = opcaoEscolhida === opcaoCorreta;
    
    const mensagemFinal = acertou 
        ? `Perfeito! Você está de parabéns. A resposta está correta. ${cenario.feedback}` 
        : `Não se preocupe! A resposta correta é a ${opcaoCorreta}. ${cenario.feedback}`;
    
    const iconeHTML = acertou 
        ? '<i class="fas fa-check-circle"></i> ' 
        : '<i class="fas fa-times-circle"></i> ';

    paineisCenario.cenariosTradicionais.feedback.innerHTML = iconeHTML + mensagemFinal;
    
    const feedbackClass = acertou ? 'feedback-certo' : 'feedback-errado';
    paineisCenario.cenariosTradicionais.feedback.classList.add(feedbackClass);
    
    paineisCenario.cenariosTradicionais.opcoes.forEach(btn => {
        btn.disabled = true;
    });

    if(acertou) {
        acertos++;
        progresso.acertosTexto.textContent = `Acertos: ${acertos}`;
        progresso.acertosTexto.classList.remove('oculto');
    }
    
    document.getElementById('proximo-btn').classList.remove('oculto');
    document.getElementById('help-btn').classList.add('oculto');
}

function atualizarProgresso() {
    if (!cenariosAtuais || cenariosAtuais.length === 0) {
        progresso.container.classList.add('oculto');
        return;
    }
    const totalCenarios = cenariosAtuais.length;
    const progressoAtual = cenarioAtualIndex + 1;
    const porcentagem = (progressoAtual / totalCenarios) * 100;
    
    progresso.texto.textContent = `Progresso: ${progressoAtual}/${totalCenarios} Cenários`;
    progresso.barra.style.width = `${porcentagem}%`;
    progresso.container.classList.remove('oculto');
}

// --- Funções do Simulador ---
function carregarSimulador() {
    feedbackAtivo = false;
    const cenarioSimulador = simuladorCenarios[cenarioAtualIndex];
    
    simulador.titulo.textContent = cenarioSimulador.titulo;
    simulador.cenario.innerHTML = cenarioSimulador.conteudoHTML;
    simulador.feedback.textContent = '';
    simulador.feedback.className = 'feedback-simulador';
    
    carregarHeaderFooter(tipoAtual);
    document.getElementById('proximo-simulador-btn').classList.add('oculto');
    document.getElementById('help-btn').classList.remove('oculto');

    atualizarProgresso();
    salvarProgresso();
}

function verificarSimulador(acao) {
    if (feedbackAtivo) return;
    feedbackAtivo = true;

    const cenarioSimulador = simuladorCenarios[cenarioAtualIndex];
    let acertou = acao === 'correto';
    
    simulador.feedback.innerHTML = acertou
        ? `<i class="fas fa-check-circle"></i> ${cenarioSimulador.feedbackCorreto}`
        : `<i class="fas fa-times-circle"></i> ${cenarioSimulador.feedbackErrado}`;

    const feedbackClass = acertou ? 'feedback-certo' : 'feedback-errado';
    simulador.feedback.classList.add(feedbackClass);

    if(acertou) {
        acertos++;
        progresso.acertosTexto.textContent = `Acertos: ${acertos}`;
        progresso.acertosTexto.classList.remove('oculto');
    }

    document.getElementById('proximo-simulador-btn').classList.remove('oculto');
    document.getElementById('help-btn').classList.add('oculto');
}

// --- Funções de Acessibilidade ---
function ajustarTamanhoFonte(aumentar) {
    const body = document.body;
    let currentSize = parseFloat(getComputedStyle(body).fontSize);
    const minSize = 0.8;
    const maxSize = 1.5;
    const step = 0.1;

    if (aumentar) {
        currentSize = Math.min(currentSize + step, maxSize);
    } else {
        currentSize = Math.max(currentSize - step, minSize);
    }
    body.style.fontSize = `${currentSize}rem`;
}

function alternarContraste() {
    document.body.classList.toggle('alto-contraste');
}

function mostrarDica() {
    let dicaTexto = '';
    if (tipoAtual === 'guia' && cenariosGuia[cenarioAtualIndex].dica) {
        dicaTexto = cenariosGuia[cenarioAtualIndex].dica;
    } else if (tipoAtual === 'golpes' && cenariosGolpes[cenarioAtualIndex].dica) {
        dicaTexto = cenariosGolpes[cenarioAtualIndex].dica;
    } else if (tipoAtual === 'simulador' && simuladorCenarios[cenarioAtualIndex].dica) {
        dicaTexto = simuladorCenarios[cenarioAtualIndex].dica;
    }

    if (dicaTexto) {
        const feedbackElement = (tipoAtual === 'simulador') 
            ? simulador.feedback 
            : paineisCenario.cenariosTradicionais.feedback;
        
        feedbackElement.innerHTML = `<i class="fas fa-info-circle"></i> ${dicaTexto}`;
        feedbackElement.className = 'feedback-cenario feedback-dica';
    }
}

// --- Event Listeners ---
document.addEventListener('click', (event) => {
    // Delegação de eventos para botões de navegação e cenários
    const target = event.target.closest('button, .wpp-mensagem, a');
    if (!target) return;

    if (target.id === 'comecar-btn') {
        mostrarTela(telas.menuPrincipal);
        carregarHeaderFooter('menuPrincipal');
        localStorage.removeItem('progressoTutorDigital');
    } else if (target.id === 'guia-btn') {
        tipoAtual = 'guia';
        cenariosAtuais = cenariosGuia;
        cenarioAtualIndex = 0;
        acertos = 0;
        progresso.acertosTexto.classList.add('oculto');
        mostrarTela(telas.cenariosTradicionais);
        carregarCenario(tipoAtual);
    } else if (target.id === 'golpes-btn') {
        tipoAtual = 'golpes';
        cenariosAtuais = cenariosGolpes;
        cenarioAtualIndex = 0;
        acertos = 0;
        progresso.acertosTexto.classList.add('oculto');
        mostrarTela(telas.cenariosTradicionais);
        carregarCenario(tipoAtual);
    } else if (target.id === 'simulador-btn') {
        tipoAtual = 'simulador';
        cenariosAtuais = simuladorCenarios;
        cenarioAtualIndex = 0;
        acertos = 0;
        progresso.acertosTexto.classList.add('oculto');
        mostrarTela(telas.simulador);
        carregarSimulador();
    } else if (target.id === 'voltar-menu-btn') {
        mostrarTela(telas.menuPrincipal);
        carregarHeaderFooter('menuPrincipal');
        progresso.container.classList.add('oculto');
        localStorage.removeItem('progressoTutorDigital');
    } else if (target.id === 'proximo-btn') {
        cenarioAtualIndex++;
        if (cenarioAtualIndex < cenariosAtuais.length) {
            carregarCenario(tipoAtual);
        } else {
            const resumoFinal = document.getElementById('resumo-final');
            const mensagem = cenariosAtuais === cenariosGuia 
                ? `Parabéns! Você concluiu o guia de uso com ${acertos} acertos. Siga praticando para usar o celular com confiança!`
                : `Excelente! Você concluiu a lição sobre golpes com ${acertos} acertos. Lembre-se sempre de desconfiar de mensagens suspeitas.`;
            
            resumoFinal.textContent = mensagem;
            mostrarTela(telas.final);
            carregarHeaderFooter('final');
            progresso.container.classList.add('oculto');
            localStorage.removeItem('progressoTutorDigital');
        }
    } else if (target.id === 'proximo-simulador-btn') {
        cenarioAtualIndex++;
        if (cenarioAtualIndex < simuladorCenarios.length) {
            carregarSimulador();
        } else {
            const resumoFinal = document.getElementById('resumo-final');
            const mensagem = `Parabéns! Você concluiu o simulador com ${acertos} acertos. O treinamento prático é a melhor forma de se proteger.`;
            
            resumoFinal.textContent = mensagem;
            mostrarTela(telas.final);
            carregarHeaderFooter('final');
            progresso.container.classList.add('oculto');
            localStorage.removeItem('progressoTutorDigital');
        }
    } else if (target.id === 'recomecar-btn') {
        mostrarTela(telas.boasVindas);
        carregarHeaderFooter('boasVindas');
    } else if (target.classList.contains('opcao-btn')) {
        const opcao = target.dataset.opcao;
        verificarResposta(opcao, tipoAtual);
    } else if (target.dataset.acao) {
        verificarSimulador(target.dataset.acao);
    } else if (target.id === 'font-aumentar') {
        ajustarTamanhoFonte(true);
    } else if (target.id === 'font-diminuir') {
        ajustarTamanhoFonte(false);
    } else if (target.id === 'toggle-contraste') {
        alternarContraste();
    } else if (target.id === 'help-btn') {
        mostrarDica();
    }
});


// Inicializa a aplicação
document.addEventListener('DOMContentLoaded', carregarProgresso);