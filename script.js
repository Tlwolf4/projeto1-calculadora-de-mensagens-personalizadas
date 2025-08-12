let nome = "Eryck"
let idade = 25
let cidade = "Fortaleza"
let profissao = "Físico"
let anoAtual = 2025
const anoNascimento = anoAtual - idade
let salario = 98238
let bonus = 3568

let salarioMes = salario + bonus
let salarioAnual = salarioMes*12
let salarioAnualDobrado = salarioAnual*2 

alert (`  ========= RELATÓRIO DO USUÁRIO =========
    Nome: ${nome}
    Idade: ${idade} 
    Ano de nascimento ${anoNascimento}
    Cidade: ${cidade}
    Profissão: ${profissao}
    
    Salário base: U$${salario}
    Bônus: U$${bonus}
    Total mensal: U$${salarioMes}
    Total ano: U$${salarioAnual}
    Total anual (salário dobrado): U$${salarioAnualDobrado}
    =====================================`) 