document.addEventListener("DOMContentLoaded", function() {
  // Função para formatar data no formato "12 de Novembro"
  function formatDate(date) {
    const options = { day: '2-digit', month: 'long' };
    return new Intl.DateTimeFormat('pt-PT', options).format(date);
  }

  // Função para formatar hora no formato "16:00"
  function formatTime(date) {
    const options = { hour: '2-digit', minute: '2-digit' };
    return new Intl.DateTimeFormat('pt-PT', options).format(date);
  }

  // Função para atualizar a data e hora
  function updateDateTime() {
    const now = new Date();

    // Atualiza a data
    const dateElement = document.getElementById("date");
    dateElement.textContent = formatDate(now);

    // Atualiza a hora
    const hourElement = document.getElementById("hour");
    hourElement.textContent = formatTime(now);
  }

  // Atualiza a data e hora imediatamente
  updateDateTime();

  // Atualiza a data e hora a cada segundo
  setInterval(updateDateTime, 1000);
})
