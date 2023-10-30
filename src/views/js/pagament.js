const paymentOptions = document.querySelectorAll('.payment-option');
const paymentContents = document.querySelectorAll('.payment-content > div');

paymentOptions.forEach(option => {
    option.addEventListener('click', () => {
        // Oculta todos os conteúdos
        paymentContents.forEach(content => {
            content.classList.add('hidden');
        });

        // Exibe o conteúdo relacionado à opção selecionada
        const selectedOptionId = option.id + '-content';
        const selectedContent = document.getElementById(selectedOptionId);
        selectedContent.classList.remove('hidden');
    });
});
