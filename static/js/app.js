const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

//Checking library
const data = d3.json(url);
console.log(data);
data.then(function(data){console.log(data);});

data.then(function(data){
    // console.log(data.names);

    for (i=0;i<data.names.length; i++){
        data.names[i]

        d3.select("#selDataset").append("option").text(data.names[i]).
        attr("value", data.names[i]);
    }
});

function optionChanged(name){
    let otu_id = [];
    let otu_label  = [];
    let sample_value = [];
    var trace = [];
    var trace1 = [];
    var layout = {title: "OTU's"}
    data.then(function(data){
        let sample = data.samples;
        let meta = data.metadata;
        
        for (i=0;i<sample.length; i++){
            if (name === sample[i].id){

                otu_id.push((sample[i].otu_ids));
                otu_label.push(sample[i].otu_labels);
                sample_value.push(sample[i].sample_values);

                // console.log(otu_id[0].slice(0,10))
                trace.push({
                    x: sample_value[0].slice(0,10),
                    y: String(otu_id[0].slice(0,10)),
                    type: "bar"
                });

                Plotly.newPlot("bar", trace, layout);

                trace1.push({
                   x: otu_id[0],
                   y: sample_value[0],
                   mode: "markers",
                   marker: {
                    size: sample_value[0]
                   }
                });

                Plotly.newPlot('bubble', trace1, layout);                

               if (d3.select("#sample-metadata").empty()==true){console.log("y")}

                d3.select("#sample-metadata").append("panel-body").html(`<h5>id: ${meta[i].id}</h5>
                <h5>ethnicity: ${meta[i].ethnicity}</h5>
                <h5>gender: ${meta[i].gender}</h5>
                <h5>age: ${meta[i].age}</h5>
                <h5>location: ${meta[i].location}</h5>
                <h5>bbtype: ${meta[i].bbtype}</h5>
                <h5>wfreq: ${meta[i].wfreq}</h5>
                `);
                // console.log(meta[i])
            }
        }
        
    })
}




