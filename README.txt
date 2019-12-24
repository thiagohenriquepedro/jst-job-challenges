Dashboard
DESENVOLVIDO POR : Thiago Henrique Pedro.

Dashboard feito em Angular, com intuito de gerenciar contas de usuarios.

Product Log feito -> Layout Dashboard responsivo; Lista de usuaarios e Gráfico de comentários(quantidade de comentários os usuarios fizeram) de usuários.

api
->Foi utilizada o https://jsonplaceholder.typicode.com/ que é uma API REST on-line falsa para testes e prototipagem. EndPoints:https://jsonplaceholder.typicode.com/posts ,http://jsonplaceholder.typicode.com/users .

Chart.js
Através do Chart.js podemos criar Gráficos JavaScript simples e flexíveis para designers e desenvolvedores, facilitando o o desenvolvimento do gráfico. https://www.chartjs.org/

Requisições feitas
-> Foram criados 2 service para organizar o projeto melhor: -ChartService: Obtém os dados da api para ser utilizado no gráfico. Feito da seguinte forma: GetDataChart() { return this.http.get(${this.url}); } -UserService: Obtém os dados da api para ser utilizado na lista de usuarios. Feito da seguinte forma: GetUser(): Observable { //metodo get para buscar os dados return this.http.get<any[]>(${this.url}); }

Intalação
-> execulta um npm install no projeto para baixar as dependencias.
-> e para executar o projeto utilize ng serve.
