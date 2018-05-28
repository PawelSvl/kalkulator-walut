function calculator() {

    const dolar = 3.69;
    const euro = 4.30;
    const nic = 1;
    const liczba = document.querySelector(".liczba1").value;
    const waluta = document.querySelector(".currency-1").value;
    const waluta1 = document.querySelector(".currency-2").value;

    if (liczba < 0)
        document.getElementById("wynik").innerHTML = "Podana ilość waluty powinna być wartością dodatnią!!!";
    else if ((waluta == "PLN" && waluta1 == "PLN") || (waluta == "USD" && waluta1 == "USD") || (waluta == "EUR" && waluta1 == "EUR"))
        document.getElementById("wynik").innerHTML = liczba + waluta + " = " + (liczba * nic).toFixed(2) + waluta1;
    else if ((waluta == "PLN" && waluta1 == "USD"))
        document.getElementById("wynik").innerHTML = liczba + waluta + " = " + (liczba / dolar).toFixed(2) + waluta1;
    else if (waluta == "USD" && waluta1 == "PLN")
        document.getElementById("wynik").innerHTML = liczba + waluta + " = " + (liczba * dolar).toFixed(2) + waluta1;
    else if ((waluta == "PLN" && waluta1 == "EUR"))
        document.getElementById("wynik").innerHTML = liczba + waluta + " = " + (liczba / euro).toFixed(2) + waluta1;
    else if (waluta == "EUR" && waluta1 == "PLN")
        document.getElementById("wynik").innerHTML = liczba + waluta + " = " + (liczba * euro).toFixed(2) + waluta1;
    else if (waluta == "USD" && waluta1 == "EUR")
        document.getElementById("wynik").innerHTML = liczba + waluta + " = " + (liczba * dolar / euro).toFixed(2) + waluta1;
    else if (waluta == "EUR" && waluta1 == "USD")
        document.getElementById("wynik").innerHTML = liczba + waluta + " = " + (liczba * euro / dolar).toFixed(2) + waluta1;
}
