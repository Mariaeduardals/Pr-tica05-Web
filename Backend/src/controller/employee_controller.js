const db = require('../../database/config');

//Insere um funcionário na tabela employees.
const Post = async (req, res) => {

    const { nome, cargo, data_nascimento, data_entrada } = req.body;
    console.log(req.body);
    const cadastrar_funcionario =
    `INSERT INTO "Funcionario" (nome, cargo, data_nascimento, data_entrada) VALUES ($1,$2,$3,$4)`;

    const funcionario = await db.query(cadastrar_funcionario, 
                                      [nome, cargo, data_nascimento, data_entrada]
    );
    return res.status(200).json({message: "Funcionário cadastrado com sucesso!"});
}

// Exibe todos os funcionários da tabela employees.
const GetAll = async (req, res) => {
  try {
    const listAllemployees = `SELECT id, nome, cargo, data_nascimento, data_entrada FROM "Funcionario"`;

    const employees = await db.query(listAllemployees);
    
    if (employees.rows.length === 0)
    {
      return res.status(404).json({ message: "Não existe nenhum funcionário nesta tabela" });
    }

    return res.status(200).json({ Employees: employees.rows });
  } catch (error) {
    return res.status(400).json({ message: "Não existe nenhum correspondente" });
  }
}

// Seleciona para exibir um funcionário de acordo com seu ID, previamente informado pelo parâmetro.
const GetById = async (req, res) => {
  try {
    const { id } = req.params;

    const listEmployees = `SELECT * FROM "Funcionario" WHERE id = $1;`;
    const employees = await db.query(listEmployees, [id]);
    // Laço que indentifica se não há funcionários. Quando entra nesta condição ele lança a mensagem de que não encontrou funcionários.
    if (
      employees.rows.length == 0
    )
    return res.status(404).json({ message: "Não existe nenhum funcionário" });
    // Caso não entre no if acima, ele retorna a lista de funcionários presente na tabela employees.
    return res.status(200).json({ employees: employees.rows });
  } catch (error) {
    return res.status(400).json({ message: "Não existe nenhum correspondente" });
  }
}

//Está função chama determinados funcionários nos quais compartilham do mesmo cargo.
const GetByoffice = async (req, res) => {
  try {
    const { cargo } = req.params;

    const listEmployees = `SELECT id, nome, data_nascimento, data_entrada FROM "Funcionario" WHERE cargo = $1;`;
    const employees = await db.query(listEmployees, [cargo]);
    if (
      employees.rows.length == 0
    )
      return res.status(404).json({ message: "Não existe nenhum correspondente" });

    return res.status(200).json({ employees: employees.rows });
  } catch (error) {
    return res.status(400).json({ message: "Não existe nenhum correspondente" });
  }
}

//Exibe uma lista de funcionários de acordo com uma quandidade antes definida pelo parâmetro na rota.
const GetByQtd = async (req, res) => {
  try {
    const {qtd} = req.params
    const listAllEmployees = `SELECT id, nome, data_nascimento, data_entrada FROM "Funcionario"`;

    const Employees = await db.query(listAllEmployees);
    if (
      Employees.rows.length == 0
    )
    return res.status(404).json({ message: "Não existe nenhum correspondente" });
    
    let EmployeesQuantidade = [];
    for (let i = 0; i < qtd; i++)
      EmployeesQuantidade.push(employees.rows[i])

    return res.status(200).json({ Employees: EmployeesQuantidade });
  } catch (error) {
    return res.status(400).json({ message: "Não existe nenhum correspondente" });
  }
}

// Ao fazer a edição do funcionário, está função trabalha pegando o id da rota e o corpo do JSON referenciado. Logo após executa o comando na tabela alterando os parâmetros passados.
const Update = async (req, res) => {
  // Pegando o JSON e deserealizando.
  const { nome, cargo, data_nascimento, data_entrada } = req.body;
  // Pegando o parâmetro ID da rota e deixando em uma constante.
  const {id} = req.params
  // Fazendo o comando de SQL se tornar uma variável/constante. Economia de código.
  const updateEmployees =
    `UPDATE "Funcionario" SET  nome = $1, cargo = $2, data_nascimento = $3, data_entrada = $4 WHERE id = $5`;
  //Setando a constante de mudança com os valores que desejamos alterar.
  await db.query(updateEmployees, [
    nome, cargo, data_nascimento, data_entrada, id
  ]);
  // Mensagem de sucesso para a alteração daquele ID
  return res.status(200).json({message: "Atualização de funcionário realizada!"});
}

// Função de deletar, semelhante a função de editar, a função a baixo pega o ID parametrizado na rota que indica o comando de deleção e assim fazendo a exclusão do funcionário.
const Delete = async (req, res) => {
  try {
    const { id } = req.params;
    
    const listEmployees = `SELECT id, nome, data_nascimento, data_entrada FROM "Funcionario" WHERE id = $1`;
    const Employees = await db.query(listEmployees, [id]);
    if (
      Employees.rows.length == 0
    )
    return res.status(404).json({ message: "Não existe nenhum correspondente" });

     const deleteEmployees = `DELETE FROM "Funcionario" WHERE id = $1`;
     await db.query(deleteEmployees, [id]);
    return res.status(200).json({ message: "Funcionario deletado com sucesso!" });
  }
  // Essa exceção indica que se o usuário não foi encontrado, exibirá está mensagem de erro para ele. 
  catch (error) {
    return res.status(400).json({ message: "Não existe nenhum correspondente" });
  }
}

module.exports = {
Post,
GetAll,
GetById,
GetByQtd,
GetByoffice, 
Delete, 
Update
}


