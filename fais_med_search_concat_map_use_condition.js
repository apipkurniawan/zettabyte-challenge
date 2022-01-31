// Expected Result :
// [
//   { name: 'Rian Nugraha', school_name: 'PLMK-JKT' },
//   { name: 'Ari Santoso', school_name: 'GRSR-JKT' },
//   { name: 'Rahman Sunggara', school_name: 'GELM-JKT' },
// ]
// Direction :
// Return a formatted array for students of specific school using id of school.

const source = [
  {
    id: "1",
    data: {
      first_name: "Rian",
      last_name: "Nugraha",
    },
    school: {
      id: "1",
      data: "PLMK-JKT",
    },
  },
  {
    id: "2",
    full_name: "Ari Santoso",
    school: {
      id: "1",
      short_name: "GRSR",
      data: "JKT",
    },
  },
  {
    id: "3",
    data: {
      first_name: "Rahman",
      last_name: "Sunggara",
    },
    school: {
      id: "1",
      short_name: "GELM",
      data: "JKT",
    },
  },
  {
    id: "4",
    data: {
      first_name: "Rian",
      last_name: "Nugraha",
    },
    school: {
      id: "2",
      data: "PLMK-BDG",
    },
  },
];

function result(num) {
  // Your answer here
  const newObj = [];
  num
    .filter((e) => e.school.id == "1")
    .forEach((e) => {
      newObj.push({
        name: e.full_name
          ? e.full_name
          : e.data.first_name.concat(" ").concat(e.data.last_name),
        school_name: e.school.short_name
          ? e.school.short_name.concat("-").concat(e.school.data)
          : e.school.data,
      });
    });
  return newObj;
}

console.log(result(source));
