true && true ---> true
true && false ----> false
false && true ----> false
false && false ----> false

true || true ----> true
true || false ----> true
false || true ----> false
false || false ----> false



false || (true && false) // Or || looks for first true it can find. It looks at first then goes to second operand. Second operand has && which means that both parts need to be true. Since one is false the total looks like   false || false --> FALSE
 
true || (1 + 2); //this evalutes to TRUE. It is an || (or) experssion so it short circuts after and returns first operand

(1 + 2) || (true); // this will evaluate ==== 3. It is an || (or) expression so it short circuts after and returns first operand

true && (1 + 2); // this will return === 3. It is an && (and) expression so it evaluates and returns the right side 

false && (1 + 2);// this will return FALSE. The false operand reads first.

(1 + 2) && true; // this will return TRUE. it evaluates the last operand

(32 * 4) >= 129; // This wil evaluate to FALSE. The (32 * 4) --> 128 >= 129 is calculated first then it checks values

false !== !true // This will return FALSE. it is asking if false does not equal false. 

true === 4; // this will return FALSE

false === (847 === '847') // This will return TRUE. The expression on the right gets evaluated and is false

false === (847 == '847') // This will return FALSE. The operand of the right will be true ... sO False === True  is False

(!true || (!(100 / 5) === 20) || ((328 / 4) === 82)) || false // This will result in TRUE