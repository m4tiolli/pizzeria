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
    cpf varchar(15),
    datanasc date,
    telefone varchar(20),
    email varchar(32),
    senha varchar(32),
    tipo varchar(32)
);
create table carrinho(
    id int primary key not null auto_increment,
    nome varchar(30),
    preco decimal(8, 2)
);
create table mesa(
    id int primary key not null auto_increment,
    numero int
);
create table enderecos (
    idendereco int primary key not null auto_increment,
    idusuario int,
    uf varchar(2),
    cidade varchar(30),
    bairro varchar(30),
    rua varchar(30),
    numcasa varchar(10),
    cep varchar(15),
    foreign key (idusuario) references usuario(id)
);
drop table if exists cartoes;create table cartoes (
    id int primary key not null auto_increment,
    id_usuario int,
    nome varchar(100),
    numero varchar(25),
    cvc varchar(3),
    datavalidade varchar(10),
	tipo varchar(32),
    foreign key (id_usuario) references usuario(id)	
);
create table infopedido(
    id int primary key not null auto_increment,
    idproduto int,
    nomeproduto varchar(30),
    quantidade int,
    idpedido int,
    foreign key (idproduto) references produto(id),
    foreign key (idpedido) references pedido(id)
);

alter table pizzeria.pedido add column tipo varchar(200);
alter table pizzeria.pedido add column enderecoId int;
