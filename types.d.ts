type Result = {
    pageid : number,
    ns : number,
    title : string,
    extract : string,
    index : number,
    thumbnail? : {
        source : string,
        width : number,
        height : number
    }
}

type SearchResult = {
    query? : {
        pages? : Result[]
    }
}