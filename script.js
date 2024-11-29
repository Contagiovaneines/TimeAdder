function calculateTime() {
    // Obter valores dos inputs
    const currentTime = document.getElementById('currentTime').value;
    const minutesToAdd = parseInt(document.getElementById('minutesToAdd').value);

    if (!currentTime || isNaN(minutesToAdd)) {
        alert('Por favor, insira valores válidos!');
        return;
    }

    // Converter a hora atual para um objeto Date
    const [hours, minutes] = currentTime.split(':').map(Number);
    const date = new Date();
    date.setHours(hours, minutes, 0);

    // Adicionar os minutos
    date.setMinutes(date.getMinutes() + minutesToAdd);

    // Obter o novo horário formatado
    const resultHours = String(date.getHours()).padStart(2, '0');
    const resultMinutes = String(date.getMinutes()).padStart(2, '0');

    // Mostrar o resultado
    document.getElementById('result').textContent = 
        `O horário será: ${resultHours}:${resultMinutes}`;
}
