# rentx-api
API para alugel de carros.


# Cadastro de carro

**Requisitos Funcionais** <br>
Deve ser possível cadastrar um carro. <br>

**Requisitos não Funcionais**

**Regras de negócio** <br>
Não deve ser possível cadastrar um carro com uma placa já existente. <br>
O carro deve ser cadastro, por padrão, com disponibilidade. <br>
* O usuário responsável pelo cadastro de ser um usuário administrador.


# Listagem de carros
**Requisitos Funcionais** <br>
Deve ser possível listar todos os carros disponíveis. <br>
Deve ser possível listar todos os carros disponíveis pelo nome da categoria. <br>
Deve ser possível listar todos os carros disponíveis pelo nome da marca. <br>
Deve ser possível listar todos os carros disponíveis pelo nome do carro. <br>

**Regras de negócio**
O usuário não precisa estar logado no sistema para listar os carros.


# Cadastro de especificação no carro

**Requisitos Funcionais** <br>
Deve ser possível cadastrar uma especificação para um carro. <br>

**Regras de negócio** <br>
Não deve ser possível cadastrar uma especificação para um carro não cadastrado. <br>
Não deve ser possível cadastrar uma especificação já existente para o mesmo carro. <br>
O usuário responsável pelo cadastro de ser um usuário administrador. <br>


# Cadastro de imagem do carro

**Requisitos Funcionais** <br>
Deve ser possível cadastrar a imagem do carro. <br>

**Requisitos não funcionais** <br>
Deve ser utilizado o multer para upload de arquivos.

**Regras de negócio** <br>
O usuário deve poder cadastrar mais de uma imagem para o mesmo carro. <br>
O usuário responsável pelo cadastro de ser um usuário administrador. <br>


# Alugel de carro

**Requisitos Funcionais** <br>
Deve ser possível cadastrar um alugel de carro. <br>

**Regras de negócio** <br>
O alugel deve ter duração mínima de 24 horas. <br>
Não de deve ser possível caso já exista um aberto para o mesmo usuário. <br>
Não de deve ser possível caso já exista um aberto para o mesmo carro. <br>
Ao realizar um alugel, a situação do carro deve ser alterada para indisponível. <br>
O usuário deve estar logado na aplicação. <br>

# Cadastro de usuário

**Requisitos Funcionais** <br>
Deve ser possível cadastrar um usuário. <br>

**Regras de negócio** <br>
Não de deve ser possível cadastrar caso já exista um usuário com email já existente. <br>

# Devolução de carro

**Requisitos Funcionais** <br>
Deve ser possível fazer a devolução do carro. <br>

**Regras de negócio** <br>
Se o carro for devolvido com menos de 24h, deverá ser cobrado diária completa. <br>
Ao realizar a devolução, o carro deverá ser liberado para outro aluguel. <br>
Ao realizar a devolução, o usuário deverá ser liberado para outro aluguel. <br>
Ao realizar a devolução, deverá ser calculado o total do aluguel. <br>
Caso o horário de devolução seja superior ao horário previsto de entrega, deverá ser cobrado multa proporcional aos dias de atraso. <br>
Caso haja multa, deverá ser somado ao total do alugel. <br>
O usuário deve estar logado na aplicação. <br>

# Listagem de Aluguéis para usuário

**Requisitos Funcionais** <br>
Deve ser possível realizar a busca de todos os aluguéis para o usuário

**Regras de negócio** <br>
O usuário deve estar logado na aplicação

# Recuperar Senha

**Requisitos Funcionais** <br>
Deve ser possível o usuário recuperar a senha informando o e-mail <br>
O usuário deve receber um e-mail com o passo a passo para a recuperação de senha <br>
O usuário deve conseguir inserir uma nova senha 

**Regras de negócio** <br>
O usuário precisa informar uma nova senha
O link enviado para a recuperação deve expirar em 3 horas