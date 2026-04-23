//6. Crea una clase CuentaBancaria con: 
// o atributo privado saldo o método para depositar dinero
//  o método para retirar dinero validando que no quede en negativo
class CuentaBancaria {
    private saldo: number;

    constructor(saldoInicial: number) {
        this.saldo = saldoInicial;
    }

    depositar(valor: number): void {
        this.saldo = this.saldo + valor;
        console.log("Depósito realizado");
    }

    retirar(valor: number): void {
        if (this.saldo - valor >= 0) {
            this.saldo = this.saldo - valor;
            console.log("Retiro realizado");
        } else {
            console.log("No hay saldo suficiente");
        }
    }

    mostrarSaldo(): void {
        console.log("Saldo actual: " + this.saldo);
    }
}

let cuenta1 = new CuentaBancaria(500);

cuenta1.mostrarSaldo();
cuenta1.depositar(300);
cuenta1.mostrarSaldo();
cuenta1.retirar(200);
cuenta1.mostrarSaldo();
cuenta1.retirar(700);