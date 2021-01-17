import { Ask } from "./deps.ts";

const ask = new Ask();
const answers = await ask.prompt([
  {
    name: "customer",
    type: "input",
    message: "Customer Name:",
  },
  {
    name: "freelancer",
    type: "input",
    message: "Freelancer Name:",
  },
  {
    name: "date",
    type: "input",
    message: "Date Active:",
  },
  {
    name: "services",
    type: "input",
    message: "Services Provided:",
  },
]);

const { customer, date, freelancer, services } = answers;

const contractTemplate = await Deno.readTextFile("./template.txt");

const contract = contractTemplate
  .replaceAll("[customer]", customer)
  .replaceAll("[freelancer]", freelancer)
  .replaceAll("[date]", date)
  .replaceAll("[services]", services);

const file = await Deno.writeTextFile(`${date}-contract.txt`, contract);

console.log("contract complete");
