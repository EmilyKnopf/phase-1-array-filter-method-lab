// Code your solution here
function findMatching(names, string1){
    return names.filter((match1) => match1.toLowerCase() === string1.toLowerCase()

    )
}

function fuzzyMatch(names2, string2){
    return names2.filter((nameMatch) => nameMatch.toLowerCase().indexOf(string2.toLowerCase()) === 0 
    )
}

function matchName(obj, string3){
    return obj.filter((nameHometown) => nameHometown.name === string3)
    
}