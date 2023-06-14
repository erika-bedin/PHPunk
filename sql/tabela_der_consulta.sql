-- Criação das tabelas
CREATE TABLE Usuario (
    id_usuario INTEGER PRIMARY KEY,
    nome TEXT,
    sobrenome TEXT,
    email TEXT,
    telefone TEXT,
    sugestoes TEXT,
    frequencia_atualizacoes TEXT
);

CREATE TABLE Interesse (
    id_interesse INTEGER PRIMARY KEY,
    nome_interesse TEXT
);

CREATE TABLE Cadastro (
    id_cadastro INTEGER PRIMARY KEY,
    id_usuario INTEGER,
    id_interesse INTEGER,
    FOREIGN KEY (id_usuario) REFERENCES Usuario(id_usuario),
    FOREIGN KEY (id_interesse) REFERENCES Interesse(id_interesse)
);

CREATE TABLE PoliticaPrivacidade (
    id_politica_privacidade INTEGER PRIMARY KEY,
    descricao_politica_privacidade TEXT
);

-- Inserção de dados
INSERT INTO Usuario (id_usuario, nome, sobrenome, email, telefone, sugestoes, frequencia_atualizacoes) VALUES
    (1, 'João', 'Silva', 'joao@example.com', '1234567890', NULL, 'semanal'),
    (2, 'Maria', 'Souza', 'maria@example.com', '9876543210', NULL, 'mensal');

INSERT INTO Interesse (id_interesse, nome_interesse) VALUES
    (1, 'Metal'),
    (2, 'Clássico'),
    (3, 'Pop Rock'),
    (4, 'Punk Rock'),
    (5, 'Alternativo'),
    (6, 'Indie');

INSERT INTO Cadastro (id_cadastro, id_usuario, id_interesse) VALUES
    (1, 1, 1),
    (2, 1, 3),
    (3, 2, 2),
    (4, 2, 4),
    (5, 2, 5);

INSERT INTO PoliticaPrivacidade (id_politica_privacidade, descricao_politica_privacidade) VALUES
    (1, 'Li e concordo com a política de privacidade');

--Sprint V:
-- 1. Diagrama Entidade-Relacionamento (DER) da página HTML:
--  +-------------------------+
--  |     Usuario             |
--  +-------------------------+
--  | id_usuario (PK)         |
--  | nome                    |
--  | sobrenome               |
--  | email                   |
--  | telefone                |
--  | sugestoes               |
--  | frequencia_atualizacoes |
--  +-------------------------+
--         |
--         |
--         |  +------------------+
--         +--<|     Cadastro    |
--         |  +------------------+
--         |  | id_cadastro (PK) |
--         |  | id_usuario (FK)  |
--         |  | id_interesse (FK)|
--         |  +------------------+
--         |          |
--         |          |
--         |  +------------------+
--         +--<|    Interesse    |
--         |  +------------------+
--         |  | id_interesse (PK)|
--         |  | nome_interesse   |
--         |  +------------------+
--         |
--         |
--         |  +--------------------------------+
--         +--<|   PoliticaPrivacidade         |
--            +--------------------------------+
--            | id_politica_privacidade (PK)   |
--            | descricao_politica_privacidade |
--            +--------------------------------+

--Explicação:
--Relacionamento entre Usuario e Cadastro:
--Um usuário pode ter vários cadastros, mas um cadastro está associado a apenas um usuário. 
--É um relacionamento um para muitos (1:N).

--Relacionamento entre Interesse e Cadastro:
--Um interesse pode estar associado a vários cadastros, e um cadastro está associado a 
--apenas um interesse. Portanto, é um relacionamento um para muitos (1:N).

--Relacionamento entre Usuario e PoliticaPrivacidade:
--Um usuário pode estar associado a apenas uma política de privacidade, e uma política de 
--privacidade pode estar associada a vários usuários. Portanto, é um relacionamento muitos para um (N:1).

--MODELO FÍSICO
--Tabela: Usuario
--id_usuario (PK)	nome	sobrenome	email				telefone	sugestoes	frequencia_atualizacoes
--1					João	Silva		joao@example.com	1234567890	NULL		semanal
--2					Maria	Souza		maria@example.com	9876543210	NULL		mensal

--Tabela: Interesse
--id_interesse (PK)	nome_interesse
--1					Metal
--2					Clássico
--3					Pop Rock
--4					Punk Rock
--5					Alternativo
--6					Indie

--Tabela: Cadastro
--id_cadastro (PK)	id_usuario (FK)	id_interesse (FK)
--1					1				1
--2					1				3
--3					2				2
--4					2				4
--5					2				5

--Tabela: PoliticaPrivacidade
--id_politica_privacidade (PK)	descricao_politica_privacidade
--1								Li e concordo com a política de privacidade


