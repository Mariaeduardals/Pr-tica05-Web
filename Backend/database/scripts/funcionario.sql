CREATE SEQUENCE IF NOT EXISTS funcionario_seq
INCREMENT 1
START WITH 0
NO MAXVALUE
MINVALUE 0
CACHE 1
OWNED BY NONE;

CREATE TABLE IF NOT EXISTS "Funcionario"(
	idRegistro integer not null default nextval('funcionario_seq'),
	nome varchar(50) default '',
	cargo varchar(50) default '',
	dataN date,
	dataEntrada date,
	constraint pk_funcionario primary key (idRegistro)
);

alter sequence if exists funcionario_seq
owned by "Funcionario".idRegistro;

select * from "Funcionario";

INSERT INTO "Funcionario" (nomeF, cargo, dataN, dataEntrada) 
VALUES ('Luiza','Advogada','1997/12/29','2021/09/01')

INSERT INTO "Funcionario" (nomeF, cargo, dataN, dataEntrada) 
VALUES ('Paulo','Marceneiro','1999/12/21','2020/06/02')

INSERT INTO "Funcionario" (nomeF, cargo, dataN, dataEntrada) 
VALUES ('Almada','Professor','1987/12/214','2020/02/12')
