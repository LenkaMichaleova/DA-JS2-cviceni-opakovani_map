const weekdays = [
  'pondělí',
  'úterý',
  'středa',
  'čtvrtek',
  'pátek',
  'sobota',
  'neděle',
];
const months = [
  {
    name: 'leden',
    days: 31,
  },
  {
    name: 'únor',
    days: 28,
  },
  {
    name: 'březen',
    days: 31,
  },
  {
    name: 'duben',
    days: 30,
  },
  {
    name: 'květen',
    days: 31,
  },
  {
    name: 'červen',
    days: 30,
  },
  {
    name: 'červenec',
    days: 31,
  },
  {
    name: 'srpen',
    days: 31,
  },
  {
    name: 'září',
    days: 30,
  },
  {
    name: 'říjen',
    days: 31,
  },
  {
    name: 'listopad',
    days: 30,
  },
  {
    name: 'prosinec',
    days: 31,
  },
];

// console.log(weekdays.map((day) => {
//     return (
//         day.toUpperCase()
//     )
// }))
console.log(weekdays.map((day) => day.toUpperCase()))


// console.log(weekdays.map((day) => {
//     return(
//         day.slice(0, 2)
//     )
// }))
console.log(weekdays.map((day) => day.slice(0, 2)))

// console.log(months.map((month) => {
//     return(
//         month.days
//     )
// }))
console.log(months.map((month) => month.days))

// console.log(months.map((month) => {
//     return (
//         `1. ${month.name} 2020`
//     )
// }))
console.log(months.map((month) => `1. ${month.name} 2020`))