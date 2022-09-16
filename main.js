const excelInput = document.getElementById("excel-input");

const GenArr = [];

excelInput.addEventListener('change', async function(){
    const content = await readXlsxFile(excelInput.files[0]);
    for(let i=0; i < content.length; i++){
        GenArr.push(content[i]);
    };
    console.log(GenArr);
    new gridjs.Grid({
        columns: ["DATA1", "DATA2", "DATA3"],
        data: GenArr
      }).render(document.getElementById("wrapper"));
})

