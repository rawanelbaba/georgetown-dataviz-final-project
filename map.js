let pointData = [
{"Country_Name":"Afghanistan","No_Killed":23,"lat":33.93911,"lon":67.709953},
{"Country_Name":"Angola","No_Killed":1,"lat":-11.202692,"lon":17.873887},
{"Country_Name":"Azerbaijan","No_Killed":2,"lat":40.143105,"lon":47.576927},
{"Country_Name":"Bahrain","No_Killed":3,"lat":25.930414,"lon":50.637772},
{"Country_Name":"Bangladesh","No_Killed":8,"lat":23.684994,"lon":90.356331},
{"Country_Name":"Belarus","No_Killed":1,"lat":53.709807,"lon":27.953389},
{"Country_Name":"Bolivia","No_Killed":1,"lat":-16.290154,"lon":-63.588653},
{"Country_Name":"Brazil","No_Killed":24,"lat":-14.235004,"lon":-51.92528},
{"Country_Name":"Cambodia","No_Killed":2,"lat":12.565679,"lon":104.990963},
{"Country_Name":"Cameroon","No_Killed":1,"lat":7.369722,"lon":12.354722},
{"Country_Name":"Colombia","No_Killed":7,"lat":4.570868,"lon":-74.297333},
{"Country_Name":"Croatia","No_Killed":1,"lat":45.1,"lon":15.2},
{"Country_Name":"Democratic Republic of the Congo","No_Killed":2,"lat":-4.038333,"lon":21.758664},
{"Country_Name":"Dominican Republic","No_Killed":1,"lat":18.735693,"lon":-70.162651},
{"Country_Name":"Ecuador","No_Killed":3,"lat":-1.831239,"lon":-78.183406},
{"Country_Name":"Egypt","No_Killed":10,"lat":26.820553,"lon":30.802498},
{"Country_Name":"El Salvador","No_Killed":1,"lat":13.794185,"lon":-88.89653},
{"Country_Name":"France","No_Killed":11,"lat":46.227638,"lon":2.213749},
{"Country_Name":"Georgia","No_Killed":2,"lat":42.315407,"lon":43.356892},
{"Country_Name":"Ghana","No_Killed":1,"lat":7.946527,"lon":-1.023194},
{"Country_Name":"Greece","No_Killed":1,"lat":39.074208,"lon":21.824312},
{"Country_Name":"Guatemala","No_Killed":1,"lat":15.783471,"lon":-90.230759},
{"Country_Name":"Guinea","No_Killed":2,"lat":9.945587,"lon":-9.696645},
{"Country_Name":"Honduras","No_Killed":3,"lat":15.199999,"lon":-86.241905},
{"Country_Name":"India","No_Killed":26,"lat":20.593684,"lon":78.96288},
{"Country_Name":"Indonesia","No_Killed":5,"lat":-0.789275,"lon":113.921327},
{"Country_Name":"Iran","No_Killed":2,"lat":32.427908,"lon":53.688046},
{"Country_Name":"Iraq","No_Killed":57,"lat":33.223191,"lon":43.679291},
{"Country_Name":"Israel","No_Killed":9,"lat":31.046051,"lon":34.851612},
{"Country_Name":"Ivory Coast","No_Killed":1,"lat":7.539989,"lon":-5.54708},
{"Country_Name":"Kenya","No_Killed":2,"lat":-0.023559,"lon":37.906193},
{"Country_Name":"Lebanon","No_Killed":2,"lat":33.854721,"lon":35.862285},
{"Country_Name":"Libya","No_Killed":7,"lat":26.3351,"lon":17.228331},
{"Country_Name":"Madagascar","No_Killed":1,"lat":-18.766947,"lon":46.869107},
{"Country_Name":"Maldives","No_Killed":1,"lat":3.202778,"lon":73.22068},
{"Country_Name":"Malta","No_Killed":1,"lat":35.937496,"lon":14.375416},
{"Country_Name":"Mexico","No_Killed":31,"lat":23.634501,"lon":-102.552784},
{"Country_Name":"Myanmar","No_Killed":2,"lat":21.913965,"lon":95.956223},
{"Country_Name":"Nepal","No_Killed":1,"lat":28.394857,"lon":84.124008},
{"Country_Name":"Nicaragua","No_Killed":1,"lat":12.865416,"lon":-85.207229},
{"Country_Name":"Nigeria","No_Killed":5,"lat":9.081999,"lon":8.675277},
{"Country_Name":"Pakistan","No_Killed":42,"lat":30.375321,"lon":69.345116},
{"Country_Name":"Panama","No_Killed":1,"lat":8.537981,"lon":-80.782127},
{"Country_Name":"Paraguay","No_Killed":3,"lat":-23.442503,"lon":-58.443832},
{"Country_Name":"Peru","No_Killed":1,"lat":-9.189967,"lon":-75.015152},
{"Country_Name":"Philippines","No_Killed":47,"lat":12.879721,"lon":121.774017},
{"Country_Name":"Poland","No_Killed":1,"lat":51.919438,"lon":19.145136},
{"Country_Name":"Russia","No_Killed":14,"lat":61.52401,"lon":105.318756},
{"Country_Name":"Rwanda","No_Killed":1,"lat":-1.940278,"lon":29.873888},
{"Country_Name":"Saudi Arabia","No_Killed":1,"lat":23.885942,"lon":45.079162},
{"Country_Name":"Slovakia","No_Killed":1,"lat":48.669026,"lon":19.699024},
{"Country_Name":"Somalia","No_Killed":42,"lat":5.152149,"lon":46.199616},
{"Country_Name":"South Africa","No_Killed":1,"lat":-30.559482,"lon":22.937506},
{"Country_Name":"South Sudan","No_Killed":5,"lat":12.862807,"lon":30.217636},
{"Country_Name":"Sri Lanka","No_Killed":5,"lat":7.873054,"lon":80.771797},
{"Country_Name":"Sweden","No_Killed":1,"lat":60.128161,"lon":18.643501},
{"Country_Name":"Syria","No_Killed":112,"lat":34.802075,"lon":38.996815},
{"Country_Name":"Tanzania","No_Killed":1,"lat":-6.369028,"lon":34.888822},
{"Country_Name":"Thailand","No_Killed":5,"lat":15.870032,"lon":100.992541},
{"Country_Name":"Turkey","No_Killed":2,"lat":38.963745,"lon":35.243322},
{"Country_Name":"Uganda","No_Killed":1,"lat":1.373333,"lon":32.290275},
{"Country_Name":"Ukraine","No_Killed":2,"lat":48.379433,"lon":31.16558},
{"Country_Name":"United States","No_Killed":9,"lat":37.09024,"lon":-95.712891},
{"Country_Name":"Venezuela","No_Killed":1,"lat":6.42375,"lon":-66.58973},
{"Country_Name":"Yemen","No_Killed":19,"lat":15.552727,"lon":48.516388}]

