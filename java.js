//barra de inicio
let header = document.getElementById('header')

window.addEventListener('scroll', () => {
    if(window.scrollY >= 200) {
        header.style.background='#191919'
    } else{
        header.style.background= 'transparent'
        
    }

})

  //contato
  document.addEventListener("DOMContentLoaded", function() {
    var emailLink = document.getElementById("https://accounts.google.com/SignOutOptions?hl=pt-BR&continue=https://mail.google.com&service=mail&ec=GBRAFw");

    // Adicione um evento de clique ao link de e-mail
    emailLink.addEventListener("click", function(event) {
      // Impede o comportamento padrão do link (abrir a página)
      event.preventDefault();

      // Exibe um alerta (você pode substituir isso com a lógica desejada)
      alert("Clique no link de e-mail detectado! Aqui você pode adicionar lógica adicional.");
    });
  });
