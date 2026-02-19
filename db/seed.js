import db from "#db/client";
import { createEmployee } from "#db/queries/employees";

await db.connect();
await seedEmployees();
await db.end();
console.log("🌱 Database seeded.");

async function seedEmployees() {
  await createEmployee({
    name: "Adam",
    birthday: "1990-01-01",
    salary: 9000000,
  });
  await createEmployee({
    name: "Betty",
    birthday: "1990-01-02",
    salary: 9500000,
  });
  await createEmployee({
    name: "Charlie",
    birthday: "1990-01-03",
    salary: 8000000,
  });
  await createEmployee({
    name: "Diane",
    birthday: "1991-04-01",
    salary: 10000000,
  });
  await createEmployee({
    name: "Egret",
    birthday: "1989-05-01",
    salary: 9200000,
  });
  await createEmployee({
    name: "Finn",
    birthday: "1986-01-06",
    salary: 7500000,
  });
  await createEmployee({
    name: "Greta",
    birthday: "1977-07-07",
    salary: 9000001,
  });
  await createEmployee({
    name: "Hal",
    birthday: "1998-01-18",
    salary: 8050000,
  });
  await createEmployee({
    name: "Idina",
    birthday: "2000-11-19",
    salary: 900000000,
  });
  await createEmployee({ name: "Jonk", birthday: "1995-10-10", salary: 9 });
}
