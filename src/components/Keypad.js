// Code Keypad Component Here

function Keypad (){
    printInput = (() => console.log('Entering password...'));
    return (
        <div>
            <input type="password" onChange={printInput}/>
        </div>
    )
}

export default Keypad;