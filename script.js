function encryption(s) {
    var str = s.replace(/\s/g, '')
    var bigarray = [];
    for(var i = 0; i < Math.ceil(Math.sqrt(str.length)); i++){
        bigarray.push([]);
    }
    for(var i = 0; i < str.length; i++){
        bigarray[i % Math.ceil(Math.sqrt(str.length))] = bigarray[i % Math.ceil(Math.sqrt(str.length))] + str[i];
        bigarray[i % Math.ceil(Math.sqrt(str.length))] = bigarray[i % Math.ceil(Math.sqrt(str.length))]
    }
    var final = (bigarray.toString().replace(/,/g,' '));
    return final
}
