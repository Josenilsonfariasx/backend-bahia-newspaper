import { generateCode } from "./code";

export const html = (code) => {
  return `<!DOCTYPE html>
  <html lang="en">
  
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Recuperação de Senha - CodeGenius</title>
      <style>
          /* Estilos para tornar o email mais bonito e responsivo */
          body {
              font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
              background-color: #f9f9f9;
              padding: 20px;
          }
  
          .container {
              max-width: 600px;
              margin: 0 auto;
              background-color: #ffffff;
              border-radius: 10px;
              padding: 40px 20px;
              box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
              text-align: center; /* Centralizando todo o conteúdo */
          }
  
          h1 {
              color: #333333;
              margin-bottom: 20px; /* Espaçamento entre o título e o parágrafo */
          }
  
          p {
              color: #666666;
              margin-bottom: 20px;
          }
  
          .code {
              background-color: #007bff;
              color: #ffffff;
              font-size: 28px;
              padding: 15px 20px;
              border-radius: 8px;
              margin: 30px auto;
              display: inline-block;
          }
  
          .note {
              color: #999999;
              margin-top: 20px;
              margin-bottom: 30px; /* Espaçamento inferior para a nota */
          }
  
          .footer {
              color: #777777;
          }
  
          .footer p {
              margin-top: 20px; /* Espaçamento superior para o rodapé */
          }
  
          .footer a {
              color: #007bff;
              text-decoration: none;
              font-weight: bold;
          }
      </style>
  </head>
  
  <body>
      <div class="container">
          <h1>Recuperação de Senha</h1>
          <p>Olá,</p>
          <p>Parece que você esqueceu sua senha. Não se preocupe! Aqui está um código exclusivo para você:</p>
          <div class="code">${code}</div>
          <p class="note">Este código é válido por 5 minutos.</p>
      </div>
      <div class="footer">
          <p>Atenciosamente,<br>Equipe Jornal da Bahia</p>
          <p>Não solicitou isso? Ignore este email e nao compartilhe este codigo com outra pessoa</p>
      </div>
  </body>
  
  </html>
  `;
};