
const csvUrl = 'http://localhost:8080/sample5062_input.csv'; 

async function loadModel(){

    return tf.loadLayersModel('/tfjs_files/model.json');
}

async function runModel(){

    // const csvData = tf.data.csv(
    //     csvUrl, {
    //         hasHeader: true,        
    //     columnConfigs: {       
    //     },
    // });

    const csvData = tf.data.csv(csvUrl);
    console.log(csvData);

    const dataArr = await csvData.toArray();
    console.log(dataArr.length);
    const tensor = tf.tensor(dataArr, [1, dataArr.length]);
    
    const model = await loadModel();

    prediction = model.predict(tensor);
    const result = prediction.dataSync();
    console.log(result[0]);

    document.getElementById('total').innerHTML = result[0];


}

function selectFile(){
    var input = document.createElement('input');
    input.type = 'file';

    input.onchange = e => { 
        var file = e.target.files[0]; 
    }

    input.click();
}


window.onload = load;

function load(){
    const elem = document.getElementById("defaultOpen");
    elem.click();

}


function openPage(pageName, elmnt) {
    // Hide all elements with class="tabcontent" by default */
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Remove the background color of all tablinks/buttons
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].style.backgroundColor = "";
    }
  
    // Show the specific tab content
    document.getElementById(pageName).style.display = "block";
  
    // Add the specific color to the button used to open the tab content
    elmnt.style.backgroundColor = 'rgb('+139+','+ 156+','+ 158+')'; 
  }
  
