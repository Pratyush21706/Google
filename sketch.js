function setup(){
}

function draw(){
    if(window.innerWidth>799){
        console.log('I will do It ')
            select(`.logo`).style(`font-size`,`70pt`)
//                              select(`.search`).style(`margin-bottom`,`-200px`)
                              select(`.hr`).style(`margin-left`,`89%`)



    }
      if(window.innerWidth<799){
        console.log('I will do It ')
            select(`.logo`).style(`font-size`,`50pt`)
                              select(`.hr`).style(`margin-left`,`62%`)

//margin-top
    }
}
