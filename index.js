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
            "children": [
                {
                    "id": 1696,
                    "name": "test 5test 5test 5test 5test 5test 5",
                    "parentId": 14814,
                    "children": [
                        {
                            "id": 1696,
                            "name": "test 5",
                            "parentId": 14814,
                            "children": [],
                            "member": "Ina, Maloney, Aazad Saini Greywall, Ina, Guest"
                        }
                    ],
                    "member": "Ina, Maloney, Aazad Saini Greywall, Ina, Guest"
                }
            ],
            "member": "Ina, Maloney, Aazad Saini Greywall, Ina, Guest"
        },
        {
            "id": 1697,
            "name": "test 5",
            "parentId": 14814,
            "children": [
                {
                    "id": 1696,
                    "name": "test 5",
                    "parentId": 14814,
                    "children": [
                        {
                            "id": 1696,
                            "name": "test 5",
                            "parentId": 14814,
                            "children": [],
                            "member": "Ina, Maloney, Aazad Saini Greywall, Ina, Guest"
                        },
                        {
                            "id": 1696,
                            "name": "test 5",
                            "parentId": 14814,
                            "children": [],
                            "member": "Ina, Maloney, Aazad Saini Greywall, Ina, Guest"
                        },
                        {
                            "id": 1696,
                            "name": "test 5",
                            "parentId": 14814,
                            "children": [],
                            "member": "Ina, Maloney, Aazad Saini Greywall, Ina, Guest"
                        },
                        {
                            "id": 1696,
                            "name": "test 5",
                            "parentId": 14814,
                            "children": [],
                            "member": "Ina, Maloney, Aazad Saini Greywall, Ina, Guest"
                        },
                        {
                            "id": 1696,
                            "name": "test 5",
                            "parentId": 14814,
                            "children": [],
                            "member": "Ina, Maloney, Aazad Saini Greywall, Ina, Guest"
                        }
                    ],
                    "member": "Ina, Maloney, Aazad Saini Greywall, Ina, Guest"
                }
            ],
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
                    "children": [
                        {
                            "id": 1696,
                            "name": "test 5",
                            "parentId": 14814,
                            "children": [
                                {
                                    "id": 1696,
                                    "name": "test 5",
                                    "parentId": 14814,
                                    "children": [],
                                    "member": "Ina, Maloney, Aazad Saini Greywall, Ina, Guest"
                                },
                                {
                                    "id": 1696,
                                    "name": "test 5",
                                    "parentId": 14814,
                                    "children": [],
                                    "member": "Ina, Maloney, Aazad Saini Greywall, Ina, Guest"
                                },
                                {
                                    "id": 1696,
                                    "name": "test 5",
                                    "parentId": 14814,
                                    "children": [],
                                    "member": "Ina, Maloney, Aazad Saini Greywall, Ina, Guest"
                                },
                                {
                                    "id": 1696,
                                    "name": "test 5",
                                    "parentId": 14814,
                                    "children": [],
                                    "member": "Ina, Maloney, Aazad Saini Greywall, Ina, Guest"
                                },
                                {
                                    "id": 1696,
                                    "name": "test 5",
                                    "parentId": 14814,
                                    "children": [],
                                    "member": "Ina, Maloney, Aazad Saini Greywall, Ina, Guest"
                                },
                                {
                                    "id": 1696,
                                    "name": "test 5",
                                    "parentId": 14814,
                                    "children": [],
                                    "member": "Ina, Maloney, Aazad Saini Greywall, Ina, Guest"
                                },
                                {
                                    "id": 1696,
                                    "name": "test 5",
                                    "parentId": 14814,
                                    "children": [],
                                    "member": "Ina, Maloney, Aazad Saini Greywall, Ina, Guest"
                                }
                            ],
                            "member": "Ina, Maloney, Aazad Saini Greywall, Ina, Guest"
                        }
                    ],
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

function VeociTree(treeData) {
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
            .y(d => d.y)
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
        .attr('transform', (d, i, n) => {
            let x = (d.data.name.length * 10);
            return `translate(${-x}, -25)`
        });

    enterNodes.append('text')
        .attr('text-anchor', 'middle')
        .attr('dy', 5)
        .attr('fill', 'white')
        .text(d => d.data.name);
}

// ========================= ANOTHER WAY TO DO THIS =========================
function Tree(data, { // data is either tabular (array of objects) or hierarchy (nested objects)
    path, // as an alternative to id and parentId, returns an array identifier, imputing internal nodes
    id = Array.isArray(data) ? d => d.id : null, // if tabular data, given a d in data, returns a unique identifier (string)
    parentId = Array.isArray(data) ? d => d.parentId : null, // if tabular data, given a node d, returns its parent’s identifier
    children, // if hierarchical data, given a d in data, returns its children
    tree = d3.tree, // layout algorithm (typically d3.tree or d3.cluster)
    sort, // how to sort nodes prior to layout (e.g., (a, b) => d3.descending(a.height, b.height))
    label, // given a node d, returns the display name
    title, // given a node d, returns its hover text
    link, // given a node d, its link (if any)
    linkTarget = "_blank", // the target attribute for links (if any)
    width = 640, // outer width, in pixels
    height, // outer height, in pixels
    r = 3, // radius of nodes
    padding = 1, // horizontal padding for first and last column
    fill = "#999", // fill for nodes
    fillOpacity, // fill opacity for nodes
    stroke = "#555", // stroke for links
    strokeWidth = 1.5, // stroke width for links
    strokeOpacity = 0.4, // stroke opacity for links
    strokeLinejoin, // stroke line join for links
    strokeLinecap, // stroke line cap for links
    halo = "#fff", // color of label halo 
    haloWidth = 3, // padding around the labels
    curve = d3.curveBumpX, // curve for the link
    edgeVerticalPadding = 20, // This controls the padding between the edges/branches
    fontSize = 12
} = {}) {

    // If id and parentId options are specified, or the path option, use d3.stratify
    // to convert tabular data to a hierarchy; otherwise we assume that the data is
    // specified as an object {children} with nested objects (a.k.a. the “flare.json”
    // format), and use d3.hierarchy.
    let root

    if (path) {
        root = d3.stratify().path(path)(data)
    } else if (id || parentId) {
        root = d3.stratify().id(id).parentId(parentId)(data)
    } else {
        root = d3.hierarchy(data, children)
    }

    // Sort the nodes.
    if (sort != null) {
        root.sort(sort);
    }

    // Compute labels and titles.
    const descendants = root.descendants();
    const L = label == null ? null : descendants.map(d => label(d.data, d));

    // Compute the layout.
    const dx = edgeVerticalPadding
    const dy = width / (root.height + padding);
    tree().nodeSize([dx, dy])(root);

    // Center the tree.
    let x0 = Infinity;
    let x1 = -x0;
    root.each(d => {
        if (d.x > x1) x1 = d.x;
        if (d.x < x0) x0 = d.x;
    });

    // Compute the default height.
    if (height === undefined) {
        height = x1 - x0 + dx * 2;
    }

    // Use the required curve
    if (typeof curve !== "function") {
        throw new Error(`Unsupported curve`);
    }

    const svg = d3.create("svg")
        .attr("viewBox", [-dy * padding / 2, x0 - dx, width, height])
        .attr("width", width)
        .attr("height", height)
        .attr("style", "max-width: 100%; height: auto; height: intrinsic;")
        .attr("font-family", "sans-serif")
        .attr("font-size", fontSize);

    svg.append("g")
        .attr("fill", "none")
        .attr("stroke", stroke)
        .attr("stroke-opacity", strokeOpacity)
        .attr("stroke-linecap", strokeLinecap)
        .attr("stroke-linejoin", strokeLinejoin)
        .attr("stroke-width", strokeWidth)
        .selectAll("path")
        .data(root.links())
        .join("path")
        .attr("d", d3.link(curve)
            .x(d => d.y)
            .y(d => d.x));

    const node = svg.append("g")
        .selectAll("a")
        .data(root.descendants())
        .join("a")
        .attr("xlink:href", link == null ? null : d => link(d.data, d))
        .attr("target", link == null ? null : linkTarget)
        .attr("transform", d => `translate(${d.y},${d.x})`);

    node.append("circle")
        .attr("fill", d => d.children ? stroke : fill)
        .attr("r", r);

    if (title != null) {
        node.append("title")
            .text(d => title(d.data, d));
    }

    if (L) {
        node.append("text")
            .attr("dy", "0.32em")
            .attr("x", d => d.children ? -6 : 6)
            .attr("text-anchor", d => d.children ? "end" : "start")
            .attr("paint-order", "stroke")
            .attr("stroke", halo)
            .attr("stroke-width", haloWidth)
            .text((d, i) => L[i]);
    }

    return svg.node();
}


d3.select('.canvas').append(() => Tree(treeData, {
    width: (dims.width + 100),
    height: (dims.height + 100),
    label: d => d.name,
    padding: 5,
    edgeVerticalPadding: 30
}));


