parser grammar regexParser;
options { tokenVocab = regexLexer; }

// Parser root context, ensures all input is matched
root: regExp EOF
    ;

// Regular Expression
regExp : branch (PIPE branch)*
    ;

// Branch
branch : piece*
    ;

// Piece
piece : atom quantifier?
    ;

// Quantifier
quantifier : QUESTION | STAR | PLUS | StartQuantity quantity EndQuantity
    ;
quantity : quantRange | quantMin | QuantExact
    ;
quantRange : QuantExact COMMA QuantExact
    ;
quantMin : QuantExact COMMA
    ;

// Atom
atom : Char | charClass | (LPAREN regExp RPAREN)
    ;

// Character Class
charClass : charClassEsc | charClassExpr | WildcardEsc
    ;

// Character Class Expression
charClassExpr : (NegCharGroup | NestedNegCharGroup | PosCharGroup | NestedPosCharGroup) charGroup EndCharGroup
    ;

// Character Group
// In order to disambiguate the use of DASH's roles in Character Class Subtraction and in posCharGroup
// tail, we explicitly handle it here. ANTLR will consider the subrules in order and they completely
// disambiguate use [a--[f]], [a-[f]], [a-], [a]. We have borrowed some of the clarification from
// https://www.w3.org/TR/2012/REC-xmlschema11-2-20120405/ to make this work
charGroup : posCharGroup? DASH DASH charClassExpr
    | posCharGroup DASH charClassExpr
    | posCharGroup DASH?
    | DASH
    ;

// Positive Character Group
posCharGroup : DASH? (charRange | charClassEsc)+
    ;

// Character Range, sans the DASH possibility
charRange : seRange | XmlChar
    ;
seRange : charOrEsc DASH charOrEsc
    ;
charOrEsc : XmlChar | SingleCharEsc
    ;

// Character Class Escape
charClassEsc : SingleCharEsc | NestedSingleCharEsc | MultiCharEsc | NestedMultiCharEsc | catEsc | complEsc
    ;

// Category Escape
catEsc : (CatEsc | NestedCatEsc) charProp EndCategory
    ;
complEsc : (ComplEsc | NestedComplEsc) charProp EndCategory
    ;
charProp : IsCategory | IsBlock
    ;
