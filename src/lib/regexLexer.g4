lexer grammar regexLexer;

LPAREN : '('
    ;
RPAREN : ')'
    ;
PIPE : '|'
    ;
PLUS : '+'
    ;
QUESTION : '?'
    ;
STAR : '*'
    ;
WildcardEsc : '.'
    ;
Char : ~('.' | '\\' | '?' | '*' | '+' | '(' | ')' | '|' | '[' | ']')
    ;

// Quantifier's quantity rule support
StartQuantity : '{' -> pushMode(QUANTITY)
    ;

// Single Character Escape
SingleCharEsc : SINGLE_ESC
    ;

// Multi-Character Escape
MultiCharEsc : MULTI_ESC
    ;

// Category Escape
CatEsc : CAT_ESC -> pushMode(CATEGORY)
    ;
ComplEsc : COMPL_ESC -> pushMode(CATEGORY)
    ;

// Positive/Negative Character Group
NegCharGroup : '[^' -> pushMode(CHARGROUP)
    ;
PosCharGroup : '[' -> pushMode(CHARGROUP)
    ;

mode QUANTITY;
EndQuantity : '}' -> popMode
    ;
QuantExact : [0-9]+
    ;
COMMA : ','
    ;

mode CATEGORY;
EndCategory : '}' -> popMode
    ;

// Categories
IsCategory : Letters | Marks | Numbers | Punctuation | Separators | Symbols | Others
    ;
Letters : 'L' [ultmo]?
    ;
Marks : 'M' [nce]?
    ;
Numbers : 'N' [dlo]?
    ;
Punctuation : 'P' [cdseifo]?
    ;
Separators : 'Z' [slp]?
    ;
Symbols : 'S' [mcko]?
    ;
Others : 'C' [cfon]?
    ;

// Block Escape
IsBlock : 'Is' ([a-z0-9A-Z] | '-')+
    ;

mode CHARGROUP;
NestedSingleCharEsc : SINGLE_ESC
    ;
NestedMultiCharEsc : MULTI_ESC
    ;
NestedCatEsc : CAT_ESC -> pushMode(CATEGORY)
    ;
NestedComplEsc : COMPL_ESC -> pushMode(CATEGORY)
    ;
NestedNegCharGroup : '[^' -> pushMode(CHARGROUP)
    ;
NestedPosCharGroup : '[' -> pushMode(CHARGROUP)
    ;
EndCharGroup : ']' -> popMode
    ;
DASH : '-'
    ;
XmlChar : ~('-' | '[' | ']')
    ;

fragment CAT_ESC : '\\p{'
    ;
fragment COMPL_ESC : '\\P{'
    ;
fragment MULTI_ESC : '\\' [sSiIcCdDwW]
    ;
fragment SINGLE_ESC : '\\' [nrt\\|.?*+(){}\u002D\u005B\u005D\u005E]
    ;