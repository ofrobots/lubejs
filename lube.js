 ( function(_exports) {
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
  this.startStmt = false;
  this.foundStmt = false;
  this.foundExpr = false ; 
  this.canHaveNoAssig = false ;
  this. propThatMustBeInAnAssig = null ;
  this. mustNot = false ;
  this. names = {}
  this. iteD= 0;

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

var g_o =        2 , g_ = 'g'.charCodeAt( 0 ) ,
    u_o = g_o << 1 , u_ = 'u'.charCodeAt( 0 ) , 
    y_o = u_o << 1 , y_ = 'y'.charCodeAt( 0 ) ,
    m_o = y_o << 2 , m_ = 'm'.charCodeAt( 0 ) ,
    i_o = m_o << 2 , i_ = 'i'.charCodeAt( 0 ) ;

var ALL = 0;

try { new RegExp ( "lube", "g" ) ; ALL |= g_o ; } catch ( _r ) {}
try { new RegExp ( "lube", "u" ) ; ALL |= u_o ; } catch ( _r ) {} 
try { new RegExp ( "lube", "y" ) ; ALL |= y_o ; } catch ( _r ) {} 
try { new RegExp ( "lube", "m" ) ; ALL |= m_o ; } catch ( _r ) {} 
try { new RegExp ( "lube", "i" ) ; ALL |= i_o ; } catch ( _r ) {}


var nameInit = 2 ,
    nameGet = nameInit << 2 ,
    nameSet = nameGet << 1 ,
    nameVar = ( 1 ),
    nameMethd = nameInit << ( ( 4) ) ; 

var Num,num = Num = function (c) { return (c >= _0 && c <= _9)};
var IDHead = function (c) {
  return (c <= _z && c >= _a) ||
          c === _$ ||
         (c <= _Z && c >= (_A)) ||
          c== ( ( __ ) )||
         (IDS_[c >> D_INTBITLEN] & (1 << (c & M_INTBITLEN)));
};

var IDBody = function (c) {
  return (c <= _z && c >= _a) ||
          c === _$ ||
         (c <= _Z && c >= (_A)) ||
         (c <= _9 && c >= _0) || (IDC_[c >> D_INTBITLEN] & (1 << (c & M_INTBITLEN)));
};

var space = function (c) { return c === _tab || c === _ws;};
var num_hex = function (e) { return num(e) || (_c,(e) >= _a && (e) <= _f) || ((e) >= _A && ((e) <= _F));};

var isize = function () {
  var i = (((0)));
  while (0 < (1 << ((i++)))) if (i >= 512) return 8;
  return i;
}
var INTBITLEN = (isize());
var M_INTBITLEN = INTBITLEN - (1),D_INTBITLEN = 0;while (M_INTBITLEN >> (++D_INTBITLEN));

var fromRunLenCodes = function (runLenArray, bitm ) {
  bitm = bitm || [];
  var bit = runLenArray[0];
  var runLenIdx = 1, bitIdx = 0;
  var runLen = 0;
  while (runLenIdx < runLenArray.length) {
    runLen = runLenArray[runLenIdx];
    while (runLen--) {
      while ((INTBITLEN * (bitm.length)) < bitIdx) bitm.push(0); 
      if (bit) bitm[bitIdx >> D_INTBITLEN] |= (1 << (M_INTBITLEN & bitIdx));
      bitIdx++ ;
    }
    runLenIdx++ ;
    bit ^= 1;
  }
  return (bitm);
}

var _h = function(n) { return n.toString(0x010 ) ; }
var lp = Parser.prototype;
var has   = Object.prototype.hasOwnProperty;

lp.nextraw = function () {
  
  if ( this.skipS() ) return;

  if (this.c >= this.src.length) {
      this. lttype =  'eof' ;
      this.ltcontents=  '<<EOF>>';
      return ;
  }
  var c = this.c,
      l = this.src,
      e = l.length,
      r = 0,
      peek,
      start =  c;
 
  this.idcontents = "" ;

  peek  = this.src.charCodeAt(start);
  if ( IDHead(peek) )this.readAnIdentifierToken('');
  else if (Num(peek))this.readNumberLiteral(peek);
  else { 
    switch (peek) {
      case _dq: case _sq:this.readStrLiteral(peek); break;
      case _min:
      case _add: this.opAddMin(peek) ; break;
      case _dot: this.readDot () ; break ;
      case _eq:  this.opEq () ;   break ; 
      case _less: this.opLess() ;   break ;
      case _grea: this.opGrea() ;   break ;
      case _mul: if ( l.charCodeAt(c+1) == peek) c++ ; 
      case _mod: 
         c++ ;
         if ( l.charCodeAt(c) == _eq) { c ++ ; this.lttype = '=' ;  }
         else {  this.  prec = 0xAD; this.  lttype = 'op'; } 
         this.ltcontents = l.substring(this.c,c)  ; 
         this.c=c;
         break ;

      case _exc:
         c++ ;
         if ( l.charCodeAt ( c ) == _eq ) {
           this. prec = 0x5D ;
           this. lttype = ('op' )  ;  
           c ++ ;
           if ( l.charCodeAt (c) == _eq ) { this.ltcontents = '!==';  c ++ ; }
           else this.ltcontents = '!=' ;
         }
         else { this.ltcontents = this.lttype = '!' ; }
         this.c=c;
         break ;
                                    
      case _comp:
            c++ ; this.c=c; this.lttype = this.ltcontents = '~' ; break ; 

      case _or:
         c++ ; 
         switch ( l.charCodeAt ( c ) ) {
            case _eq : c ++ ; this. lttype = '=' ; this.ltcontents = '|=' ; break ;
            case _or : c ++ ; this. ltcontents = '||' ; this. lttype = 'op'; this. prec = ( 0x09 ) ; break ; 
            default : this. lttype = 'op'; this.  prec = 0x0D ; this. ltcontents = '|'; break ;
         }
         this.c=c;
         break ;

      case _and:
          c++ ;
          switch ( l.charCodeAt ( c ) ) {
            case _eq : c ++ ; this.lttype = '='  ; this.ltcontents = '&=' ;  break ;
            case _and : c ++; this.ltcontents = '&&' ; this.lttype = 'op' ;  this. prec = 0x0B ;  break ;
            default : this.  lttype = 'op' ; this. prec =  0x01D;  this.ltcontents = '&' ;  break ;
         }
         this.c=c;
         break ;

      case _xor:
        c++;
        if ( l.charCodeAt(c ) == _eq ) {  c++ ;   this. lttype = '='  ;  }
        else  { this.  prec = 0x01B ;  this.lttype = 'op' ; } 
        this.ltcontents = l.substring(this.c,c)  ;
        this.c=c  ;
        break; 

// case _com: this.c++ ; return TOK_C ;

      default:
        var mustBeAnID = 0 ;
        this.c=c;

        this.c0  = c   ;
        this.col0= this.col;
        this.li0 = this. li ;
  
        if (_bs == peek) {
          mustBeAnID = 1 ;
          peek = l.charCodeAt(++ this. c);
          if (peek != _u) this.err('u');
          peek = this.peekUSeq();
        }
        if (peek >= 0x0D800 && peek <= 0x0DBFF ) {
            if ( !mustBeAnID ) mustBeAnID = 2 ;
             this . c ++ ; e = peek ; r = this.peekTheSecondByte() ; 
            peek = ((peek - 0x0D800)<<10) + ( r-0x0DC00) + (0x010000) ;
        }
        if (mustBeAnID) {
            if (!IDHead(peek))
                this.err('a ' + mustBeAnID + ' sequence in identifier head position must belong to IDStart group, but it (' + _h(peek) + ') does not');
            this.readAnIdentifierToken( mustBeAnID == (2) ? (String.fromCharCode ( peek, r ) ) : String.fromCharCode ( peek) ); 
        }
 
        else { this.readMisc();}
    }
  }

  this.col += ( this.c - start );
};

lp . opAddMin = function(peek) {
        var c = this.c, assig = false, l = this.src ;
        c++ ;
        var r = l.charCodeAt ( c ) ;
        if ( r == _eq ) { c ++ ; assig = !false;   }
        else if ( r == peek ){ c ++ ;  }
        this.ltcontents = this.src.substring(this.c,c)  ;
        this.lttype = assig ? '=' : this.ltcontents ;
        this.c=c;
        this.prec= 0xA7 ; 
}

lp . opEq = function()  {
    var c = this.c, assig = false ,  l = this.src ;  
    c++ ;
    if ( l.charCodeAt(c ) == _eq ) {
      c++ ;
      if ( l.charCodeAt(c ) == _eq ) c++ ;
         this.lttype = 'op';
         this.prec = 0x5D  ;
    }
    else {
        if ( l.charCodeAt ( c ) == _grea ) c++ ; 
        this.lttype = '=' ;
    }
    this.ltcontents = l.substring(this.c,c)  ;
    this.c=c;
}

lp . opLess = function () {
  var c = this.c, l = this.src;
  c++ ;
  if ( l.charCodeAt(c ) == _less ) {
     c++ ;
     if ( l.charCodeAt(c ) == _eq ) { c++ ; this. lttype = '=' ; } 
     else { this. lttype= 'op' ; this. prec=0xA5;  } 
  }
  else  {
     if ( l.charCodeAt ( c ) == _eq )  c++ ;
     this. prec = 0x9B; 
     this. lttype='op';
  }
  this.ltcontents = l.substring(this.c,c)  ;
  this.c=c; 
}

lp . opGrea = function()   {
  var c = this.c, l = this.src;
  c++ ;
  if ( l.charCodeAt(c ) == _grea ) {
    c++ ;
    if ( l.charCodeAt ( c ) == _grea ) c++ ;
    if ( l.charCodeAt(c ) == _eq ) { c++ ;this. lttype = '='   ; } 
    else { this.lttype = 'op'; this. prec= 0xA5; } ;
  }
  else  {
    if ( l.charCodeAt ( c ) == _eq ) c++ ;
    this.lttype =  'op' ;   
    this. prec= 0x9B ; 
  }
  this.ltcontents = l.substring(this.c,c)  ;
  this.c=c; 
}

 
lp.skipS = function() {
     var noNewLine = !false   ,
         c = this.c,
         l = this.src,
         e = l.length,
         start = c;

     while ( c < e ) {
       switch ( l.charCodeAt ( c ) ) {
         case _ws :
             while ( ++c < e &&  l.charCodeAt (  c ) == _ws );
             continue ;
         case _cret : if ( _lf == l.charCodeAt ( c + 1 ) ) c ++ ; 
         case _lf :
            if ( noNewLine ) noNewLine = false ; 
            start = ++ c ;
            this.li ++ ; 
            this.col = ( 0)
            continue ;
            
         case _tab: c++ ; continue ;
         case _div:
             switch ( l.charCodeAt ( c + ( 1) ) ) {
                 case _div:
                     c ++ ;
                     this.c=c;
                     this.readCmntl () ;
                     if ( noNewLine ) noNewLine = false ;
                     start = c = this.c ;
                     continue ;

                 case _eq:
                   c ++ ;
                   this. hasL = ! noNewLine ;
                   this.col += (c-start ) ;
                   this.c=c;
                   this  .   ltcontents =  '/' ;
                   this. lttype    =    '='    ;
                   return !false; 

                 case _mul:
                   c +=  2 ;
                   this.col += (c-start ) ;
                   this.c = c ;
                   noNewLine = this. readCmntm () && noNewLine ;
                   start = c = this.c ;
                   continue ;

                 default:
                     c++ ; 
                     this. hasL = ! noNewLine ;
                     this.col += (c-start ) ;this.c=c ; 
                     this. prec  = 0xAD ; 
                     this.           lttype =  '/';
                     this. ltcontents = '/' ;
                     return !false; 
             }

         case 0x0020:case 0x00A0:case 0x1680:case 0x2000:
         case 0x2001:case 0x2002:case 0x2003:case 0x2004:
         case 0x2005:case 0x2006:case 0x2007:case 0x2008:
         case 0x2009:case 0x200A:case 0x202F:case 0x205F:
         case 0x3000: c ++ ; continue ;

         case 0x2028:
         case ((0x202<<4) + ( ( 9 ) )) : 
            if ( noNewLine ) noNewLine = false ;
            start = ++c ;
            this.col = 0 ;
            this.li ++ ; continue; 

         default :
            this.col += (c-start ) ;
            this.c=c;
            this.hasL = !noNewLine ;
            return ;
       }
     } 

  this.col += (c-start ) ;
  this.c = c ;
  this.hasL = ! noNewLine ; 
};

lp.peekTheSecondByte = function () {
  var e = this.src.charCodeAt(this.c);
  if (_bs == e) {
    if (_u != this.src.charCodeAt(++this.c)) this.err('the \\ must have "u" after it ;instead, it has ' + this.src[this.c] );
    e = (this.peekUSeq());
  } 
  else this.col--;
  if (e < 0x0DC00 || e > 0x0DFFF )
      this.err('Byte (' + _h(e)+ ') must be in range 0x0DC00 to 0x0DFFF, but it is not ');

  return e;
};

var toNum = function (n) {
  return (n >= _0 && n <= _9) ? n - _0 :
         (n <= _f && n >= _a) ? 10 + n - _a :
         (n >= _A && n <= _F) ? 10 + n - _A : -1;
};

lp.peekUSeq = function () {
  var c = ++this.c, l = this.src, e = l.length;
  var byteVal = 0;
  var n = l.charCodeAt(c);
  
  if (_cubO == n) {
    n = l.charCodeAt(c + 1 );
    do {
      c++ ; 
      n = toNum(n); if (n == - 1) this.err(n[c] + ' is not a valid hexadecimal');
      byteVal <<= 4; byteVal += n;
      if (byteVal > 0x010FFFF ) this.err( 'Byte (' + _h (byteVal) + ') must not be bigger than 0x010FFFF ');
      n = l.charCodeAt(c);
    } while (c < e && n != _cubC);

    if ( c >= e ) this.err( 'Unterminated \\u{ seq' ) ;
    this.c = c;
    return byteVal;
  }

  n = toNum(l.charCodeAt(c));(n == - 1) && this.err(n[c] + ' is not a valid hexadecimal');byteVal = n; c++ ;
  n = toNum(l.charCodeAt(c));(n == - 1) && this.err(n[c] + ' is not a valid hexadecimal');byteVal <<= 4; byteVal += n; c++ ;
  n = toNum(l.charCodeAt(c));(n == - 1) && this.err(n[c] + ' is not a valid hexadecimal');byteVal <<= 4; byteVal += n; c++ ;
  n = toNum(l.charCodeAt(c));(n == - 1) && this.err(n[c] + ' is not a valid hexadecimal');byteVal <<= 4; byteVal += n;

  this.c = c;

  return byteVal;
};

lp.readAnIdentifierToken = function ( v ) {
   
   
   if ( !v ) {
     this.li0 = this.li;
     this.col0 = this.col;
     this.c0 = this.c;
    }

    var c = this.c, l = this.src, e = (l.length), peek ,r ;
    var n = c + 1 ; // the head is already supplied in v

    while (   ++c  <e  ) {
      if ( IDBody( peek = l.charCodeAt(c) ) ) continue;
      if (peek == _bs) {
         if ( !v ) v = l. charAt ( n -1 ) ;
         if ( n < c ) v += l.substring(n,c) ;
         if (_u != l.charCodeAt(this.c = ++c) ) this.err('the \\ must have "u" after it ;instead, it has ' + this.src[this.c]);
         peek = this. peekUSeq() ;
         if (peek >= 0x0D800 && peek <= 0x0DBFF ) {
           this.c++ ;
           r = this.peekTheSecondByte(); 
           if ( !IDBody(((peek-0x0D800)<<10) + (r-0x0DC00) + 0x010000) )
                this.err('a \\u sequence in identifier body position must belong to IDContinue group, but it (' + _h (peek) + ') does not'); 
        
           v += String.fromCharCode( peek, r ); 
         }
         else {
            if ( !IDBody(peek) )
               this.err('a \\u sequence in identifier body position must belong to IDContinue group, but it (' + _h (peek) + ') does not') ; 
            
            v += String.fromCharCode ( peek ) ;
         }
         c = this.c; n = c + 1;
         continue;
       }
       if (peek >= 0x0D800 && peek <= 0x0DBFF ) {
          if ( !v ) { v = l. charAt ( n -1 ) ; }
          if ( n < c ) v += l.substring(n,c) ; 
          r = this.peekTheSecondByte() ;
          if (!IDBody(((peek-0x0D800 ) << 10) + (r-0x0DC00) + 0x010000))
            this.err( 'a \\u sequence in identifier body position must belong to IDContinue group, but it (' + _h (peek) + ') does not' );

          v += String.fromCharCode(peek, r ) ; 
          n = c+ ( 1) ;
          c = this.c ;
          continue;
       }
       break ;
    }
    if ( v ) {    
       if ( n < c )
          v += l . substring(n,c) ;

       this.ltcontents = l.substring( this.c0 , c  )  ; 
       this.ltval = this.idcontents = v  ;
    }
    else    {

       this.idcontents = this.ltcontents =  v = l.substring(this.c,c);
       this. ltval =  v; 
    }

    this.c = c;
    this.lttype= 'Identifier'   ;
};

lp.readNumberLiteral = function (peek) {
  var c = this.c, l = this.src, e = l.length;
  var r = 10 ,v = 0 ;this.lttype  = 'Literal' ;
  this.li0 = this.li ;
  this.col0 = this.col;
  this.c0 = this.c; 
  
  if (peek == _0) {
    r = l.charCodeAt(++c);
    switch (r) {
      case _X:
      case _x:
         if ( !num_hex(l.charCodeAt(++c) ) ) this.err (l[c] + ' is not a valid hexadecimal' ) ;
         while ( c < e && num_hex(r= l .charCodeAt ( (c ) ) ) ) c ++ ;
         this . ltval = parseInt ( this .ltcontents = l.substring(this.c,c) ) ; 
         this.c = c;
         return;

      case _B:
      case _b:
        r = l .charCodeAt ( ++ c) ;
        if ( r != _0 && r != _1 ) this.err( 'got ' + l[c] + ' but expected either 0 or 1' ) ;
        v = r - _0 ; 
        while ( c < e && ( r = l . charCodeAt(c ) , r == _0 || r == _1 ) ) { c ++ ; v<<= 1; v |= (r- _0 ) ; }
        this. ltval = v ;
        this. ltcontents  = l.substring(this.c,c)  ;
        this.c=c; 
        return  ;

      case _O:
      case _o:
        r = l . charCodeAt ( ++ c) ;
        if  ( r < _0 || r >= _8 )  ( this.err( 'must e ' ) ) ;
        v = r - _0 ;
        while ( c < e && ( r = l.charCodeAt ( ++ c) , r >= _0 && r < _8 ) ) c ++, v<<= ( 2 + 1 ) , v |= (r- _0 ) ;
        this. ltval = v ;
        this. ltcontents = l.substring(this.c,c) ;
        this.c=c ;
        return ;

      default:
       if ( r >= _0 && r <= _9 ) {
          if ( this. tight ) this. err( 'in strict no octal num    '   )  ;
 
          v  = 0 ;
          do {
            if ( r >= _8 && v == 0 ) v = 10 ;
            c ++;
          } while ( c < e && ( r = l. charCodeAt ( c )  , r >= _0 && r <= _9 )   )  ;
          if ( v == 0 ) v = 8 ;
 
          this . ltval = parseInt ( this . ltcontents = l.substring( this.c, ( (c) ) ), v ) ;
          this.c=c;
          return ;
       }
       else {
         v = this.c ;
         this.c = c ;
         if ( this. frac ( v  )  )  return ;
         else  { 
            this  .  ltval = 0 ;
            this  .  ltcontents = '0' ;
         }
         return  ;
       }
    }
  } 
  else {
    c = this.c; v = this.c ;
    while (c ++ < e && num(l.charCodeAt(c)));
    this.c = c;
    if ( this. frac ( v  ) ) return ;
    else this  . ltval = ( parseInt ( this  . ltcontents = l. substring(v , this.c ) ) ) ;
  }
  if (c < e && IDHead(l.charCodeAt(c))) this.err('Num can not be follwed by ' + this.src[this.c]);
};

lp . frac = function(n) {
  var c = this.c, l = this.src, e = l.length ;
  if ( n == -1 || l.charCodeAt(c)== _dot )
     while( ++c < e && Num(l.charCodeAt (c)))  ;

  switch(l.charCodeAt(c)){
      case _E:
      case _e: 
        c++;
        switch(l.charCodeAt(c)){case _min: case _add: c++ ; }
        while ( c < e && Num(l.charCodeAt( c) )) c++ ;
  }
  if ( c == this.c ) return false  ;
  this.ltcontents = l.substring (  n   === -1 ? this.c - 1 : n ,   c)  ; this.ltval =  parseFloat ( this. ltcontents   )  ;
  return ! false   ;
}

lp.readStrLiteral = function (start) {
  this.li0 = this.li; this.col0 = this.col; this.c0 = this.c ; 
  var c = this.c += 1, l = this.src, e = l.length, i = 0;
  var v = "", v_start = c ;
  while (c < e && (i = l.charCodeAt(c)) !== start) {
    switch ( i ) {
     case _bs : 
        v  += l.substring(v_start,c );
        this.c = c;
        v  += this.                     readEsc()  ;
        c  = this.c ;
        v_start = ++c ;
        continue ;

     case _cret: if ( l.charCodeAt(c + 1 ) == _lf ) c++ ;
     case _lf :
     case 0x2028 :
     case 0x2029 : this.err( 'a newline can not appear in a str literal' ) ;
    }
    c++;
  }

  if ( v_start != c ) { v += l.substring(v_start,c ) ; }
  this.c = c;
  if (!(c < e && (l.charCodeAt(c)) === start)) {
    this.err('s lit open');
  }
  ++this.c; this. lttype = 'Literal'  ;
  this. ltcontents =  l.substring ( this.c0 , this.c    )  ; this. ltval   =   v   ;
};

lp . readDot = function() {
   ++this.c;
   if( this.src.charCodeAt(this.c)==_dot) {
     if (this.src.charCodeAt(++ this.c) == _dot) { this.ltcontents = this.lttype = '...' ;   ++this.c; return ; }
     this.err('Unexpectd ' + this.src[this.c]) ;
   }
   else if ( Num(this.src.charCodeAt(this.c))) {

     this.lttype = 'Literal' ;         
     return this.frac(  ( -1  )              ) ;
   } 
   this. ltcontents = this.lttype = '.' ;
};

lp.readCmntm = function () {
   var c = this.c, l = this.src, e = l.length ;
   var r, start = c, n = !false ;

   while ( c < e ) 
        switch (r = l.charCodeAt(c++ ) ) {
          case _mul:
             if ( l.charCodeAt(c) == _div) {
                c++;
                this.col += (c-start);
                this.c=c;
                if ( !n && this.isScript && l.charCodeAt(c)      === _min &&
                                            l.charCodeAt(c+1)    === _min &&
                                            l.charCodeAt(c+2)    ===              _grea          ) {
                   this.c += 2 + 1  ;
                   this. readCmntl   () ; 
                } 
                return n;
             }
             continue ;

          case _cret: if( _lf == l.charCodeAt(c)) c++; 
          case _lf:
          case 0x2028:
          case 0x2029: 
            start = c;
            if ( n ) n = false ; 
            this.col = 0 ;
            this.li ++ ;
            continue; 

          default : if ( r >= 0x0D800 && r <= 0x0DBFF ) this.col-- ;
        }

   this.err( ' */ ' ) ;
};

lp.readCmntl = function() {
    var c = this.c, l = this.src, e = l.length, r ;
    L:
    while ( c < e ) 
       switch (r = l.charCodeAt(c++ ) ) {
          case _cret : if ( _lf == l . charCodeAt ( c) ) c++ ; 
          case _lf :
          case 0x2028:
          case ((0x202<<4) + ( ( 9 ) )) :
            this.col = 0 ;
            this.li ++ ; 
            break L ;

          default : if ( r >= 0x0D800 && r <= 0x0DBFF ) this.col-- ;

       }
    this.c=c;
    return ;
};

lp.readMisc = function () {  this.ltcontents = this.lttype = this.  src.   charAt (   this.c ++  )    ; };
lp . readEsc = function ()  {
  var l = this.src   ,      e0   ,  e   = 0   ;
  switch ( l.charCodeAt ( ++ this.c ) ) {
   case _bs : return '\\'; 
   case _dq : return'\"' ; 
   case _sq : return '\'' ;
   case _b :  return '\b' ;
   case _v :  return '\v' ;
   case _f :  return '\f' ;
   case _t :  return '\t' ;
   case _r :  return '\r' ; 
   case _n :  return '\n' ;
   case _u :
      var e = this. peekUSeq () ;
      if ( e >= 0x0D800 && e <= 0x0DBFF ) {
        this.c ++ ;
        return String.fromCharCode ( e, this.  peekTheSecondByte ()) ;
      }
      return String.fromCharCode(e);

   case _x :
      e0           = toNum(l.charCodeAt ( ++this.c   )  )   ; if ( e0  === -1  ) this.err ( l[ this.c]   + ' is not a valid hex'   )  ;
      e            = toNum(l.charCodeAt ( ++this.c )  )   ; if ( e   === -1  ) this.err ( l[ this.c] + ' is not a valid hex   ' ) ;
      return String.fromCharCode((e0 <<4)|e )  ;

   case _0: 
   case _1:
   case _2:
   case _3:
       e0    =   l. charCodeAt(this.c)  ;
       if ( this. tight ) {
          if ( e0 == _0 ) { e0 = l. charCodeAt ( this.c   + 1  ); if ( e0 < _0 || e0 >= _8   ) return '\0'  ;   }

          this.err( 'in strict no oct' )  ;
       }
       e  =   e0 - _0 ;
       e0    =   l. charCodeAt(this.c + 1 )  ;
       if ( e0 >= _0 && e0 < _8 ) {
          this.c++ ;
          e <<= 3 ;
          e  += (e0  - _0   )  ;
          e0 =  l. charCodeAt(this.c   +  1  ) ; 
          if ( e0 >= _0 && e0 < _8 ) {
            this.c++ ;
            e<<= 3;
            e  += (e0  - _0   )  ;
          }
       }
       return String.fromCharCode(e)  ;

    case _4:
    case _5:
    case _6:
    case _7:
       if ( this. tight ) this. err ( 'in strict no oct            '   )   ;
       e0    =   l. charCodeAt(this.c)  ;
       e  =   e0 - _0 ;
       e0    =   l. charCodeAt(this.c + 1 )  ;
       if ( e0 >= _0 && e0 < _8 ) {
          this.c++ ;
          e <<= 3 ;
          e  += (e0  - _0   )  ;
       }
       return String.fromCharCode(e)  ;
 
            
           
   case _cret: if ( l.charCodeAt( this.  c  +  1   )    ==  _lf ) this. c++ ;
   case _lf :
   case 0x2028  :
   case 0x2029  : this.li ++ ; return '';
   default: return l.charAt(this.c) ;
  }
}
 
lp . resv = function() { this.err ( this. ltcontents + ' is not an identifier '   )  ; }
lp.next = lp. nextraw ;

lp.expect = function (n) {
  if (this .ltcontents == n) { this.next  () ;  return;                }
  this.err( '\'' + n + '\' expected; found <' + this .lttype + '>' ,e);
};

lp.err = function (n) {
  throw new Error(n) ;
};

lp.semiLoc = function () {
  switch (this.lttype) {
    case ';': var n = this.loc() ;   this.next () ;  return n  ;
    case 'eof':
    case '}':
      return null  ;
  }
  if (this.hasL) return null ;
  this.err('EOS expected; found ' + this.ltcontents ) ;
};

lp . semiI = function() { return this. ltcontents == ';' ? this.c : 0 ;  }


lp . loc      = function()  { return  { line: this.li , column: this.col       }; }
lp . locBegin = function()  { return  { line: this.li0, column: this.col0      }; }
lp . locOn    = function(l) { return  { line: this.li, column: this.col - l  }; }  

lp . numstr    =   function () {
  var n = { type : 'Literal',
           value : this.ltval , 
           start : this.c0,
             end : this.c,
          loc : { start : this.locBegin() , end    : this.loc() } ,
            contents : this.ltcontents
  }  ;
  this.next   () ;
  return n   ;
} 

lp . lit      = function(_v) { 
  var n = { type : 'Literal', value : _v , start : this.c0, end : this.c, loc : { start : this.locBegin()  ,
                                                                                    end : this.loc() } ,
            contents : this.ltcontents  }  ;
  this.next   () ;
  return n   ;
}       

lp . tok = function() { return { type : this.lttype, contents : this.ltcontents, start : this.c - this.ltcontents.length, end : this.c,
                                loc:    ({ start : this.locOn (  this.ltcontents.length )  ,     end : this.loc   ()   }  ) }  ;   

}
 
lp.go_tight = function () { this.tightness = ((1)); } ;
lp.loosen = function () { this.tightness = 0; } ;

lp.parseProgram = function () {
  this.next() ;
  var prog = this.blck() ;

  prog = ({
      type: 'Program',
      body: prog,
      loc: prog.length ? {} : { start: { c: 0, l: 1} , end : { c: 0, l : 1} }
   });

   this.expect('<<EOF>>')
   
   if ( prog.length ) {
      start ( prog , prog[0] );
      return end(prog,prog.body[prog.body.length-1]);
   }

return prog ;
};

lp.blck = function () { // blck ([]stmt)
  var stmts = [], stmt;
  while (stmt = this.parseStatement()) stmts.push(stmt);

return (stmts);
};

lp.parseStatement = function () {
  this.startStmt = !false;
  var head, l, e ;

  switch (this.lttype) {
    case '{': return this.parseBlckStatement();
    case ';':
       l  =  {  type   : 'EmptyStatement', start : this.c - 1,
                loc : { start : this.locOn(1) , end : this.loc()     }, end : this.c };
       this.next   () ;
       return l;
             
    case 'eof': return;
  }

  var head = this.parseExprHeadOrYield ();
  if ( !head ) return ;
  if (this.foundStmt) { this.foundStmt = false; return head; } 

  head = this .parseExpr(head) ;
  if (head .type == 'Identifier' && this.lttype == ':') {
     this.next() ;
     l = head.value  ;    
     l += '%';
     if ( has.call ( this.lbn,  l ) && this.lbn[l] != -1 )  this.err( 'label already exists ' + ( l.substr(0 , l.length ) ) ) ;
     this.lbn[l] = this. iteD; 
     e  = this.parseStatement();
     this.lbn[l]                = -1    ;
     head  = {  
        type  : 'LabeledStatement',
        label : head ,
        start : head.start ,
          end :                                 e.    end ,
          loc : { start : head.loc.start, end : e.loc.end },
        body  : e
     };
     return head  ;
  }

  l  =  head;
  e  = this.semiI() || l. end  ;
  head = { 
    type : 'ExpressionStatement', 
    expression : core( head ) , 
    start : head.start ,
    end : e ,
    loc : { start : head.loc.start, end : this.semiLoc() || l.loc.end }
  };

  return head  ;
};

lp.parseIfStatement = function () {
  var startc = this.c0, startLoc  = this.locBegin() ;
  this.next () ;
  this.expect('(');
  var _t = core ( this.parseExpr() ) ;
  this.expect(')' );
  var scopeFlags = this.scopeFlags ;
  this.scopeFlags |= breakFlag ;
  var _c = this. parseStatement (!false);
  this.scopeFlags = scopeFlags ;
  var _e = null; 
  if ( this.idcontents === 'else') {
     this.next() ; 
     _e = this.parseStatement();
  }
 
  var  n  = { 
     type: 'IfStatement' ,
     test: _t   ,
     start: startc ,
     end : (_e||_c).end ,
     loc : { start : startLoc , end : (_e||_c).loc.end } ,
     consequent: _c ,
     alternate: _e
  };
  return n  ;
};

lp.parseWhileStatement = function () {
   var startc = this.c0 , startLoc = this.locBegin() ;
   this.next   () ; 
   this.expect('(');
   var _t = core( this.parseExpr() );
   this.expect(')');
   var scopeFlags = this.scopeFlags;
   this.scopeFlags |= (continueFlag|breakFlag ) ; 
   this. iteD++ ;
   var _e = this.parseStatement(!false) ;
   this.iteD--;
   this.scopeFlags = scopeFlags ;
   return {
     type  : 'WhileStatement' ,
     test  :  _t ,
    start  : startc ,
      end  :  _e .  end   ,
     loc   :  { start : startLoc   ,  end : _e . loc. end }  ,
     body  :_e,   
   }
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
  this.expect('}' );
  return n;
};

lp.parseDoWhileStatement = function () {
  var startc = this.c0, startLoc = this.locBegin   () ;
  this.next   () ;
  var scopeFlags = this. scopeFlags;
  this.scopeFlags |= ( breakFlag|continueFlag ) ;
  this. iteD++ ; 
  var _b = this.parseStatement () ;
  this. iteD --; 
  this.scopeFlags = ( scopeFlags ) ;
  this.expect('while');
  this.expect('(');
  var _t =core( this.parseExpr() ) ;
  var eI = this.c, eLoc = this.loc();
  this.expect(')' );
  if (this.lttype === ';' ) {
     eI = this.c;
     eLoc.line = this.li ;
     eLoc.column = this.col;
     e = this.next();
  }
 
  var n  =   { 
    type  : 'DoWhileStatement', 
    test  : _t ,
   start  : ( startc ) ,
     end  : eI ,
    body  : _b , 
     loc  : { start : startLoc   , end : eLoc }  ,     
  };
 return n ;
};

lp.parseContinueStatement = function () {
  if (!(this.scopeFlags & continueFlag)) this.err ( 'continue is not valid ' ) ; 
  var startc = this.c0, startLoc = this.locBegin   () ; 
  var _l = null;
  var i = this.c, li = this.li, col = this.col ;
  var eLoc = null ;

  this.next   () ; 
  if ( ! this.hasL && this.lttype === 'Identifier'   &&  ( _l = this. id () ) ) {
     var l = _l .value  + '%' ;
     if ( ! this.lbn.hasOwnProperty(l) ) this.err( 'Label is not def ' + ( _l .value ) ) ;
     else if ( this.lbn [l] == this.iteD) this.err('Not iter for ' + ( _l .value ) ) ;
     i  = this.semiI() || _l .end   ;
     eLoc = this.semiLoc() || _l.loc.end;      
  }
  else  {
    if ( this. ltcontents == ';' ) i  = this.c;
    eLoc = this.semiLoc() || { start : startLoc, end : { line: li, column : col }  } ;
  }
  return {
    label  : _l ,
    type: 'ContinueStatement',
    start : startc ,
    end : i ,
    loc :{ start : startLoc  , end : eLoc } 
  };
};

lp.parseBreakStatement = function () {
  if ( ! ( this.scopeFlags & breakFlag ) ) this.err ( 'break is not valid ' ) ;
  var startc = this.c0, startLoc = this.locBegin   () ; 
  var _l = null;
  var i = this.c, li = this.li, col = this.col ;
  var eLoc = null ;

  this.next   () ; 
  if ( ! this.hasL && (  this. lttype  === 'Identifier'           )       && ( _l = this. id () ) ) {
     var l = _l .value + '%' ;
     if ( ! this.lbn.hasOwnProperty(l) ) this.err( 'Label is not def ' + ( _l .value ) ) ;
     else if ( this.lbn [l] == this.iteD) this.err('Not iter for ' + ( _l .value ) ) ;
     i  = this.semiI()   || _l .end   ;
     eLoc = this.semiLoc() || _l.loc.end;      
  }
  else  {
    if ( this. ltcontents == ';' ) i  = this.c;
    eLoc = this.semiLoc() || { start : startLoc, end : { line: li, column : col }  } ;
  }
  return {
    label  : _l ,
    type: 'BreakStatement' ,
    start : startc ,
    end : i ,
    loc :{ start : startLoc  , end : eLoc } 
  };
};

lp.parseSwitchStatement = function () {
  var startc = this.c0, startLoc = this.locBegin   () ; 
  var c = [], hasD = false;
  var scopeFlags = this.scopeFlags , e; 
  this.next    () ;
  this.expect('(');
  var  _d  = core ( this.parseExpr() ) ;
  this.expect ( ')' ) ;
  this.expect('{');
  this.scopeFlags |= ( breakFlag ) ;
  while ( e = this.parseSwitchCase()) {
    if (!e.test) {
      if ( hasD ) this.err('switch statement has already got a \'default\'') ;
      hasD = !false ;
    }
    c.push(e);
  }
  this.scopeFlags = scopeFlags ;
  var n =  {  type  :  'SwitchStatement', cases : c , start : startc , discriminant : _d , end : this.c , 
             loc : { start : startLoc , end : this.loc   ()  } }  ;
  this.expect('}' ) ; 
  return n;  
};

lp.parseSwitchCase = function () {
  var startc = this.c0, startLoc = this.locBegin   () ;
  var e = this.idcontents, _t = null, _c = null ;
  if (e == 'case') { 
    this.next();
    this.foundStmt = false ;
    _t = core( this.parseExpr() ) ;
  } 
  else {
    if (e === 'default') {
      this.next();
      this.foundStmt = false ;
    }     
    else
       return null;
  }
  var i = this.c, li = this.li, col = this.col ;
  this.expect(':');
  _c = this.blck();
  var n= {
        type   : 'SwitchCase' ,
        test   : _t ,
       start   : startc ,
         end   : (_c&&_c.length) ? _c [_c.length-1  ] .end  : i   , 
          loc  : { start : startLoc , end : (_c&&_c.length)? _c [_c.length - 1  ].loc . end : {  line: li, column: col }   }, 
     consequent: _c
  }  ;
  return n ;
};

lp.parseReturnStatement = function () {
  if ( !( this.scopeFlags & funcFlag ) ) this.err ( 'not in function: return ' ) ; 
  var startc = this.c0, startLoc = this.locBegin   () ; 
  var _l = null;
  var i = this.c, li = this.li, col = this.col ;
  var eLoc = null ;
  this.next   () ; 
  if ( ! this.hasL && ( _l = this. parseExprHeadOrYield    () ) )  {
     _l = this.parseExpr(_l );
     i  = this.semiI()   || _l .end   ;
     eLoc = this.semiLoc() || _l.loc.end;      
  }
  else  {
    if ( this. ltcontents == ';' ) i  = this.c;
    eLoc = this.semiLoc() || { start : startLoc, end : { line: li, column : col }  } ;
  }
  return {
    argument  : _l ?  ( core ( _l   )  ) : _l     ,
    type: 'ReturnStatement',
    start : startc ,
    end : i ,
    loc :{ start : startLoc  , end : eLoc } 
  };
};

lp.parseThrowStatement = function () {
  var startc = this.c0, startLoc = this.locBegin   () ; 
  var _a = null;
  var i = this.c, li = this.li, col = this.col ;
  var eLoc = null ;
  this.next   () ; 
  if ( ! this.hasL && ( _a = this. parseExprHeadOrYield    () ) )  {
     _a = this.parseExpr(_a );
     i  = this.semiI()   || _a . end   ;
     eLoc = this.semiLoc() || _a.loc.end;      
  }
  else  {
    if ( this. ltcontents == ';' ) i  = this.c;
    eLoc = this.semiLoc() || { start : startLoc, end : { line: li, column : col }  } ;
  }
  return {
    argument  : _a   && core( _a   ) ,
    type: 'ThrowStatement' ,
    start : startc ,
    end : i ,
    loc :{ start : startLoc  , end : eLoc } 
  };
};

lp.parseTryStatement = function () {

  var startc = this.c0, startLoc = this.locBegin   () ;
  this.next() ;
  var _b  = this.parseBlckStatement () ;
  var _e  = null, _h = null;
  if (this.idcontents === 'catch') _h = this.parseCatchClause () ;
  if (this.idcontents === 'finally') { this.next () ;  _e = this.parseBlckStatement(); }

  var e  = _e || _h || (  this.err( 'try has neither a catch not a finally'   )  ) ; 
  return  {
        type: 'TryStatement',
        block : _b ,
        start : startc  ,
          end : e.end   ,
      handler : _h ,
      finalizer : _e ,
        loc   : { start : startLoc , end  : e.loc.end   }   ,
  };
};

lp. parseCatchClause = function () {
   var startc = this.c0 , startLoc = this.locBegin   () ;    
   this.next   () ;  
   this.expect('(');
   var  _p   = this. parsePattern  () ;
   this.expect(')');
   if ( this. ltcontents != '{' ) this.err ( 'Unexpected ' + this. ltcontents   )  ;
   var _e = this. parseBlckStatement ()   ;
   return  {
         type: 'CatchClause',
         loc: { start : startLoc , end : _e . loc. end },
      start :   startc,
        end : _e . end       ,
           param : _p ,
     body  :  _e
   };
};

lp . parseWithStatement = function() {
   var startc = this.c0, startLoc = this.loc   () ; 
   this.next   () ; 
   this.expect('(' );
   var _o =  this. parseExpr ()  , _b ;
   this.expect(')' );
   var _b = this.parseStatement ()             ; 
   return  {
         type : 'WithStatement',
         loc  :{ start : startLoc , end : _b . loc . end },
      start   : startc , 
        end   :  _b . end        ,
     object   : (_o) ,
       body   : _b   
   };  
};

lp . prseDbg = function () {
  if ( this.startStmt ) {
     this.startStmt = false ; 
     var startc = this.c0 , startLoc = this.locBegin   () ;
     var i = this.c ,  eLoc = this.loc   ()               ;
     this.next   () ; 
     if ( this. lttype ===  ';' ) {

        eLoc.end.line= this. li ;
        eLoc.end.column=this.col;
        i  = this.c ;
        this.next   () ;
     }   
     return   {
           type : 'DebuggerStatement', 
             loc: { start : startLoc   , end : eLoc  }  ,
          start : startc ,
            end : i
      };
  }

  this. err ('not stmt ' ) ;
}

lp.parseExpr = function ( head, cf ) {
  head = this.parseNonSeqExpr(
    head || this.parseExprHeadOrYield (cf) || this.err('Unexpected '  + this.ltcontents ),
    0,
    cf
  );
  var n;
  if ( this.lttype == ',' ) {
    var _e = [core(head)  ] ;
    
    do {
      this.next() ;
      n = this.parseNonSeqExpr( this. parseExprHeadOrYield(cf), 0, cf );
      (_e) .push( core(n) ); 
    } while ( this.lttype == ',' ) ;

    return  {
         type : 'SequenceExpression',
         expressions : _e ,
        start :  head.start ,
          end :  n.end                             , 
         loc: { start : head.loc.start, end : n.loc.end }
    } 
  }

  return head ;
};

lp.parseNonSeqExpr = function (head, breakIfLessThanThis , cFlags_For ) {
  if (!head) this.err( 'Unexpected ' + this .lttype );
  var n ;
  var _b = null  , _e = null  ; 
  if ( this.funcBecause ) {
     if ( this. ltcontents    ==  '=>'  && this. lttype ==   '='  ) {
       if ( this. propThatMustBeInAnAssig ) {
          var conv = this.convList(core(head));
          if ( conv ) this.err( ' param no ' );
          this. propThatMustBeInAnAssig = null ;
       }
       this.next () ;
       this.funcBecause = null ;
       n = core(head ) ;
       
        _e = this. lttype === '{'  ;
       if ( _e ) { _b = this.parseFuncBody (); }
       else _b  =  this. parseNonSeqExpr (
            this.parseExprHeadOrYield () || this.err ( 'Unexpected ' + this.ltcontents ),
            0,
            0
           );  
       return { 
         type: 'ArrowFunctionExpression',
         expression: _e ,
         start : head.start , 
         params : n .type == 'SequenceExpression' ? n .expressions : [n ],     
         loc: { start : head.loc.start, end : _b . loc. end } ,
           end : _b . end   ,
        body  : (_b)  ,
       }
     }

     else this.err( this. propThatMustBeInAnAssig ? '(pat) must have => ': ( '=>' ) ) ; 
  } 

  if ( this. propThatMustBeInAnAssig ) {
     if (  this.ltcontents !=  '='  ) {
        if ( this.canHaveNoAssig ) { this. canHaveNoAssig = false; return head ; }
        else this. err( 'assig expcted ' , head ) ;
     }

     else
        this.propThatMustBeInAnAssig = null ;
  }

  if ( this. canHaveNoAssig ) this.canHaveNoAssig = false ;

  var hasPrefixOrPostfix = false, prec, o, precOrAssocDistance;
  switch (head.type ) {
    case  'UpdateExpression'  :
      hasPrefixOrPostfix = !false ;
      break ;

    case 'yield' :
      if ( ! ( this.scopeFlags & yieldFlag ) ) this.err ( 'yield must not be there ' ) ;
      else return this. parseY() 
  }

  EXPR:
  while (!false) {
    switch (this .    lttype    ) {
      case '++':
      case '--':
        if (hasPrefixOrPostfix) this.err(' both ')
        if (this.hasL) return head;
        head =  {
             type  : 'UpdateExpression' ,
          argument : core(head ) ,
          start    : (head . start )   ,
         operator  : this.ltcontents ,
            prefix : false,
                 n : 0 ,
               end : this.c ,  
               loc : { start : head.loc.start ,
                         end : { line  : this.li  , column : this.col  }   }  ,
        };    
        this.next() ; 

        hasPrefixOrPostfix = !false;
        continue;

      case '/' :
      case '+' :
      case '-' :
      case 'op' :
         prec = this . prec;
         break ;

      case '?':
         if ( breakIfLessThanThis) return head ;
         this.next ();
         o     =  core(this.parseExpr(null,0)) ;
         this.expect(':');
         n     =      this.parseNonSeqExpr( this.parseExprHeadOrYield(), 0, cFlags_For )   ;
         return  { 
               type   : 'ConditionalExpression',
               test   : core(head) ,
              start   : head.start ,
                end   : n.end ,
              loc     : { start : head.loc.start , end : n.loc.end } ,
          consequent  : core(o),
          alternate   : core(n)
         };
       
       case '=' : 
          if( breakIfLessThanThis != 0 ) this.err( head.type + ' is not a valid assignable' ) ;

          var convErr ;
          if ( this  .lttype == '='   && this.ltcontents === (   '=>' ) ) {
             n = core(head) ;
             convErr = this.convList(n);
             if ( convErr ) this.err ( convErr.type + ' is not a param for a function ; reason ' + this.convErr ) ;
             this.next () ;
             _e = this. lttype === '{' ;
             _b = (  this.parseFuncBody ()  ) ; 
 
             return {
               type    : 'ArrowFunctionExpression',
               params  : n. type == 'SequenceExpression' ? n.expressions : [n],
               start   : head.start ,
                 end   : _b .  end , 
               loc     : { start : head.loc.start, end : _b . loc. end },
                     n : 0 ,
              expression : _e          ,
               body      : core( _b )                    
             };            
           }

          convErr = this.convAssig(core(head)) ;
          if (convErr) { var m = this.convErr ; this.convErr = null; this.err(m , convErr ) ; }
          o  = this.ltcontents ; 
          this.next ();
          n = this.parseNonSeqExpr( this. parseExprHeadOrYield(), 0,  cFlags_For )   ;
          return {
                type: 'AssignmentExpression',
                operator : o  ,
                   start : head  . start ,
                     end : n. end , 
                  pDepth : 0   ,
                   left  : core(head)  , 
                   right : core(n) ,
                   loc   : { start : head.loc.start, end : n.loc.end   }
          };

      case 'Identifier' :
        switch ( this . idcontents ) {
            case 'in':
            case 'of':
            if (cFlags_For & cfFor ) {
              if (breakIfLessThanThis != 0 || hasPrefixOrPostfix) this.err( head.type + ' is not a valid assignable' );
              return head;
            }
            case 'instanceof': 
               prec = 0x9B;
               break;

            default : return head
        }
        break;

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
                               pDepth : 0
   }  ;
 }
};

lp . parseExprHeadOrYield = function ( cFlags_For_Sh_Non ) {
    if (  this. idcontents =='yield'  )  return this. parseY   ( cFlags_For_Sh_Non & cfFor )   ;
    return this. parseExprHead (cFlags_For_Sh_Non ) ; 
};

lp. parseStatementOrID = function ( cFlags_For_Sh_Non_Ex ) {
  var c = this .idcontents , parse = null ;

  if (c.length >    12 ) return this.id();
  switch (c.length) {
    case 1: return (this.id());
    case 2:
      switch (c) {
        case 'do': parse = lp.parseDoWhileStatement; break;
        case 'if': parse = lp.parseIfStatement; break;
        case 'in': break ;
        default: {return (this.id());}
      }
      break ;

    case 3:
      switch (c) {
        case 'new': return this.parseNewHead();
        case 'for': parse = lp. parseFor ; break;
        case 'try': parse = lp.parseTryStatement; break;
        case 'let':                                                      return      this. parse_let   () ;

        case 'var': return this. parseVariableDeclaration(0,0,null ) ;
        case 'int': if ( this.v <= 5 ) this.resv();
        default: {return (this.id());}
      }

      break ;

   case 4:
      switch (c) {
       case 'null' : if ( this.startStmt ) this.startStmt = false ; return this. lit (null) ; 
       case 'void': this . foundExpr = !false ; if ( this.startStmt ) this.startStmt = false ; return;
       case 'this':
           return this. parse_this   () ;
 
        case 'true': if ( this.startStmt ) this.startStmt = false ; return this.lit (!false) ; 
        case 'case':
        case 'else':
          break ;
       
        case 'with': parse = lp. parseWithStatement ; break;

        case 'enum': 
        case 'byte':
        case 'char':
        case 'goto':
        case 'long': if ( this. v <= 5 ) this. resv   () ;  
 
        default: return this.id();
      }
      break ;

    case 5:
      switch (c) {
        case 'super': return this.                            parseSuper      ()  ; 
        case 'break': parse = (lp.parseBreakStatement); break ;
        case 'catch': return;
        case 'class': return this. parseClass   () ; 
        case 'const': return this. parseVariableDeclaration ( c ) ;
        case 'throw': parse = (lp.parseThrowStatement); break;
        case 'while': parse = lp.parseWhileStatement; break;
        case 'yield': this. err ( 'the yield can\'t come after any op '   )    ;
        case 'false':  if ( this.startStmt ) this.startStmt = false ;return this.lit ( false ) ; 
        case 'final':
        case 'float':
        case 'short':
            if ( this. v <= 5 ) this. resv   () ; 
 
        case 'await':
        default: return this.id();
      }
      break ;

    case 6:
      switch (c) {
        case 'static': if ( this. tight || this. v <= 5 ) this. resv   () ;
 
        case 'delete': 
        case 'typeof': this.foundExpr = !false ; if ( this.startStmt ) this.startStmt = false ; return 
        case 'export': (parse) = lp.stmtPrse_export; break;
        case 'import': parse = lp.stmtPrse_import; break;
        case 'return': parse = lp.parseReturnStatement; break;
        case 'switch': parse = lp.parseSwitchStatement; break;
        case 'double':
        case 'native':
        case 'throws': if ( this. v <= 5 ) this. resv   () ; 
       
        default: return this.id();
      }

      break ;
    case 7:

      switch (c) {
        case 'default': 
        case 'extends':
        case 'finally': break ;
        case 'package':
        case 'private': if ( this. tight  ) this. resv   () ; 
        case 'boolean': if ( this. v <= 5 ) this. resv   () ;


        default: return this.id();
      }
      break ;

    case 8:
      switch (c) {
        case 'function': return this. parseFunc(cFlags_For_Sh_Non_Ex&cfFor )   ; 
        case 'debugger': return this. prseDbg                              ()  ;
        case 'continue': parse = lp.parseContinueStatement; break;

        case 'abstract':
        case 'volatile': if ( this. v <= 5 ) this. resv   () ;

        default: return this.id();
      }

      break ;

      case 9:
          switch (c ) {
            case 'interface': 

            case 'protected': if (this. tight ) this. resv   () ;
            case 'transient':                if ( this. v <= 5 ) this. resv   () ; 
          }
          return this.                                             id   () ;

    case 10:
      switch ( c ) {
        case 'instanceof': break ;
        case 'implements': if ( this. v <= 5 || this. resv   ()  ) this. resv   () ; 
        
        default :    
          return this.id(); 
      }
      break ;

     case 12:
        if ( this.v <= 5 &&  c  ===  'synchronized' ) this. resv   () ;

    default: return this.id();
  }

  if (!this.startStmt) this.err('an identifier was expected but found ' + c ) ;

  this.startStmt = false ; 
  c = parse && parse.apply(this);
  this.foundStmt = !false ; 

return c ;
} ;


lp . parseRegExpLiteral = function() {
     var c = this.c, l = this.src, e = l.length ;
     var n = {
         regex : {
           pattern : "" , flags : ""
         },
         type : 'Literal',
        start : this.c - 1    ,
          end : 0   ,
        loc   :  {start:{line: this.li, column : this.col-1}, end : null }
     };
     var b = false ;
     var o ;

     var _l = "";

     L:
     while ( c < e ) {

       o = l.charCodeAt(c) ;
       switch ( o ) {
         case _sbrO: if ( !b ) b = !false; break ;
         case _bs : ++c; break ;
         case _sbrC : if ( b ) b = false ; break ;
         case _div :
            if ( b ) break ;
            break L ;

        default:if ( o >= 0x0D800 && o <= 0x0DBFF ) { this.col-- ; }

       }

       c++ ;

     }
 
     l.charCodeAt(c ) == _div || this.err('expcted /') ;
     
     var _g = 0 ;
  
     o = 0 ;

      L :
     while ( o <= 5 ) {
        switch ( l.charCodeAt ( ++c ) ) {
            case g_ : ( _g & g_o ) && this.err ( 'g already there' ) ; _g |= g_o ; break ; 
            case u_ : ( _g & u_o ) && this.err ( 'u already there' ) ; _g |= u_o ; break ; 
            case y_ : ( _g & y_o ) && this.err ( 'y already there' ) ; _g |= y_o ; break ; 
            case ( m_ ) : ( _g& m_o ) && this.err ( ' m already there' ) ; _g |= m_o ; break ;
            default : break L ;
    
            case i_ : ( _g& i_o ) && this.err ( ' i already there' ) ; _g |= i_o ; break ; 
          }

         o ++ ; 
     }

     n. regex . flags = l.substring(c-o, c) ;
     n. regex . pattern = n.contents = l.substring(this.c, c-o -( 1 ) ) ; 
    
     this.col += ( ( c ) - this.c ) 
     n.loc.end = { line  : this.li, column : this.col } ;
 
     if ( !( _g & ( ALL ^ _g ) ) ) n. value = new RegExp ( n. regex . pattern , n. regex . flags ) ; 
     else { new RegExp ( n. regex . pattern ) ; n. value = null ; } 

     this.c = c;
     n. end = this.c;
     this. next () ;
    
     return n ; 
}

lp . parseTemplateLiteral = function() {
  var c = this.c, l = this.src, e = l.length ;
  var i, _e ;
  var str = [], nexpr = [] ;
  var v = "", v_start = 0;
  var r_start = 0, start = c ;
  var startc  =            this.c - 1 , startLoc = this.locOn (   1  ) ;
  var li = this. li , col = this.col; 

  while ( c < e && ( i = ( l.charCodeAt ( c ) ) , i != _tick ) ) {
    switch ( i ) {
      case _$ :
        if ( l.charCodeAt(c + 1 ) == ( _cubO) ) {
           v += l.substring(v_start, c ) ;
           this.col += ( c - start ) ;
           str.push( {
             type : 'TemplateElement', 
              loc : { start : { line : li, column: col } , end : { line : this. li , column : this.col } } ,
            start : r_start ,
              end : c , 
             src : this.src,
            tail : false ,
          value  : { raw : l.substring(r_start , c ).replace(/\r\n|\r/g,'\n'), }
            } ) ;
          this.c = c + 2 ;
          this.next()
          nexpr . push ( this.parseExpr () );
          if ( this. lttype != '}')  this.err('must }' ) ;
          v_start = r_start = c = this.c ; li = this.li , col = this. col ;
        }

        else
           c++ ;
     
        continue ;

      case _cret: v += l.substring(v_start,c) ; v += '\n'; if ( l.charCodeAt(c + 1 ) == _lf ) c++ ; v_start = ++c; this.li++ ; continue ;
      case _lf : v += l.substring(v_start,c) ; v += '\n'; v_start = ++c; this.li++ ; continue ; 
      case 0x2028 :
      case 0x2029 :
         v  += l.substring(v_start,c) ;
         v  += l.charAt(c) ;
         start                        =   c   ;      
         v_start = ++c; 
         this.li ++ ; 
         this.col = 0;
         continue ;

      case _bs :

        v  += l.substring(v_start,c ); 
        this.c=c;
        v  += this.readEsc   () ;
        c  = this.c;
        v_start = ++c ;
        continue ;

    } 

    c++ ;
  }
  if ( c > r_start ) {
    if ( c > v_start ) v += ( ( l.substring ( v_start, c) ) ) ; 
     str.push( {
        type : 'TemplateElement',
        start : r_start ,
        loc : { start : { line : li,   column : col } , end : { line  : this. li , column: this.col } } ,
        end : c  ,
        src : this.src,
     tail   : ! false ,
   value    : { raw : l.substring(r_start,c) . replace ( /\r\n|\r/g, '\n' ) }
     } ) ;
  }

  var n = { 
        type : ( 'TemplateLiteral' ) ,
       start : ( startc )  ,
        quasis: str,
                                            end  : c,
        expressions : nexpr ,
        loc: { start : startLoc, end : this.loc   ()   }
  };

  if  ( l[ c ] != '`' )   this.err ( '` expcted');
  this.c = ++c ;
  this.next ()
  return n
}

lp.parseExprHead = function (cFlags_For_Sh_Non_Ex ) {
  var head;
  var _c ; 
  var startc, startLoc ;
  var e   ;

  if ( this . lttype == 'Identifier' ) {
      head = this.parseStatementOrID ( cFlags_For_Sh_Non_Ex  ) ; 
      if ( this.foundStmt ) { return head ; } 
      if ( this.foundExpr ) { 
        if ( cFlags_For_Sh_Non_Ex & cfExpectHeadBePrim) { this.err('Unexpected unary'); }
        if ( this.startStmt ) this.startStmt          =                                   false ;

        startc = this.c0;
        startLoc = this.locBegin   () ;
        this.foundExpr = false ;
        e   = this.idcontents  ;

        this.next    () ;
        head  =  this.parseNonSeqExpr(this.parseExprHead(),0xAE,cFlags_For_Sh_Non_Ex & cfFor  )  ;
        
        return {
             type : 'UnaryExpression' , 
             operator : e ,
             start :  startc ,
               end :  head.end  ,
             loc   :  { start : startLoc , end  :  head.loc.end }   ,
                n  : 0,
            argument : core(head)     
        };
     }
  }

  else {
      if ( this. startStmt  ) this.startStmt = false ;
      switch (this.lttype)  {
            case '[' : head = this. parseArrayExpression( cFlags_For_Sh_Non_Ex &    (CFLAGS_PTRN_MEM ) ) ; if ( this. propThatMustBeInAnAssig ) return head ; break ;
            case '(' : head = this. parseParen() ; if ( this . funcBecause ) return head ; break ;
            case '{' : head = this. parseObjectExpression( cFlags_For_Sh_Non_Ex & (CFLAGS_PTRN_MEM) ) ; if ( this. propThatMustBeInAnAssig ) return head ; break ;
            case '/' : head = this. parseRegExpLiteral () ; break ;
            case '`' : head = this. parseTemplateLiteral () ; break ;
            case 'Literal': head = this.numstr (); break ;

            case '++': 
            case '--':
               if (cFlags_For_Sh_Non_Ex & cfExpectHeadBePrim ) this.err('Unexpected unary');
               startc = this.c   -   2  ;
               startLoc = this.locOn(2 );
               e  = this. ltcontents ;

               this.next   () ; 
               head  = this. parseExprHead (cfExpectHeadBePrim ) ;
               _c =  ( core(head)        ) ;
               if ( ! this  . simpAssig ( _c   )  ) this. err ( head. type + ' is not an assig ' )  ;
               return  {
                    type : 'UpdateExpression',
                    operator : e  ,
                    start : startc,
                    end : head.end   ,
                    loc : { start : startLoc, end : head.loc.end } , 
                    n : 0,
                    prefix: !false,
                    argument: core(head   )
               };

            case '~':
            case '!':
            case '-':
            case '+':
               if (cFlags_For_Sh_Non_Ex & cfExpectHeadBePrim) this.err('Unexpected unary');
               startc = this.c - 1  ;
               startLoc = this.locOn(1   )   ;
               e  =  this.ltcontents ;

               this.next   () ;
               head  = ( this.parseNonSeqExpr(this.parseExprHead(0),0xAE,cFlags_For_Sh_Non_Ex & cfFor  )) ;
               return {
                    type: 'UnaryExpression' ,
                    operator: e ,
                    start :   startc ,
                    end : head.end  ,
                    loc : { start : startLoc, end : head.loc.end  }  ,
                    n : 0,
                    prefix: !false,
                    argument : core(head )
               };

            default:
               if ( (cFlags_For_Sh_Non_Ex) & cfExpectHeadBePrim ) this.err(this. peek + ' is not a vaild start for an expr' ) ; return ; 

        }
  }

   _c = core( head ) ;

   while ( !false ) {
        switch (this.lttype ) {

          case '.':
               this.next   () ;
               e   = this.memID           () || this. err ( 'Unexpected ' + this. lttype )   ;
               head =   { 
                    type: 'MemberExpression',
                    property  :  e ,
                   start : head.start ,
                     end : e.end ,
                   loc   : { start : head.loc.start , end : e.loc.end } ,
                  object  : _c ,
                computed: false 
               };
               _c =  head ;
               continue;

         case '[':
            this.next   () ;
            e   = this. parseExpr() ;
            head =  {
                 type : 'MemberExpression' ,
                 property  : core (e ) ,
                start : head.start ,
                  end : this.c ,
                loc   : { start : head.loc.start,
                            end : this.loc()  } , 
                 object : _c ,
                 computed: !false
           }; 

            _c  = head ;
            this.expect(']') ; 
            continue;

         case '(':
              this.next    () ;
              e  = this. parseArgList() ; 
              head =  {
                   type: 'CallExpression'        ,
                   callee: _c                   ,
                   start : head.start ,
                     end : this.c  , 
               arguments : e   ,
                      n  :      0   ,
                   loc   : { start : head.loc.start, end : this.loc   () }
             };
             this.expect(')'   )  ;
             _c = head  ;
             continue;

          case '`' :
            
             head = n = start ( {
                  type : 'quasi',
                  quasi : this . parseTemplateLiteral () ,
                  loc : {} ,
                  tag : n
             } , head ) ; 

             end (head , head.quasi ); 
             continue ; 

          default: return head ;
        }

      } 

  return head ;


} ;

lp.parseNewHead = function () {
  if ( this. startStmt ) this.startStmt = false ;
  var startc = this.c0 , startLoc = this.locBegin();
  this.next () ;
  if ( this. ltcontents === '.' ) {
    var _m =   { type :  'Identifier', value : 'new', start : startc, end : this.c, name : 'new', loc: { start : startLoc, end : this.loc()  }  }, _p   ;
    if (  this .idcontents == 'target' ) { 
       _p = this.id   () ;
       return { type : 'MetaProperty', meta : _m , start : startc , property: _p, loc : { start : startLoc , end : null }, n : 0, end : 0 };
    }
    this.err( 'found ' +     this  .idcontents + ', not target ' ) ;
  }

  var head, e; 
  switch (this  .lttype) {
    case '[': head = this. parseArrayExpression() ; break ;
    case '(': head = this. parseParen() ; if ( this.funcBecause ) this.err('Unexpected ' + this.funcBecause. contents ) ; break ;
    case '{': head = this. parseObjectExpression() ; break ;
    case '/': head = this. parseRegExpLiteral () ; break ;
    case '`': head = this. parseTemplateLiteral () ; break ;
    case 'Literal': head = this.numstr (); break ;
    case 'Identifier' : 
      head = this.parseStatementOrID (head) ;
      if ( this. foundExpr ) this.err ( this. idcontents + ' can not come in the head of new' ) ; break ;

    default: this.err('Unexpected ' + ( this.  lttype ) ) ;
  }
  
  var _c = core( head ) ;
  while ( !false ) {
    switch (this. ltcontents) {
         case '.':
               this.next   () ;
               e   = this.memID           ()  ;
               head =   { 
                    type: 'MemberExpression',
                    property  :  e ,
                   start : head.start ,
                     end : e.end ,
                   loc   : { start : head.loc.start , end : e.loc.end } ,
                  object  : _c ,
                computed: false 
               };
               _c =  head ;
               continue;

         case '[':
            this.next   () ;
            e   = this. parseExpr() ;
            head =  {
                 type : 'MemberExpression' ,
                 property  : core (e ) ,
                start : head.start ,
                  end : this.c ,
                loc   : { start : head.loc.start,
                            end : this.loc()  } , 
                 object : _c ,
                 computed: !false
           }; 
            _c  = head ;
            this.expect(']') ; 
            continue;

      case '(':
          this.next() ;
          head  = this. parseArgList();
          _c  = {         
                type: 'NewExpression' ,
                callee : _c            ,
               start   : startc ,
                 end   : this.c ,
               loc     : { start : startLoc, end : this.loc   () } ,
                    n  :         0   ,
             arguments : head
          };
          this. expect (')');
          return _c ; 

        case '`' :

             head = n = start ({
                  type : 'quasi' ,
                  quasi : this . parseTemplateLiteral () ,
                  loc : {},
                  tag : n
              } , head ) ;

              end (head , head.quasi );
              continue ; 
    
        default:
          return {
                 type : 'NewExpression' ,
                 callee : _c , 
                start   : startc ,
                  end   : head.   end   ,
                loc     : { start : startLoc, end : head.loc.end  }      ,     
                     n  :      0   ,
              arguments : []
          } ;

     }
  } 
} ;

lp . validateID  =   function (e ) {
  var n = e || this. idcontents;

  if ( n. length >= 12 ) return this. id   () ;

  switch (n.length) { 
        case  1  :       return this.  id   () ; 
 
        case  2  :
          switch (n) {
            case 'do':
            case 'if':
            case 'in': this. resv   () ;  
          }
          return e  ? null  : this.                                             id   () ;
        case 3:
          switch (n) {
            case 'int' :
               if ( this.v > 5 ) break ;
               this. resv             () ; 

            case 'let' : if (  this.v <= 5 || ! this. tight ) break ;
            case 'for' :
            case 'try' :
            case 'var' :
            case 'new' :
              
                this. resv   () ; 
          }

          return e  ? null  :this.                                             id   () ;
        case 4:
          switch (n) {
            case 'byte':
            case 'char':
            case 'goto':
            case 'long': if ( this. v > 5 ) break ;

            case 'case':
            case 'else':
            case 'this':
            case 'void':
            case 'with':
            case 'enum':

               this. resv   () ; 

                    
          }
          return e  ? null  :this.                                             id   () ;
        case 5:
          switch (n) {
            case 'final':
            case 'float':
            case 'short': if ( this. v > 5   ) break ;

            case 'break':
            case 'catch':
            case 'class':
            case 'const':
            case 'super':
            case 'throw':
            case 'while':
            case 'yield':
            case 'await':
              this. resv   ()  ;
          }

          return e  ? null  :this.                                             id   () ;
        case 6:
          switch (n) {
            case 'double':
            case 'native':
            case 'throws':     
                if ( this. v > 5 ) break ;
                this. resv   () ;

            case 'public':
            case 'static':    if ( this. v > 5 && ! this. tight ) break ;

            case 'delete':
            case 'export':
            case 'import':
            case 'return':
            case 'switch':
            case 'typeof':                this. resv   () ; 
          }
          return e  ? null  :this.                                             id   () ;
        case 7:
          switch (n) {
            case 'package':
            case 'private': if ( this. tight ) this. resv   () ;

            case 'boolean':
                if ( this. v > 5 ) break ;

            case 'default':
            case 'extends':
            case 'finally':
                this. resv   () ;


          }
          return e  ? null  :this.                                             id   () ;

        case 8:
          switch (n) {
            case 'abstract':
            case 'volatile':
               if ( this. v > 5 ) break ;
          
            case 'continue':
            case 'debugger':
            case 'function':
               this. resv     () ; 


          }
          return e  ? null  : this. id   () ; 
 
        case 9:
          switch (n) {
            case 'interface': if ( this. tight ) this. resv   () ; 
            case 'protected':
            case 'transient':
               if ( this. v <= 5 ) this. resv   () ; 
          }

          return e  ? null  :this.                                             id   () ;
        case 10:
          switch (n) {
            case 'implements':
               if ( this. v > 5 && ! this. tight ) break ;
            case 'instanceof': this. resv   () ; 
          }

          return         ( e ? null :   this.                                             id   ()   ) ;
        case 12:
          switch (n) {
            case 'synchronized':
              if ( this. v <= 5 ) this. resv   () ; 
          }
        
          return e  ? null  :this.                                             id   () ;
        
        default : return e  ? null  :this.   id      ()   ;
  }
}

lp.id = function () {
   if ( this.startStmt ) this.startStmt = false ;
   var e = {  type   : 'Identifier' ,
             value   : this.ltval ,
            start    : this.c0,
               end   : this.c , 
            loc      : { start : this.locBegin   ()  ,
                         end :   this.loc        ()   } ,
            n        : 0 ,
           contents  : this.ltcontents,
              pDepth : 0
   };

   this.next   () ;
   return e ; 
};

lp . parseClass = function   () {
  var startStmt = this. startStmt, startc = this.c0, startLoc = this.locBegin   (), e = null , scopeFlags = this.scopeFlags ;  
  var _s = null ; 
  this.next () ; 
  this.startStmt = false ; 
  if ( this. lttype === 'Identifier'   ) e  = this. validateID   (null )  ;
  else if ( startStmt )  this. err ( 'identifier expected; found ' + this. lttype   )  ;
  if ( this. idcontents == 'extends' ) {
      this.next ();
      _s = this. parseNonSeqExpr ( this.parseExprHeadOrYield(),0,0);
  }
  var _b = [];
  var startcB   = this.c   -   1  , startLocB= this.locOn ( 1  ) ;
      
  this.expect ( '{' ) ;
  this.scopeFlags = methdFlag ;
  var _c = null ;                                
  while  ( _c = this. parseProperty ( METHD ) )  _b . push ( _c ) ;
  this.scopeFlags = scopeFlags ;
  var eLoc = this.loc   () ;
 
  e  =  {  type   : startStmt ? 'ClassDeclaration' : 'ClassExpression' , 
                 id  : e ,
             start   : startc,
               end   : this.c,
           superClass: _s ,
                  loc: { start : startLoc, end  : eLoc } ,
               body  : { type: 'ClassBody', loc: { start : startLocB , end : eLoc } , start : startcB , end   : this.c   ,   body  : _b   }
  }  ;
  this.expect (  '}' ) ;
  if ( this.startStmt ) { this.startStmt = false ; this.foundStmt = !false ; }
  return e;
}


lp . parseSpreadElement = function() {
     var _a,  startc = this.c - this.ltcontents.length, startLoc = this.locOn ( this.ltcontents.length   )  ; 
     this.next ();
     _a = this.parseNonSeqExpr( this.parseExprHead() , 0, 0 );
     return {
        type : 'SpreadElement' ,
        loc :  { start : startLoc, end : _a . loc. end  } ,
      start : startc ,
        end : ( ( _a). end )   ,
      argument : core(_a ) 
     }; 
};

lp.parseArrayExpression = function (cFlags_Sh_Non ) {
  var e = [], _e ;
  var startc = this.c - 1 , startLoc = this.locOn (   1  ) ;  
  this.next () ;
  var propThatMustBeInAnAssig = null,propFlags = cFlags_Sh_Non , hasPropThatMustNot = false ;
  var sprCount = 0, sprIdx = -1 ;
  while ( !false ) {
    if ( _e = this. parseExprHeadOrYield() ) {
       this. canHaveNoAssig = !false ;
       e .push (core(this.parseNonSeqExpr(_e,0,0)));
       if ( this. propThatMustBeInAnAssig ) {
            if ( !propThatMustBeInAnAssig ) { propThatMustBeInAnAssig = this.propThatMustBeInAnAssig; propFlags = cfNonAssigNotValid ; }
            this. propThatMustBeInAnAssig =null ;
       }
       else if ( this. mustNot ) {
         if ( !hasPropThatMustNot ) { hasPropThatMustNot = this. mustNot; propFlags = cfShortNotValid ; }
         this. mustNot = false ;
       }
    }
    else if ( this. ltcontents == '...' ) {
        sprCount ++ ;
        sprIdx = e.length ;
        e .push ( this. parseSpreadElement () ) ;
    } 
    else e . push ( null ) ;

    if ( this.  ltcontents == ',' ) this.next() ;
    else 
       break ;
  }
  if ( propThatMustBeInAnAssig ) this. propThatMustBeInAnAssig = propThatMustBeInAnAssig ;
  if ( hasPropThatMustNot ) this. mustNot = hasPropThatMustNot ; 

  e  =  {  type: 'ArrayExpression',

           loc : { start : startLoc, end : this.loc() },
          start : startc ,
            end : this.c , 
       elements : e, 
       sprCount : sprCount  , 
         sprIdx : sprIdx ,
         pDepth : 0   };
  this. expect ( ']' ) ; 
  return e;
};

lp.convList = function(nexpr) {
     var convErr  ;
     var argList = this. argList   ;

     switch (nexpr.type) {
        case 'Identifier': 
           if (nexpr.pDepth > 1 ) {
              this.convErr = 'an identifier can not be in parens when used as a param' ; 
              return nexpr ;
           }
           this. argList     =   {}; this. prev. push ( argList   )  ;
           this. argList[ nexpr . value + '%' ] =    (  0 )  ; 
           return;

        case 'SequenceExpression' : 
           if (nexpr. pDepth != 1 ) {
              this.convErr = 'param list must be in exactly one pair of parens ' ;
              return nexpr ;
           }
           
           this. argList = {} ; this. prev. push ( argList   )  ;
           return this. convBareList(nexpr.expressions   )  ;

        case 'ObjectExpression' : 
        case 'ArrayExpression' :
        case 'AssignmentExpression':
           if ( nexpr . pDepth != 1 ) {
              this.convErr = nexpr . type + ' must not have more than one pair of parens when used as a param list' ;
              return nexpr ;
            } 

            nexpr . pDepth = 0 ;
            this. argList = {} ;  this.                     prev. push ( argList   )  ;

            return this.convAssig ( nexpr , !false ) ; 
     }

return nexpr ;
} ;

lp . convBareList = function ( l )   {
   var e = 0, convErr = null ; 

   while ( e < l .length ) {
       if ( convErr = this.convAssig (l [e], !false) ) return convErr ;
       e++ ;
   }

   return null; 
}
           
lp.simpAssig = function(l ) { switch (l.type ) { case 'Identifier' : case 'MemberExpression' :  return ! false ;  } return false  }

lp . parse_let=function() {
  var startStmt = this. startStmt ;
  if ( this. v <= 5 ) {
    if ( startStmt ) this.startStmt = false ;
    return this. id   () ;
  }
  if ( this. tight  ) return this. parseVariableDeclaration   ( 0, 0, null )  ;

  if ( ! startStmt ) return this. id   () ; 
  var startc = this.c0 , startLoc = this.     locBegin   (), c = this.c ;
  var col = this.col, li = this.li ;
  this. next   () ;
  switch ( this. lttype ) { case '[' : case '{' : case 'Identifier' : return this. parseVariableDeclaration(0,startc,startLoc   )  ; }
 
  if ( startStmt ) this.startStmt = false ;
 
  return createIDLoc ( startc, startLoc, c, li, col,    'let'      )  ;
}

lp  .  parseSuper  = function   () { 
 if ( this.startStmt ) this. startStmt = false ;
 var n = {  type: 'Super'  , loc: { start : this.locBegin () , end  : this.loc   () } , start : this.c0  , end  : this.c            }  ;
 this.next   () ;
 switch ( this. lttype   )  { case '.' : case '[' : case '(' : return   (n ) ;  }
 this. err ( 'Unexpected ' + this. lttype   )  ;
}
    
lp . parse_this  = function   () {
 if ( this.startStmt ) this.startStmt = false ;
 var n  = { type :  'ThisExpression',
           loc : { start : this.locBegin   ()  , end  : this.loc   ()   },
           start : this.c0,
             end : this.c
 }  ;
 this.next () ;                 

 return n  ;
}  

lp . parseY = function   ( cFlags_For ) {
  var _a = null, _d = false ;
  var c  = this.c, li = this.li, col = this.col ;
  var startc = this.c0 , startLoc = this.locBegin   () ;
  var eLoc = null  ;
  this.next   () ;
  if ( !this.hasL ) {
    if ( this.ltcontents   ==  '*' ) {
      _d  = !false ;
      this.next();
      if ( _a = this.parseExprHeadOrYield (cFlags_For) )  _a = this.parseNonSeqExpr( _a ,cFlags_For)   ; 
      else
         this.err ( 'must have an arg ' )  ; 
    }
    else if ( _a  = this.parseExprHeadOrYield ( cFlags_For ) )   { _a  =   this.parseNonSeqExpr(  _a  ,cFlags_For ); }
  }

  if ( _a ) { eLoc =  _a . loc. end   ; c = _a. end   ;  }
  else  eLoc = { line: li , column: col   } 

  return   {  type: 'YieldExpression', argument : _a ? core(_a) : null , start : startc, delegate: _d, end: c, loc: { start : startLoc, end: eLoc }  } ; 
}
lp.convAssig = function( nexpr , isB ) {
     var convErr ;
     var e, n ;
     
     switch ( nexpr. type ) {
       case 'Identifier' :
         if ( isB ) {
            if    (  nexpr . pDepth ) {
               this.convErr = 'an identifier must not be in parens when used as in a var def position'; 
               return nexpr ;
             }

             this. arg ( nexpr , !false)  ;
             this. validateArg (  nexpr   . value   )  ;


         }

         nexpr . isB = !false ; 
         return ;

       case 'ArrayExpression' :
          if ( nexpr . pDepth ) {
              this.convErr = 'ArrayExpression must not have parens in case it is a ptrn ';
              return nexpr ;
          }

          if ( nexpr .sprCount > 1 || ( nexpr . sprIdx >= 0 && nexpr . sprIdx != nexpr . elements .length - 1 ) ) {
             this.convErr = ' ArrayExpression when in ptrn position can not have more than one ..., and in case it has it must be at its end ' ;
             return nexpr ;
          } 

       case 'ArrayPattern' : 
          n = nexpr . elements ;
          e = 0 ;

          while ( e < n.length )
              if ( convErr = this. convAssig (n[e ++] , isB ) ) return convErr ;

          nexpr . type = 'ArrayPattern' ;
          nexpr . isB = isB ;

          return ;

        case 'ObjectExpression' :

          if ( nexpr . pDepth ) {
              this.convErr = 'ObjectExpression must not have parens in case it is a ptrn ';
              return nexpr ; 
          }

        case 'ObjectPattern' :
          n = nexpr . properties ;
          e = 0 ;
   
          var _e ;

          while ( n.length > e ) {
            _e = n[e] ;
            if ( convErr = this.convAssig (_e.value, isB) )
              return convErr ; 
           
            _e .type = 'AssignmentProperty' ;
            e ++ ; 
          }

          nexpr . type = 'ObjectPattern' ;
          nexpr . isB = isB ;

          return;

       case 'AssignmentExpression':
         if (nexpr . pDepth ) {
           this.convErr = 'AssignmentExpression must not have parens in case it is a ptrn ' ; 
           return nexpr ;
         }

         if ( nexpr . operator .contents != '=' ) {
              this.convErr = 'found ' + nexpr . operator. contents + 'not = ' ; 
              return nexpr ;
           } 
              
         else delete nexpr . operator ;

       case 'AssignmentPattern' :
           convErr = null ;

           if ( isB && ! nexpr . left. isB ) convErr = this.convAssig ( nexpr . left, !false ) ;
           if ( !convErr ) nexpr . type = 'AssignmentPattern' ;

           return convErr ;

       case 'MemberExpression' : 
        
          if ( isB ) {
             this.convErr = 'MemberExpression can not be used in the var def position '  ; 
             return nexpr ;
          }        

          nexpr . isB = false ;

          return ;
 
       case  'SpreadElement' :
       case  'RestElement'   :
           convErr = this. convAssig ( nexpr . argument, isB   )  ;
           if ( !convErr ) nexpr . type      =                         'RestElement' ;
           
           return convErr ;
           
     }

     this.convErr = nexpr.type + ' is not an assig '   ;

return nexpr ;
} ;

lp.parseArgList = function () {
    var n = [], e ;

    while ( !false ) {
       if ( this.  ltcontents == '...' ) { n. push( this. parseSpreadElement () ) ; }
       else if ( e = this. parseExprHeadOrYield () ) { n. push (core ( this. parseNonSeqExpr ( e, 0, 0) ) ) ; }
       else break ;
       if ( this.ltcontents == ',' ) { this.next () ; continue ; }
       break ;
    }

return n ;
} ;

lp.parseObjectExpression = function (cFlags_Sh_Non ) {
  var prop = [], e, n    = this.names;

  var startc = this.c - 1  , startLoc = this.locOn ( 1   )  ;
  this.next () ;
  var p = cFlags_Sh_Non ,
      propThatMustBeInAnAssig = null,
      hasPropThatMustNot = (false ) ;
  while ( e = this.parseProperty(p)) {
     prop .push(e) ;
     if ( this. propThatMustBeInAnAssig ) {
        if ( !propThatMustBeInAnAssig ) { propThatMustBeInAnAssig = this. propThatMustBeInAnAssig; p = cfNonAssigNotValid ; }
        this. propThatMustBeInAnAssig = null ;
     }
     else if ( this. mustNot ) {
       if ( !hasPropThatMustNot ) { 
             hasPropThatMustNot = this. mustNot ;
             p = cfShortNotValid ;
       } 
       this. mustNot = false ;
     }
     if ( this. ltcontents == (',' ) ) { this.next () ; continue ; }
     break ;
  }
  if ( propThatMustBeInAnAssig ) this. propThatMustBeInAnAssig = propThatMustBeInAnAssig ;
  else if ( hasPropThatMustNot ) { this. mustNot = hasPropThatMustNot ; }
  e  =  {  
     properties : prop,
     type: 'ObjectExpression',
    start : startc ,
     pDepth : 0    ,
       end :              this.c ,
                                 loc : { start : startLoc , end : this.loc   () }
   }
   this.names = n;
   this.expect('}'   )  ;
   return e;
};

lp.parseParen = function () {
  var r = null , argListBecause = null, n = null,  e   =    null  ; 
  var startc = this.c - 1, startLoc = this.locOn   (  1 )  ;
  this.next   () ;
  var argListIsActive = this. argListIsActive , argList = this. argList   ;
 
  e = this.parseExprHeadOrYield (0) ;
  if ( e ) {
    this.canHaveNoAssig = !false ;
    e = this. parseNonSeqExpr ( e, 0, 0 ) ;
    if (this.propThatMustBeInAnAssig ) {
       this. argListIsActive = !false;
       this. argList = {} ;

       if ( this. ltcontents == ')' ) {
          if ( e.type != 'paren' ) e. pDepth = 1 ;
          else e = e.expr, e. pDepth ++ ; 
          this.funcBecause = e ;
          n = {  type  : 'paren' ,  expr: e, loc : { start : startLoc, end : this.loc()   }  , start : startc , end : this.c   }   ;
          this.expect( ')' ) ;
          this. argListIsActive = argListIsActive ; this.prev.push(argList   )  ;
          return  n  ;
       }

       if ( r = this. convAssig(e , !false ) ) { this.err(e . type + ' can\'t be a def; reason: ' + this.convErr ) ; } 
       argListBecause = e ;
       this. propThatMustBeInAnAssig = null ;
    } 
    if ( this.  ltcontents == ',' ) {
       var startcSeq = e.start, startLocSeq = e.loc.start   ;
       e = [core(e)];
       var head ;
       do {
          this.next () ;
          if ( this. ltcontents == '...' ) {
             if ( !argListBecause ) {
               this. argListIsActive = !false ;
               this. prev. push ( argList ) ;
               this. argList = {};
               if ( r = this.convBareList(e) ) this.err( 'list'  + ' can\'t be a param ; reason : ' + this.convErr , r ) ;
               r = this.tok() ;
               this.funcBecause = r ; 
             }
             e . push ( this.parseRestElement () ) ;
             this.expect ( ')') ;
             return { type : 'paren', expr : { type : 'SequenceExpression', expressions : e }, loc : { start : startLoc, end: this.loc() }, start : startc, end : -1 } ;
          }
          if ( argListBecause ) {
            var ptrn = this. parsePattern   () ;
            if ( ptrn. type == 'Identifier' )                                             this. arg ( ptrn, !false   )  ;

            if ( '=' == this. ltcontents )         head  = this.parseAssig(ptrn )  ;  
            else head = ptrn ;
          }
          else  {
            head = this. parseExprHeadOrYield () || this.err( this.lttype + ' is not a valid start for an expr ' );
            this.canHaveNoAssig = ! false ;
            head = this. parseNonSeqExpr ( head ,0,0 ) ;
            if ( this. propThatMustBeInAnAssig ) {
                this. argListIsActive = !false;
                this. prev. push(argList)  ;

                this. argList = {} ;
                
                if ( r = this. convAssig(head, !false ) ) this.err(head.type+' can\'t be a def; reason : ' + this.convErr ) ;
                if ( r = this. convBareList (e ))     this.err('list' + ' can\'t be a param ; reason : ' + this.convErr ) ;
                argListBecause = head ;
                this. propThatMustBeInAnAssig = null ;
            }
          } 
          e. push ( core( head ) ) ;
       }  while ( this. ltcontents == ',' );
       e  =  { type : 'SequenceExpression' , expressions : e, start : startcSeq, end : head.end, loc : ({ start : startLocSeq, end : head.loc.end   }  ) }  ;
    }

    if ( e. type != 'paren' ) e. pDepth = 1 ; 
    else { e = e .expr ; e .pDepth ++ ; } 
    if ( argListBecause ) {  this.funcBecause = argListBecause ; this. argListIsActive  = argListIsActive ;  }
    n  =  { type : 'paren', expr : e, start : startc, end : this.c, loc : { start : startLoc, end : this.loc   ()   }   }     ;
    this.expect(  ')' )          ; 
    return n ;
  }

  else switch ( this.  ltcontents ) {
        case ')' :
           this.funcBecause = this.tok   ()  ;
           this.argList = null;
           this. prev. push ( argList  ) ;
           n  = { type : 'paren', expr : { type : 'SequenceExpression',  expressions : []    }   }   ;
           this.next   () ;
           return n ;

        case '...' :
          this.funcBecause = this . tok   ()  ;
          this. argListIsActive = !false ;
          this. argList = {} ; 

          r   = ( this. parseRestElement ()   )  ;
          this. argListIsActive          = argListIsActive ; this. prev. push ( argList   )  ;
          n  = { type  : 'paren' , expr : (   r  ) , start : startc, end : -1 , loc : { start : startLoc, end : this.loc   () } }   ;
          this.expect ( ')'  ) ;
          return n;

        default : this. err ( 'Unexpected ' + this.lttype ) ;

  }
};
       
lp . parseVariableDeclaration = function( cFlags_For, startc, startLoc ) {
     var kind;
      
     if ( this.startStmt ) this.startStmt = false     ;
     else  if ( ! ( cFlags_For & cfFor ) ) { this.err ( kind + 'is not a vaild name ' ) ; }
     var dec = [];
     if ( !startLoc ) {
       startc = this.c0 ;
       startLoc = this.locBegin   ()  ;
       kind   =  this. idcontents ;
       this.next () ;
     }
     else
         kind   = 'let' ;

     var e = this.parseVariableDeclarator(cFlags_For ) ;
     if ( !e ) this.err(( 'must dec' ) ) ; 
     do { 
         dec.push (e) ;
         if ( this.ltcontents != ',' )
            break ;
         this.next() ;
         e = this.parseVariableDeclarator(cFlags_For ) ; 
     } while ( e )  ;
     var _e = dec[dec.length -   1 ]  ;
     var i, eLoc;
     if ( ! ( cFlags_For & cfFor ) ) {
       this.foundStmt = !false ;
       i = this.semiI () ||  _e  . end   ;
       eLoc    = this.semiLoc() || _e . loc. end   ;
     }

     else {
       i  = _e . end ;
       eLoc = _e . loc. end   ;
     }
     return {
         declarations : dec ,
         type: 'VariableDeclaration',
        start : startc,
          end : i,
       loc :  { start : startLoc, end : eLoc } ,
       kind   : kind  
     }


}

lp . parseVariableDeclarator = function(cFlags_For ) {
   var n = this.parsePattern  (), e = null ; // console.log( n , "N", "N", this. peek ) ; 
   if ( n ) {
       var _i = null ; 
       if ( this. ltcontents   == ('=' ) )  {
          this.next   () ; 
          _i  =  this. parseNonSeqExpr(this.parseExprHeadOrYield(),0, cFlags_For );
       }
       else if  ( n.  type !=  'Identifier' ) {
          this.expect( '=' ) ; 
          _i  =  this. parseNonSeqExpr(this.parseExprHeadOrYield   () , 0, cFlags_For );
       }
       return {
         type : 'VariableDeclarator' ,
         id : n,
         start : n.start,
           end : _i ? _i . end : n . end  , 
         loc : { start : n.loc.start, end : _i ? _i.loc.end : n.loc.end   }    ,
         init : !_i ? _i : core(_i)                                                
       }; 
   }
}; 

lp . parseFor = function() {
  var startc = this.c0, startLoc = this.locBegin   () ;
  this.next () ;
  this.expect('(' ) ;
  var _head ;
  switch (_head = this.idcontents ) {
     case 'var':   _head = this. parseVariableDeclaration(cfFor ) ; break ;
     case 'let':
     case 'const' :
         if ( this. v > 5 ) {
           _head = this. parseVariableDeclaration(cfFor ) ;
           break ;
         }

     default :
       _head = this. parseExprHead () ;
       if ( this. propThatMustBeInAnAssig ) this.canHaveNoAssig = !false ;
       else if ( _head ) { _head = this.parseExpr(_head , cfFor ); } 
       else _head = null ;  
  }
  var _in = false, _mid = null, _tail = null  ;
  switch ( this.    idcontents ) {
     case 'of' :
     case 'in' :
        if ( this. mustNot ) { this.err ( _head . type + ' is not an assig ' ) ;} 
        _in=!false;
        if ( _head . type == 'VariableDeclaration' ) {
           if ( _head . declarations.length != 1 ) this.err ( _head . kind + ' must not have more than one decl in case it is in a for/in' ) ;
        }
        else {
          if ( this . propThatMustBeInAnAssig ) this. propThatMustBeInAnAssig = null ;
          var convErr = this.convAssig (_head ) ;
          if ( convErr ) this.err ( _head . type + ' is not an assig; reason ' + this.convErr ) ;
       }
       this.next() ;
       _mid  = core(this. parseNonSeqExpr(this.parseExprHead(0),0,0)); 
       break ;

     default :
        if ( this. propThatMustBeInAnAssig ) {
           this.canHaveNoAssig = false ;
           _head = this.parseExpr(_head) ;
        }
        this. expect (';'); 
        if ( this.ltcontents != ';' ) _mid = core( this. parseExpr());  
        this.expect(';');
        _tail = this. parseExprHead();
        if( _tail )_tail = core( this.parseExpr (_tail) );
        else _tail = null; 
    }
    this. expect ( ')' ) ;
    ++ this. iteD ;
    var scopeFlags = this.scopeFlags;
    this.scopeFlags |= ( breakFlag|continueFlag ) ;
    var _b = this.parseStatement (!false);
    this.scopeFlags = scopeFlags ;
    -- ( this. iteD ) ;
   
    return _in ? { type: 'ForInStatement', loc: { start : startLoc, end : _b.loc.end }, start : startc, end: _b.end, right : _mid, left: core  (     ( _head   )  )  , body: _b } :
             { type: 'ForStatement', init: ! _head ? _head    :  core( ( _head   )  ) , start : startc, end: _b.end, test : _mid, loc: { start : startLoc, end: _b.loc.end }, update: _tail, body: _b };
}

var core = function(n ) { return ( ( n . type == 'paren' ? n.expr : n )) ; } 
var coreP = function(n) { return n. type == '[' ? n. expr : n   }
var func  =  function(n, isGen, _a, _b ) {
   return { type: 'FunctionExpression',
             id : coreP ( n ) ,
          start : n.start,
            end : _b . end ,
     generator  : isGen ,
            loc : { start : n.loc.start, end  : _b . loc . end   }  ,
         params : _a ,
          body  : _b 
    }
}

var createID = function(c0,col0,c,li,col,contents   )  {
   return {  type   : 'Identifier',
              value : contents,
              start : c0 ,
                end : c ,
                loc : {start: { line: li , column: col0 }, end: { line: li, column: col }  }  ,
            n       : 0 ,
           contents : contents   }  ;

}

var createIDLoc = function(startc,startLoc,c,col,li   ,   contents   )  {
  return {  type   : 'Identifier',
             value : contents,
             start : startc , 
               end : c ,
               loc : { start  : startLoc  ,  end  : { line: li, column: col }   } ,
           n       : 0 ,
          contents : contents   }  

}  
  
lp.parseProperty = function (cmn) {

  var e, Prop = ( cmn == METHD ) ? 'MethodDefinition' : 'Property' , n =  this. idcontents || this. ltcontents ;

  var _static = false ;
  var startc = 0, startLoc = null ;
  var li = 0, col = 0, c = 0   ;
  var _v = null, _a  = null, _n   = null, _b = null ;
  var loc = null, col0 = 0, c0 =       0   ;
  var scopeFlags = 0   ;

  L :
  while ( !false ) 
    switch ( n ) { 
      case 'get':
        c0 = this.c0 ;
        col0 = this.col0;
        if ( !_static )  { startc = c0; startLoc = this.locBegin() ;  } 
        li = this.li; col = this.col; c = this.c;   
        this.next();
        if (e = this.parseMemName()) {
           if ( e.type != '[' ) {
             _v = e.contents + '%' ;
             if ( has.call ( this.names, _v   ) )  {
               if ( this.names[_v] != nameSet ) this.err ( e.contents + ' already in the obj       '   )  ;
               this. names[_v] |= nameSet ;
             }
             else this. names[ _v ] = nameGet ;
           }  
           if ( cmn & cfNonAssigNotValid ) this.err('get' ) ; 
           scopeFlags = this.scopeFlags; this.scopeFlags = 0;           
           _a = this.parseArgs(0);
           _b = this.parseFuncBody   (0   , scopeFlags ) ; 
           _v = func(e,false,_a,_b) ;
           loc= { start : startLoc, end : _v . loc. end }  ; 
           if ( cmn != METHD ) { 
             n  =  { type: Prop, key: coreP (e), start : startc, end: _v.end, kind: 'get', computed: e.type ==='[', loc : loc,  method : false, shorthand : false }
             this. mustNot = !false ;
           }
           else  {
             n  =  { type: Prop, key: coreP (e), start : startc, end: _v.end, kind: 'get', computed: e.type ==='[', loc : loc, static: _static }      ;
           }
           return n   ;
        }
        e  = _static ? createID  ( c0, col0, c, col, li, 'get' ) : createIDLoc(startc,startLoc,c,col,li,'get' )     ;        
        break L;

      case 'set':
        c0  = this.c0 ;
        col0  = this.col0; 
        if ( !_static ) { startc =   c0; startLoc = this.locBegin() ;  }
        li = this.li; col = this.col; c = this.c; 
        this.next();
        if (e = this.parseMemName()) {
           if ( cmn & cfNonAssigNotValid ) this.err( 'set' ) ;
           if ( e.type != '[' ) {
             _v = e.contents + '%' ;
             if ( has.call ( this.names, _v   ) )  {
               if ( this.names[_v] != nameGet ) this.err ( e.contents + ' already in the obj       '   )  ;
               this. names[_v] |= nameGet ;
             }
             else this. names[ _v ] =           nameSet ;
           }  

           scopeFlags = this.scopeFlags; this.scopeFlags = 0;           
           _a = this.parseArgs(1 );
           _b = this.parseFuncBody   (0 , scopeFlags )  ;
           _v = func(e,false,_a,_b) ;
           loc= { start : startLoc, end : _v . loc. end }  ;
           if ( cmn != METHD ) {
             n  =  { type: Prop, key: coreP (e), start : startc, end: _v.end, kind: 'set' , computed: e.type ==='[', loc : loc,  method : false, shorthand : false }
             this. mustNot = !false ;
           }
           else  { 
             n  =  { type: Prop, key: coreP (e), start : startc, end: _v.end, kind: 'set' , computed: e.type ==='[', loc : loc, static: _static }      ;
           }
           return n   ;
        }
        e  = _static ? createID  ( c0, col0, c, col, li, 'set'  ) : createIDLoc ( startc, startLoc, c, col, li, 'set'  )   ;
        break L;

      case '*':
        if ( cmn & cfNonAssigNotValid ) this.err('sh and * ' ) ; 
        if ( !_static ) { startc = this.c - 1 ; startLoc = this.locOn ( 1 )  ;  }  
        this.next();
        e = this.parseMemName() || this.err('[ or and expr expcted', this.peek );
        if ( e.type != '[' ) {
            _v = e.contents + '%' ;
            if ( has.call ( this.names, _v   ) )  this.err ( e.contents + ' already in the obj       '   )  ;
            else this. names[ _v ] =   ( nameMethd  )  ;
        }  

        scopeFlags = this.scopeFlags; this.scopeFlags = 0;           
        _a = this.parseArgs( -1 );
        _b = this.parseFuncBody   ( cfY ,  scopeFlags ) ;
        _v = func(e,!false,_a,_b) ;
        loc= { start : startLoc, end : _v . loc. end }  ;
        if ( cmn != METHD ) { 
          n  =  { type: Prop, key: coreP (e), start : startc, end: _v.end, kind: ( 'init')    , computed: e.type ==='[', loc : loc,  method : false, shorthand : false }
          this. mustNot = !false ; 
        }                                                      
        else  {
          if ( e. contents == 'constructor' ) this.err ( ' constructor can not be * ' )  ;  
          n  =  { type: Prop, key: coreP (e), start : startc, end: _v.end, kind: 'method'  , computed: e.type ==='[', loc : loc, static: _static }      ;
        }
        return n   ;

      case 'static' :
          if ( cmn == METHD && !_static ) {
            c0     = this.c0   ;
            col0     = this.col0 ;
             startc =                       c0 ;   
             _static = !false; 
             startLoc= this.locBegin   () ;
             li = this.li;
             col=this.col;
             c  =this.c  ;
             this.next () ;
             n = this. idcontents || this . ltcontents ;
             continue ;
          } 

    default: 
        if ( e = this.parseMemName()) break L ;
        if ( _static ) { e = this.createIDLoc(                        startc, startLoc     , c, col, li,  ( 'static' )  ); break L ; } 
        return;
  }

  switch (this.lttype) {
    case '(':
       if ( !startLoc ) { 
         startc = e.start;
         startLoc = e.loc.start;
       }
       if ( cmn & cfNonAssigNotValid ) this.err('paren ' ) ; 
       if ( e.type != '[' ) {
            _v = e.value + '%' ;
            if ( has.call ( this.names, _v   ) )  this.err ( e.value + ' already in the obj       '   )  ;
            else this. names[ _v ] =   ( nameMethd  )  ;
       }  
       scopeFlags = this.scopeFlags ; this.scopeFlags = 0 ;  
       _a = this.parseArgs(( -1  )  )  ;
       _b = this.parseFuncBody   (0,    scopeFlags ) ;
       _v = func(e,false,_a,_b) ;
       loc= { start : startLoc, end : _v . loc. end }  ;
       if ( cmn != METHD ) {
         n  =  { type: Prop, key: coreP (e), start : startc, end: _v.end, kind: ( 'init')    , computed: e.type ==='[', loc : loc,  method : false, shorthand : false }
         this. mustNot = !false ;
       }
       else  {
         if ( e. value == 'constructor' );
         n  =  { type: Prop, key: coreP (e), start : startc, end: _v.end, kind: 'method'  , computed: e.type ==='[', loc : loc, static: _static }      ;
       }
       return n   ;
 
     case ':':
       if ( cmn == METHD   )
          this.err( 'Unexpected ' + this. ltcontents ) ;
      
       if ( e.type != '[' ) {
            _v = e.value + '%' ;
            if ( has.call ( this.names, _v   ) ) { 
               if ( this. names [ _v ] != nameInit )
                  this.err ( e.value + ' already in the obj       '   )  ;
            }
            else this. names[ _v ] =     nameInit   ;
       }  
        
       this.next() 
       _v  = ( this. parseExprHeadOrYield (0)||this.err('must be an actual expr') ) ;
       this.canHaveNoAssig = !false ;
      _v  = ( this. parseNonSeqExpr( _v , 0, 0) );
      return {
        type: 'Property',
       start : e.start ,
       key :  coreP (e) , 
         end : _v . end ,
                           loc : { start : e.loc.start, end : _v . loc. end   }  ,
    kind: 'init',
       computed: e . type == '[',
      method : false ,
      shorthand : false ,
       value : core(_v) 
     }


       default : 

         if ( cmn == METHD ) this.err( 'Unexpected ' + this. ltcontents ) ;
         if (e. type != 'Identifier' ) this.err('id expcted') ; 

         _v = e.value + '%' ;
         if ( has.call ( this.names, _v   ) ) { 
              if ( this. names [ _v ] != nameInit )
                 this.err ( e.value + ' already in the obj       '   )  ;
         }
         else this. names[ _v ] =     nameInit   ;

         if ( this. ltcontents == ('=' ) ) {
          if ( cmn& cfShortNotValid ) this. err( 'no' ) ;
          _v = this. parseAssig ( e )  ;
          this. propThatMustBeInAnAssig = !false;
        }
        else { _v = e; }
        return {
               type: _v == e ? 'Property' : 'AssignmentProperty',
              key  : e,
             start : _v . start,
               end : _v . end , 
               loc : _v . loc, 
               kind: 'init', 
          shorthand: ! false ,
             method: false ,
          value    : _v    ,
          computed : false
        }
      }
};

lp . parseBrac  = function() {
  var startc = this.c - 1   , startLoc = this.locOn   (  1 )  ;
  this.next   () ;
  var e = core( this. parseNonSeqExpr (this. parseExprHeadOrYield ()||this.err('must be an actual expr'), 0, 0 )   )  ;
  e  = { type:   '[' , expr : e , start : startc, end : this.c, loc : { start : startLoc, end : this.c } } ;
  
  this.expect (']' );

  return e;
} 
lp.parseMemName = function() {
   switch ( this. lttype ) {
      case 'Identifier'  :     return  this. memID   () ; 
      case '[' : return this. parseBrac   () ;
      case 'Literal' : 
          return this.                             numstr () ;
   }
}

lp . memID = function() { 
    switch ( this.lttype ) {
      case 'Identifier' : 
       if ( this.v > 5 ) return this.id       ()  ; 
       return this. validateID()  ;

      case 'Literal' : return this.numstr ();
    } 
}

lp . arg=         function( id , c ) {
   var name = id.value + '%' ;
   if   ( has .call(this.argList,name)  )   {
     if ( c  || this. argList[name] == 2 ) { this.err ( id . value + ' is in the arglist       '      )   ;  }
     
     else this. argList  [         name] = 1  ;
   }
   else
       this. argList [ name ] = c ? 2 : 0;
}

lp . validateArg = function ( r ) {
  var e = null ; 
  for ( e in r ) {
     if ( r [ e ]  == 1 ) this. err ( e.substr( 0 , e.length - 1  )   + ' is in the arglist          ')  ;
     this. validateID ( e.substr( 0, e.length - 1  ) )  ;
  }
}

lp.parsePattern = function() {
  switch ( this.lttype ) {
    case 'Identifier' : return  this. validateID   ()    ;
    case '[' : return this. parseArrayPattern  () ;
    case '{' : return this. parseObjectPattern () ;
  }
}

lp. parseArrayPattern = function() {
    var startc = this.c -   1 , startLoc = this.locOn   (  1 )  ,     e =     [], ptrn  = null   ;
    this.next   () ;       
    L :
    while ( !false ) {
       if (  ptrn = this. parsePattern   () )  {
          if ( this. argListIsActive && ptrn. type == 'Identifier' ) this. arg( ptrn, !false   )  ;         
          e  .  push ( this.ltcontents == '=' ? this. parseAssig   ( ptrn   )  :  ptrn ) ;
       }
       else if ( this.  lttype == '...' ) { e .  push (this. parseRestElement () ) ; break ;  }  
       else
         e .  push( null ) ;
          
       if ( this. lttype === ',' ) { this.next () ;  continue   ;  }
       break ;
    }
    ptrn  = { type:  'ArrayPattern', loc : { start : startLoc, end : this.loc   () } , start : startc, end : this.c,   elements: e };     
    this.expect (']') ;
    
    return ptrn;
}

lp.parseObjectPattern  = function() {
    var sh = false ,  startc = this.c - 1  , startLoc = this.locOn ( 1   ), e = [], v = null, n = null ;        
    this.next ()   ;   
    while ( n = this. parseMemName() ) {
        if ( this.ltcontents == ':' ) { this.next(); v = this.parsePattern   ();}
        else  {
           if   (   n .type != 'Identifier'    )   this.err('id' ) ;
           v = n ;
           sh = !false;
        }
        if ( this. argListIsActive && v.  type == 'Identifier' ) this. arg( v, !false   )  ;
        if ( this.ltcontents == '=' ) v  =   this. parseAssig ( v )   ;
        e  . push ({ type: 'AssignmentProperty', start : n.start, key: coreP (n), end: v.end , loc: { start : n.loc.start , end: v.loc.end },
             kind: "init" , computed: n. type == 'paren', value : v, method : false , shorthand : sh  }); 
        if ( this.ltcontents == ',' ) { this.next (); continue; }
        
    }
    n   =  {  type: 'ObjectPattern', loc : { start : startLoc, end : this.loc () } , start : startc, end  : this.c   ,   properties   : e   }  ;
    this.expect('}' )              ;
    return n;
} 

lp . parseAssig = function (n) {
    this.next() ;
    var r  = this. parseNonSeqExpr ( this. parseExprHeadOrYield () || this.err ( 'Unexpected ' + this. ltcontents ), 0, 0)   ; 
    return {
      type : 'AssignmentPattern' ,
   start   : n.start,   
      left : n,
       end : r.end ,
     right : core( r ) , 
       loc : ({ start  : n.loc.start, end : r.loc.end    }   )
   };
}

lp . parseArgs  = function (argLen ) {
  var e = [], n, r, argList = this.argList , argListIsActive = this. argListIsActive  ;
  this. argList = {} ;
  this. argListIsActive = !false ;
  this.expect('(') ;
  while ( argLen-- != 0 && ( n = this.parsePattern  ()) ) {
    if (  this.ltcontents != '=' ) {
       if ( this. argListIsActive &&                           n  .  type == 'Identifier' ) this. arg(           n,false   )  ;
       e. push ( n  )  ;
    } 
    else  {
       if ( this. argListIsActive && n. type == 'Identifier' ) this. arg( n, !false   )  ; 
       e.push( this.parseAssig (n) );
    }    
    if (this.ltcontents == ',') { this.next(); continue; }
    break;
  }
  if ( argLen> 0 && this.ltcontents == '...') { e. push (this. parseRestElement () ) ; }
  this.expect(')' );
  this. argListIsActive  = argListIsActive   ; this.prev. push (  argList   ) ;
  return e;
}

lp.parseRestElement = function() {
   var startc = this.c - this. ltcontents.length, startLoc = this.locOn ( this. ltcontents.length   )  , n = null ;
   this.next ();  
   n  =  this.parsePattern   ();
   if ( this. argListIsActive && n.  type == 'Identifier' ) this. arg( n, !false   )  ;
   return   { type : 'RestElement', loc : { start : startLoc, end : n.loc.end }  , start : startc, end : n.end   ,   argument   :    n       }
}

lp . parseFunc   = function(      cFlags_For               ) {
  var startStmt = this.startStmt, startc = this.c0,            startLoc = this.locBegin   () , _i = null, isGen = false ;
  var scopeFlags = this. scopeFlags ;

  this.next   () ;
  if (   this. ltcontents ==  ( '*' )   ) { isGen = ! false ; this. next   () ; }

  if ( 	startStmt )  {
     this.startStmt = false;
     if ( this. lttype == 'Identifier' ) _i = this. id   () ; 
     else
        this.err( 'Unexpected ' + this. lttype   )  ;
  }
  else if ( this. lttype == 'Identifier' )  { _i = this. id      ()   ;  }
  this.scopeFlags = 0 ;
  var _a = this. parseArgs( -1  ) ;
  var _b = this. parseFuncBody( !isGen ?  cFlags_For  : cFlags_For | cfY , scopeFlags   )  ;

  _i =  { type : ( startStmt ?  'FunctionDeclaration' : 'FunctionExpression' ) ,
            id : _i  ,
         start : startc   ,
           end : _b . end , 
           generator      : isGen , 
         body  : _b ,
             loc : { start : startLoc, end : _b . loc. end    }   ,
          params : _a ,
              }; 

  if ( startStmt ) { this.foundStmt = !false ; }
  return  _i ; 
}
 
lp.parseFuncBody = function(      cFlags_For_Y, scopeFlags                    ) {
     var argList = this. argList ;
     this. argList = this.prev.pop   () ;
     if ( this. ltcontents != '{' ) 
        return this.parseNonSeqExpr( this. parseExprHeadOrYield () || this.err('Unexpected ' + ((this).ltcontents)), 0, cFlags_For_Y );
 
     if ( scopeFlags & methdFlag ) {
       if ( scopeFlags & funcFlag ) this.scopeFlags = funcFlag ;
       else this.scopeFlags = ( methdFlag | funcFlag ) ;
     }
     else
       this.scopeFlags = funcFlag ;
    
     if ( cFlags_For_Y & cfY )
       this.scopeFlags |= yieldFlag ;
     
     var argListIsActive = this. argListIsActive ; this.argListIsActive = false   ;
     var stmts = [], stmt, l = this.lbn, iteD = this. iteD, startc= this.c - 1, startLoc = this.locOn ( 1 )  , n  =  null     ;
     this.lbn = {};
     this. iteD = 0 ;
     this.next   () ;
     var tight = this. tight  ;
     stmt = this.parseStatement() ;
     if ( stmt ) {
        if ( this. v > 5 && stmt. type == 'ExpressionStatement' && ( stmt. expression . type == 'Literal') )
          switch (this.src.substring(stmt.expression.start,stmt.expression.end )) { 
               case "'use strict'":
               case '"use strict"':
                    this.tight = ! false ;
                    this.validateArg(argList);
        } 

        stmts . push( stmt ) ;
        while (stmt = this.parseStatement ())  stmts .push ( stmt ) ;
     }
     n   =  { type : 'BlockStatement' , body : stmts , start : startc, end : this.c,  loc : { start : startLoc,   end : this.loc   () } };
     this.expect ( '}' );

     this.lbn =l  ;
     this. iteD   = iteD  ;
     this.scopeFlags   =  ( scopeFlags   )  ;
     this. argList = argList ;
     this. argListIsActive = argListIsActive ;
     this. tight = tight ;

     return  n; 
}

var loc = function(n ) {
   if ( !n ) return ;

   if ( !('start' in n) ) { return  console.log (  'start' )  ;  }
   if ( !('loc' in n   )) { return  console.log (  'loc'   )  ;  }   
   if ( !( 'start' in n.loc)  )   {   return console.log(   'start loc' )  ;     }
   if ( !( 'end' in n.loc )     )  {  return console.log(   'loc e'     )  ;     }
  
   var li = 1,
       col = 0,
       start = 0 ;
      
   var r  , src = n.src ;
   var _loc = n.loc.start ;
   var startLoc = !false ;
   
   var c = 0 ; 
   while ( c < src.length ) {      
   
      if ( li == _loc.l && col == _loc.c ) { 
           if ( startLoc ) { start = c ; startLoc = false ; _loc = n.loc.end ; } 
           else { break ; }
      }    
   
      switch ( r = src.charCodeAt ( c ) ) {
           case _cret : if ( _lf == src.charCodeAt ( c  +   1 ) ) c ++ ; 
           case _lf :
           case 0x2028:
           case ((0x202<<4) + ( ( 9 ) )) :
              li ++ ;
              col =   -1     ;
              break ;
          
           default : if ( r   >= 0x0D800 && r <= 0x0DBFF ) col-- ;
   
      }
                  
      c ++ ;
      col ++ ;
           
   }

   if ( !( start == n.start && c  == n.end   )  ) {  throw ( new Error ( "LOC [" + n.start + ", " + n.end + "]; [" + start + ", " + c + "]"    )  )  ;  }
  
return src.substring(start, r )
}
 
var compMain = function(main, n, from ) { 
   from  = from || ""

   var e,
       Obj = typeof {},
       Arr = typeof [] ;

   for ( e in main ) {
     if ( !( e in n )  )           continue ;

     switch ( typeof ( main[e] )  ) {
     
        case Obj :   compMain(main[e],n[e], from + "/" + e ) ; break ;
        case Arr :  
           var r = 0;
           if ( main[e].length != n[e].length) {  throw ( new Error( "LEN " + main[e].length + " not " + n[e].length + " " ) ) ; }
           while ( r < main[e].length ) compMain ( main[e][r], n[e][r], (from + "/" + e + "[" + r + "]"   )  ), ++ r ;
     

        default :
//           if ( main[e] === {}.l || n[ e] === {} . l   ) { { console.log( from + "/" + e, main[e], n[e]   )  ; }  }
           if ( main[e].toString () != ( n[e]. toString () ) ) { {  { console. log ( n.start  , main.start, from, e    )  } }   throw ( new Error ( "main " + main[e] + "; n " + n[e] ) )  ;   }
     }
   }
} ;

var IDS_ = (fromRunLenCodes([0,8472,1,21,1,3948,2], fromRunLenCodes([0,65,26,6,26,47,1,10,1,4,1,5,23,1,31,1,458,4,12,14,5,7,1,1,1,129,5,1,2,2,4,1,1,6,1,1,3,1,1,1,20,1,83,1,139,8,166,1,38,2,1,7,39,72,27,5,3,45,43,35,2,1,99,1,1,15,2,7,2,10,3,2,1,16,1,1,30,29,89,11,1,24,33,9,2,4,1,5,22,4,1,9,1,3,1,23,25,71,21,79,54,3,1,18,1,7,10,15,16,4,8,2,2,2,22,1,7,1,1,3,4,3,1,16,1,13,2,1,3,14,2,19,6,4,2,2,22,1,7,1,2,1,2,1,2,31,4,1,1,19,3,16,9,1,3,1,22,1,7,1,2,1,5,3,1,18,1,15,2,23,1,11,8,2,2,2,22,1,7,1,2,1,5,3,1,30,2,1,3,15,1,17,1,1,6,3,3,1,4,3,2,1,1,1,2,3,2,3,3,3,12,22,1,52,8,1,3,1,23,1,16,3,1,26,3,5,2,35,8,1,3,1,23,1,10,1,5,3,1,32,1,1,2,15,2,18,8,1,3,1,41,2,1,16,1,16,3,24,6,5,18,3,24,1,9,1,1,2,7,58,48,1,2,12,7,58,2,1,1,2,2,1,1,2,1,6,4,1,7,1,3,1,1,1,1,2,2,1,4,1,2,9,1,2,5,1,1,21,4,32,1,63,8,1,36,27,5,115,43,20,1,16,6,4,4,3,1,3,2,7,3,4,13,12,1,17,38,1,1,5,1,2,43,1,333,1,4,2,7,1,1,1,4,2,41,1,4,2,33,1,4,2,7,1,1,1,4,2,15,1,57,1,4,2,67,37,16,16,86,2,6,3,620,2,17,1,26,5,75,3,11,7,13,1,4,14,18,14,18,14,13,1,3,15,52,35,1,4,1,67,88,8,41,1,1,5,70,10,31,49,30,2,5,11,44,4,26,54,23,9,53,82,1,93,47,17,7,55,30,13,2,10,44,26,36,41,3,10,36,107,4,1,4,3,2,9,192,64,278,2,6,2,38,2,6,2,8,1,1,1,1,1,1,1,31,2,53,1,7,1,1,3,3,1,7,3,4,2,6,4,13,5,3,1,7,116,1,13,1,16,13,101,1,4,1,2,10,1,1,2,6,6,1,1,1,1,1,1,16,2,4,5,5,4,1,17,41,2679,47,1,47,1,133,6,4,3,2,12,38,1,1,5,1,2,56,7,1,16,23,9,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,550,3,25,9,7,5,2,5,4,86,4,5,1,90,1,4,5,41,3,94,17,27,53,16,512,6582,74,20950,42,1165,67,46,2,269,3,16,10,2,20,47,16,31,2,80,39,9,2,103,2,35,2,8,63,11,1,3,1,4,1,23,29,52,14,50,62,6,3,1,1,1,12,28,10,23,25,29,7,47,28,1,16,5,1,10,10,5,1,41,23,3,1,8,20,23,3,1,3,50,1,1,3,2,2,5,2,1,1,1,24,3,2,11,7,3,12,6,2,6,2,6,9,7,1,7,1,43,1,10,10,115,29,11172,12,23,4,49,8452,366,2,106,38,7,12,5,5,1,1,10,1,13,1,5,1,1,1,2,1,2,1,108,33,363,18,64,2,54,40,12,116,5,1,135,36,26,6,26,11,89,3,6,2,6,2,6,2,3,35,12,1,26,1,19,1,2,1,15,2,14,34,123,69,53,267,29,3,49,47,32,16,27,5,38,10,30,2,36,4,8,1,5,42,158,98,40,8,52,156,311,9,22,10,8,152,6,2,1,1,44,1,2,3,1,2,23,10,23,9,31,65,19,1,2,10,22,10,26,70,56,6,2,64,1,15,4,1,3,1,27,44,29,3,29,35,8,1,28,27,54,10,22,10,19,13,18,110,73,55,51,13,51,784,53,75,45,32,25,26,36,41,35,3,1,12,48,14,4,21,1,1,1,35,18,1,25,84,7,1,1,1,4,1,15,1,10,7,47,38,8,2,2,2,22,1,7,1,2,1,5,3,1,18,1,12,5,286,48,20,2,1,1,184,47,41,4,36,48,20,1,59,43,85,26,390,64,31,1,448,57,1287,922,102,111,17,196,2748,1071,4049,583,8633,569,7,31,113,30,18,48,16,4,31,21,5,19,880,69,11,1,66,13,16480,2,3070,107,5,13,3,9,7,10,5990,85,1,71,1,2,2,1,2,2,2,4,1,12,1,1,1,7,1,65,1,4,2,8,1,7,1,28,1,4,1,5,1,1,3,7,1,340,2,25,1,25,1,31,1,25,1,31,1,25,1,31,1,25,1,31,1,25,1,8,4148,197,1339,4,1,27,1,2,1,1,2,1,1,10,1,4,1,1,1,1,6,1,4,1,1,1,1,1,1,3,1,2,1,1,2,1,1,1,1,1,1,1,1,1,1,2,1,1,2,4,1,7,1,4,1,4,1,1,1,10,1,17,5,3,1,5,1,17,4420,42711,41,4149,11,222,2,5762,10590,542])));

var IDC_ = (fromRunLenCodes([0,183,1,719,1,4065,9,1640,1],fromRunLenCodes ( ( [ 0 ,48,10,7,26,4,1,1,26,47,1,10,1,1,1,2,1,5,23,1,31,1,458,4,12,14,5,7,1,1,1,17,117,1,2,2,4,1,1,6,5,1,1,1,20,1,83,1,139,1,5,2,166,1,38,2,1,7,39,9,45,1,1,1,2,1,2,1,1,8,27,5,3,29,11,5,74,4,102,1,8,2,10,1,19,2,1,16,59,2,101,14,54,4,1,5,46,18,28,68,21,46,129,2,10,1,19,1,8,2,2,2,22,1,7,1,1,3,4,2,9,2,2,2,4,8,1,4,2,1,5,2,12,15,3,1,6,4,2,2,22,1,7,1,2,1,2,1,2,2,1,1,5,4,2,2,3,3,1,7,4,1,1,7,16,11,3,1,9,1,3,1,22,1,7,1,2,1,5,2,10,1,3,1,3,2,1,15,4,2,10,9,1,7,3,1,8,2,2,2,22,1,7,1,2,1,5,2,9,2,2,2,3,8,2,4,2,1,5,2,10,1,1,16,2,1,6,3,3,1,4,3,2,1,1,1,2,3,2,3,3,3,12,4,5,3,3,1,4,2,1,6,1,14,10,16,4,1,8,1,3,1,23,1,16,3,8,1,3,1,4,7,2,1,3,5,4,2,10,17,3,1,8,1,3,1,23,1,10,1,5,2,9,1,3,1,4,7,2,7,1,1,4,2,10,1,2,14,3,1,8,1,3,1,41,2,8,1,3,1,5,8,1,7,5,2,10,10,6,2,2,1,18,3,24,1,9,1,1,2,7,3,1,4,6,1,1,1,8,6,10,2,2,13,58,5,15,1,10,39,2,1,1,2,2,1,1,2,1,6,4,1,7,1,3,1,1,1,1,2,2,1,13,1,3,2,5,1,1,1,6,2,10,2,4,32,1,23,2,6,10,11,1,1,1,1,1,4,10,1,36,4,20,1,18,1,36,9,1,57,74,6,78,2,38,1,1,5,1,2,43,1,333,1,4,2,7,1,1,1,4,2,41,1,4,2,33,1,4,2,7,1,1,1,4,2,15,1,57,1,4,2,67,2,3,9,9,14,16,16,86,2,6,3,620,2,17,1,26,5,75,3,11,7,13,1,7,11,21,11,20,12,13,1,3,1,2,12,84,3,1,4,2,2,10,33,3,2,10,6,88,8,43,5,70,10,31,1,12,4,12,10,40,2,5,11,44,4,26,6,11,37,28,4,63,1,29,2,11,6,10,13,1,8,14,66,76,4,10,17,9,12,116,12,56,8,10,3,49,82,3,1,35,1,2,6,246,6,282,2,6,2,38,2,6,2,8,1,1,1,1,1,1,1,31,2,53,1,7,1,1,3,3,1,7,3,4,2,6,4,13,5,3,1,7,66,2,19,1,28,1,13,1,16,13,51,13,4,1,3,12,17,1,4,1,2,10,1,1,2,6,6,1,1,1,1,1,1,16,2,4,5,5,4,1,17,41,2679,47,1,47,1,133,6,9,12,38,1,1,5,1,2,56,7,1,15,24,9,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,32,517,3,25,15,1,5,2,5,4,86,2,7,1,90,1,4,5,41,3,94,17,27,53,16,512,6582,74,20950,42,1165,67,46,2,269,3,28,20,48,4,10,1,115,37,9,2,103,2,35,2,8,63,49,24,52,12,69,11,10,6,24,3,1,1,1,2,46,2,36,12,29,3,65,14,11,6,31,1,55,9,14,2,10,6,23,3,73,24,3,2,16,2,5,10,6,2,6,2,6,9,7,1,7,1,43,1,10,10,123,1,2,2,10,6,11172,12,23,4,49,8452,366,2,106,38,7,12,5,5,12,1,13,1,5,1,1,1,2,1,2,1,108,33,363,18,64,2,54,40,12,4,16,16,16,3,2,24,3,32,5,1,135,19,10,7,26,4,1,1,26,11,89,3,6,2,6,2,6,2,3,35,12,1,26,1,19,1,2,1,15,2,14,34,123,69,53,136,1,130,29,3,49,15,1,31,32,16,27,5,43,5,30,2,36,4,8,1,5,42,158,2,10,86,40,8,52,156,311,9,22,10,8,152,6,2,1,1,44,1,2,3,1,2,23,10,23,9,31,65,19,1,2,10,22,10,26,70,56,6,2,64,4,1,2,5,8,1,3,1,27,4,3,4,1,32,29,3,29,35,8,1,30,25,54,10,22,10,19,13,18,110,73,55,51,13,51,781,71,31,10,15,60,21,25,7,10,6,53,1,10,16,36,2,1,9,69,5,3,3,11,1,1,35,18,1,37,72,7,1,1,1,4,1,15,1,10,7,59,5,10,6,4,1,8,2,2,2,22,1,7,1,2,1,5,2,9,2,2,2,3,2,1,6,1,5,7,2,7,3,5,267,70,1,1,8,10,166,54,2,9,23,6,34,65,3,1,11,10,38,56,8,10,54,26,3,15,4,10,358,74,21,1,448,57,1287,922,102,111,17,196,2748,1071,4049,583,8633,569,7,31,1,10,102,30,2,5,11,55,9,4,12,10,9,21,5,19,880,69,11,47,16,17,16480,2,3070,107,5,13,3,9,7,10,3,2,5318,5,3,6,8,8,2,7,30,4,148,3,443,85,1,71,1,2,2,1,2,2,2,4,1,12,1,1,1,7,1,65,1,4,2,8,1,7,1,28,1,4,1,5,1,1,3,7,1,340,2,25,1,25,1,31,1,25,1,31,1,25,1,31,1,25,1,31,1,25,1,8,2,50,512,55,4,50,8,1,14,1,22,5,1,15,3408,197,11,7,1321,4,1,27,1,2,1,1,2,1,1,10,1,4,1,1,1,1,6,1,4,1,1,1,1,1,1,3,1,2,1,1,2,1,1,1,1,1,1,1,1,1,1,2,1,1,2,4,1,7,1,4,1,4,1,1,1,10,1,17,5,3,1,5,1,17,4420,42711,41,4149,11,222,2,5762,10590,542,722658,240 ]) ) ) ) ;

_exports.Parser = Parser  ;

var createTok = function( j )  {
   var l = 500 ;
   var str = "";
   while ( l-- ) str =  j(str) ;
   return str;
}
_exports.createTok = createTok ;


var tok = createTok( function(str) { if ( str == "" ) return "n " ; return  str + " = n "      ;     }  )  && 
   require( ( "fs" ) ).readFileSync(      "./N14_Muhammad(PBUH)/lube.js" ).toString () ;

var L = require('acorn')
var B = require('benchmark' )

while ( !false ) {
_B = new B.Benchmark.Suite();


 compMain( L.parse(tok ,{
      locations: ! false
    } ) , new Parser((tok)).parseProgram() ) ;

_B.add('lube', function() { /*  var e = {}; e.a = 'a'; e.b = 'b' ;  e. c = 'c' ; e. d = 'd' ; e.n = 'n' ; return e; */ new Parser((tok)).parseProgram() } ).
  add('12' , function () {
                           // var e  = { a : 'l', b: 'l', c: 'l', d: 'l', n:  'r' }  ; e.a = 'a' ;  e.b  = 'b' ; e.c = 'c'; e. d = 'd' ; e.n='n' ; return e ;
 
    L.parse(tok ,{
      locations: ! false
    } ) } ) .
  on('complete',  ( function() { console.log( "114", arguments[0].currentTarget[0]. hz , "\n 12" , arguments[0].currentTarget[ ( 1 ) ]   .          hz    ) } ) ) .
  run()
}


    
var e = function (n) {  if (n) return e(--n) ;};


var E ;



      
var n1 =""; E= 500; while ( E-- ) n1 += "l*e;" ;
var n2 =""; E= 500; while ( E-- ) n2 += "l* e;";

L = 12 ; while ( L -- ) E = new B.Benchmark.Suite(), E.add('space-no', function() { new Parser(n1).parseProgram() } ) .
  add('space' , function() { new Parser(n2).parseProgram() } ) .

  on(
     'complete',
      function(e) { console.log( "space-no", e.currentTarget[0].hz - e.currentTarget[1].hz ) } ).
  run()

 }) ( this )
