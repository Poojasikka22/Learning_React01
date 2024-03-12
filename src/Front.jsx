const getValues = ['Random', 'Trial', 'Emoji', 'Entry'];
function getRandomIndex(max){
return Math.floor(Math.random() * (max+1));
}
function Title(){
const index = getValues[getRandomIndex(3)];
return(

 <div>
 <header>
   <p>
    <h3> We are accessing customized component</h3>
                       <b> {[index]} </b>
          This is made with customized effects
   </p>
   </header>
 </div>
);
}
export default Title;