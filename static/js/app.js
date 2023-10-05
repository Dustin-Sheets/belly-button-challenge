const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

//Checking library
const data = d3.json(url);
console.log(data);
data.then(function(data){console.log(data);});

data.then(function(data){
    console.log(data.names);

    for (i=0;i<data.names.length; i++){
        data.names[i]

        d3.select("#selDataset").append("option").text(data.names[i]).
        attr("value", data.names[i]);
    }
});

function optionChanged(name){
    // for (i=0;i<data.metadata.length; i++){
    //     if name === data.metadata[i].id


    //         d3.select("#sample-metadata").append("h1").
    //         text(data.metadata[i]);

        
 
    // }
    console.log(data.metadata)
}




{/* <select name="cars" id="cars">
  <option value="volvo">Volvo</option>
  <option value="saab">Saab</option>
  <option value="mercedes">Mercedes</option>
  <option value="audi">Audi</option>
</select> */}