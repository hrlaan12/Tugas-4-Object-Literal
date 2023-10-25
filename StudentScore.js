let studentsScore = [
    {
        name: 'Andi',
        score: 90
    },
    {
        name: 'Rudi',
        score: 80
    },
    {
        name: 'Dira',
        score: 100
    }
];

let studentWithHighestScore = studentsScore.reduce((prev, current) => (prev.score > current.score) ? prev : current);
console.log("Siswa dengan nilai tertinggi adalah " + studentWithHighestScore.name + " dengan nilai " + studentWithHighestScore.score);
