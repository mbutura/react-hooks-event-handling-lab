// Code EyesOnMe Component Here

function EyesOnMe (){
    const focusPlease = ((ev) => console.log('Hey! Eyes on me!'));
    const goodFocus = ((ev) => console.log('Good!'));
    return (
        <div>
            <button onBlur={focusPlease} onFocus={goodFocus}>Eyes on me</button>
        </div>
    )
}

export default EyesOnMe;