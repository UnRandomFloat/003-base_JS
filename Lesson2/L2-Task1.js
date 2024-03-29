;"use strict";
//пример 1
let a = 1, b = 1, c, d;
c = ++a;
alert(c); 
/* ответ: 2
это произошло потому что префиксный инкримент сначала увеличивает значение переменной a,
а потом переменной с присваивается значение увеличенной переменной a*/

//пример 2
d = b++;
alert(d); 
/*ответ: 1
а здесь инкремент постфиксный, сначала переменной d присваивается значение переменной b(на этом этапе b=1),
а потом переменной b присваивается увеличенное на единицу значение)
*/

//пример 3
c = 2 + ++a;
alert(c); 
/*ответ: 5
к моменту выполнения этого примера значения переменных:
с=2 ; а=2;
А следовательно переменной с будет присвоенно новое значение выражения:
2 + ++a=2+3(префиксная форма инкремента)=5;
*/

//пример 4
d = 2 + b++;
alert(d); //ответ: 4
alert(a); //3
alert(b); //3
/*к моменту выполнения этого примера значения переменных:
с=5 ; а=3; d=1; b=2
переменной d будет присвоенно новое значение:
2 + b++=2+2=4; - здесь постфиксный инкримент (сначала будет вычисленно выражение а потом значение b будет увеличено на 1)
*/
