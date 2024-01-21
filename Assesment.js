// employee
const employee1 = {
    name: "John",
    lastName: "Smith",
    age: 20,
    companiesWorked: ["Company A", "Company B", "Company C"]
};

const employee2 = {
    name: "Jane",
    lastName: "Smith",
    age: 20,
    companiesWorked: ["Company X", "Company Y"]
};

// function to compare employees
function compareEmployees(employee1, employee2) {
    if (employee1.companiesWorked.length > employee2.companiesWorked.length) {
        console.log(`${employee1.name} has worked at more companies.`);
        printCompanyList(employee1.companiesWorked);
    } else if (employee2.companiesWorked.length > employee1.companiesWorked.length) {
        console.log(`${employee2.name} has worked at more companies.`);
        printCompanyList(employee2.companiesWorked);
    } else {
        console.log(`${employee1.name} and ${employee2.name} have worked at the same number of companies.`);
        console.log(`Companies of ${employee1.name}:`);
        printCompanyList(employee1.companiesWorked);
        console.log(`Companies of ${employee2.name}:`);
        printCompanyList(employee2.companiesWorked);
    }
}

// function to print companies
function printCompanyList(companies) {
    for (let i = 0; i < companies.length; i++) {
        console.log(`${i + 1}. ${companies[i]}`);
    }
}

// comparing employees
compareEmployees(employee1, employee2);
