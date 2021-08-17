import express from "express";
import client from "../../database/config";

//Insere um funcionário na tabela employees.
export async function Post(req, res) {
    const { nome, cargo, data_nascimento, data_entrada } = req.body;
    const register_employees =
      "INSERT INTO employees ( nome, cargo, data_nascimento, data_entrada) VALUES ($1,$2,$3,$4)";

    await client.query(register_employees, [
      nome, cargo, data_nascimento, data_entrada
    ]);
    return res.status(200).json({message: "Funcionário cadastrado com sucesso!"});
}

// Exibe todos os funcionários da tabela employees.
export async function GetAll(req, res) {
  try {
    const listAllemployees = "SELECT * FROM employees;";

    const Employees = await client.query(listAllemployees);
    if (
      employees.rows.length == 0
    )
      return res.status(404).json({ message: "Não existe nenhum funcionário nesta tabela" });

    return res.status(200).json({ Employees: employees.rows });
  } catch (error) {
    return res.status(400).json({ message: "Não existe nenhum correspondente" });
  }
}

// Seleciona para exibir um funcionário de acordo com seu ID, previamente informado pelo parâmetro.
export async function GetById(req, res) {
  try {
    const { id } = req.params;

    const listEmployees = "SELECT * FROM employees WHERE id = $1;";
    const employees = await client.query(listEmployees, [id]);
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
export async function GetByoffice(req, res) {
  try {
    const { cargo } = req.params;

    const listEmployees = "SELECT * FROM employees WHERE cargo = $1;";
    const employees = await client.query(listEmployees, [cargo]);
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
export async function GetByQtd(req, res) {
  try {
    const {qtd} = req.params
    const listAllEmployees = "SELECT * FROM employees;";

    const Employees = await client.query(listAllEmployees);
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
export async function Update(req, res) {
  // Pegando o JSON e deserealizando.
  const { nome, cargo, data_nascimento, data_entrada } = req.body;
  // Pegando o parâmetro ID da rota e deixando em uma constante.
  const {id} = req.params
  // Fazendo o comando de SQL se tornar uma variável/constante. Economia de código.
  const updateEmployees =
    "UPDATE employees SET  nome = $1, cargo = $2, data_nascimento = $3, data_entrada = $4 WHERE id = $5";
  //Setando a constante de mudança com os valores que desejamos alterar.
  await client.query(updateEmployees, [
    nome, cargo, data_nascimento, data_entrada, id
  ]);
  // Mensagem de sucesso para a alteração daquele ID
  return res.status(200).json({message: "Atualização de funcionário realizada!"});
}

// Função de deletar, semelhante a função de editar, a função a baixo pega o ID parametrizado na rota que indica o comando de deleção e assim fazendo a exclusão do funcionário.
export async function Delete(req, res) {
  try {
    const { id } = req.params;
    
    const listEmployees = "SELECT * FROM employees WHERE id = $1;";
    const Employees = await client.query(listEmployees, [id]);
    if (
      Employees.rows.length == 0
    )
    return res.status(404).json({ message: "Não existe nenhum correspondente" });

     const deleteEmployees = "DELETE FROM employees WHERE id = $1;"
     await client.query(deleteEmployees, [id]);
    return res.status(200).json({ message: "Funcionario deletado com sucesso!" });
  }
  // Essa exceção indica que se o usuário não foi encontrado, exibirá está mensagem de erro para ele. 
  catch (error) {
    return res.status(400).json({ message: "Não existe nenhum correspondente" });
  }
}



