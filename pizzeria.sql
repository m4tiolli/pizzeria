drop database if exists pizzeria;

create database pizzeria;

use pizzeria;

create table usuario(
    id int primary key not null auto_increment,
    nome varchar(100),
    cpf varchar(13),
    datanasc date,
    telefone varchar(20),
    numtelefone varchar(20),
    email varchar(32),
    senha varchar(32),
    tipo enum('adm', 'cozinha', 'balcao', 'cliente')
);

create table produto(
    id int primary key not null auto_increment,
    nome varchar(30),
    descricao longtext,
    preco decimal(8, 2),
    imagem varchar(255),
    tipo enum(
        'pizza salgada',
        'pizza doce',
        'bebida',
        'aperitivo'
    )
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

create table cartoes (
    id int primary key not null auto_increment,
    id_usuario int,
    numero varchar(16),
    cvc varchar(3),
    datavalidade date,
    foreign key (id_usuario) references usuario(id)
);

create table pedido(
    id int primary key not null auto_increment,
    valor decimal(8,2)
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
