document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('signup');

    form.addEventListener('submit', async (e) => {
      e.preventDefault(); 
    
      const formData = new FormData(form);
    
      // Cria um objeto com os dados de login
      const signupData = {
        username: formData.get('username'),
        email: formData.get('email'),
        password: formData.get('password'),
      };
    
      try {
        const response = await fetch('http://localhost:3000/api/auth/signup', {
          method: 'POST',
          body: JSON.stringify(signupData), // Envie os dados como JSON
          headers: {
            'Content-Type': 'application/json', 
          },
        });
    
        if (!response.ok ) {
          throw new Error('Erro na resposta do servidor');
        } else{
          window.location.href = "./sign.html";
        }
    
      } catch (error) {
        console.error('Erro ao enviar o formulário:', error);
      }

      
    });
  });
  