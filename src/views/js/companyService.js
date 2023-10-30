document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('companyForm');

    form.addEventListener('submit', async (e) => {
      e.preventDefault(); 
    
      const formData = new FormData(form);
    
      // Cria um objeto com os dados de login
      const companyData = {
        cnpj: formData.get('cnpj'),
        nomeEmpresa: formData.get('nomeEmpresa'),
        email: formData.get('email'),
        telefone: formData.get('telefone'),
        endereço: formData.get('endereço'),
      };
    
      try {
        const response = await fetch('http://localhost:3000/api/company', {
          method: 'POST',
          body: JSON.stringify(companyData), // Envie os dados como JSON
          headers: {
            'Content-Type': 'application/json', 
          },
        });
    
        if (!response.ok ) {
          throw new Error('Erro na resposta do servidor');
        }
    
      } catch (error) {
        console.error('Erro ao enviar o formulário:', error);
      }

      
    });
  });
  
  