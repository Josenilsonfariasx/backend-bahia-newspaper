# Projeto -> Backend-bahia-newspaper

Backend do Jornal da Bahia é uma solução abrangente e poderosa para a gestão de conteúdo jornalístico, capacitando o jornalismo local a prosperar em um mundo cada vez mais digital e conectado.

## Descrição do Projeto

O Backend do Jornal da Bahia é uma plataforma essencial para a gestão eficiente de conteúdo e informações relacionadas ao jornalismo local. Desenvolvido para atender às demandas dinâmicas e diversificadas do setor de mídia, este sistema oferece uma variedade de recursos e funcionalidades projetados para simplificar e otimizar o processo de publicação de notícias e artigos.

Em um contexto onde a informação é fundamental, o Backend do Jornal da Bahia desempenha um papel crucial na disseminação de notícias locais e na conexão com a comunidade baiana. Esta plataforma oferece uma solução robusta e confiável para a gestão de conteúdo, permitindo que os profissionais de mídia publiquem, editem e organizem rapidamente artigos, entrevistas, reportagens e outros tipos de conteúdo jornalístico.

Com recursos avançados de gerenciamento de usuários, permissões de acesso e fluxo de trabalho editorial, o Backend do Jornal da Bahia garante uma colaboração eficiente entre os membros da equipe, proporcionando uma experiência intuitiva e fluida para os editores e jornalistas. Além disso, a plataforma oferece ferramentas de análise e métricas para monitorar o desempenho do conteúdo e entender melhor o engajamento dos leitores.

### Documentação

- **Documentação Completa**: O projeto inclui documentação detalhada das rotas e serviços disponíveis, facilitando a integração com outras aplicações e voce pode encontrar na url de base + api-docs/.

  ---------------------------------------------------------------------------------------------------------------------------

## Vantagens do Uso da AWS S3
  - **Durabilidade dos Dados**: O Amazon S3 oferece uma durabilidade excepcional dos dados, garantindo que seus arquivos sejam armazenados com segurança e proteção contra falhas.

  - **Disponibilidade Global**: Com data centers distribuídos globalmente, o Amazon S3 garante alta disponibilidade e baixa latência, permitindo acesso rápido aos seus dados em qualquer lugar do mundo.

  - **Escalabilidade Automática**: O Amazon S3 é altamente escalável e pode lidar com cargas de trabalho variáveis ​​sem a necessidade de intervenção manual, garantindo que seus aplicativos possam crescer conforme necessário.

  - **Segurança Avançada**: O Amazon S3 oferece uma variedade de recursos de segurança avançados, incluindo criptografia de dados em repouso e em trânsito, controle de acesso granular e monitoramento de atividades suspeitas.

  - **Integração com Serviços AWS**: O Amazon S3 se integra perfeitamente com outros serviços AWS, como AWS Lambda, Amazon CloudWatch e Amazon Athena, permitindo a construção de aplicativos altamente eficientes e escaláveis.

  - **Economia de Custos**: Com opções flexíveis de armazenamento e preços baseados no uso, o Amazon S3 oferece uma maneira econômica de armazenar grandes volumes de dados sem comprometer a qualidade ou a segurança.

  - **Facilidade de Gerenciamento**: O Amazon S3 fornece uma interface intuitiva e fácil de usar para gerenciar seus objetos de armazenamento, simplificando tarefas como upload, download e organização de arquivos.

  - **Backup Automático**: O Amazon S3 oferece recursos de backup automático e versões de objetos, garantindo que seus dados estejam protegidos contra perda acidental ou exclusão.

## Vantagens do Uso do Redis

  - **Alta Velocidade**: O Redis é extremamente rápido, proporcionando respostas rápidas para operações em tempo real.

  - **Estrutura de Dados Flexível**: Oferece uma variedade de estruturas de dados para atender a uma ampla gama de casos de uso.

  - **Persistência e Escalabilidade**: Opções de persistência de dados e suporte à escalabilidade horizontal para lidar com volumes crescentes de dados.

##### No contexto do projeto "Driver Management Platform", a integração com o Redis e a AWS oferece uma camada adicional de segurança, monitoramento e escalabilidade. Isso permite que os administradores acompanhem e gerenciem a atividade do sistema de forma mais eficaz, garantindo a integridade dos dados e respondendo rapidamente a eventos críticos. 
##### Além disso, o Redis e a AWS são reconhecidos por sua confiabilidade e desempenho, tornando-os escolhas inteligentes para qualquer aplicativo que requer armazenamento de dados rápido, persistente e escalável, juntamente com monitoramento em tempo real e notificações instantâneas.

##### Esta solução é um recurso valioso para o Jornal da Bahia, facilitando a gestão eficiente e segura de conteúdo jornalístico. Com funcionalidades abrangentes, o Backend do Jornal da Bahia simplifica o processo de publicação, pesquisa e atualização de notícias, contribuindo para uma produção editorial mais eficaz e um melhor controle sobre o fluxo de informações.

# Projeto Node.Js com Express

## Requisitos

- ![Badge Express](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)
- ![Badge Redis](https://img.shields.io/badge/redis-%23DD0031.svg?&style=for-the-badge&logo=redis&logoColor=white)
- ![Badge Aws](https://img.shields.io/badge/Amazon_AWS-232F3E?style=for-the-badge&logo=amazon-aws&logoColor=white)
- ![Badge Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white)
- ![Badge PostgreSql](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white) 

## Configuração


1. Clone o repositório:

  ```
     git clone https://github.com/Josenilsonfariasx/backend-bahia-newspaper.git
  ```
  ```
     cd backend-bahia-newspaper
   ```

2. Instale as dependencias:

```bash
    yarn
```
ou

```bash
  npm i
```

4. Mude o nome da `.env.example` para `.env` e configure as variáveis de ambiente:

5. Configure o o redis e aws com suas configurações e coloque a url do seu BDD:


## Banco de Dados

6. Execute as migrações:

```bash
    npx prisma migrate dev
```

7. Rode o sistema com:

```bash
   npm run dev
```
ou

```bash
  yarn dev
```

## Executando

8. Acesse em
```bash
   http://localhost:3000
```
## Contato

- [GMAIL](fariaslwork@gmail.com)
- [LINKEDIN](https://www.linkedin.com/in/josenilsonfarias)

## Referências

- [Documentação do Laravel](https://expressjs.com/pt-br/)
- [AWS S3](https://docs.aws.amazon.com/s3/?icmpid=docs_homepage_featuredsvcs)
- [Redis](https://redis.io/docs/)


-----------------------------------------------------------------------------------------------------------

## :Autor
  <table>
    <tr>
      <td align="center">
        <a href="http://github.com/Josenilsonfariasx">
          <img src="https://i.imgur.com/SgdMMR7.png" width="100px;" alt="Foto de Tati Alves no GitHub"/><br>
          <sub>
            <b>Josenilson Farias</b>
          </sub>
        </a>
      </td>
    </tr>
  </table>

## :dart: Backend-bahia-newspaper
