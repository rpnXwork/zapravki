let data = [
    { id: 1, name:"gg" },
    { id: 2, name: 'ff' },
    { id: 3, name: 'dd' },
    { id: 4, name: 'ss' },
]

let newdata = [
    { id: 2, name: 'FF' },
    { id: 3, name: 'DD' },
]

let newstate = data.map((key,i)=>{
    newdata.map((newdataitem, i)=>{
        if (key.id === newdataitem.id){
            key = newdataitem
        }
    })
    return key
})

console.log(newstate)