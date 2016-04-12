start
=(lool)*

lool=
statement
/declaration
/ifstatement

statement
=left:variable " = " right:additive terminator line{return right}
/left:variable " = " right:multiplicative terminator line {return right}
/left:variable " = " right:substraction terminator line{return right}
/left:variable " = " right:division terminator line{return right}

declaration
=declaration: (left:variable " = " right:integer) terminator line {return String(declaration).split('=')[1]}


ifstatement
="aa"["  "]* left:(variable/integer) " == " right:(variable/integer) terminator line {return eval(left)==eval(right)}
/"aa"["  "]* left:(variable/integer) " < " right:(variable/integer) terminator line {return (left<right)}
/"aa"["  "]* left:(variable/integer) " > " right:(variable/integer) terminator line {return (left>right)}

additive
=add: (left:(integer/variable) "+" right:(integer/variable)) {return add}

multiplicative
=left:integer "*" right:integer {return left*right}

substraction
=left:integer "-" right:integer{return left-right}

division
=left:integer "/" right:integer{if (right==0) return "???"; else return left/right}

variable
=[A-Za-z]+ 

integer "integer"
=digits:[0-9]+ {return parseInt(digits.join(""),10);}

terminator
=["  "]*"€"

line
=[\n]*
