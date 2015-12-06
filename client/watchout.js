// The idea here is to create a box that represents the collision space of our boxes
var gameOptions = function(height,width,nEnemies,padding){
  this.height = height;
  this.width = width;
  this.nEnemies = nEnemies;
  this.padding = padding;
}



var createCircle = function(width,height,xPosition,yPosition,radius){

var svgContainer = d3.select("body").append("svg")
                                      .attr("width",width)
                                      .attr("height",height);

var circle = svgContainer.append("circle")
                          .attr("cx",xPosition)
                          .attr("cy",yPosition)
                          .attr("r",radius)

}

createCircle(100,100,30,30,20);
createCircle(100,100,30,30,20);


var randomizePosition = function(){
  // create a random node
};
//Changing width and height affects their spacing
/*
var jsonCircles = [
   { "x_axis": 30, "y_axis": 30, "radius": 20, "color" : "green" },
   { "x_axis": 70, "y_axis": 70, "radius": 20, "color" : "purple"},
   { "x_axis": 110, "y_axis": 100, "radius": 20, "color" : "red"}];
 
var svgContainer = d3.select("body").append("svg")
                                     .attr("width", 200)
                                     .attr("height", 200);
 
var circles = svgContainer.selectAll("circle")
                          .data(jsonCircles)
                          .enter()
                          .append("circle");

var circleAttributes = circles
                       .attr("cx", function (d) { return d.x_axis; })
                       .attr("cy", function (d) { return d.y_axis; })
                       .attr("r", function (d) { return d.radius; })
                       .style("fill", function(d) { return d.color; });*/