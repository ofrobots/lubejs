'use strict'

var Parser = function (src) {
  this.peek = 0;
  this.n = 0;
  this.src = src;
  this.col = 0;
  this.c = 0;
  this.li = 1;
  this.v        = 12 ;  
  this.foundStmt = false;
  this. i   =       null ; 
  this. lttype= "";
  this. ltcontents = "" ;
  this.prec = 0 ;
  this.li0 = 0;
  this.col0 = 0;
  this.c0 = 0;
};
var _c = function (c) { return c.charCodeAt(0); };
var _9 = _c('9'), _0 = _c('0'),
    _mul = _c('*'), _ws = _c(' '),
    _cubO = _c('{'), _cubC = _c('}'),
    _and = _c('&'), _mod = _c(('%')),
    _min = _c(('-'));
var Num,num = Num = function (c) { return (c >= _0 && c <= _9)};
var IDHead = function (c) {
  return [125, 59, 123, 45, 42, 38, 37].indexOf(c) === -1;
};
var IDBody = function (c) {
  return false;
};
var lp = Parser.prototype;
lp.next = function () {
  this.skipS();
  if (this.c >= this.src.length) {
      this. lttype =  'eof' ;
      this.ltcontents=  '<<EOF>>';
      return ;
  }
  var c = this.c,
      l = this.src,
      peek  = this.src.charCodeAt(this.c),
      start =  c;
  if ( IDHead(peek) ) {
    this.li0 = this.li;
    this.col0 = this.col;
    this.c0 = this.c;
    while ( ++c  < l.length ) {
      if ( IDBody( peek = l.charCodeAt(c) ) ) continue;
      break ;
    }
    this.c = c;
    this.lttype= 'Identifier';
  } else {
    switch (peek) {
      case _min:
      case _mul:
      case _mod: 
      case _and:
         c++ ;
         this.prec = 0xAD;
         this.lttype = 'op';
         this.ltcontents = l.slice(this.c,c)  ; 
         this.c=c;
         break ;
      default:
        this.c0 = c;
        this.col0= this.col;
        this.li0 = this.li;
        this.c=c;
        this.ltcontents = this.lttype = this.src.charAt(this.c++);
    }
  }
  this.col += ( this.c - start );
};
lp.skipS = function() {
     var c = this.c,
         l = this.src,
         e = l.length,
         start = c;
     while ( c < e ) {
       switch ( l.charCodeAt ( c ) ) {
         case _ws :
             while ( ++c < e &&  l.charCodeAt (  c ) == _ws );
             continue ;
         default :
            this.col += (c-start ) ;
            this.c=c;
            return ;
       }
     } 
  this.col += (c-start ) ;
  this.c = c ;
};
lp.semiLoc = function () {
  switch (this.lttype) {
    case ';': var n = this.loc() ;   this.next () ;  return n  ;
    case 'eof': return this.loc();
    case '}':
      return this. locOn   ( 1   )                                    ;
  }
  return null ;
};
lp . semiI = function() { return this. ltcontents == ';' ? this.c : 0 ;  }
lp . loc      = function()  { return  { line: this.li , column: this.col       }; }
lp . locBegin = function()  { return  { line: this.li0, column: this.col0      }; }
lp . locOn    = function(l) { return  { line: this.li, column: this.col - l  }; }  
lp . numstr    =   function () {
  var n = {
    type : 'Literal',
   value : null, 
   start : this.c0,
     end : this.c,
   loc : { start : this.locBegin() , end    : this.loc() } ,
   contents : this.ltcontents
  };
  this.next   () ;
  return n   ;
};
lp.lit = function(_v) { 
  var n = {
    type : 'Literal',
   value : _v ,
   start : this.c0,
     end : this.c,
   loc : { start : this.locBegin(),
     end : this.loc() } ,
   contents : this.ltcontents
  };
  this.next   () ;
  return n   ;
};      
lp.tok = function() {
 return {
      type : this.lttype,
  contents : this.ltcontents,
     start : this.c - this.ltcontents.length,
       end : this.c,
     loc : { start : this.locOn (this.ltcontents.length),
               end : this.loc   ()   }
 };   
}
lp.parseProgram = function () {
  this.next() ;
  this.blck() ;
  this.next()
};
lp.blck = function () { // blck ([]stmt)
  var stmts = [], stmt;
  while (stmt = this.parseStatement( false )) stmts.push(stmt);
  return (stmts);
};
lp.parseStatement = function ( nullNo       ) {
  var head, l, e ;
  switch (this.lttype) {
    case '{': return this.parseBlckStatement();
    case ';':
       l  =  { type: 'EmptyStatement', start : this.c - 1,
               loc : { start : this.locOn(1) , end : this.loc() }, end : this.c };
       this.next   () ;
       return l;
    case 'eof': return;
  }
  var head = this.parseExprHead (0);
  if ( !head ) {
    return ;
  }
  if (this.foundStmt) { this.foundStmt = false; return head; } 
  head = this .parseNonSeqExpr(head, 0, 0 ) ;
  e  = this.semiI() || head . end  ;
  head = { 
    type : 'ExpressionStatement', 
    expression : core( head ) , 
    start : head.start ,
    end : e ,
    loc : { start : head.loc.start, end : this.semiLoc() || head .loc.end }
  };
  return head  ;
};
lp.parseBlckStatement = function () {
  var startc = this.c-1, startLoc = this.locOn(1)  ;
  this.next () ;
  var _e = this.blck   () ;  
  var n = {
        type  : 'BlockStatement',
        body  : _e  ,
        start : startc ,
          end : this.c ,
        loc   :{ start : startLoc , end :   this.loc   ()  } 
  }
  this.next();
  return n;
};
lp.parseNonSeqExpr = function (head, breakIfLessThanThis , cFlags_For ) {
  var n ;
  var _b = null  , _e = null  ; 
  var hasPrefixOrPostfix = false, prec, o, precOrAssocDistance;
  while (!false) {
    switch (this.lttype) {
      case '-' :
      case 'op' :
         break ;
     default:
        return head;
    }
    precOrAssocDistance = prec - breakIfLessThanThis;
    if (precOrAssocDistance != 0 ? precOrAssocDistance < 0 : (prec & 1)) return head;
    o = this. ltcontents ;
    this.next   () ;
    n = (this.parseNonSeqExpr(this.parseExprHead(),prec, cFlags_For ))   ;
    head =  {
        type: (prec==0x09 || prec == 0x0B ) ? 'LogicalExpression' : 'BinaryExpression' , 
   operator :o,
      start : head.start ,
        end : n.end ,
      loc   : {    start : head.loc.start , end : n.loc.end   }  , 
     left   : core(head) ,
    right   : core(n) ,
   }  ;
 }
};
lp.parseExprHead = function (cFlags_For_Sh_Non_Ex ) {
  if ( this . lttype == 'Identifier' ) {
      return this.id () ;
  }
} ;
lp.id = function () {
   var e = {  type   : 'Identifier' ,
             value   : null,
            start    : this.c0,
               end   : this.c , 
            loc      : { start : this.locBegin   ()  ,
                         end :   this.loc        ()   } ,
           contents  : null                               ,
              pDepth : 0 ,
   };
   this.next   () ;
   return e ; 
};
var core = function(n ) { return ( ( n . type == 'paren' ? n.expr : n )) ; } 

// this is the one that triggers a segmentation fault (code 139),  and occasionally an 'invalid instruction' (code 132)
// it happens about 7 times out of 30 rounds
var tok = "n";
while (tok.length - 400000 <= -400) {
  tok += ";{a-b*c&d%e*a-b*c&d%e }";
}

print( 'length of the input:' , tok.length )  ;

var run = 10; while ( run    ) {
   print(run ) ;
   new Parser((tok)).parseProgram() ;
   run -- ; 
}
