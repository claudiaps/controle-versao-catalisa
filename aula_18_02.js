const frutas = [
    {
        nome: 'banana',
        citrica: false,
    },
    {
        nome: 'laranja',
        citrica: true,
    },
    {
        nome: 'maça',
        citrica: false,
    },
    {
        nome: 'tangerina',
        citrica: true,
    }
];

const frutasCitricas = frutas.filter(fruta => {
    return fruta.citrica === true;
});

console.log({ frutasCitricas });