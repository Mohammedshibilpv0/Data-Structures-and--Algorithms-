class Graph{
    constructor() {
        this.vertices={}
    }

    addVertex(value){
        if(!this.vertices[value]){
            this.vertices[value]=[]
        }else{
            console.log("alreadry in graph");
        }
    }

    addEdges(vertex1,vertex2){
        if(this.vertices[vertex1]&&this.vertices[vertex2]){
            this.vertices[vertex1].push(vertex2)
            this.vertices[vertex2].push(vertex1)
        }else{
            console.log("both elememt is not in graph");
        }
    }

    deleteVertex(value){
        if(this.vertices[value]){
            delete this.vertices[value]

            for(let vertex in this.vertices){
                this.vertices[vertex]=this.vertices[vertex].filter(v=> v!==value)
            }
        }else{
            console.log("no elemet found");
        }
    }

    deleteEdge(vertex1,vertex2){
        if(this.vertices[vertex1]&& this.vertices[vertex2]){
            for(let vertex in this.vertices){
                this.vertices[vertex1]=this.vertices[vertex1].filter(v=> v!==vertex2)
                this.vertices[vertex2]=this.vertices[vertex2].filter(v=> v!==vertex1)
            }
        }else{
            console.log("no edges");
        }
    }

    print(){
        for(let vertex in this.vertices){
            console.log(vertex+"->"+this.vertices[vertex].join(','));
        }
    }
}

let graph=new Graph()
graph.addVertex('s')
graph.addVertex("h")
graph.addVertex("i")
graph.addVertex("b")
graph.addEdges('s','h')
graph.addEdges('h','i')
graph.addEdges('b','i')
graph.print()