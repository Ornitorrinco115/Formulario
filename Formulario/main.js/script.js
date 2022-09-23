function cadPessoa(nome, sobrenome, email, altura, sexo){

    var tb = document.getElementById("tbPessoas");
    var qtdLinhas = tb.rows.length;
    var linha  = tb.insertRow(qtdLinhas);

    var cellCodigo = linha.insertCell(0);
    var cellNome = linha.insertCell(1);
    var cellSobrenome = linha.insertCell(2);
    var cellEmail = linha.insertCell(3);
    var cellAltura = linha.insertCell(4);
    var cellSexo = linha.insertCell(5);

    cellCodigo.innerHTML = qtdLinhas;
    cellNome.innerHTML = nome;
    cellSobrenome.innerHTML = sobrenome;
    cellEmail.innerHTML = email;
    cellAltura.innerHTML = altura;
    cellSexo.innerHTML = sexo;

}