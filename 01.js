//* Створіть клас "Клієнт" з властивостями "ім'я", "прізвище", "баланс" та методом "повна назва", який повертає повне ім'я клієнта (ім'я та прізвище). Також, створіть геттер та сеттер для властивості "баланс", який забезпечує можливість читання та зміни значення балансу.

class Client {
    constructor(firstName, lastName, balance) {
        this.firstName = firstName;
        this.lastName = lastName;
        this._balance = balance;
      }
    
      get balance() {
        return this._balance;
      }
    
      set balance(value) {
        this._balance = value;
      }
    
      fullName() {
        return `${this.firstName} ${this.lastName}`;
      }
    }
    
  const client1 = new Client("John", "Doe", 1000);
  
  console.log(client1.fullName()); // виведе "John Doe"
  console.log(client1.balance); // виведе 1000
  client1.balance = 500;
  console.log(client1.balance); // виведе 500