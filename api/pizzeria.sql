drop database if exists pizzeria;
create database pizzeria;
use pizzeria;

create table produto(
	id int not null auto_increment primary key,
	nome varchar(30),
	descricao longtext,
	valor decimal(8,2),
	imagem longtext,
	tipo varchar(30)    
);

insert into produto values(default, 'calabresinha', 'calabresa e queijo', 45.00, 
null, 'pizza salgada');

create table pedido(
	id int not null auto_increment primary key,
	valorTotal decimal(8,2) not null,
    situacao varchar(50)
);

create table ProdutosPedido(
    produto int not null,
    pedido int not null,
    quantidade int not null,
    valor decimal(8,2) not null,
	observacao varchar(255),
    foreign key (produto)
        references produto (id),
    foreign key (pedido)
        references pedido (id)
);

create table usuario(
    id int primary key not null auto_increment,
    nome varchar(100),
    cpf varchar(13),
    datanasc date,
    telefone varchar(20),
    email varchar(32),
    senha varchar(32),
    tipo varchar(32)
);

insert into usuario values(default, 'juju', '11111199987', '2006-03-20', '11 999999999', 'juju@gmail.com', '12345678', 'adm');

create table carrinho(
    id int primary key not null auto_increment,
    nome varchar(30),
    preco decimal(8, 2)
);

create table mesa(
    id int primary key not null auto_increment,
    numero int
);

insert into mesa values(default, 12);

create table enderecos (
    id int primary key not null auto_increment,
    idusuario int,
    uf varchar(2),
    cidade varchar(30),
    bairro varchar(30),
    rua varchar(30),
    numcasa varchar(10),
    cep varchar(8),
    foreign key (idusuario) references usuario(id)
);

insert into enderecos values (default, 1, 'sp', 'santana', 'fazendinha', 'teodoro', '1', '0000000');

insert into enderecos values (default, 1, 'sp', 'sim', 'fazendinha', 'teodoro', '1', '0000000');

create table cartoes (
    id int primary key not null auto_increment,
    id_usuario int,
    nome varchar(100),
    numero varchar(16),
    cvc varchar(3),
    datavalidade date,
	tipo varchar(32),
    foreign key (id_usuario) references usuario(id)
);
insert into cartoes values (default, 1, 'juju', '12323131435', '123', '2022-04-20', 'credito');
create table infopedido(
    id int primary key not null auto_increment,
    idproduto int,
    nomeproduto varchar(30),
    quantidade int,
    idpedido int,
    foreign key (idproduto) references produto(id),
    foreign key (idpedido) references pedido(id)
);

insert into pedido values (default, 50, 'aberto');
-- insert into pedido values (default, 100, 'encerrado');
-- INSERT INTO pedido values (default, 40);
-- INSERT INTO pedido values (default, 80 );
-- INSERT INTO pedido values (default, 10); 

insert into ProdutosPedido values (1, 1, 5, 50, 'sem queijo, sem queijo');
-- insert into ProdutosPedido values (2, 2, 1, 40, null); 
-- INSERT INTO ProdutosPedido values (1, 3, 10, 100);
-- INSERT INTO ProdutosPedido values (2, 4, 2, 80);
-- INSERT INTO ProdutosPedido values (1, 5, 1, 10); 

SELECT PP.pedido, PP.produto, PROD.nome, PP.quantidade, PP.observacao, PED.situacao
FROM ProdutosPedido PP
INNER JOIN produto PROD ON PP.produto = PROD.id
INNER JOIN pedido PED ON PP.pedido = PED.id
WHERE PED.situacao = 'aberto';