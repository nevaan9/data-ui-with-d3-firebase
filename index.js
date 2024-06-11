// https://github.com/nevaan9/data-ui-with-d3-firebase/blob/lesson-98/graph.js

const treeData = {
    "id": 14814,
    "name": "balkfjaweifjwope",
    "parentId": null,
    "children": [
        {
            "id": 1696,
            "name": "test 5",
            "parentId": 14814,
            "children": [],
            "member": "Ina, Maloney, Aazad Saini Greywall, Ina, Guest"
        },
        {
            "id": 1697,
            "name": "test 5",
            "parentId": 14814,
            "children": [],
            "member": "hello 1"
        },
        {
            "id": 1698,
            "name": "test 5",
            "parentId": 14814,
            "children": [
                {
                    "id": 1699,
                    "name": "test 5",
                    "parentId": 14814,
                    "children": [],
                    "member": "hello 3"
                }
            ],
            "member": "hello 2"
        }
    ],
    "member": "None"
}

// Get Dimentions
const dims = { height: 500, width: 900 };

// Append an SVG element
const svg = d3.select('.canvas')
  .append('svg')
  .attr('width', dims.width + 100)
  .attr('height', dims.height + 100);

// Container for the entire tree
const graph = svg.append('g').attr('transform', 'translate(50, 50)');

// tree and hierarchy
const hierarchyData = d3.hierarchy(treeData)

const tree = d3.tree().size([dims.width, dims.height]);

// get updated root Node data
const rootNode = tree(hierarchyData);

const descendants = rootNode.descendants();

// get nodes selection and join data
const nodes = graph.selectAll('.node').data(descendants);

// get link selection and join new data
const links = tree(hierarchyData).links()
const link = graph.selectAll('.link').data(links);

// Draw verticies
// enter new links
link.enter()
.append('path')
  .attr('class', 'link')
  .attr('fill', 'none')
  .attr('stroke', '#aaa') 
  .attr('stroke-width', 2)
  .attr('d', d3.linkVertical()
    .x(d => d.x)
    .y(d => d.y )
  );

// create enter node groups
const enterNodes = nodes.enter().append('g')
    .attr('class', 'node')
    .attr('transform', d => `translate(${d.x}, ${d.y})`);

// append rects to enter nodes
enterNodes.append('rect')
    .attr('fill', '#aaa')
    .attr('stroke', '#555')
    .attr('stroke-width', 2)
    .attr('width', d => d.data.name.length * 20)
    .attr('height', 50)
    .attr('transform', (d,i,n) => {
        let x = (d.data.name.length * 10);
        return `translate(${-x}, -25)`
    });

enterNodes.append('text')
    .attr('text-anchor', 'middle')
    .attr('dy', 5)
    .attr('fill', 'white')
    .text(d => d.data.name); 


