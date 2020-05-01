var session = {    
    numberOfPlayers : -1,
    nameOfSession : -2,
    numberOfHoles :-3,
    players : []
}

var player = {
    name : "empty",
    score : -1
}

function submit(numberOfPlayers, nameOfSession, numberOfHoles)
{
    session.numberOfPlayers = numberOfPlayers
    session.numberOfHoles = numberOfHoles
    session.nameOfSession = nameOfSession
    
    // alert(
    //         "The number of players are: "+session.numberOfPlayers+"\n"
    //         + "The name of the session is: "+session.nameOfSession+"\n"
    //         + "The number of Holes are: "+session.numberOfHoles
    //     )


    // alert("Opening page!")
    // https://stackoverflow.com/questions/8454510/open-url-in-same-window-and-in-same-tab
    window.open("./setup.html","_self")

//    alert("page opened!")

   // https://stackoverflow.com/questions/23127498/persisting-values-in-javascript-object-across-browser-refresh
      
//    alert("cookie doing!")
   localStorage.clear()
   localStorage.sessionInStorage = JSON.stringify(session)

}

function printPage() {
    session = JSON.parse(localStorage.sessionInStorage)
    // let temporaryStorage = []

    for(let i=1;i<=session.numberOfPlayers;i++) {
       // alert("Player "+i)

       // https://stackoverflow.com/questions/14853779/adding-input-elements-dynamically-to-form
       // https://www.w3schools.com/js/js_htmldom_nodes.asp

       var para = document.createElement("p")

       var text = document.createTextNode("Name of Player "+i)
       var input = document.createElement("input")

       input.type = "text"
       input.name = "pName"+i
       input.setAttribute("id",input.name)
    //    temporaryStorage[i]=input.name

       document.body.append(para)
       para.appendChild(text)
       para.appendChild(input)
    }

    // console.log(document.getElementById("pName"+1).textContent)
    // console.log(document.getElementById("pName"+2).textContent)
    // console.log(document.getElementById("pName"+3).textContent)


    var button = document.createElement("button")
    button.setAttribute("type","button")
    button.textContent = "Continue"
    para.appendChild(button)
    // https://stackoverflow.com/questions/14028959/why-does-jquery-or-a-dom-method-such-as-getelementbyid-not-find-the-element
    // document.addEventListener('DomContentLoaded',
    // window.onload = function() {
    // if(!textFieldsAreEmpty()) {
            button.addEventListener("click",
            function() { 
                console.log(session)
                // while(!textFieldsAreEmpty()) {
                    for(let i=1;i<=session.numberOfPlayers;i++) {
                        name="pName"+i
                        var nameValue = document.getElementById(name).value
                        if(nameValue === null)  name = "undefined"
                        var p = {
                            name:nameValue,
                            score:0
                        } 
                        session.players.push(p)
                    }
                    localStorage.sessionInStorage = JSON.stringify(session)
                    var _ = window.open("process.html",'_self')
                    // proceed(session)
                }
               
            // }
        )
    
    // function updatedValue(name) {
    //     let i=0;
    //     while(true) {
    //         if(!textFieldIsEmpty(name)) break;
    //         else if(i<10) {
    //             console.log("waiting...")
    //             i++
    //             break;
    //         }
    //     }
    //     return document.getElementById(name).value
    // }
    
    // function textFieldIsEmpty(name) {
    //     // for(let i=1;i<=temporaryStorage.length-1;i++) {
    //         if(document.getElementById(name).textContent==="") {
    //             return true
    //         }
    //     // }
    //     return false;
    // }

    // }
    
    // )



    // https://stackoverflow.com/questions/43042901/javascript-click-event-handler-fires-without-clicking
    // button.addEventListener("click", 
    // function() 
    //     { 
    //         console.log(session)
    //         for(let i=1;i<=session.numberOfPlayers;i++) {
    //             name="pName"+i
    //             var p = {
    //                 name:document.getElementById(name).textContent,
    //                 score:0
    //             } 
    //             session.players.push(p)
    //         }
    //         proceed(session)
    //         // wrapper(session, i,input.name,  document.getElementById(input.name).textContent )
    //     }
    // )
}

// function wrapper(session, i,name, text) {
//     return function() {
//         alert("index: "+i+" inputName "+ name + " object: " + text)
//         // storePlayerName(wrapper(i))
//         proceed(session,i,text)
//     }
// }

function proceed() {
    // https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_win_open4
    session = JSON.parse(localStorage.sessionInStorage) // Mozilla having issue with this - perhaps because the first time, there is no localstorage?

    for(let i=1;i<=session.numberOfHoles;i++) {
        var para = document.createElement("p")

        var textRoundNumber = document.createTextNode("Round #"+i+"\n")
        para.appendChild(textRoundNumber)
        document.write("<br>")

        for(let j=1;j<=session.numberOfPlayers;j++) {
            var text = document.createTextNode(session.players[j-1].name+"'s score:")
            var input = document.createElement("input")

            input.type = "text"
            input.setAttribute("id",session.players[j-1].name)

            document.body.append(para)
            para.appendChild(text)
            para.appendChild(input)
        }
    }

    var button = document.createElement("button")
    button.setAttribute("type","button")
    button.textContent = "Continue"
    para.appendChild(button)

    button.addEventListener("click", 
        function() { 
                for(let i=0;i<session.numberOfHoles;i++) {
                    for(let j=1;j<=session.numberOfPlayers;j++) {
                        textScore=document.getElementById(session.players[j-1].name).value
                        session.players[j-1].score+=Number(textScore)
                    }
                }  

                winner=""
                bestScore=Number.MAX_VALUE

                for(let i=0;i<session.numberOfPlayers;i++) {
                    if(session.players[i].score<bestScore) {
                        bestScore=session.players[i].score
                        winner=session.players[i].name
                    }
                }

                alert("The winner is "+winner+"!! Congratulation!!!!")
                console.log(session)
            }
    )
}