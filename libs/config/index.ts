const Scholarship = require("assets/payments-types/fellowship.png");
const Investment = require("assets/payments-types/investment.png");
const Salary = require("assets/payments-types/salary.png");
const Saving = require("assets/payments-types/saving.png");
const Spending = require("assets/payments-types/spending.png");
const Shopping = require("assets/payments-types/shopping.png");

export interface IIncomeExpenseType {
  id: number;
  image: any;
  title: string;
}

const IncomeTypes: IIncomeExpenseType[] = [
  { id: 4, image: Salary, title: "Зарплата" },
  { id: 0, image: Scholarship, title: "Подработка" },
  { id: 1, image: Investment, title: "Подарок" },
];

const ExpenseTypes: IIncomeExpenseType[] = [
  { id: 2, image: Saving, title: "На накопления" },
  { id: 5, image: Spending, title: "Покупки" },
  { id: 3, image: Shopping, title: "Другое" },
];

interface IReturnConfigurationData {
  IncomeTypes: IIncomeExpenseType[];
  ExpenseTypes: IIncomeExpenseType[];
  AllTransactionTypes: IIncomeExpenseType[];
}

function returnConfigurationData(): IReturnConfigurationData {
  return {
    IncomeTypes,
    ExpenseTypes,
    AllTransactionTypes: [...IncomeTypes, ...ExpenseTypes],
  };
}

export default returnConfigurationData;
