export default function Button({children}){
function clickHandler(){
console.log('Welcome everyone');
}
return(
<li>
<button onClick = {clickHandler}> {children}</button>
</li>
);
}