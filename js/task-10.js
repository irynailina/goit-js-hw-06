import users from "./users.js";

("use strict");

// Получить массив всех умений всех пользователей (поле skills),
// при этом не должно быть повторяющихся умений и они должны быть отсортированы в алфавитном порядке.

const getSortedUniqueSkills = users =>
  users
    .reduce((accum, user) => {
      accum.push(...user.skills);
      return accum;
    }, [])
    .sort();
console.log(new Set(getSortedUniqueSkills(users)));

// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex',
//   'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]