var mapSvg = d3.select("#chart-2").append('svg'),
    mapWidth = 800,
    mapHeight = 600;

let margin = {
  'top' : 40,
  'right' : 20,
  'bottom' : 20,
  'left' : 20
}

// Select the div with an id of tooltip
let Maptooltip = d3.select('#tooltip')

// Map and projection
var path = d3.geoPath();
var projection = d3.geoNaturalEarth()
    .scale(mapWidth / 2 / Math.PI)
    .translate([mapWidth / 2, mapHeight / 2])
var path = d3.geoPath()
    .projection(projection);

let size = d3.scaleSqrt()
    .domain([0,112])
    .range([0,50])

// Load external data and boot
d3.json("world-data.json")
    .then((topo) => {
        
        mapSvg
            .attr('width',mapWidth)
            .attr('height',mapHeight)
            .append("g")
            .attr("class", "countries")
            .selectAll("path")
            .data(topo.features)
            .enter().append("path")
                .attr("d", path);

        mapSvg.append('g')
            .selectAll('circle')
            .data(pointData)
            .enter().append('circle')
            .attr("fill", "red")   
            
            .attr('fill-opacity', 0.3)
            .attr('class', 'death-circle')
           
            .on('mouseover', (d) => {
              let left = d3.event.pageX 
              let top = d3.event.pageY

              let html = `${d.No_Killed} killed<br>${d.Country_Name}`
              
              //Get the mouse's position
              Maptooltip.html (html)
                  .style('left', left + 'px')
                  .style('top', top + 'px')
                  .style('display', 'block')
            })
            .on('mouseleave', (d) => {
              Maptooltip.html ('')
                .style ('display', 'none')
             })
    
            .each((d,i,e) => {
                let _this = d3.select(e[i])
                let proj = projection([d.lon,d.lat])
                
                _this.attr('cx', proj[0])
                    .attr('cy', proj[1])
                    .attr('r', size(d.No_Killed))

            })
    })
