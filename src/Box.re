open RandomColorRe;

[@react.component]

let make = () =>{

    let color = randomColor();
    <h2 style={ReactDOMRe.Style.make( 
    ~width="50px",
    ~height="50px",
    ~margin="10px",
    ~display= "inline-flex",
    ~backgroundColor= color,
    (),
    )}></h2>
};
let default=make;