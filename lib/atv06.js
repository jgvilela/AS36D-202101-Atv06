const funcionarios = [
    {
        id: 11,
        nome: 'joao da silva',
        cpf: '111.222.333-44',
        categoria: 'tecnico'
    },
    {
        id: 22,
        nome: 'joana da silva',
        cpf: '111.222.333-55',
        categoria: 'tecnico'
    },
    {
        id: 23,
        nome: 'joana da Mata',
        cpf: '111.222.333-66',
        categoria: 'analista'
    },
    {
        id: 24,
        nome: 'joana da Mata',
        cpf: '23456789-00',
        categoria: 'gerente'
    },
    {
        id: 45,
        nome: 'joana da Mata',
        cpf: '111222333-44',
        categoria: 'gerente'
    },
    {
        id: 36,
        nome: 'joana da Mata',
        cpf: '654321987-23',
        categoria: 'gerente'
    },
    {
        id: 27,
        nome: 'joana da Mata',
        cpf: '098876654-99',
        categoria: 'gerente'
    }
];

// função filter para filtrar os elementos com categoria igual à gerente
// variável fc = funcionários categorizados
const fc = funcionarios.filter( elem => {
    return elem.categoria == 'gerente'
});
console.log("funcionários que são gerentes");
console.log(fc);

// função map para deixar os nomes em caixa alta
// função fuc = funcionários uppercase
const fuc = funcionarios.map( elem => {
    elem.nome = elem.nome.toUpperCase();
    return elem
});
console.log("funcionarios com nomes em caixa alta");
console.log(fuc);

// função reduce para retornar o menor id
// função fmi = funcionário com menor id
const fmi = funcionarios.reduce((anterior, atual) => {
    if(anterior.id < atual.id)
        return anterior;
    else
        return atual;
});
console.log("funcionario com menor id");
console.log(fmi);