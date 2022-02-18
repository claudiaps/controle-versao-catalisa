const frutas = [
    {
        nome: 'banana',
        eCitrica: false,
    },
    {
        nome: 'laranja',
        eCitrica: true,
    },
    {
        nome: 'maça',
        eCitrica: false,
    },
    {
        nome: 'tangerina',
        eCitrica: true,
    }
];

const frutasCitricas = frutas.filter(fruta => {
    return fruta.eCitrica === true;
});

console.log({ frutasCitricas });