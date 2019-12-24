Dashboard
DESENVOLVIDO POR : Thiago Henrique Pedro.

Dashboard feito em Angular CLI version 8.3.12, com intuito de gerenciar contas de usuários.

Product Log feito -> Layout Dashboard responsivo; Lista  usuários e Gráfico de comentários (Quantidade de comentários que os usuários fizeram) dos usuários.

API
-> Foi utilizada o https://jsonplaceholder.typicode.com/ que é uma API REST on-line falsa para testes e prototipagem. EndPoints:https://jsonplaceholder.typicode.com/posts ,http://jsonplaceholder.typicode.com/users .

Chart.js
-> Através do Chart.js podemos criar Gráficos JavaScript simples e flexíveis para designers e desenvolvedores, facilitando o desenvolvimento do gráfico. https://www.chartjs.org/

Requisições feitas
-> Foram criados 2 TS no service para organizar o projeto melhor: -ChartService: Obtém os dados da API para ser utilizado no gráfico. Feito da seguinte forma: GetDataChart() { return this.http.get(${this.url}); } -UserService: Obtém os dados da API para ser utilizado na lista de usuários. Feito da seguinte forma: GetUser(): Observable { //metodo get para buscar os dados return this.http.get<any[]>(${this.url}); }

Intalação
-> executar o npm install no projeto para baixar as Dependências.
-> e para executar o projeto utilize ng serve.