--MODELO LÓGICO
--Tabela: Usuario
--+-----------------+-------------+------------+----------+----------+------------+-------------------------+
--| id_usuario (PK) | nome        | sobrenome  | email    | telefone | sugestoes  | frequencia_atualizacoes |
--+-----------------+-------------+------------+----------+----------+------------+-------------------------+
--| INTEGER         | TEXT        | TEXT       | TEXT     | TEXT     | TEXT       | TEXT                    |
--+-----------------+-------------+------------+----------+----------+------------+-------------------------+

--Tabela: Interesse
--+-------------------+----------------+
--| id_interesse (PK) | nome_interesse |
--+-------------------+----------------+
--| INTEGER           | TEXT           |
--+-------------------+----------------+

--Tabela: Cadastro
--+------------------+-----------------+------------------+
--| id_cadastro (PK) | id_usuario (FK) | id_interesse (FK)|
--+------------------+-----------------+------------------+
--| INTEGER          | INTEGER         | INTEGER          |
--+------------------+-----------------+------------------+

--Tabela: PoliticaPrivacidade
--+-------------------------------+--------------------------------+
--| id_politica_privacidade (PK)  | descricao_politica_privacidade |
--+-------------------------------+--------------------------------+
--| INTEGER                       | TEXT                           |
--+-------------------------------+--------------------------------+

--MODELO CONCEITUAL
--Entidade: Usuário
--Atributos: nome, sobrenome, email, telefone, sugestões, frequência_atualizacoes

--Entidade: Interesse
--Atributos: id_interesse, nome_interesse

--Entidade: Cadastro
--Atributos: id_cadastro, id_usuario, id_interesse

--Entidade: PolíticaPrivacidade
--Atributos: id_politica_privacidade, descricao_politica_privacidade


-- 2. Tabelas na Terceira Forma Normal (3NF):

--Tabela: Usuario
--| id_usuario (PK) | nome    | sobrenome   | email             | telefone   | sugestoes | frequencia_atualizacoes |
--|-----------------|---------|-------------|-------------------|------------|-----------|-------------------------|
--| 1               | João    | Silva       | joao@example.com  | 1234567890 | NULL      | semanal                 |
--| 2               | Maria   | Souza       | maria@example.com | 9876543210 | NULL      | mensal                  |

--Tabela: Interesse
--| id_interesse (PK) | nome_interesse |
--|-------------------|----------------|
--| 1                 | Metal          |
--| 2                 | Clássico       |
--| 3                 | Pop Rock       |
--| 4                 | Punk Rock      |
--| 5                 | Alternativo    |
--| 6                 | Indie          |

--Tabela: Cadastro
--| id_cadastro (PK) | id_usuario (FK) | id_interesse (FK)|
--|------------------|-----------------|------------------|
--| 1                | 1               | 1                |
--| 2                | 1               | 3                |
--| 3                | 2               | 2                |
--| 4                | 2               | 4                |
--| 5                | 2               | 5                |

--Tabela: PoliticaPrivacidade
--| id_politica_privacidade (PK) | descricao_politica_privacidade                                                                                                                                                                                             |
--|------------------------------|---------------------------------------------|
--| 1                            | Li e concordo com a política de privacidade                                                                                                                                                                              |

--3. Exemplos de consultas juntando tabelas:

--a) Consulta para obter os interesses de um usuário específico:
SELECT i.nome_interesse
FROM Usuario u
JOIN Cadastro c ON u.id_usuario = c.id_usuario
JOIN Interesse i ON c.id_interesse = i.id_interesse
WHERE u.id_usuario = 1;

--Resultado:
--| nome_interesse |
--|----------------|
--| Metal          |
--| Pop Rock       |

--Explicação: A consulta seleciona a coluna nome_interesse da tabela Interesse. Com o JOIN 
--juntamos as tabelas Usuario, Cadastro e Interesse com base nas chaves estrangeiras definidas. 
--A condição u.id_usuario = 1 filtra os resultados para obter apenas os interesses do usuário 
--com id_usuario igual a 1. Assim, lista dos interesses desse usuário específico, retornando os 
--valores da coluna nome_interesse da tabela Interesse. 

--b) Consulta para obter os usuários que possuem um determinado interesse:
SELECT u.nome, u.email
FROM Usuario u
JOIN Cadastro c ON u.id_usuario = c.id_usuario
JOIN Interesse i ON c.id_interesse = i.id_interesse
WHERE i.nome_interesse = 'Punk Rock';

--Resultado:
--| nome  | email             |
--|-------|-------------------|
--| Maria | maria@example.com |

--Explicação: Selecionamos as colunas nome e email da tabela Usuario. Com JOIN, juntamos as tabelas 
--Usuario, Cadastro e Interesse. A condição i.nome_interesse = 'Punk Rock' filtra os resultados para 
--obter apenas os usuários que possuem interesse em 'Punk Rock'. Assim, teremos  uma lista dos nomes 
--e emails dos usuários que possuem o interesse 'Punk Rock', retornando os valores das colunas nome e 
--email da tabela Usuario.