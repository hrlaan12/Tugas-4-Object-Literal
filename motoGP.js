var motoGP =[
    {
        circuit:'Losail',
        location:'Qatar',
        winner:{
            fristName:'Andrea',
            lastName:'Dovizioso',
            country:'Italy'
        }
    },
    {
        circuit:'Autodromo',
        location:'Argentina',
        winner:{
            fristName:'Cal',
            lastName:'Crutchlow',
            country:'UK'
        }
    },
    {
        circuit:'De Jerez',
        location:'Spain',
        winner:{
            fristName:'Valentino',
            lastName:'Rossi',
            country:'Italy'
        }
    },
    {
        circuit:'Mugello',
        location:'Italy',
        winner:{
            fristName:'Andrea',
            lastName:'Devezioso',
            country:'Italy'
        }
    },
]
var result = motoGP.reduce((acc, race) => {
    const { circuit, location, winner } = race;
    const { country, firstName, lastName } = winner;

    acc[country] = acc[country] || { winningCircuits: [], totalWin: 0 };
    acc[country].winningCircuits.push({ name: `${firstName} ${lastName}`, winLocation: `${circuit}, ${location}` });
    acc[country].totalWin++;

    return acc;
}, {});

console.log(JSON.stringify(result, null, 2));