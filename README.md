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
Deve ser possível listar todas as especificações. <br>
Deve ser possível listar todos os carros. <br>

**Regras de negócio** <br>
Não deve ser possível cadastrar uma especificação para um carro não cadastrado. <br>
Não deve ser possível cadastrar uma especificação já existente para o mesmo carro. <br>
O usuário responsável pelo cadastro de ser um usuário administrador. <br>


# Cadastro de imagem do carro

**Requisitos Funcionais** <br>
Deve ser possível cadastrar a imagem do carro. <br>
Deve ser possível listar todos os carros. <br>

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

# Cadastro de usuário

**Requisitos Funcionais** <br>
Deve ser possível cadastrar um usuário. <br>

**Regras de negócio** <br>
Não de deve ser possível cadastrar caso já exista um usuário com email já existente. <br>
