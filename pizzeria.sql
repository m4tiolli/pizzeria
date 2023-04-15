drop database if exists pizzeria;

create database pizzeria;

use pizzeria;


CREATE TABLE produto(
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
nome VARCHAR(255),
valor INT
);

CREATE TABLE pedido(
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
valorTotal INT NOT NULL
);

CREATE TABLE ProdutosPedido(
    produto INT NOT NULL,
    pedido INT NOT NULL,
    quantidade INT NOT NULL,
    valor INT NOT NULL,
    FOREIGN KEY (produto)
        REFERENCES produto (id),
    FOREIGN KEY (pedido)
        REFERENCES pedido (id)
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

create table produtoCad(
    id int primary key not null auto_increment,
    nome varchar(30),
    descricao longtext,
    preco decimal(8, 2),
    imagem varchar(255),
    tipo varchar(32)    
);

insert into produtoCad values(default, 'calabresinha', 'calabresa e queijo', 45.00, 
'https://e7.pngegg.com/pngimages/935/770/png-clipart-pizza-pizza.png', 'pizza salgada');
insert into produtoCad values(default, 'portuguesa', 'calabresa e queijo', 45.00, 
'https://w7.pngwing.com/pngs/56/985/png-transparent-pizza-margherita-sushi-pizza-pizza-delivery-pizza-thumbnail.png', 'pizza salgada');
insert into produtoCad values(default, '4 queijos', 'calabresa e queijo', 45.00, 
'https://www.designi.com.br/images/preview/10000490.jpg', 'pizza salgada');
insert into produtoCad values(default, 'frango', 'calabresa e queijo', 45.00, 
'https://www.designi.com.br/images/preview/10005763.jpg', 'pizza salgada');


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

create table infopedido(
    id int primary key not null auto_increment,
    idproduto int,
    nomeproduto varchar(30),
    quantidade int,
    idpedido int,
    foreign key (idproduto) references produto(id),
    foreign key (idpedido) references pedido(id)
);

INSERT INTO produto values(default, 'Coca', 10);
INSERT INTO produto values(default, 'Pizza', 40);

INSERT INTO pedido values (default, 50);
INSERT INTO pedido values (default, 100);
-- INSERT INTO pedido values (default, 40);
-- INSERT INTO pedido values (default, 80 );
-- INSERT INTO pedido values (default, 10); 

INSERT INTO ProdutosPedido values (1, 1, 5, 50);
INSERT INTO ProdutosPedido values (2, 2, 1, 40); 
-- INSERT INTO ProdutosPedido values (1, 3, 10, 100);
-- INSERT INTO ProdutosPedido values (2, 4, 2, 80);
-- INSERT INTO ProdutosPedido values (1, 5, 1, 10); 

SELECT PP.Pedido, PP.Produto, PROD.Nome, PP.Quantidade FROM ProdutosPedido PP
INNER JOIN Produto PROD
ON PP.Produto = PROD.ID
INNER JOIN Pedido PED
ON PP.Pedido = PED.ID;
