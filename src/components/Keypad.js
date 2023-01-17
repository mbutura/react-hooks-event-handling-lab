// Code Keypad Component Here

function Keypad (){
    const printInput = ((ev) => console.log('Entering password...'));
    return (
        <div>
            <input type="password" onChange={printInput}/>
        </div>
    )
}

export default Keypad;