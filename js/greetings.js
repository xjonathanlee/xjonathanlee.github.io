const greetings = ["Gutentag! I am Jon.","Hello! I am Jon.","Komdu blessað(ur)! I am Jon.","Howdy! I am Jon.","こんいちわ! I am Jon.","Salut! I am Jon.","Hei! I am Jon.","Hjei! I am Jon.","Hola! I am Jon.","Tudo Bem! I am Jon."," Benvingudes! I am Jon.","Bon Dia! I am Jon.","Hej! I am Jon.","哈囉! I am Jon."];

const randomIndex = Math.floor(Math.random()*greetings.length);
document.getElementById("greet").innerText=greetings[randomIndex];