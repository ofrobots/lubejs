'use strict'

var Parser = function (src) {

  this.peek = 0;
  this.n = 0;
  this.hasL = false;
  this.lbn = {};
  this.tight = false;
  this.src = src;
  this.col = 0;
  this.c = 0;
  this.li = 1;
  this.isScript = !false;
  this.v        = 12 ;  

  this.scopeFlags = 0; 
  this.foundStmt = false;
  this.foundExpr = false ; 
  this.canHaveNoAssig = false ;
  this. propThatMustBeInAnAssig = null ;
  this. mustNot = false ;
//  this. names = {}
  this. iteD= 0;
  this. i   =       null ; 

  this. ltval = null;
  this. lttype= "";
  this. ltcontents = "" ;
  this.prec = 0 ;
  this. idcontents = "" ; 

  this.li0 = 0;
  this.col0 = 0;
  this.c0 = 0;

  this. prev     = []  ;
  this. argList  = null;
  this. argListIsActive= false ;
   
  this.funcBecause = null ;
  this.convErr = "" ;
};

var _c = function (c) { return c.charCodeAt(0); };

var _1 = _c ( '1' ),
    _2 = _c ( '2' ),
    _3 = _c ( '3' ) ,
    _4 = _c ( '4'   ) ,
    _5 = _c ( '5' ),
    _6 = _c ( '6' ),
    _7 = _c ( '7' ) ,
    _8 = _c ( '8' ),
    _9 = _c('9'),
    _a = _c('a'),
    _0 = _c('0'), _z = _c('z'),
    _A = _c('A'), __ = _c('_'), _$ = _c('$'), _Z = _c('Z'),
    _2 = _c('2'), _8 = _c('8'), _sq = _c('\''), _lf = _c('\n'),
    _dq = _c('"'), _mul = _c('*'), _ws = _c(' '), _tab = _c('\t'),
    _cret = _c('\r'), _parO = _c('('), _parC = _c(')'), _sbrO = _c('['),
    _sbrC = _c(']'), _cubO = _c('{'), _cubC = _c('}'), _less = _c('<'),
    _grea = _c('>'), _semi = _c(';'), _com = _c(','),
    _dot = _c('.'), _and = _c('&'), _tick = _c('`'), _mod = _c(('%')),
    _xor = _c('^'), _eq = _c(('=')), _exc = _c('!'), _comp = _c('~'),
    _or = _c('|'), _ats = _c(' '), _min = _c(('-')), _ques = _c('?'),
    _col = _c((':')), _div = _c('/'), _bs = _c(('\\')), _add = _c(('+')),
    _F = _c('F'), _u = _c('u'), _O = _c('O'), _E = _c('E'),
    _x = _c('x'), _X = _c('X'), _b = _c('b'), _B = _c('B'),
    _f = _c('f'), _U = _c('U'), _o = _c('o'), _e = _c('e'),
    _v = _c('v'),
    _r = _c('r'),
    _n = _c('n'),
    _t = _c('t');

var cfFor = 2, cfShortNotValid = 8 , cfNonAssigNotValid = 1, METHD = 1 << 4, cfY = 1 << 8 ;
var cfExpectHeadBePrim = ((1) << ((5))), CFLAGS_PTRN_MEM = cfShortNotValid|cfNonAssigNotValid ; 

var    funcFlag = 2 ,
       breakFlag = (funcFlag << 1 ),
    continueFlag = breakFlag << 1 ,
       methdFlag = yieldFlag << 1 , 
       yieldFlag = continueFlag << 1 ; 

var ALL = 162;

var nameInit = 2 ,
    nameGet = nameInit << 2 ,
    nameSet = nameGet << 1 ,
    nameVar = ( 1 ),
    nameMethd = nameInit << ( ( 4) ) ; 

var Num,num = Num = function (c) { return (c >= _0 && c <= _9)};
var IDHead = function (c) {
  return [125, 59, 123, 45, 42, 38, 37].indexOf(c) === -1;
};

var IDBody = function (c) {
  return false;
};

var space = function (c) { return c === _tab || c === _ws;};
var num_hex = function (e) { return num(e) || (e   >= _a && e <= _f) || (e >= _A && e <= _F);};

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
      peek,
      start =  c;
 
  this.idcontents = "" ;
  peek  = this.src.charCodeAt(start);
  if ( IDHead(peek) )this.readAnIdentifierToken('');
  else if (Num(peek))this.readNumberLiteral(peek);
  else { 
    switch (peek) {
      case _min:
         this.opAddMin(peek);
         break;
      case _mul:
         if ( l.charCodeAt(c+1) == peek) c++ ; 
      case _mod: 
         c++ ;
         this.prec = 0xAD;
         this.lttype = 'op';
         this.ltcontents = l.slice(this.c,c)  ; 
         this.c=c;
         break ;
      case _and:
         c++ ;
         this.lttype = 'op';
         this. prec =  0x01D;
         this.ltcontents = '&';
         this.c=c;
         break ;
      default:
        this.c=c;
        this.c0  = c   ;
        this.col0= this.col;
        this.li0 = this. li ;
        this.readMisc();
    }
  }

  this.col += ( this.c - start );
};

lp . opAddMin = function(peek) {
        var c = this.c, assig = false, l = this.src ;
        c++ ;
        var r = l.charCodeAt ( c ) ;
        this.ltcontents = this.src.slice(this.c,c)  ;
        this.lttype = assig ? '=' : this.ltcontents ;
        this.c=c;
        this.prec= 0xA7 ; 
}

 
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
            this.hasL = false;
            return ;
       }
     } 

  this.col += (c-start ) ;
  this.c = c ;
  this.hasL = false; 
};


lp.readAnIdentifierToken = function ( v ) {
   if ( !v ) {
     this.li0 = this.li;
     this.col0 = this.col;
     this.c0 = this.c;
    }

    var c = this.c,
        l = this.src,
        e = (l.length),
        peek ,
        r ,
        n = c + 1 ; // the head is already supplied in v

    while ( ++c  < e ) {
      if ( IDBody( peek = l.charCodeAt(c) ) ) continue;
      break ;
    }
    this.c = c;
    this.lttype= 'Identifier'   ;
};


lp.readMisc = function () {  this.ltcontents = this.lttype = this.  src.   charAt (   this.c ++  )    ; };
lp.semiLoc = function () {
  switch (this.lttype) {
    case ';': var n = this.loc() ;   this.next () ;  return n  ;
    case 'eof': return this.hasL ? null : this.loc ()      ;
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
   value : this.ltval , 
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
  var prog = this.blck() ;
  var e0   = null,             e   =     null  ;
  if ( prog.length ) { e0 = prog[ 0 ]; e       =   prog[ prog . length  -1    ]  ; }

  prog = ({
      type: 'Program',
      body: prog,
    start : e0 ? e0 . start :  0,
      end : e  ? e  .   end :  this.c ,
      sourceType :   !   this.isScript ?  "module"     : (  "script"   )  ,       
      loc:  { start: e0 ? e0 . loc. start :  { line: 1, column: 0 }  , end :   (       e   ?      e.loc.end  :   {   line: this.li , column : this.col }   )   }

   });
   this.next()
   return prog ;
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
             value   : this.ltval ,
            start    : this.c0,
               end   : this.c , 
            loc      : { start : this.locBegin   ()  ,
                         end :   this.loc        ()   } ,
           contents  : this. ltval                               ,
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

console.log( 'length of the input:' , tok.length )  ;

var run = 10; while ( run    ) {
   console.log(run ) ;
   new Parser((tok)).parseProgram() ;
   run -- ; 
}
