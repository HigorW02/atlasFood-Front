document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('loginForm');

    form.addEventListener('submit', async (e) => {
      e.preventDefault(); 
    
      const formData = new FormData(form);
    
      // Cria um objeto com os dados de login
      const loginData = {
        username: formData.get('username'),
        password: formData.get('password'),
      };
    
      try {
        const response = await fetch('http://localhost:3000/api/auth/signin', {
          method: 'POST',
          body: JSON.stringify(loginData), // Envie os dados como JSON
          headers: {
            'Content-Type': 'application/json', 
          },
        });
    
        if (!response.ok ) {
          throw new Error('Erro na resposta do servidor');
        } else{
          const username = data 
          window.location.href = "../../index.html";
        }
    
      } catch (error) {
        console.error('Erro ao enviar o formulário:', error);
      }

      
    });
  });
  