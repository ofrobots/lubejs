// License: (MIT) or  (GPLv2 and above)


( function (exports) {   
  'use strict'

var Parser = function (src) {

  this.peek = 0;
  this.n = 0;
  this.hasL = false;
  this.lbn = {};
  this.tightness = 0;
  this.src = src;
  this.col = 0; this.colC =    0; this.col0 =  0;
  this.c = 0;   this.cC   =    0; this.c0   =  0; 
  this.li = 1;  this.liC  =  0;      this.li0  =  0;
  this.isScript = true ;
  this.scopeFlags = 0; 
  this.startStmt = false;
  this.foundStmt = false;
  this.foundUnaryDVT = false; 
  this.canHaveNoAssig = false;
  this. propThatMustBeInAnAssig =0 ;
  this. mustNot = false;
  this. vnames = null ; 
  this. pnames = {} ;
  this. iteD= 0;
  
  this.funcBecause =  0  ;
  this.convErr = "";

};

var ALL = 0;

try { new RegExp ( "lube", "g" ); ALL |=  2 ; } catch ( _r ) {}
try { new RegExp ( "lube", "u" ); ALL |=  4 ; } catch ( _r ) {} 
try { new RegExp ( "lube", "y" ); ALL |=  8 ; } catch ( _r ) {} 
try { new RegExp ( "lube", "m" ); ALL |=  0x020 ; } catch ( _r ) {} 
try { new RegExp ( "lube", "i" ); ALL |=  0x080 ; } catch ( _r ) {}


var nameInit = 2, nameGet = 4, nameSet = 8, nameVar = 1, nameMethd = 0x010 ; 

var isNum = function (c) { return (c >=  48 && c <=  57)};
var num_hex = function (e) {
     return isNum(e) || (e >=  97 && e <=  102) || (e  >=  65  &&  e <=  70);
};

var fromRunLenCodes = function (runLenArray, bitm ) {
  bitm = bitm || [];
  var bit = runLenArray[0];

  var runLenIdx = 1, bitIdx = 0;
  var runLen = 0;

  while (runLenIdx < runLenArray.length) {
    runLen = runLenArray[runLenIdx];
 
   while (runLen--) {

      while (( 0x010  * (bitm.length)) < bitIdx) bitm.push(0); 
     
      if (bit) bitm[bitIdx >>  4 ] |= (1 << ( 15  & bitIdx));

      bitIdx++;
    }

    runLenIdx++;
    bit ^= 1;
  }
  return (bitm);
}

var IDS_ = (fromRunLenCodes([0,8472,1,21,1,3948,2], fromRunLenCodes([0,65,26,6,26,47,1,10,1,4,1,5,23,1,31,1,458,4,12,14,5,7,1,1,1,129,5,1,2,2,4,1,1,6,1,1,3,1,1,1,20,1,83,1,139,8,166,1,38,2,1,7,39,72,27,5,3,45,43,35,2,1,99,1,1,15,2,7,2,10,3,2,1,16,1,1,30,29,89,11,1,24,33,9,2,4,1,5,22,4,1,9,1,3,1,23,25,71,21,79,54,3,1,18,1,7,10,15,16,4,8,2,2,2,22,1,7,1,1,3,4,3,1,16,1,13,2,1,3,14,2,19,6,4,2,2,22,1,7,1,2,1,2,1,2,31,4,1,1,19,3,16,9,1,3,1,22,1,7,1,2,1,5,3,1,18,1,15,2,23,1,11,8,2,2,2,22,1,7,1,2,1,5,3,1,30,2,1,3,15,1,17,1,1,6,3,3,1,4,3,2,1,1,1,2,3,2,3,3,3,12,22,1,52,8,1,3,1,23,1,16,3,1,26,3,5,2,35,8,1,3,1,23,1,10,1,5,3,1,32,1,1,2,15,2,18,8,1,3,1,41,2,1,16,1,16,3,24,6,5,18,3,24,1,9,1,1,2,7,58,48,1,2,12,7,58,2,1,1,2,2,1,1,2,1,6,4,1,7,1,3,1,1,1,1,2,2,1,4,1,2,9,1,2,5,1,1,21,4,32,1,63,8,1,36,27,5,115,43,20,1,16,6,4,4,3,1,3,2,7,3,4,13,12,1,17,38,1,1,5,1,2,43,1,333,1,4,2,7,1,1,1,4,2,41,1,4,2,33,1,4,2,7,1,1,1,4,2,15,1,57,1,4,2,67,37,16,16,86,2,6,3,620,2,17,1,26,5,75,3,11,7,13,1,4,14,18,14,18,14,13,1,3,15,52,35,1,4,1,67,88,8,41,1,1,5,70,10,31,49,30,2,5,11,44,4,26,54,23,9,53,82,1,93,47,17,7,55,30,13,2,10,44,26,36,41,3,10,36,107,4,1,4,3,2,9,192,64,278,2,6,2,38,2,6,2,8,1,1,1,1,1,1,1,31,2,53,1,7,1,1,3,3,1,7,3,4,2,6,4,13,5,3,1,7,116,1,13,1,16,13,101,1,4,1,2,10,1,1,2,6,6,1,1,1,1,1,1,16,2,4,5,5,4,1,17,41,2679,47,1,47,1,133,6,4,3,2,12,38,1,1,5,1,2,56,7,1,16,23,9,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,550,3,25,9,7,5,2,5,4,86,4,5,1,90,1,4,5,41,3,94,17,27,53,16,512,6582,74,20950,42,1165,67,46,2,269,3,16,10,2,20,47,16,31,2,80,39,9,2,103,2,35,2,8,63,11,1,3,1,4,1,23,29,52,14,50,62,6,3,1,1,1,12,28,10,23,25,29,7,47,28,1,16,5,1,10,10,5,1,41,23,3,1,8,20,23,3,1,3,50,1,1,3,2,2,5,2,1,1,1,24,3,2,11,7,3,12,6,2,6,2,6,9,7,1,7,1,43,1,10,10,115,29,11172,12,23,4,49,8452,366,2,106,38,7,12,5,5,1,1,10,1,13,1,5,1,1,1,2,1,2,1,108,33,363,18,64,2,54,40,12,116,5,1,135,36,26,6,26,11,89,3,6,2,6,2,6,2,3,35,12,1,26,1,19,1,2,1,15,2,14,34,123,69,53,267,29,3,49,47,32,16,27,5,38,10,30,2,36,4,8,1,5,42,158,98,40,8,52,156,311,9,22,10,8,152,6,2,1,1,44,1,2,3,1,2,23,10,23,9,31,65,19,1,2,10,22,10,26,70,56,6,2,64,1,15,4,1,3,1,27,44,29,3,29,35,8,1,28,27,54,10,22,10,19,13,18,110,73,55,51,13,51,784,53,75,45,32,25,26,36,41,35,3,1,12,48,14,4,21,1,1,1,35,18,1,25,84,7,1,1,1,4,1,15,1,10,7,47,38,8,2,2,2,22,1,7,1,2,1,5,3,1,18,1,12,5,286,48,20,2,1,1,184,47,41,4,36,48,20,1,59,43,85,26,390,64,31,1,448,57,1287,922,102,111,17,196,2748,1071,4049,583,8633,569,7,31,113,30,18,48,16,4,31,21,5,19,880,69,11,1,66,13,16480,2,3070,107,5,13,3,9,7,10,5990,85,1,71,1,2,2,1,2,2,2,4,1,12,1,1,1,7,1,65,1,4,2,8,1,7,1,28,1,4,1,5,1,1,3,7,1,340,2,25,1,25,1,31,1,25,1,31,1,25,1,31,1,25,1,31,1,25,1,8,4148,197,1339,4,1,27,1,2,1,1,2,1,1,10,1,4,1,1,1,1,6,1,4,1,1,1,1,1,1,3,1,2,1,1,2,1,1,1,1,1,1,1,1,1,1,2,1,1,2,4,1,7,1,4,1,4,1,1,1,10,1,17,5,3,1,5,1,17,4420,42711,41,4149,11,222,2,5762,10590,542])));

var IDC_ = (fromRunLenCodes([0,183,1,719,1,4065,9,1640,1], fromRunLenCodes ( ( [ 0,48,10,7,26,4,1,1,26,47,1,10,1,1,1,2,1,5,23,1,31,1,458,4,12,14,5,7,1,1,1,17,117,1,2,2,4,1,1,6,5,1,1,1,20,1,83,1,139,1,5,2,166,1,38,2,1,7,39,9,45,1,1,1,2,1,2,1,1,8,27,5,3,29,11,5,74,4,102,1,8,2,10,1,19,2,1,16,59,2,101,14,54,4,1,5,46,18,28,68,21,46,129,2,10,1,19,1,8,2,2,2,22,1,7,1,1,3,4,2,9,2,2,2,4,8,1,4,2,1,5,2,12,15,3,1,6,4,2,2,22,1,7,1,2,1,2,1,2,2,1,1,5,4,2,2,3,3,1,7,4,1,1,7,16,11,3,1,9,1,3,1,22,1,7,1,2,1,5,2,10,1,3,1,3,2,1,15,4,2,10,9,1,7,3,1,8,2,2,2,22,1,7,1,2,1,5,2,9,2,2,2,3,8,2,4,2,1,5,2,10,1,1,16,2,1,6,3,3,1,4,3,2,1,1,1,2,3,2,3,3,3,12,4,5,3,3,1,4,2,1,6,1,14,10,16,4,1,8,1,3,1,23,1,16,3,8,1,3,1,4,7,2,1,3,5,4,2,10,17,3,1,8,1,3,1,23,1,10,1,5,2,9,1,3,1,4,7,2,7,1,1,4,2,10,1,2,14,3,1,8,1,3,1,41,2,8,1,3,1,5,8,1,7,5,2,10,10,6,2,2,1,18,3,24,1,9,1,1,2,7,3,1,4,6,1,1,1,8,6,10,2,2,13,58,5,15,1,10,39,2,1,1,2,2,1,1,2,1,6,4,1,7,1,3,1,1,1,1,2,2,1,13,1,3,2,5,1,1,1,6,2,10,2,4,32,1,23,2,6,10,11,1,1,1,1,1,4,10,1,36,4,20,1,18,1,36,9,1,57,74,6,78,2,38,1,1,5,1,2,43,1,333,1,4,2,7,1,1,1,4,2,41,1,4,2,33,1,4,2,7,1,1,1,4,2,15,1,57,1,4,2,67,2,3,9,9,14,16,16,86,2,6,3,620,2,17,1,26,5,75,3,11,7,13,1,7,11,21,11,20,12,13,1,3,1,2,12,84,3,1,4,2,2,10,33,3,2,10,6,88,8,43,5,70,10,31,1,12,4,12,10,40,2,5,11,44,4,26,6,11,37,28,4,63,1,29,2,11,6,10,13,1,8,14,66,76,4,10,17,9,12,116,12,56,8,10,3,49,82,3,1,35,1,2,6,246,6,282,2,6,2,38,2,6,2,8,1,1,1,1,1,1,1,31,2,53,1,7,1,1,3,3,1,7,3,4,2,6,4,13,5,3,1,7,66,2,19,1,28,1,13,1,16,13,51,13,4,1,3,12,17,1,4,1,2,10,1,1,2,6,6,1,1,1,1,1,1,16,2,4,5,5,4,1,17,41,2679,47,1,47,1,133,6,9,12,38,1,1,5,1,2,56,7,1,15,24,9,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,32,517,3,25,15,1,5,2,5,4,86,2,7,1,90,1,4,5,41,3,94,17,27,53,16,512,6582,74,20950,42,1165,67,46,2,269,3,28,20,48,4,10,1,115,37,9,2,103,2,35,2,8,63,49,24,52,12,69,11,10,6,24,3,1,1,1,2,46,2,36,12,29,3,65,14,11,6,31,1,55,9,14,2,10,6,23,3,73,24,3,2,16,2,5,10,6,2,6,2,6,9,7,1,7,1,43,1,10,10,123,1,2,2,10,6,11172,12,23,4,49,8452,366,2,106,38,7,12,5,5,12,1,13,1,5,1,1,1,2,1,2,1,108,33,363,18,64,2,54,40,12,4,16,16,16,3,2,24,3,32,5,1,135,19,10,7,26,4,1,1,26,11,89,3,6,2,6,2,6,2,3,35,12,1,26,1,19,1,2,1,15,2,14,34,123,69,53,136,1,130,29,3,49,15,1,31,32,16,27,5,43,5,30,2,36,4,8,1,5,42,158,2,10,86,40,8,52,156,311,9,22,10,8,152,6,2,1,1,44,1,2,3,1,2,23,10,23,9,31,65,19,1,2,10,22,10,26,70,56,6,2,64,4,1,2,5,8,1,3,1,27,4,3,4,1,32,29,3,29,35,8,1,30,25,54,10,22,10,19,13,18,110,73,55,51,13,51,781,71,31,10,15,60,21,25,7,10,6,53,1,10,16,36,2,1,9,69,5,3,3,11,1,1,35,18,1,37,72,7,1,1,1,4,1,15,1,10,7,59,5,10,6,4,1,8,2,2,2,22,1,7,1,2,1,5,2,9,2,2,2,3,2,1,6,1,5,7,2,7,3,5,267,70,1,1,8,10,166,54,2,9,23,6,34,65,3,1,11,10,38,56,8,10,54,26,3,15,4,10,358,74,21,1,448,57,1287,922,102,111,17,196,2748,1071,4049,583,8633,569,7,31,1,10,102,30,2,5,11,55,9,4,12,10,9,21,5,19,880,69,11,47,16,17,16480,2,3070,107,5,13,3,9,7,10,3,2,5318,5,3,6,8,8,2,7,30,4,148,3,443,85,1,71,1,2,2,1,2,2,2,4,1,12,1,1,1,7,1,65,1,4,2,8,1,7,1,28,1,4,1,5,1,1,3,7,1,340,2,25,1,25,1,31,1,25,1,31,1,25,1,31,1,25,1,31,1,25,1,8,2,50,512,55,4,50,8,1,14,1,22,5,1,15,3408,197,11,7,1321,4,1,27,1,2,1,1,2,1,1,10,1,4,1,1,1,1,6,1,4,1,1,1,1,1,1,3,1,2,1,1,2,1,1,1,1,1,1,1,1,1,1,2,1,1,2,4,1,7,1,4,1,4,1,1,1,10,1,17,5,3,1,5,1,17,4420,42711,41,4149,11,222,2,5762,10590,542,722658,240 ]) ) ) );


var IDHead = function (c) {
  return (c <=  0x07a && c >=  97) ||
          c ===  36  ||
         (c <=  90  && c >= ( 65 )) ||
          c===  95 ||
         (IDS_[c >>  4 ] & (1 << (c &  15 )));
};

var IDBody = function (c) {
  return (c <=  0x07a && c >=  97) ||
          c ===  36  ||
         (c <=  90  && c >= ( 65 )) ||
         (c <=  57 && c >=  48) || (IDC_[c >>  4 ] & (1 << (c &  15 )));
};


var _h = function(n) { return n.toString(0x010 ); }
var lp = Parser.prototype;

lp.nextraw = function () {
  var L = this.skipS();
  if ( L )  return L;

  var peek, n = 0, _c = this.c;
  var r; 

  peek = this.src.charCodeAt(_c);
  if (this.c>=this.src.length) return { type: 'eof', contents: ('<<EOF>>')};
  var col = (this.col), li = this.li;

  if ( IDHead(peek) ) n = this.readAnIdentifierToken();
  else if (isNum(peek)) n = this.readNumberLiteral(peek);
  else {
    var c = this.c, l = this.src, e = l.length; 
 
    switch (peek) {
      case  34:
      case  39:
        n = this.readStrLiteral(peek);
        break;

      case  45:
      case  43:
        c++;
        r = l.charCodeAt ( c );
        if ( r ===  61 ) { c ++, this.c=c; n = { contents: null, type : '=' }; break; }
        if ( r === peek ){ c ++, n = { contents: null, type : null}; this.c=c; break; }
        this.c=c;
        n = { contents: null, type : null, prec : 0xA7 }; 
        break;

      case  46: n = this.readDot (); break;
      case  61: 
         c++;
         if ( l.charCodeAt(c ) ===  61 ) {
           c++;
           if ( l.charCodeAt(c ) ===  61 ) c++;
           this.c=c; 
           n = { contents: null, type : 'op', prec : 0x5D };
           break;
         }

         else if ( l.charCodeAt ( c ) ===  62 ) c++; 
        
         this.c=c;
         n = { contents: null, type: '=' }; break;

      case  60:
         c++;
         if ( l.charCodeAt(c ) ===  60 ) {
             c++;
             if ( l.charCodeAt(c ) ===  61 ) { c++; n = { contents: null, type : '=' }; } 
             else n = { contents: null, type: 'op', prec: 0xA5 };
             this.c=c; 
             break
         }

         if ( l.charCodeAt ( c ) ===  61 ) c++;
          
         this.c=c;
         n = { contents: null, type: 'op', prec: 0x9B }; break;

      case  62:
         c++;
         if ( l.charCodeAt(c ) === peek ) {
           c++;
           if ( l.charCodeAt ( c ) === peek ) c++;
           if ( l.charCodeAt(c ) ===  61 ) { c++; n = { contents: null, type : '=' }; }
           else n = { contents: null, type: 'op', prec: 0xA5 };
           this.c=c;
           break;;
         }

         if ( l.charCodeAt ( c ) ===  61 ) c++;
         this.c=c;
         n = { contents: null, type: 'op', prec: 0x9B }; break;

      case  42:
         if ( l.charCodeAt ( c+1 ) === peek ) c++; 
      case  37: 
         c++;
         if ( l.charCodeAt ( c ) ===  61 ) { c ++;n = { contents: null, type : '=' }; }
         else n = { prec : 0xAD, contents: null, type : 'op' };
         this.c=c; break;

      case  33:
         c++;
         if ( l.charCodeAt ( c ) ===  61 ) {
             c ++;
             if ( l.charCodeAt ( c ) ===  61 ) c ++;
             n = { prec : 0x5D, contents: null, type : ('op' ) }; 
             this.c=c;
             break; 
         }

         this.c=c;
         n = { contents: null, type: null };
         break ;
                                    
      case  126:
            c++;
            this.c=c;
            n = { contents: null, type : null };
            break ; 

      case  124:
         c++; 
         switch ( l.charCodeAt ( c ) ) {
            case  61 : c ++; this.c=c; n = { contents: null, type : '=' }; break;
            case  124 : c ++; this.c=c; n = { contents: null, type : 'op', prec : ( 0x09 ) }; break; 
            default : this.c=c; n = { contents: null, type : 'op', prec : 0x0D }; break;
         }

         break;

      case  38:
          c++;
          switch ( l.charCodeAt ( c ) ) {
            case  61 : c ++; this.c=c; n = { contents: null, type : '=' }; break;
            case  38 : c ++; this.c=c; n = { contents: null, type : 'op', prec : ( 0x0B ) }; break;
            default : this.c=c; n = { contents: null, type : 'op', prec : ( 0x01D ) }; break;
         }

         break;

      case  94:
        c++;
        if ( l.charCodeAt(c ) ===  61 ) {this.c = ++ c; n = { contents: null, type : ('=' ) }; break; }
          this.c=c; n = { prec : (0x01B ), loc : {}, contents: null, type : 'op' }; 

         break; 

// case  44: this.c++; return TOK_C;

      default:
        var mustBeAnID = 0;

        this.c=c; 

        if ( 92 === peek) {
          mustBeAnID = 1;
          peek = l.charCodeAt(++ this. c);
          if (peek !== 117) this.err('u');
          peek = this.peekUSeq();
        }

        if (peek >= 0x0D800 && peek <= 0x0DBFF ) {
            if ( !mustBeAnID ) mustBeAnID = 2;
            this . c ++;
            e = peek;
            r = this.peekTheSecondByte(); 
            peek = ((peek - 0x0D800)<<10) + ( r-0x0DC00) + (0x010000);
        }

        if (mustBeAnID) {
           if (!IDHead(peek))
             this.err('a ' + mustBeAnID + ' sequence in identifier head position must belong to IDStart group, but it (' + _h(peek) + ') does not');

           n = this.readAnIdentifierToken( mustBeAnID === (2) ? (String.fromCharCode ( peek, r ) ) : String.fromCharCode ( peek) ); 
        }
 
        else {n = (this.readMisc());}
    }
  }

  this.c0  = _c;
  this.col0= col;
  this.li0 = li ;
  this.col += (n.end - n.start);
//  n.loc = { start: {   line : li, column: col }, end: { line: this.li, column: this.col } };

  if ( ! n.contents ) n.contents = this.src.substring(n.start, n.end);
  n. src = this.src;
  if (!n.type) n.type = n.contents

return n;
};

lp.skipS = function() {

     this.colC =  this.col;
     this.cC   =  this.c  ;
     this.liC  =  this.li ;
 
     var noNewLine = true; 
     var c = this.c,
         l = this.src,
         e = l.length,
         start = c;

     while ( c < e ) {
       switch ( l.charCodeAt ( c ) ) {
         case  32 :
             while ( l.charCodeAt ( ++ c ) ===  32 );
             continue;

         case  13 : if (  10 === l.charCodeAt ( c + 1 ) ) c ++; 
         case  10 :
            if ( noNewLine ) noNewLine = false; 
            start = ++c;
            this.li ++; 
            this.col = 0;    
            continue;
            
         case  9: c++; continue;
         case  47:
             switch ( l.charCodeAt ( c + ( 1) ) ) {
                 case  47: c++; this.c = c; this.readCmntl(); if ( noNewLine ) noNewLine = false; start = c = this.c; continue;
                 case  61: c++; this.hasL = !noNewLine; this.col += (c-start);this.c=c; return { contents: null, type : '=', loc : {} }; 
                 case  42: c += 2; this.col += (c-start ); this.c = c; noNewLine = this. readCmntm () && noNewLine; start = c = this.c; continue;
                 default:
                     c++; 
                     this. hasL = ! noNewLine;
                     this.col += (c-start );this.c=c; 
                     return { prec : 0xAD, type : '/', contents : '/', loc : {} }; 
             }

         case 0x0020:case 0x00A0:case 0x1680:case 0x2000:
         case 0x2001:case 0x2002:case 0x2003:case 0x2004:
         case 0x2005:case 0x2006:case 0x2007:case 0x2008:
         case 0x2009:case 0x200A:case 0x202F:case 0x205F:
         case 0x3000: c++; continue;

         case 0x2028:
         case 0x2029: 
            if ( noNewLine ) noNewLine = false;
            start = ++c;
            this.col = 0;
            this.li ++; continue; 

         default :
           if ( this. isScript   &&  l. charCodeAt ( c ) ===  60 &&
                                     l. charCodeAt ( c + 1 )   ===  33 &&
                                     l. charCodeAt ( c + 2 )   ===  45 &&
                                     l. charCodeAt ( c + 2 + 1)===  45 )  {
              this.c = c + 4;
              this.readCmntl();
              if ( noNewLine ) noNewLine = false;
              start = c = this.c; 
              continue ;
           }

           this.col += (c-start );this.c=c; this.hasL = !noNewLine; return;

       }
     } 

  this.col += (c-start );
  this.c = c;
  this.hasL = ! noNewLine; 
};

var kwords = [
  'break','case','catch','class','const','continue','debugger','default','delete','do','else','export','extends','finally','for','function','if','import','in','instanceof','new','return','super','switch','this','throw','try','typeof','var','void','while','with','yield'
];

var partition = function (a, e) {
  var l = {}, n;
  for (n in a) {
    if (!l[a[n].length]) {
      l[a[n].length] = [];
      if (e) e.push(a[n].length);
    }
    l[a[n].length].push((a[n]));
  }
  return l;
};

var createLookup_sw = function (values) {
  var sw = 'switch(n.length ) {', len;
  values = partition(values);
  for (len in values) {
    sw += 'case ' + len + ' : ';
    sw += 'switch ( n) { ';
    var l = 0, n = values[(len)];
    while (l < n.length) sw += 'case "' + e(n[l++]) + '" :';
    sw += 'return true; } ';
    sw += ('break; ');
  }
  sw += ' } ';
  return (Function('n', sw));
};

var p = function (N, l) {
  while (N.length < l) N = '0' + N;
  return (N);
};

var e = function (N) {
  var i = 0, e, n = '';
  while (i < N.length) {
    e = N.charCodeAt(i++);
    n += (e <= 255 ? '\\x' + p(e.toString(16),2) : '\\u' + p(e.toString(16),4))
  }
  return n;
};

var bch = function (_th, _func, _n, _l, _name) {
  var e = 0;
  while (e < _func.length) {
    var _e = _l;
    console.time(e);
    while (_e--) _func[(e)].apply(_th, _n)
    console.timeEnd(e);
    e++;
  }
};

lp.peekTheSecondByte = function () {
  var e = this.src.charCodeAt(this.c);
  if ( 92 === e) {
    if ( 117 !==this.src.charCodeAt(++this.c)) this.err('the \\ must have "u" after it;instead, it has ' + this.src[this.c] );
    e = this.peekUSeq();
  } 

  else this.col--;
 
  if (e < 0x0DC00 || e > 0x0DFFF )
      this.err('Byte (' + _h(e)+ ') must be in range 0x0DC00 to 0x0DFFF, but it is not ');

  return e;
};

var toNum = function (n) {
  return (n >=  48 && n <=  57) ? n -  48 :
         (n <=  102 && n >=  97) ? 10 + n -  97 :
         (n >=  65  && n <=  70) ? 10 + n -  65  : -1;
};

lp.peekUSeq = function () {
  var c = ++this.c,
      l = this.src,
      e = l.length,
      byteVal = 0 ,
      n = l.charCodeAt(c);
  
  if ( 123 === n) {
    n = l.charCodeAt(c + 1 );
    do {
      c++; 
      n = toNum(n);
      if (n === - 1) this.err(n[c] + ' is not a valid hexadecimal');
      byteVal <<= 4; byteVal += n;
      if (byteVal > 0x010FFFF ) this.err( 'Byte (' + _h (byteVal) + ') must not be bigger than 0x010FFFF ');
      n = l.charCodeAt(c);
    } while (c < e && n !== 125);

    if ( c >= e ) this.err( 'Unterminated \\u{ seq' );
    this.c = c;
    return byteVal;
  }

  n = toNum(l.charCodeAt(c));(n === - 1) && this.err(n[c] + ' is not a valid hexadecimal');byteVal = n; c++;
  n = toNum(l.charCodeAt(c));(n === - 1) && this.err(n[c] + ' is not a valid hexadecimal');byteVal <<= 4; byteVal += n; c++;
  n = toNum(l.charCodeAt(c));(n === - 1) && this.err(n[c] + ' is not a valid hexadecimal');byteVal <<= 4; byteVal += n; c++;
  n = toNum(l.charCodeAt(c));(n === - 1) && this.err(n[c] + ' is not a valid hexadecimal');byteVal <<= 4; byteVal += n;

  this.c = c;

return byteVal;
};

lp.readAnIdentifierToken = function ( v ) {
    var c = this.c, l = this.src, e = (l.length), peek, r;
    var n = c + 1; // the head is already supplied in v

    var _n = { pDepth : 0, contents: null  , type: 'Identifier', value : null  , name : null }   ;

    while (true ) {
      if ( IDBody( peek = l.charCodeAt(++c) ) ) continue;
     
      if (peek ===  92) {
         if ( !v ) v = l. charAt ( n -1 );
         if ( n < c ) v += l.substring(n, c);
         if ( 117 !==l.charCodeAt(this.c = ++c) ) this.err('the \\ must have "u" after it;instead, it has ' + this.src[this.c]);

         peek = this. peekUSeq();
         if (peek >= 0x0D800 && peek <= 0x0DBFF ) {
           this.c++;
           r = this.peekTheSecondByte(); 
           if ( !IDBody(((peek-0x0D800)<<10) + (r-0x0DC00) + 0x010000) )
                this.err('a \\u sequence in identifier body position must belong to IDContinue group, but it (' + _h (peek) + ') does not'); 
        
           v += String.fromCharCode( peek, r ); 
         }

         else {
            if ( !IDBody(peek) )
               this.err('a \\u sequence in identifier body position must belong to IDContinue group, but it (' + _h (peek) + ') does not'); 
            
            v += String.fromCharCode ( peek );
         }         
         c = this.c; n = c + 1;
         continue;
       }
 
       if (peek >= 0x0D800 && peek <= 0x0DBFF ) {
          if ( !v ) { v = l.charAt ( n - 1 ); }
          if ( n < c ) v += l.substring(n, c);          
          r = this.peekTheSecondByte();
          if (!IDBody(((peek-0x0D800 ) << 10) + (r-0x0DC00) + 0x010000))
            this.err( 'a \\u sequence in identifier body position must belong to IDContinue group, but it (' + _h (peek) + ') does not' );

          v += String.fromCharCode(peek, r ); 
          n = c + 1;
          c = this.c;
          continue;
       }

       break;
    }

    if ( !v ) {
        _n . value = _n . name = _n . contents = v = l.substring(this.c, c);
        this.c = c;
        
        return _n ;
    }
    
    this.c = c;
    if ( n < c ) v += l . substring(n, c);
    _n . value = _n . name = _n . contents = v    ;
    return _n ;
};

lp.readNumberLiteral = function (peek) {
  var c = this.c,
      l = this.src,
      e = l.length,
      r = 10,
      v = 0,
      n = { contents: null, type : 'Literal', start : this.c, loc : { start :    {  line : li, column: col }, end: null } }  ;

  if (peek ===  48) {
    r = l.charCodeAt(++c);
    switch (r) {
      case  88:
      case  120:
         if ( !num_hex(l.charCodeAt(++c) ) ) this.err (l[c] + ' is not a valid hexadecimal' );
         while ( c < e && num_hex(r= l .charCodeAt(c))) c ++;
         n. value = parseInt ( n.contents = l.substring(this.c, c) ); 
         this.c = c;
         return n;

      case  66:
      case  98:
        r = l.charCodeAt(++c);
        if ( r !== 48 && r !== 49 ) this.err( 'got ' + l[c] + ' but expected either 0 or 1' );
        v = r - 48; 
        while ( c < e && ( r = l.charCodeAt(c ), r ===  48 || r ===  49 ) ) { c ++; v<<= 1; v |= (r - 48 ); }
        this.c=c;
        n.value = v;
        return n;

      case  79:
      case  111:
        r = l.charCodeAt(++c);
        if ( r <  48 || r >= 38 ) this.err( 'must e ' );
        v = r -  48;
        while ( c < e && ( r = l.charCodeAt ( ++ c), r >=  48 && r <  38 ) ) {  c ++;  v<<= 3; v |= (r -  48 );  } 
        this.c=c;
        n.value = v;
        return n;

      default:

       if ( r >=  48 && r <=  57 ) {
          v  = 0 ;
          if ( r >= 38 ) v = 10;
          while ( ++c < e && ( r = l. charCodeAt(c), r >= 48 && r<= 57 ) ) if ( !v & r >= 38 ) v = 10 ;
          if ( !v ) v = 8 ;
          n. value = parseInt ( n. contents = l.substring( this.c, c ) , v );
          this.c=c;
          return n;
       }

       else {
         v = this.c;
         this.c = c;
         if ( 46 === r ) {
            ++this.c;
            this.frac(n);
            n. value = parseFloat ( n.contents = l.substring( v, this.c ) );
         }

         else 
            n. value = 0;

       return n;
       }

    }

  } 

  else {
    c = this.c; 
    v = this.c;
    while (c ++ < e && isNum(l.charCodeAt(c)));
    this.c = c;
    if ( this.src.charCodeAt (this.c) ===  46 ) {
       this.c++;
       this.frac(n); 
       n. value = ( parseFloat ( n. contents = l.substring(v, this.c ) ) );
    }

    else n. value =  parseInt ( n. contents = l. substring(v, this.c ) );
  }

  if (c < e && IDHead(l.charCodeAt(c))) this.err('Num can not be follwed by ' + this.src[this.c]);
  return n;

};

lp . frac = function(n) {

  var c = this.c, l = this.src, e = l.length;
  while( c < e && isNum(l.charCodeAt(c)))c ++;
  if ( n || c > this.c ) {
    switch(l.charCodeAt(c)){
      case  69:
      case  0x65: 
        c++;
        switch(l.charCodeAt(c)){ case 45: case 43: c++; }
        if ( c < e && isNum(l.charCodeAt(c))) { do { c++; } while (  c < e && isNum(l.charCodeAt(c))); } 
        else this.err ( 'A - or + or num expeted; got ' + l[c]   )  ;
     }

     this.c=c; 
 }

 if ( !n ) return { contents: null, type : 'Literal' }
};

lp.readStrLiteral = function (start) {
  var c = ++ this.c,
      l = this.src,
      e = l.length,
      i = 0,
      _e ;

  var v = "", v_start = c;
  var str = { contents: null, type: 'Literal', value : null  }    ;

  while (c < e && (i = l.charCodeAt(c)) !== start) {
    switch ( i ) {
      case  92 : 
        v += l.substring(v_start, c ); 
        switch ( l.charCodeAt ( ++ c ) ) {
          case  92 : v += '\\'; break;
          case  34 : v +='\"'; break;
          case  39 : v += '\''; break;
          case  98 : v += '\b'; break;
          case  0x076  : v += '\v'; break;
          case  102 : v += '\f'; break;
          case  116  : v += '\t'; break;
          case  0x072  : v += '\r'; break; 
          case  0x6e  : v += '\n'; break;

          case  117 :
             this.c=c; 
             _e = this. peekUSeq ();
             if ( _e >= 0x0D800 && _e <= 0x0DBFF ) {
               this.c ++;
               v += String.fromCharCode( _e,this.peekTheSecondByte ());
             }

             else { v += String.fromCharCode(_e); }
             c = this.c; 
             break;

          case  120 :
            _e = toNum (l.charCodeAt(++c));
            if ( _e ===  -1  ) this.err ( l[c] + ' is not a valid hex   '  )  ;
            i  = toNum (l.charCodeAt(++c));
            if ( i  ===  -1  ) this.err ( l[c+1] + ' is not a valid hex '  )  ; _e |= ( i<<4 )  ;
            v  += String.fromCharCode( _e )  ;
            break ;
             
          case  13:
             if ( l.charCodeAt(c + 1 ) ===  10 ) c++;
          case  10:
          case 0x2028:
          case 0x2029:
             this.li ++;
             break;

          default :
             v += l.charAt(c);
             break ;
        }

        v_start = ++c;
        continue;

     case  13:
         if ( l.charCodeAt(c + 1 ) ===  10 ) c++;
     case  10:
     case  0x2028:
     case  0x2029: this.err( 'a newline can not appear in a str literal' );
    }
  
     c++;
  }

  if ( v_start !==c ) { v += l.substring(v_start, c ); }
  this.c = c;
  if (!(c < e && (l.charCodeAt(c)) === start)) { this.err('s lit open'); }
  ++this.c; str.value   =  v ;
  
  return str ;
};

lp . readDot = function() {
   ++this.c;
   if( this.src.charCodeAt(this.c)=== 46) {
      if (this.src.charCodeAt(++ this.c) ===  46) ++this.c; 
      else this.err('Unexpectd ' + this.src[this.c]);
   }

   else if ( isNum(this.src.charCodeAt(this.c))) return this.frac();

return { contents: null, type : null }; 
};

lp.readCmntm = function () {
   var c = this.c,
       l = this.src,
       e = l.length,
       r,
       start = c, n = true;

   while ( c < e ) 
        switch (r = l.charCodeAt(c++ ) ) {
          case  42 :
             if ( l.charCodeAt ( c ) ===  47 ) {
                c++;
                this.col += (c-start);
                this.c=c;
 
                if ( !n && this.isScript && l.charCodeAt(c) ===  45 &&
                                            l.charCodeAt(c+ 1 ) ===  45 &&
                                            l.charCodeAt ( ( c+  (2)  )   )  ===  62
                   ) {
                     this.c  += 3;
                     this. readCmntl();
                }  
                return n;
             }
             continue;

          case  13 :
            if (   10   ===  l.charCodeAt(c) ) c++; 
          case  10 :
          case 0x2028:
          case ((0x202<<4) + ( ( 9 ) )) : 
            start = c ;
            if ( n ) n = false; 
            this.col = 0;
            this.li ++; continue; 

          default :
             if ( r >= 0x0D800 && r <= 0x0DBFF )
                this.col--;
        }

   this.err( ' */ ' );
};

lp.readCmntl = function() {
    var c = this.c,
        l = this.src,
        e = l.length,
        r;

    L :
    while ( c < e ) 
       switch (r = l.charCodeAt(c++ ) ) {
          case  13 :
             if (10 === l.charCodeAt(c)) c++; 
          case  10 :
          case 0x2028:
          case 0x2029:
            this.col = 0;
            this.li ++; 
            break L;

          default :
            if ( r >= 0x0D800 && r <= 0x0DBFF )
              this.col--;
       }

    this.c=c;

return;
};

lp.readMisc = function () { this.c++; return { contents: null, type: null, loc : null }; };

var iskw = createLookup_sw(kwords);

lp.next = function () {
  var e = this.peek,
      n = this.nextraw();
  this.peek = n;
return e;
};

lp.expect = function (n) {
  var e = this.next();
  if (e.contents === n) return e;
  this.err( '\'' + n + '\' expected; found <' + e.type + '>', e);
};

lp.err = function (n) {
  console.log(arguments);
  throw new Error(n);
};

lp . end = function (n) {
  n.end = this.cC  ;
  n.loc.end = { line: this.liC , column:  ( this.colC ) } ;
  return n;
};

lp.semi = function () {
  switch (this.peek.type) {
    case ';': return this.next();
    case 'eof':
    case '}': return;
  }

  if ( !this.hasL) this.err('EOS expected; found ' + this.peek.contents );
};

lp.parseProgram = function () {
  this.next();
  var prog = this.blck();

  prog = ({
      type: 'Program',
      body: prog,
      loc: prog.length ? {} : { start: { c: 0, l: 1}, end : { c: 0, l : 1} }
   });

   this.expect('<<EOF>>')
   
   if ( prog.length ) {
      this.start ( prog, prog[0] );
      return this.end(prog, prog.body[prog.body.length-1]);
   }

return prog;
};

lp.blck = function () { // blck ([]stmt)
  var stmts = [], stmt;
  while (stmt = this.parseStatement()) stmts.push(stmt);

return (stmts);
};

lp.parseStatement = function (nullNo) {
  this.startStmt = true;
  var head, l;

  switch (this.peek.type) {
    case '{': return this.parseBlckStatement();
    case ';': head  = this.peek; this.start(head) ;  this.peek.type = 'EmptyStatement'; this.end(head ) ;  return this.next();
    case 'eof': return;
  }

  var head = this.parseExprHeadOrYield ();
 
  if ( !head ) {
    if ( nullNo ) this.err ( 'Unexpected ' + this. peek. contents   )  ;
    return;
  }

  if (this.foundStmt) { this.foundStmt = false; return head; } 

  head = this .parseExpr(head);
  if (head .type === 'Identifier' && this.peek.type === ':') {
     l = head  ; 
     head =  this.next();
     head.start = l.start;
     head.loc = l.loc; 
     head. type= 'LabeledStatement';
     head. label = l  ;
     l  = l.contents +  '%';
     if ( this.lbn.hasOwnProperty ( l ) ) this.err( 'label already exists ' +  l.substr(0, l.length ) );
     this.lbn[l] = this. iteD; 
     head.body = this.parseStatement(); delete this.lbn[l];
     return this.end(head  )
  }

  l =  head  ;
  head =  { 
       type : 'ExpressionStatement', 
       expression : core( head ), 
       loc : { start: l.loc.start } ,
       start : l.start
  };

  return  this.semi(head) ;
};

lp.start = function (n) {
   n.src = this.src;
   n.start = this.c0;
   n.loc = { start :  {   line : this.li0 , column: this.col0 } , end  : null }  ;
   return n;

};

lp.parseIfStatement = function () {
  var n = this.start(this.peek ) ;
  this.next(); 
  n. type= 'IfStatement';

  this.expect('(');
  n.test = core(this.parseExpr());
  this.expect(')');
  var scopeFlags = this.scopeFlags;
  this.scopeFlags |=  4 ;
  n.consequent = this. parseStatement(true);
  this.scopeFlags = scopeFlags; 

  if ( this. peek.contents === 'else') { this.next(); n. alternate = this.parseStatement(true); }
  else { n.alternate = null; }

  return this.end(n);
};

lp.parseWhileStatement = function () {
  
  var n = this.start(this.peek ) ;
  this.next();
  n. type = 'WhileStatement';
  this.expect('('); 
  n.test = core(this.parseExpr());
  this.expect(')');
  var scopeFlags = this.scopeFlags;
  this.scopeFlags |= ( 8 | 4  );
  this. iteD++;
  n.body = this.parseStatement(true);
  this.scopeFlags = scopeFlags;
  this.iteD--;
  return this.end(n);
};

lp.parseBlckStatement = function () {
  var n = this.start(this.peek) ;
  this.next();
  n. type = 'BlockStatement',
  n. body = this.blck();
  this.expect('}')
  return this.end(n);
};

lp.parseDoWhileStatement = function () {
  var n = this.start(this.peek ) ;
  this.next();
  n. type = 'DoWhileStatement';
  var scopeFlags = this. scopeFlags; this.scopeFlags |= (  4 | 8  );
  this. iteD++; 
  n.body = this.parseStatement ();
  this.scopeFlags = ( scopeFlags );
  this. iteD --; 
  this.expect('while');
  this.expect('(');
  n. test =core(this.parseExpr());
  var e = this.expect(')');

  if (this.peek.contents === ';' ) e = this.next();
  return this.end(n);
};

lp.parseContinueStatement = function () {
  if ( !(this.scopeFlags &  8 ) ) this.err ( 'continue is not valid ' );
  var n = this.start( this. peek   )  ;
  n.  type    =   'ContinueStatement'   ;
  this.next   () ;
  if ( this.hasL ) {  n.label = null ;  return this.semi(n) ;   }
  if ( n.label = this. peek. type === 'Identifier' ? this.next() : null ) {
     var _l = ( n.label.contents + '%' );
     if ( ! this.lbn.hasOwnProperty ( _l ) ) this.err( 'Label is not def ' + ( n.label ) );
     else if ( this.lbn [_l] === this.iteD) this.err('Not iter for ' + ( n.label ) );
  }
  return this.semi(n );
};

lp.parseBreakStatement = function () {
  if ( !( this.scopeFlags &  4  ) ) this.err ( 'break is not valid ' );
  var n = this.start(this.peek   )  ;
  n. type= 'BreakStatement' ;
  this.next() ;
  if ( this.hasL ) { n.label = null ;  return this.semi(n)  ;  }
  if ( n.label = this. peek. type === 'Identifier' ? this.next() : null )
    if ( !this .lbn.hasOwnProperty ( n.label.contents  + '%' ) )
      this.err( 'Label is not def ' + n.label . contents ); 
 
  return this.semi(n) ;
};

lp.parseSwitchStatement = function () {
  var n = this.start(this.peek ) ;
  this.next() ; 
  n. type= 'SwitchStatement';
  this.expect('(');
  n. discriminant = core(this.parseExpr());
  this.expect ( ')' );
  this.expect('{');
  var c = [], hasD = false;
  var scopeFlags = this.scopeFlags, e;
  this.scopeFlags |=  4;

  while ( e = this.parseSwitchCase()) {
    if (!e.test) {
       if ( hasD ) this.err('switch statement has already got a \'default\'');
       hasD = true;
    }

    c.push(e);
  }

  n. cases = c;
  this.scopeFlags = scopeFlags;
  this.expect('}')
  return this.end(n );
};

lp.parseSwitchCase = function () {
  var n;
  var e = this.peek.contents;
  if (e === 'case') { 
    n = this.start(this.peek ) ;
    this.next();
    n. type= 'SwitchCase';
    this.foundStmt = false;
    n. test = core ( this.parseExpr() );
  }
 
  else {
    if (e === 'default') {
      n = this.start(this.peek ) ;
      this.next();
      n. type= 'SwitchCase';
      n. test = null;
      this.foundStmt = false;
     } 
    
     else return;
  }

  n.consequent = this.blck();
  return this.end(n);
};

lp.parseReturnStatement = function () {
  if ( !(this.scopeFlags&2 ) )  this.err ( 'not in function: return ' );
  var n = this.start( this. peek ) ;
  n. type = 'ReturnStatement';
  this.next();
  if (this.hasL) n. argument = null;
  else {
    var head = this.parseExprHeadOrYield ();
    n .argument = head && core ( e = this.parseExpr(head) );
  }
  return  this.semi(n);
};

lp.parseThrowStatement = function () {
  var n = this.start(this. peek ) ;
  this.  type ='ThrowStatement';
  this.next();
  if ( this.hasL ) n. argument = null;
  else {
    var head = this. parseExprHeadOrYield ();
    n. argument = head ? core ( e = this. parseExpr(head) ) : null;
  }

  return  this.semi(n);
};

lp.parseTryStatement = function () {
 
  var n = this.start(this.peek )  ;
  n.  type= 'TryStatement' ;
  this.next();
  n. block = this.parseBlckStatement ();
  if (this.peek.contents === 'catch') n.handler = this.parseCatchClause ();
  else { n . handler = null; }

  if (this.peek.contents === 'finally') { this.next(); n.finalizer = this.parseBlckStatement(); }
  else { ( n . finalizer ) = null; }
  return this.end(n );
};

lp. parseCatchClause = function () {
  var n = this.start (this. peek ) ;
  n.  type = 'CatchClause';
  this.next();
  this.expect('(');
  n. param = this. parsePattern  ();
  this.expect(')');
  n. body = this. parseBlckStatement ()
  return this.end(n );
};

lp . parseWithStatement = function() {
   var n = this.start (this. peek )  ;
   n. type = 'WithStatement';
   this.next () ;
   this.expect('(' );
   n .object = core(this.parseExpr());
   this.expect(')' );
   n.body = this.parseStatement(true);
   return this.end(n );
};

lp.parseExpr = function(head,cf) {
  var n;
  head = this.parseNonSeqExpr( head || this.parseExprHeadOrYield (cf) || this.err('n'), 0, cf );
  if ( this.peek.contents === ',' ) {
    head = { type : 'SequenceExpression', expressions : [core(head ) ], start : head.start, loc:  { start : head.loc.start } };
    do {
      this.next();
      n = this.parseNonSeqExpr( this. parseExprHeadOrYield(), 0, cf );
      head.expressions.push( core(n) ); 
    } while ( this.peek.contents === ',' );

    return this.end(head ); 
  }

  return head;
};

lp.parseNonSeqExpr = function (head, breakIfLessThanThis, cFlags_For ) {

  if (!head) this.err( 'Unexpected ' + this.peek.type );

  var n;
  if ( this.funcBecause ) {
     if ( this.peek.contents === '=>' ) {
       if ( this.propThatMustBeInAnAssig ) {
          var conv = this.convList(core(head));
          if ( conv ) this.err( ' param no ' );
          this. propThatMustBeInAnAssig = null;
       }

       this.next ();
       this.funcBecause = null;
       n = core(head );
       n =  { 
         type: 'ArrowFunctionExpression',
         expression: this. peek. contents !=='{',
         start : head. start ,
         loc : { start : head.loc.start }  ,      
         params : n .type === 'SequenceExpression' ? n .expressions : [n ]
       }  ;

       if ( ! n.expression ) {  n.body = this.parseFuncBody () ; }
       else n.body = core ( this. parseNonSeqExpr (
            this.parseExprHeadOrYield () || this.err ( 'Unexpected ' + this. peek. contents ), 0,cFlags_For )
       ); 

       return this.end(n);
     }

     else this.err( this. propThatMustBeInAnAssig ? '(pat) must have => ': ( '=>' ) ); 
  } 

  if ( this. propThatMustBeInAnAssig ) {
      if ( this.peek.contents !=='=' ) {
          if ( this.canHaveNoAssig ) { this. canHaveNoAssig = false; return head; }
          else this. err( 'assig expcted ', head );
      }

      else
          this.propThatMustBeInAnAssig = null;
   }

  if ( this. canHaveNoAssig ) this.canHaveNoAssig = false;

  var o, prec, precOrAssocDistance,  hasPrefixOrPostfix = false;

  switch (head.contents) {
    case ('++') :
    case '--':
      head. type = 'UpdateExpression', 
      head. operator= head.contents; 
      head. argument = core( this. parseExprHead ( 0x020  ) )
      if (!this.simpAssig( head. argument ) )
           this.err ( head. argument . type + ' is not an assig ' );

      this.end(head);
      hasPrefixOrPostfix = true;
      break;

    case 'yield' :
      if ( ! ( this.scopeFlags &  0x010  ) ) this.err ( 'yield must not be there ' );

      head  . type   =   'YieldExpression';
      if ( this.hasL ) {  head. argument = null ;  head. delegate = false;   }
      else {
        if ( this.peek.contents === '*' ) {
           this.next();
           head. delegate = true;
           o = this.parseExprHeadOrYield ();
           head. argument =  core(  this.parseNonSeqExpr(o, cFlags_For  )   )   ;
        }
        else { 
           o = this.parseExprHeadOrYield ();
           head. delegate = false; 
           head. argument = o ? core (  this.parseNonSeqExpr(o, cFlags_For )  )   : null;
        }
      }
      return this.end(head);
  }

  EXPR:
  while (true) {
    o = this.peek
    switch (o. type ) {
      case '++':
      case '--':
        if (hasPrefixOrPostfix) this.err(' both ')
        if (this.hasL) return head;
        n = core(head);
        if ( ! this.simpAssig ( n )  )
           this.err( n.   type + ' is not an assig   ');
 
         
        o  =  this. peek ;

        o  .  type = 'UpdateExpression';
        o  .  loc  = { start : head. loc. start } ;
        o  . start = head. start ;
 
        o  . argument = n;
        o  . operator = this.next().contents ;
        o  . prefix = false; 
        head  =  this.end( o);
        hasPrefixOrPostfix = true;
        continue;

      case '/' :
      case '+' :
      case '-' :
      case 'op' :
         prec = o. prec;
         break;

      case '?':
         if ( breakIfLessThanThis) return head;
         n = core(head);
         o  = this.next()  ; 
         o  . type = 'ConditionalExpression';
         o  . loc = { start : head.loc.start }  ;
         o  . start = head. start ; 
         o  . test = n;
         o  . consequent = core(this.parseExpr(null,0));
         this.expect(':');
         o. alternate = core( this.parseNonSeqExpr( this.parseExprHeadOrYield(), 0, cFlags_For ));
         return this.end( o );
       
       case '=' : 
          if( breakIfLessThanThis !==0 ) this.err( head.type + ' is not a valid assignable' );
          var convErr;
          if ( o.contents === '=>' ) {
             n = core(head);
             this. prepareArgs (true)  ;
             convErr = this.convList(n);
             if (convErr) this.err ( convErr.type + ' is not a param for a function; reason ' + this.convErr );

             o  =  this.next ();
             o  .  type = 'ArrowFunctionExpression';
             o  .  loc = { start : head. loc. start }  ;
             o  .  start = head. start ; 
             o  .  params= n. type === 'SequenceExpression' ? n.expressions : [n];
          
             if ( this. peek. contents === '{' ) {
               o.expression = false;
               o.body = this.parseFuncBody ()   ;
             }
             else {
               o. body = core( this. parseNonSeqExpr(
                  this.parseExprHeadOrYield () || this.err ( 'Unexpected ' + this. peek. contents, head ),
                  0, 
                  0)  )  ;
               o. expression = true;
             }
             return this.end(o );
          }

          convErr = this.convAssig(core(head));
          if (convErr) { var m = this.convErr; this.convErr = null; this.err(m, convErr ); }

          n  =  core(head );
          o  = this. peek ;  

          o  . type= 'AssignmentExpression';
          o  . loc = { start : head.loc.start }  ;
          o  . start = head. start ; 
          o  . operator = this.next () . contents ; 
          o  . left = n;
          o  . pDepth = 0;
          o  .right = core( this.parseNonSeqExpr(
            this. parseExprHeadOrYield(), 0, cFlags_For )
          );

          return this.end( o ); 

      case 'Identifier' :
        switch ( o.contents ) {
            case 'in':
            case 'of':
            if (cFlags_For &  2  ) {
              if (breakIfLessThanThis !==0 || hasPrefixOrPostfix) this.err( head.type + ' is not a valid assignable' );
              return head;
            }

            case 'instanceof': 
               prec = 0x9B;
               break;

            default : return head;
        }
        break;

     default:
        return head;

    }
    precOrAssocDistance = prec - breakIfLessThanThis;
    if (precOrAssocDistance !==0 ? precOrAssocDistance < 0 : (prec & 1)) return head;

    n = core(head );
    o =  this. peek  ;

    o  . type = (prec===0x09 || prec === 0x0B ) ? 'LogicalExpression' : 'BinaryExpression';
    o  . loc  = { start : head. loc. start }  ; 
    o  . start  = head. start ;     
    o  . operator = this.next   () .contents ;
    o. right = core(this.parseNonSeqExpr(this.parseExprHead(),prec,cFlags_For));
    o. left = n;
    head =  this.end(o); 
 }
};



lp . parseExprHeadOrYield = function ( cFlags_For_Sh_Non ) {
       return this.peek.contents==='yield' ?
                 this.next () :
                 this. parseExprHead (cFlags_For_Sh_Non ); 
};

lp. parseStatementOrID = function (n) {
  var c = n.contents, parse = null;

  if (c.length > 10) return this.id();
  switch (c.length) {
    case 1: return this.id();
    case 2:
      switch (c) {
        case 'do': parse = lp.parseDoWhileStatement; break;
        case 'if': parse = lp.parseIfStatement; break;
        case 'in': break;
        default: return this.id();
      }
      break;

    case 3:
      switch (c) {
        case 'new': return this.parseNewHead();
        case 'for': parse = lp. parseFor; break;
        case 'try': parse = lp.parseTryStatement; break;
        case 'let':
        case 'var': return this. parseVariableDeclaration(c );
        default: return this.id();
      }
      break;
   case 4:
      switch (c) {
       case 'null' : n. type = 'Literal'; n. value = null; if ( this.startStmt ) this.startStmt = false; return this. next (); 
       case 'void': this . foundUnaryDVT = true; if ( this.startStmt ) this.startStmt = false; return;
        case 'this': n .type = 'ThisExpression'; if ( this.startStmt ) this.startStmt = false;return this.next ();
        case ( 'true' ) : n. type = 'Literal'; n. value = true; if ( this.startStmt ) this.startStmt = false; return this.next (); 
        case 'case':
        case 'else':
          break;
       
        case 'with': parse = lp. parseWithStatement; break;
        default: return this.id();
      }
      break;

    case 5:
      switch (c) {
        case 'super': n .type = 'Super'; if ( this.startStmt ) this.startStmt = false;return this.next ();
        case 'break': parse = (lp.parseBreakStatement); break;
        case 'catch': return;
        case 'class':
           var _n, _s = null;
           _n =n;

           var scopeFlags = this.scopeFlags; 
           n = this.next (); 
           if ( this.startStmt ) { 
                _s = this.startStmt  ;
                this.startStmt = false ;
                n. type = 'ClassDeclaration';
                n. id   = ( this.peek.type === 'id' && this.id()) || this.err ('id');
           }
           else  {                     
                n. type = 'ClassExpression';
                n. id   = ( this. peek. type === 'id' && this.id () ) || null;
           }

           if ( this.peek.contents === 'extends' ) {
              this.next ();
              n.superClass = this. parseNonSeqExpr(this.parseExprHeadOrYield(),0,0);
           }

           else 
              n. superClass = null;

           c = [];
           n.body = { type : 'ClassBody', body : c, loc : {} };
           this.expect ( '{' );
           this.scopeFlags = 0x020 ;
           while ( _n = this. parseProperty (  0x010  ) ) c. push ( _n );
           this.scopeFlags = scopeFlags;
           if ( c.length ) { this.start ( n.body, c[0]); this.end(n.body, c[c.length- 1 ]); }
           else { n.body.start = n.body.end = 0; n.body.loc.start = n.body.loc.end = { li : 0, c : 0 }; } 

           if ( _s ) { this.foundStmt = true; }
           return this.end(n, this.expect('}'));

        case 'const': return this. parseVariableDeclaration ( c );
        case 'throw': parse = (lp.parseThrowStatement); break;
        case 'while': parse = lp.parseWhileStatement; break;
        case 'yield': return;
        case 'false': n. type = 'Literal'; n. value = false; if ( this.startStmt ) this.startStmt = false;return this.next (); 
        default: return this.id();
      }
      break;

    case 6:
      switch (c) {
        case 'delete': 
        case 'typeof': this.foundUnaryDVT = true; if ( this.startStmt ) this.startStmt = false; return 
        case 'export': (parse) = lp.stmtPrse_export; break;
        case 'import': parse = lp.stmtPrse_import; break;
        case 'return': parse = lp.parseReturnStatement; break;
        case 'switch': parse = lp.parseSwitchStatement; break;
        default: return this.id();
      }

      break;
    case 7:

      switch (c) {
        case 'default': 
        case 'extends':
        case 'finally': break;
        default: return this.id();
      }
      break;

    case 8:
      switch (c) {
        case 'function': 
            n = this.next ();
            c = this.startStmt;

            n = this . parseArgsAndBody( -1, this.start (
              this.startStmt ?
              { type : 'FunctionDeclaration',
                id : ( this. peek.type === 'Identifier' && this. id () ) || this.err('id ' ),
                loc : {}
              } :

              { type : 'FunctionExpression',
                id : ( this.peek.type === 'Identifier' && this.id() ) || null,
                loc : {}
              }, n ),
               
              0 ); 

              if ( c ) { this.foundStmt = true; }

              return n; 

        case 'debugger': 
            if ( this.startStmt ) {
                this.startStmt = false; 
                n . type = 'DebuggerStatement';
                this.next();
                var semi = this.semi();
                this.foundStmt = true;
                if ( semi ) return this.end(n, semi );
                return n; 
            }

            this. err ('not stmt ' );

        case 'continue': parse = lp.parseContinueStatement; break;

        default: return this.id();
      }

      break;

    case 10:
      if (c === 'instanceof') break; 
      return this.id();

    default: return this.id();
  }

  if (!this.startStmt) this.err('an identifier was expected but found ' + c );

  this.startStmt = false; 
  n = parse && parse.apply(this);
  this.foundStmt = true; 

return n;
};

lp . parseRegExpLiteral = function() {
     var c = this.c,
         l = this.src, 
         e = l.length;
    
     var n = { regex : {}, type : 'Literal' };
     n.loc = {start:{line: this.li, column : this.col-1}};
     n.start = this.c - 1;

     var b = false;
     var o;
     var _l = "";

     L:
     while ( c < e ) {

       o = l.charCodeAt(c);
       switch ( o ) {
         case  91:
             if ( !b ) b = true;
             break;
         case  92 : ++c; break;
         case  93 :
             if ( b ) b = false;
             break;
         case  47 :
            if ( b ) break;
            break L;

         default:
            if ( o >= 0x0D800 && o <= 0x0DBFF ) { this.col--; }
       }

       c++;
     }
 
     if ( l.charCodeAt(c ) !==  47  ) this.err('expcted /');
     
     var _g = 0;
  
     o = 0;

     L :
     while ( o <= 5 ) {
        switch ( l.charCodeAt ( ++c ) ) {
            case  0x67  : ( _g &  2  ) && this.err ( 'g already there' ); _g |=  2 ; break; 
            case  0x075  : ( _g &  4  ) && this.err ( 'u already there' ); _g |=  4 ; break; 
            case  0x079  : ( _g &  8  ) && this.err ( 'y already there' ); _g |=  8 ; break; 
            case (  109  ) : ( _g&  0x020  ) && this.err ( ' m already there' ); _g |=  0x020 ; break;
            case  105  : ( _g&  0x080  ) && this.err ( ' i already there' ); _g |=  0x080 ; break; 
           
            default : break L;
    
          }
         o ++; 
     }

     n.regex.flags = l.substring(c-o, c);
     n.regex.pattern = n.contents = l.substring(this.c, c-o-1 ); 
    
     this.col += ( ( c ) - this.c ) 
     n.loc.end = { l: this.li, c : this.col };
 
     if ( !( _g & ( ALL ^ _g ) ) ) n. value = new RegExp ( n. regex . pattern, n. regex . flags ); 
     else { new RegExp ( n. regex . pattern ); n. value = null; } 
     this.c = c;
     n. end = this.c;
     this.peek = n;

     return this. next ();
};

lp.parseTemplateLiteral = function() {
  var c = this.c,
      l = this.src,
      e = l.length;

  var i, _e;
  var str = [], nexpr = [];
  var v = "", v_start = 0;
  var r_start = 0;
  var n = { 
        type : ( 'TemplateLiteral' ),
        quasis: str,
        expressions : nexpr,
        loc: { start : { l: this.li, c : this.col} }
  };

  var li = this. li, col = this.col; 
  while ( c < e && ( i = ( l.charCodeAt ( c ) ), i !== 96 ) ) {
    switch ( i ) {
      case  36  :
        if ( l.charCodeAt(c + 1 ) ===  123 ) {
           v += l.substring(v_start, c );
          _e = {
             type : 'TemplateElement', start : r_start,
             loc : { start : { li : li, c: col }, end : { li : this. li, c : this.col } },
             end : c, 
             src : this.src
            };
     
          _e .tail = false;
          _e .value = { raw : l.substring(r_start, c ).replace(/\r\n|\r/g, '\n'), };

          str.push(_e);
          this.c = c + 2; this.next()
          nexpr . push ( this.parseExpr () );
          ( this. peek . contents !=='}' && this.err( ( 'must }' )) );
          v_start = r_start = c = this.c;
          li = this.li, col = this. col;
        }

        else
           c++;
     
        continue;

      case  13:
          v += l.substring(v_start, c);
          v += '\n'; 
          if ( l.charCodeAt(c + 1 ) ===  10 )
             c++;

          v_start = ++c;
          this.li++;
          continue;

      case  10 :
          v += l.substring(v_start, c);
          v += '\n';
          v_start = ++c;
          this.li++;
          continue;
 
      case 0x2028:
      case 0x2029:
         v += l.substring(v_start, c);
         v += l.charAt(c);
         v_start = ++c; 
         this.li ++; 
         continue;

      case  92 :
        v += l.substring(v_start, c ); 
        switch ( l.charCodeAt ( ++ c ) ) {
          case  92 : v += '\\'; break;
          case  34 : v +='\"'; break;
          case  39 : v += '\''; break;
          case  98 : v += '\b'; break;
          case  0x076  : v += '\v'; break;
          case  102 : v += '\f'; break;
          case  116  : v += '\t'; break;
          case  0x072  : v += '\r'; break; 
          case  0x6e  : v += '\n'; break;
          case  117 :
             this.c=c; var e = this. peekUSeq ();
             if ( e >= 0x0D800 && e <= 0x0DBFF ) { this.c ++; v += String.fromCharCode(e, this.peekTheSecondByte()); }
             else { v += String.fromCharCode(e );}
             c = this.c; 
             break;

          case  13: if ( l.charCodeAt(c + 1 ) ===  10 ) c++;
          case  10 :
          case 0x2028:
          case 0x2029: this.li ++; break;

          default : v += l.charAt(c); break;
        }

        v_start = ++c;
        continue;
    } 

    c++;
  }

  if ( c > r_start ) {
    if ( c > v_start ) v +=  l.substring ( v_start, c); 
     _e = {
        type : 'TemplateElement',
        start : r_start ,
        loc : { start : { li : li, c: col }, end : { li : this. li, c : this.col } },
        end :  c ,
        src : this.src
     };
    
     _e .value = { raw : l.substring(r_start, c) . replace ( /\r\n|\r/g, '\n' ) }; 
      str.push(_e);
     _e .tail = true;
  }

  if ( l[ c ] === '`' ) this.err ( '` expcted');
  n.loc.end = { l: this.li, c :this.col }
  this.c = ++c;
  this.peek = n;
  n = this.next ();
  return n;
};

lp.parseExprHead = function (cFlags_For_Sh_Non_Ex ) {
  var head = this.peek; 
  var n, e = false;

  if ( head.type === 'Identifier' ) {
      head = this.parseStatementOrID (head); 
      if ( this.foundStmt ) { return head; } 
      if ( this.foundUnaryDVT ) { 
        if (cFlags_For_Sh_Non_Ex &  0x020 ) { this.err('Unexpected unary'); }
        this.foundUnaryDVT = false;
        head  = this. start ( this. peek ) ;
        head  .     prefix  =  true   ;
        head  .     type   =  'UnaryExpression' ; 
        head  .     operator = this.next().contents ;
        head. argument = core( this.parseNonSeqExpr(this.parseExprHead(),0xAE, cFlags_For_Sh_Non_Ex &  2   ))  ; 

        return this.end(head );
     }
  }

  else {
      if ( this. startStmt ) this.startStmt = false;
      switch (head.type) {
            case '[' :
                   head = this. parseArrayExpression( cFlags_For_Sh_Non_Ex & 9 );
                   if ( this. propThatMustBeInAnAssig ) return head;
                   break ;
            case '(' :
                   head = this. parseParen();
                   if ( this . funcBecause ) return head;
                   break ;
            case '{' :
                   head = this. parseObjectExpression( cFlags_For_Sh_Non_Ex & 9 );
                   if ( this. propThatMustBeInAnAssig ) return head;
                   break;
            case '/' : head = this. parseRegExpLiteral (); break;
            case '`' : head = this. parseTemplateLiteral (); break;
            case 'Literal': head = this.foldnext (); break;

            case '++': 
            case '--':
               if (cFlags_For_Sh_Non_Ex &  0x020  ) this.err('Unexpected unary');
               this.start(this.peek ) ;
               return  this.next();

            case '~':
            case '!':
            case '-':
            case '+':
               if (cFlags_For_Sh_Non_Ex &  0x020 ) this.err('Unexpected unary');
               head  =  this. start ( this. peek ) ; 
             
               head. type = 'UnaryExpression';
               head. operator = this.next().contents;
               head. argument = core( this.parseNonSeqExpr(this.parseExprHead(),0xAE,0)); 
               head. prefix = true  ;
               return this.end(head); 

            default:
               if ( (cFlags_For_Sh_Non_Ex) &  0x020  ) this.err(this. peek + ' is not a vaild start for an expr' );
               return; 
    }
  }

  n = core( head );

  while ( true ) {
    switch (this.peek.contents) {

      case '.':
           this. peek  . object = n;
           n  = this.next();
           n  . type = 'MemberExpression';
           n  . loc  = { start : head. loc. start }  ;
           n  . start  = head.  start ; 
           n  . property = this.memID();
           n  . computed= false; 
           head = this.end( n );
           continue;

     case '[':
        this. peek  . object = n;
        n  = this.next();

        n  . type = 'MemberExpression';
        n  . loc  = { start : head. loc. start }  ;
        n  . start  = head. start ; 
        n  . property = core ( this. parseExpr() );     
        n  . computed= true ; 
        this.expect(']');
        head    = this.end(n );
        continue;

     case '(':
          this. peek  . callee = n                  ;
          n  = this.next   () ;  
          n  . type= 'CallExpression'      ;
          n  . loc = { start : head. loc. start } ;
          n  . start = head. start ; 
          n  . arguments = this. parseArgList() ;
          this.expect(')');
          head    = this.end (n );
          continue;

      case '`' :
        
          n =  {
              type : 'quasi',
              quasi : this  . parseTemplateLiteral (),
              start : head  .                            start ,
              loc : { start : head. loc. start   },
              tag : n
         }; 

         head  = this.end (n ); 
         continue; 

      default: return head;
    }
  } 

  return head;
};

lp.parseNewHead = function () {
  if ( this. startStmt ) this.startStmt = false;

  var n; 
  var e = this.start ( this. peek   )  ;
  this.next ();

  if ( this. peek. contents === '.' ) {
    n  = this.start ( this. peek ) ;
    this.end ( e ) ;
    this.next   () ;
  
   
    n.  type = 'MetaProperty';
    n.  meta = e ;

    if ( this. peek. type === 'Identifier' && ( e= this.next() ).contents === 'target' )  {  n. property = e   ;    this.end(n ) ;   }
    this.err( 'found ' +     e . contents + ', not target ' );
   }

  var head = this.peek; 
  switch (head.type) {
    case '[': head = this. parseArrayExpression(); break;
    case '(': head = this. parseParen(); if ( this.funcBecause ) this.err('Unexpected ' + this.funcBecause. contents ); break;
    case '{': head = this. parseObjectExpression(); break;
    case '/': head = this. parseRegExpLiteral (); break;
    case '`': head = this. parseTemplateLiteral (); break;
    case 'Literal': head = this.foldnext(); break;
    case 'Identifier' : 
      head = this.parseStatementOrID (head);
      if ( this. foundUnaryDVT ) this.err ( this. peek. contents + ' can not come in the head of new' ); break;

    default: this.err('Unexpected ' + ( this. peek .type ) );
  }

  n = core( head );

  while ( true ) {
    switch (this.peek.contents) {
      
     case '.':
           this. peek  . object = n;
           n  = this.next();
           n  . type = 'MemberExpression';
           n  . loc  = { start : head. loc. start }  ;
           n  . start  = head.  start ;
           n  . property = this.memID();
           n  . computed= false;
           head = this.end( n );
           continue;

     case '[':
        this. peek  . object = n;
        n  = this.next();

        n  . type = 'MemberExpression';
        n  . loc  = { start : head. loc. start }  ;
        n  . start  = head. start ;
        n  . property = core ( this. parseExpr() );
        n  . computed= true ;
        this.expect(']');
        head    = this.end(n );
        continue;

       case '(':
          this.next();
          e. type= 'NewExpression';
          e. callee = n           ;
          e. arguments = this. parseArgList() ;
          this.expect(')');
          return this.end (e);

        case '`' :

             n = {
                  type : 'quasi',
                  quasi : this . parseTemplateLiteral (),
                  start : head. start ,
                  loc : { start : head.loc.start },
                  tag : n
              }  ;

              head =  this.end (n );
              continue; 
    
        default:
                e. type = 'NewExpression';
                e. callee = n; 
                e. arguments = [];
 
                return this.end (e   )  ;
     }
  } 
};

lp.id = function (n) {
  if ( this.startStmt ) this.startStmt = false;
  return this.next (); 
};

lp . parseSpreadElement = function() {
    var n = this.start ( this. peek ) ;  
    n. type  = 'SpreadElement';
    this.next () ; 
    n. argument = core ( this.parseNonSeqExpr( this.parseExprHead(), 0, 0 ) );
    return this.end ( n) ;
};

lp.parseArrayExpression = function (cFlags_Sh_Non ) {
  var e = [], _e;
 
  var n = this.start ( this. peek ) ;
  this.next ();                  
  n. type = 'ArrayExpression';
  n. elements = e  ;
  n. pDepth = 0;

  var propThatMustBeInAnAssig = null,
      flags = cFlags_Sh_Non,
      hasPropThatMustNot = false;

  var sprCount = 0, sprIdx = -1;
 
  while ( true ) {
    if ( _e = this. parseExprHeadOrYield() ) {
       this. canHaveNoAssig = true;
       e .push (core(this.parseNonSeqExpr(_e,0,0)));

       if ( this. propThatMustBeInAnAssig ) {
            if ( !propThatMustBeInAnAssig ) { propThatMustBeInAnAssig = this.propThatMustBeInAnAssig; p =  1  ; }
            this. propThatMustBeInAnAssig =null;
       }

       else if ( this. mustNot ) {
         if ( !hasPropThatMustNot ) { hasPropThatMustNot = this. mustNot; p =  8 ; }
         this. mustNot = false;
       }
    }

    else if ( this. peek.contents === '...' ) {
        sprCount ++;
        sprIdx = e.length;
        e .push ( this. parseSpreadElement () );
    } 

    else e . push ( null );

    if ( this. peek. contents === ',' ) this.next();
    else break;
  }

  if ( propThatMustBeInAnAssig ) this. propThatMustBeInAnAssig = propThatMustBeInAnAssig;
  if ( hasPropThatMustNot ) this. mustNot = hasPropThatMustNot; 

  n.sprCount = sprCount, n.sprIdx = sprIdx;
  this.expect(']')  ;

return this.end(n );
};

lp.convList = function(nexpr) {
     var convErr;

     switch (nexpr.type) {
        case 'Identifier': 
           if (nexpr.pDepth > 1 ) {
              this.convErr = 'an identifier can not be in parens when used as a param'; 
              return nexpr;
           }

           return;

        case 'SequenceExpression' : 
           if (nexpr. pDepth !==1 ) {
              this.convErr = 'param list must be in exactly one pair of parens ';
              return nexpr;
           }

           var e = 0;
           while ( e < nexpr .expressions .length ) {
              if ( convErr = this.convAssig (nexpr.expressions[e], true) ) return convErr; 
              e++; 
           }

           return;

        case 'ObjectExpression' : 
        case 'ArrayExpression' :
        case 'AssignmentExpression':
           if ( nexpr . pDepth !==1 ) {
              this.convErr = nexpr . type + ' must not have more than one pair of parens when used as a param list';
              return nexpr;
            } 

            nexpr . pDepth = 0;

            return this.convAssig ( nexpr, true ); 
     }

return nexpr;
};

lp.simpAssig = function(l ) { switch (l.type ) { case 'Identifier' : case 'MemberExpression' :  return true;  }  }

lp.convAssig = function( nexpr, isB ) {
     var convErr, r  ;
     var e, n;
     
     switch ( nexpr. type ) {
       case 'Identifier' :
         if ( isB ) {
           if ( nexpr . pDepth ) {
             this.convErr = 'an identifier must not be in parens when used as in a var def position'; 
             return nexpr;
           }
         }     
         nexpr . isB = true; 
         return;

       case 'ArrayExpression' :
          if ( nexpr . pDepth ) {
              this.convErr = 'ArrayExpression must not have parens in case it is a ptrn ';
              return nexpr;
          }

          if ( nexpr .sprCount > 1 || ( nexpr . sprIdx >= 0 && nexpr . sprIdx !==nexpr . elements .length - 1 ) ) {
             this.convErr = ' ArrayExpression when in ptrn position can not have more than one ..., and in case it has it must be at its end ';
             return nexpr;
          } 

       case 'ArrayPattern' : 
          n = nexpr . elements;
          e = 0;

          while ( e < n.length )
              if ( r = n[e++ ] )  
                if ( convErr = this. convAssig (r, isB ) ) return convErr;

          nexpr . type = 'ArrayPattern';
          nexpr . isB = isB;

          return;

        case 'ObjectExpression' :

          if ( nexpr . pDepth ) {
              this.convErr = 'ObjectExpression must not have parens in case it is a ptrn ';
              return nexpr; 
          }

        case 'ObjectPattern' :
          n = nexpr . properties;
          e = 0;
   
          var _e;

          while ( n.length > e ) {
            _e = n[e];
            if ( convErr = this.convAssig (_e.value, isB) )
              return convErr; 
           
            _e .type = 'AssignmentProperty';
            e ++; 
          }

          nexpr . type = 'ObjectPattern';
          nexpr . isB = isB;

          return;

       case 'AssignmentExpression':
         if (nexpr . pDepth ) {
           this.convErr = 'AssignmentExpression must not have parens in case it is a ptrn '; 
           return nexpr;
         }

         if ( nexpr . operator .contents !=='=' ) {
              this.convErr = 'found ' + nexpr . operator. contents + 'not = '; 
              return nexpr;
           } 
              
         else delete nexpr . operator;

       case 'AssignmentPattern' :
           convErr = null;

           if ( isB && ! nexpr . left. isB ) convErr = this.convAssig ( nexpr . left, true );
           if ( !convErr ) nexpr . type = 'AssignmentPattern';

           return convErr;

       case 'MemberExpression' : 
        
          if ( isB ) {
             this.convErr = 'MemberExpression can not be used in the var def position ' ; 
             return nexpr;
          }        

          nexpr . isB = false;

          return;
     }

     this.convErr = nexpr.type + ' is not an assig '  ;

return nexpr;
};

lp.parseArgList = function () {
    var n = [], e;
    while ( true ) {
       if ( this. peek. contents === '...' ) { n. push( this. parseSpreadElement () ); }
       else if ( e = this. parseExprHeadOrYield () ) { n. push (core ( this. parseNonSeqExpr ( e, 0, 0) ) ); }
       else break;
     
       if ( this.peek.contents === ',' ) { this.next (); continue; }
       break;
    }
    return n;
};

lp.parseObjectExpression = function (cFlags_Sh_Non ) {
  var prop = [], e, n;

  n = this.start ( this. peek ) ;
  this.next ();
  n. type = 'ObjectExpression',
  n. pDepth = 0;

  var p = cFlags_Sh_Non,
      propThatMustBeInAnAssig = null,
      hasPropThatMustNot = (false );

  while ( e = this.parseProperty(p)) {
     prop .push(e);
     if ( this. propThatMustBeInAnAssig ) {
        if ( !propThatMustBeInAnAssig ) { propThatMustBeInAnAssig = this. propThatMustBeInAnAssig; p =  1  ; }
        this. propThatMustBeInAnAssig = null;
     }
     else if ( this. mustNot ) {
       if ( !hasPropThatMustNot ) { 
             hasPropThatMustNot = this. mustNot;
             p =  8 ;
       } 
       this. mustNot = false;
     }
     if ( this.peek. contents === (',' ) ) { this.next (); continue; }
     break;
  }

  n .properties = prop;
  if ( propThatMustBeInAnAssig ) this. propThatMustBeInAnAssig = propThatMustBeInAnAssig;
  else if ( hasPropThatMustNot ) { this. mustNot = hasPropThatMustNot; }
  this.expect('}');

  return this.end(n);
};

lp.parseParen = function () {
  var r, argListBecause = null, n = this.start ( this. peek ) ;
  this.next(); 
                               
  var e = this.parseExprHeadOrYield ();
  if ( e ) {
    this.canHaveNoAssig = true;
    e = this. parseNonSeqExpr ( e, 0, 0 );
    if (this.propThatMustBeInAnAssig ) {
       if ( this. peek. contents === ')' ) {
          if ( e.type !=='(' ) e. pDepth = 1;
          else e = e.expr, e. pDepth ++; 

          this.prepareArgs (true ) ; 
          this.funcBecause = e;

          return n. expr = (e ), this.end(n, this.expect( ')' ) );
       }

       this. prepareArgs  (true ) ; 
       if ( r = this. convAssig(e, true ) ) { this.err(e . type + ' can\'t be a def; reason: ' + this.convErr ); } 
       argListBecause = e;
       this. propThatMustBeInAnAssig = null;
    } 

    if ( this. peek. contents === ',' ) {
       e = {
         type : 'SequenceExpression',
         expressions : [core(e)],
         start : e.start ,
         loc:  { start : e.loc.start }
       };
       e .pDepth =1;
 
       var head;
       do {
         this.next ();
         if ( this. peek. contents === '...' ) {
            if ( !argListBecause ) this. prepareArgs   ( true ) ; 
            if ( r = this.convList(e) ) this.err( e. type + ' can\'t be a param; reason : ' + this.convErr, r );
            r = this. peek;
            e.expressions . push ( this.parseRestElement () );
            this.funcBecause = r; 
            this.expect (')');
            n. expr = e;
            return n;
          }

          if ( argListBecause ) {
            var ptrn = this. parsePattern   ();
            if ( '=' === this. peek. contents ) { 
               this.next () 
               ptrn = {
                    type : 'AssignmentPattern',
                    left : ptrn,
                    start :ptrn.start ,  
                    loc : { start : ptrn.loc.start }
               }; 
               
               ptrn. right = core (this.parseNonSeqExpr (this .parseExprHeadOrYield (), 0, 0 ) );
               head = this.end(ptrn );
            }

            else
               head = ptrn;
          }

          else {
              head = this. parseExprHeadOrYield () || this.err( this. peek . type + ' is not a valid start for an expr ' );
              this.canHaveNoAssig = true;
              head = this. parseNonSeqExpr ( head,0,0 );
              if ( this. propThatMustBeInAnAssig ) {
                  this. prepareArgs   () ;
                  if ( r = this. convAssig(head, true ) ) this.err(head.type+' can\'t be a def; reason : ' + this.convErr );
                  if ( r = this. convList (e ) ) this.err(e.type+ ' can\'t be a param; reason : ' + this.convErr );
                  argListBecause = head;
                  this. propThatMustBeInAnAssig = null;
              }
          } 

          e. expressions.push ( core(head ) );

       } while ( this. peek. contents === (',' ) );
       if ( !argListBecause ) this.end ( e )  ;
    }

    if ( e. type !=='(' ) e. pDepth = 1; 
    else { e = e .expr; e .pDepth ++; } 
    n.expr = e;
    if ( argListBecause ) this.funcBecause = argListBecause;
    this.expect(')' );
    return this.end(n );
  }

  else switch ( this. peek. contents ) {
        case ')' :
           r = this.next ();
           n.expr = { type : 'SequenceExpression',  expressions : []  };
           this.funcBecause = r;
           return n;

        case '...' :
          this.funcBecause = this . peek;
          this.prepareArgs   () ; 
          n.expr = this. parseRestElement ();
          this.expect ( ')'  );
          return n;

        default : this. err ( 'Unexpected ' + this. peek. type );
  }

};

lp . parseVariableDeclaration = function(kind, cFlags_For ) {
  if ( this.startStmt ) this.startStmt = false;
  else  if ( ! ( cFlags_For &  2  ) ) { this.err ( kind + 'is not a vaild name ' ); }
 
  var dec = [];
  var n = this.next ();
  
  n. declarations = dec,
  n. type= 'VariableDeclaration',
  n. kind= kind;   
  
  var e = this.parseVariableDeclarator(cFlags_For );
  if ( !e ) this.err(( 'must dec' ) ); 

  do { 
      dec.push (e);
      if ( this.peek.contents !==',' )
         break;
     
      this.next();
      e = this.parseVariableDeclarator(cFlags_For ); 
  } while ( e ) ;

  if ( ! ( cFlags_For &  2  ) ) {
    this.foundStmt = true;
    return this.semi(n );
  }

  return this.end ( n );
}

lp . parseVariableDeclarator = function(cFlags_For ) {
   var n = this.parsePattern  (); // console.log( n, "N", "N", this. peek ); 
   if ( n ) {
       n =  {
         type : 'VariableDeclarator',
         id : n,
         start : n.start,
         loc : { start : n.loc.start },
         init : this.peek.contents === '=' ? (this.next(),
                                             core (  this. parseNonSeqExpr(this.parseExprHeadOrYield(),0, cFlags_For ) ) ) : 
                n.  type !== 'Identifier' ? (this.expect ('=' ),
                                             core (  this. parseNonSeqExpr(this.parseExprHeadOrYield   (), 0, cFlags_For )  ) )  : null,
       }; 

       return this.end ( n );
   }
} ; 

lp . parseFor = function() {
  var n = this.next ();
  this.expect('(' );
  var e;

  switch (e = this.peek.contents ) {
     case 'var':
     case 'let':
     case 'const' : e = this. parseVariableDeclaration(e,  2  ); break;

     default :
       e = this. parseExprHead ();
       if ( this. propThatMustBeInAnAssig ) this.canHaveNoAssig = true;
       else if ( e ) { e = this.parseExpr(e,  2  ); } 
       else e = null; 
  }

  var _in = true;
  switch ( this. peek . contents ) {
     case 'of' : _in = false;
     case 'in' :
        if ( this. mustNot ) { this.err ( e. type + ' is not an assig ' );} 
        if ( e. type === 'VariableDeclaration' ) {
           if ( e. declarations.length !==1 ) this.err ( e. kind + ' must not have more than one decl in case it is in a for/in' );
        }

        else  {
          if ( this . propThatMustBeInAnAssig ) this. propThatMustBeInAnAssig = null;
          var convErr = this.convAssig ( e);
          if ( convErr ) this.err ( e. type + ' is not an assig; reason ' + this.convErr );
       }
       
       this.next();
       n.  type = 'ForInStatement';
       n.  left = e;
       n.  right =  ( _in ? core( this.parseExpr() ) : core ( this. parseNonSeqExpr(this. parseExprHead(), 0,0) )  );
       break;

     default :
        if ( this. propThatMustBeInAnAssig ) {
           this.canHaveNoAssig = false;
           e = this.parseExpr(e);
        }

        this. expect (';' ); 

        n.  type   = 'ForStatement';
        n.  test = this.peek.contents === ';' ? null :(core ( this.parseExpr ()   )  )
        n.  init = e; 
        this.expect(';' );
        e = this. parseExprHead() || null;
        n . update = e && core(  this.parseExpr (e)   )  ; 
    }

    this. expect ( ')' );
    ++ this. iteD;
    var scopeFlags = this.scopeFlags;
    this.scopeFlags |= (  4 | 8  );
    n. body = this.parseStatement ()   ;
    this.scopeFlags = scopeFlags;
    -- ( this. iteD );

return this.end (  n   ) ;
}

var core = function(n ) { return ( ( n . type === '(' ? n.expr : n )); } 
var coreBrack = function(n) { return n. type === '[' ? n. expr : n   }

lp.parseProperty = function (cmn) {
  var e, Prop = ( cmn ===  0x010  ) ? 'MethodDefinition' : 'Property', n = null;
  switch ( this. peek. type ) {
    case 'Identifier' : { n = this. peek. value;} break;
    case 'op' : n = this. peek. contents; 
  } 

  var _static = null; 
  
  L :
  while ( true ) 
    switch ( n ) { 
      case 'get':
        n = (_static) || (this.peek)  ;
        this.next();
        if (e = this.parseMemName()) {
           if ( cmn & 1 ) this.err('get' ); 
           n. type = Prop;
           n.  key = coreBrack (e);
           n.  kind = 'get';
           n. computed = ( e. type === '[' );

           if ( cmn !== 0x010  ) {  n.shorthand =false; n. method= false;   }
           else n.static = _static !==null      ;
          
           n.value = this.parseArgsAndBody(0, { 
                type : 'FunctionExpression',
                  id : coreBrack(e),
               start : e.start ,
                 loc : { start : e.loc.start },
           generator : false
           } );
           if ( cmn !== 0x010  ) this. mustNot = true;       

           return this.end   (  n )  ;
        }

        break L;

    case 'set':

      n =  (_static) || (this.peek   )   ;
      this.next();
      if ( e = this.parseMemName()) {
         if ( cmn &  1 ) this.err('set' ); 
         n. type = Prop;
         n.   key= coreBrack (e);
         n. kind = 'set'; 
         n. computed = ( e .type === '[' ); 

         if ( cmn !== 0x010  ) n. method = n. shorthand = false;
         else n.static = _static !==null; 
       
         n. value = this.parseArgsAndBody(1, {
              type : 'FunctionExpression',
                id : coreBrack(e),
             start : e.start ,
               loc :   { start : e.loc.start },
         generator : false
         } );
         if ( cmn !== 0x010  ) this. mustNot = true;

         return this.end   ( n )   ;
      }

      break L;

    case '*':
      if ( cmn & 1 ) this.err('sh and * ' ); 
      n = _static || this.start ( this. peek   )  ;
      this.next();
      if (  e = this.parseMemName() ) {   
        n.  type    = Prop;
        n.computed = e. type === '[';
        n.  key = coreBrack(e);
       
        n. value  = this. parseArgsAndBody(-1,  {
             type :'FunctionExpression',
               id : coreBrack (e) ,
            start : e.start ,
              loc : { start : e.loc.start },
        generator : true
        }) ;

        if ( cmn ===  0x010   )  {
           if (n.contents === 'constructor'  ) this.err('can not be a g ' ) ;
           n.  kind = 'method';
           n.static = _static !==null ; 
        }
        else {
           n.method = true; 
           n.shorthand = false;  
           n.  kind = 'init' ;
           this. mustNot = true;   
        }
    
        return this.end ( n   )  ;
      }
   
      this.err('[ or and expr expcted', this.peek );

       case 'static' :
          if ( cmn ===  0x010  && !_static ) {
             n = null;
             _static = this.next ();
             switch ( this. peek. type ) {
                case 'Identifier' : { n = this. peek. value;} break;
                case '*' : n = '*';
             }

             continue;
          } 

    default: 
        if ( n = this.parseMemName()) break L;
        if ( _static ) { n = _static; break; } 

  return;
  }

  switch (this.peek.type) {
    case '(':
       if ( cmn &  1   ) this.err('paren ' ); 
       n = {
         type: Prop,
         key : coreBrack (n),
         start : n.start ,
         loc : { start : n.loc.start   }  , 
         kind : ( cmn ===  0x010  ? n.contents === 'constructor'? 'constructor' :  'method'  : 'init' ),
         computed : n. type === '[',

         value : this . parseArgsAndBody(-1, {
               type : 'FunctionExpression',
               id : coreBrack (n),
            start : n.start ,
               loc : { start : n.loc.start },
               generator : false
         } )
       };
       if ( cmn !== 0x010  ) { this. mustNot = true; n. method = true;  n. shorthand = false;   }
       else n.static = _static !==null      ;
       return this.end (n, n . value );
 
     case ':':
       if ( cmn ===  0x010   )
         this.err( 'Unexpected ' + this. peek. contents );
      
       e = n;
       n = ( this.next()); 

       n  . type = 'Property';
       n  . key = coreBrack (e);
       n  . start = e.start ;
       n  . loc = { start : e.loc.start   }  ; 
       n  . kind = 'init';
       n  . computed = e . type === '[';
       n  .method = false;
       n  .shorthand = false;

       var head = ( this. parseExprHeadOrYield ()||this.err('must be an actual expr') );
       this.canHaveNoAssig = true;
       n. value = core(this.parseNonSeqExpr(head, 0, 0) );
       return this.end (n)


    default : 

      if ( cmn ===  0x010   )   this.err( 'Unexpected ' + this. peek. contents );
      var _r;
      e = n; 
         
      if (n. type !=='Identifier' ) this.err('id expcted'); 
      if ( this. peek.contents === ('=' ) ) {
        if ( cmn&  8  ) this. err( 'no' );
        e =  {
           left : n,
           type : 'AssignmentPattern',
          start : n.start , 
            loc : { start : n.loc.start }
        };

        this.next ();
        e . right = core (  this. parseNonSeqExpr ( this. parseExprHeadOrYield(), 0,  0) ) ; 
        this.end( e  ) ;
        this. propThatMustBeInAnAssig = true;
        n =  {
          type : 'AssignmentProperty',
           key : n,
         start : n.start ,
           loc : { start : n.loc.start }
        };
      }

      else { n =  {type : 'Property', key : n, start : n. start ,  loc :{ start : n.loc.start } }; }

      n.kind = 'init'; 
      n.shorthand = true;
      n. method = n. computed = false;
      n. value = e ; 
 
      return this.end(n );
  }
};

lp.parseMemName = function() {
  if ( this.peek.contents === '[' ) {
      var e = this.start(this. peek   ) ;
      this.next(); 
      e. expr  = core( this. parseNonSeqExpr (this. parseExprHeadOrYield ()||this.err('must be an actual expr'), 0, 0 )   )  ;
      this.expect (']' ); 
      return this.end(e ); 
  }
  return this.memID ();
}

lp . memID = function() { 
    switch ( this.peek.type ) {
      case 'Identifier' : 
      case 'Literal' : return this.end   (  this.next ()   )    ;
    } 
}

lp.parsePattern = function() {
   switch ( this.peek.type ) {
     case 'Identifier' :
         if ( !iskw(this.peek) )  {
            var n =  this.next ();
            return this.end   (   n   )   ;
          }
          return ;
  
     case '[' : return this. parseArrayPattern  ();
     case '{' : return this. parseObjectPattern ();
   }
}

lp. parseArrayPattern = function() {

    var _e = [],  n = this.start ( this. peek   )  ;
    this .next (); 
    n.    type =  'ArrayPattern';
    n.   elements = _e;
    var e;

    L :
    while ( true ) {
       if ( e = this. parsePattern   () ) {
          if ( this.peek.contents === '=' ) {
             this.next (); 
             e = {
               type : 'AssignmentPattern',
               left : e,
              start : e.start ,
               loc :  { start : e.loc.start }
             };
             e  . right = core (this.parseNonSeqExpr (this .parseExprHeadOrYield (), 0, 0 ) );
             _e . push (this.end (e));
          }
          else 
             _e . push (e );
       }
       else if ( this. peek. contents === '...' ) { _e .push (this. parseRestElement () ); break;  }
       else
           _e . push( null );
          
       if ( this.peek.contents  ===    ',' ) { this.next ();  continue  ;    }
       break;
    }
    this.expect (']')   ;
   
    return this.end (n) ;
}

lp.parseObjectPattern  = function() {
    var prop = [], n = this.start ( this. peek   )  ;
    this.next ()  ;   

    n. type = 'ObjectPattern' ;
    n. properties =  prop;

    var e;
    var v, _n;

    while ( _n = this. parseMemName() ) {
        e = {
            type : 'AssignmentProperty',
             key : coreBrack (_n ),
           start : _n . start ,  
             loc :  { start : _n . loc. start  },
        computed : _n . type === '(', method : false 
        };
        e. kind = "init"; 

        if ( this.peek.contents === ':' ) { this.next(); v = this.parsePattern   ();}
        else { 
          if ( _n .type !=='Identifier' )
             this.err('id' );

          v = _n;
          e.shorthand = true;
        }
      
        if ( this.peek.contents === '=' ) {
             this.next();
             v = {
               type : 'AssignmentPattern', 
               left : v,
              start : v.start ,  
                loc : { start : v.loc.start      }, 
              right : core ( this. parseNonSeqExpr(this. parseExprHeadOrYield (), 0, 0) ) 
             };
        }
        e.value = v ;
        prop. push (this.end(e)); 
       
        if ( this.peek.contents === ',' ) { this.next (); continue; }
    }
    
    this.expect('}' );

    return this.end(n);
} 

lp . prepareArgs = function(immediateErr ) { this.vnames = { prev: this.vnames, immediateErr: immediateErr } ;  }
lp . parseAssig = function (n) {
    var r;

    this.next   () ;

    n = this.start ( {
      type : 'AssignmentPattern',
      left : (n ),
      loc : {},
      right : core( r = this. parseNonSeqExpr ( this. parseExprHeadOrYield () || this.err ( 'Unexpected ' + this. peek. contents ), 0, 0) )
   }, n );

return this.end(n, r ) ;
}

lp . parseArgsAndBody = function (argLen, n, cFlags_For ) {
  var e = n. params = [],  _n, r ;
  this. prepareArgs() ;

  this.expect('(');
  while ( argLen-- !==0 && (_n = this.parsePattern  ()) ) {
    if (this.peek.contents === '=' )  {
        _n = this.parseAssig (_n);
    }
    e.push(_n);
    if (this.peek.contents === ',') {  this.next(); continue;  }
    break;
  }

  if ( argLen && this.peek.contents === '...') { e. push (this. parseRestElement () ); }
  this.expect(')' );
  r  = this. scopeFlags ;
  if ( n. generator ) r |=  0x010  ;

  if ( this.peek.contents === '{' ) {  n. body = ( this . parseFuncBody() )   ;  }
  else  n. body = core( this.parseNonSeqExpr(
                 this. parseExprHeadOrYield () || this.err('Unexpected ' + this. peek. contents ), 0, cFlags_For
           )
  ) ;

  this.scopeFlags = r  ;
  return (this.end(n, _n) );
}

lp.parseRestElement = function() {
       var n = this.start ( { type : 'RestElement', loc : {} }, this.next () ), e =  n.argument=this.parsePattern   ()     ;   
       if ( e. type === 'Identifier' && this. vnames ) { 
             var r =  e. value   +  ( '%' )  ;
             if ( this.vnames[r]    !== 2  ) { this.err ( e. value + ' already in the arglist'   )           ;   }
             this.vnames[r] = 8 ;
       }
 
       return this.end(n, e ); 
}

lp.parseFuncBody = function() {

     var scopeFlags = this.scopeFlags;
     if ( scopeFlags & 0x020 ) {
         if ( scopeFlags &  2  ) this.scopeFlags =  2 ;
         else this.scopeFlags = ( 0x020 |  2  );
     }
     else
       this.scopeFlags =  2 ;

     if ( scopeFlags &  0x010  ) this.scopeFlags |= 0x010 ;
 
     var stmts = [],
         stmt,
         n = this.start ( this. peek   )  , 
         l = this.lbn,
         iteD = this. iteD;
     this.next ()   ;
     n.  type  = 'BlockStatement';
     n.  body  =  stmts;
     this.lbn = {};
     this. iteD = 0;

     if ( this.tightness ) this.tightness++;  
     else {
       stmt = this.parseStatement();
       if ( !stmt ) { this. scopeFlags = scopeFlags; this. iteD  = iteD ;  this.lbn = l; if ( a ) this. vnames = a. prev ; return this.end( n, this.expect ( '}' ) ); }

       if ( stmt. type === 'ExpressionStatement' && ( stmt. expression . type === 'Literal') )
         switch ( ( stmt. expression . contents ) ) {
              case ("'use strict'" ) :
              case '"use strict"':
                 var e;
                 if ( a )
                  for ( e in a )   {
                    switch ( e ) {   case 'prev' :  case 'immediateErr' : continue ; case 'eval%': case 'arguments%' : this.err ( 'Not valid in strict mode is ' + e.substring(0,e.length - 1   )   )  ;  }
            
                    switch ( a[e] )   { case    2 : case 8 : continue ; }
                    this.err ((  a[e]. value )   + ' already in the arglist           '   )   ;
                  }
 
                 this.tightness++;  
         } 
         stmts . push( stmt );
     }

     while (stmt = this.parseStatement ())  stmts .push ( stmt );
     this.lbn =l ;
     this. iteD   = iteD ;
     this.scopeFlags = scopeFlags;
     this. tightness && -- this. tightness;   
     this.expect ( '}' )  ;
     return this.end ( n ); 
}

var loc = function(n ) {
   if ( !n ) return;

   if ( !('start' in n) ) { return  console.log (  'start' ) ;  }
   if ( !('loc' in n   )) { return  console.log (  'loc'   ) ;  }   
   if ( !( 'start' in n.loc)  )   {   return console.log(   'start loc' ) ;     }
   if ( !( 'end' in n.loc )     )  {  return console.log(   'loc e'     ) ;     }
  
   var li = 1,
       col = 0,
       start = 0;
      
   var r, src = n.src;
   var _loc = n.loc.start;
    
   var startLoc = true;
   
   var c = 0; 
   while ( c < src.length ) {      
   
      if ( li === _loc.l && col === _loc.c ) { 
           if ( startLoc ) { start = c; startLoc = false; _loc = n.loc.end; } 
           else { break; }
      }    
   
      switch ( r = src.charCodeAt ( c ) ) {
           case  13 : if (  10 === src.charCodeAt ( c  +   1 ) ) c ++; 
           case  10 :
           case 0x2028:
           case ((0x202<<4) + ( ( 9 ) )) :
              li ++;
              col =   -1    ;
              break;
          
           default : if ( r   >= 0x0D800 && r <= 0x0DBFF ) col--;   
      }
                  
      c ++;
      col ++;
           
   }


   if ( !( start === n.start && c  === n.end   )  ) {  throw ( new Error ( "LOC [" + n.start + ", " + n.end + "]; [" + start + ", " + c + "]"    )  ) ;  }
  
return src.substring(start, r )
}

var compMain = function(main, n, from ) { 
   from  = from || ""

   var e,
       Obj = typeof {},
       Arr = typeof [];

   for ( e in main ) {

     if (  e === 'operator' || !( e in n )  )  continue;

     switch ( typeof ( main[e] )  ) {
     
        case Obj :   compMain(main[e], n[e], from + "/" + e ); break;
        case Arr :  
           var r = 0;
           if ( main[e].length !==n[e].length) {  throw ( new Error( "LEN " + main[e].length + " not " + n[e].length + " " ) ); }
           while ( r < main[e].length ) compMain ( main[e][r], n[e][r], (from + "/" + e + "[" + r + "]"   )  ), ++ r;
     

        default :
           if ( main[e].toString () !==( n[e]. toString () ) ) { {  { console. log ( n.start, main.start   )  } }   throw ( new Error ( "main " + main[e] + "; n " + n[e] ) ) ;   }
     }
   }
};

 exports.lube = {};
 exports.lube.parse = function(src) { return new Parser(src).parseProgram   () ; } 
 exports.lube.Parser=                            Parser;




}) ( (typeof exports==="object") ? exports :  (typeof window==="undefined")? this : window )
