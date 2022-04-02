function Qur() {
    document.getElementById("tbl").style.display = 'table';
    let opt = document.getElementById("opt");
    let table = "";

    for (let i = 1; i <= opt.value; i++) {
        table += `<tr>`  
        for (let j = 1; j <= opt.value; j++) {
            let color = (i+j)% opt.value==1 ? "yellow" : '' ; 
            let reng = i==j ? "red" : ''; 
            
            table += `<td style="background-color:${color}  ${reng}" > i=${i} j=${j} </td>`;

        }
        table += `<tr/>`
    }
    document.getElementById("tbl").innerHTML = table;

}

