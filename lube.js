// License: (MIT) or  (GPLv2 and above)
// copyright lmao 2015 @icefapper. All rights reserved :) i mean it!
// the violator ( henceforward referred to as "you")  or the violator's legal representative's (henceforwards referred to as "your representative")
// ass might fall prone to an arbitrary amount of violation in case this copyright is violated
// there is no warranty that this violation occurs at least immediately, so you need not panic if you find yourself having violated it
// this copyright notice might 
// change at any moment
// read it well then 

( function (exports) {   
'use strict'

var Prser = function (src) {

  this.peek = 0;
  this.n = 0;
  this.hasL = false;
  this.lbn = {};
  this.tightness = 0;
  this.src = src;
  this.col = 0;
  this.c = 0;
  this.li = 1;
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


  
var _c = function (c) { return c.charCodeAt(0); };
var ALL = 0;

try { new RegExp ( "lube", "g" ); ALL |= /* g_o */ 2 ; } catch ( _r ) {}
try { new RegExp ( "lube", "u" ); ALL |= /* u_o */ 4 ; } catch ( _r ) {} 
try { new RegExp ( "lube", "y" ); ALL |= /* y_o */ 8 ; } catch ( _r ) {} 
try { new RegExp ( "lube", "m" ); ALL |= /* m_o */ 0x020 ; } catch ( _r ) {} 
try { new RegExp ( "lube", "i" ); ALL |= /* i_o */ 0x080 ; } catch ( _r ) {}


var nameInit = 2,
    nameGet = nameInit << 2,
    nameSet = nameGet << 1,
    nameVar = ( 1 ),
    nameMethd = nameInit << ( ( 4) ); 

var Num, num = Num = function (c) { return (c >= /* _0 */ 48 && c <= /* _9 */ 57)};
var num_hex = function (e) { return num(e) || (e >= /* _a */ 97 && e <= /* _f */ 102) || ((e) >= /* _A */ 65  && ((e) <= /* _F */ 70));};

var isize = function () {
  var i = (((0)));
  while (0 < (1 << ((i++)))) if (i >= 512) return 8;
  return i;
}

var fromRunLenCodes = function (runLenArray, bitm ) {
  bitm = bitm || [];
  var bit = runLenArray[0];

  var runLenIdx = 1, bitIdx = 0;
  var runLen = 0;

  while (runLenIdx < runLenArray.length) {
    runLen = runLenArray[runLenIdx];
 
   while (runLen--) {

      while ((/* INTBITLEN */ 0x010  * (bitm.length)) < bitIdx) bitm.push(0); 
     
      if (bit) bitm[bitIdx >> /* D_INTBITLEN */ 4 ] |= (1 << (/* M_INTBITLEN */ 15  & bitIdx));

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
  return (c <= /* _z */ 0x07a && c >= /* _a */ 97) ||
          c === /* _$ */ 36  ||
         (c <= /* _Z */ 90  && c >= (/* _A */ 65 )) ||
          c=== ( ( /* __ */ 95  ) )||
         (IDS_[c >> /* D_INTBITLEN */ 4 ] & (1 << (c & /* M_INTBITLEN */ 15 )));
};

var IDBody = function (c) {
  return (c <= /* _z */ 0x07a && c >= /* _a */ 97) ||
          c === /* _$ */ 36  ||
         (c <= /* _Z */ 90  && c >= (/* _A */ 65 )) ||
         (c <= /* _9 */ 57 && c >= /* _0 */ 48) || (IDC_[c >> /* D_INTBITLEN */ 4 ] & (1 << (c & /* M_INTBITLEN */ 15 )));
};


var _h = function(n) { return n.toString(0x010 ); }

var lp = Prser.prototype;

var TOK_C = { type : ',', contents : ',' };

lp.nextraw = function () {

 var L = this.skipS();
  if ( L ) {
  
  return L;
  }

  var peek, n = 0, _c = this.c;
  var r; 

  peek = this.src.charCodeAt(_c);
  if (this.c>=this.src.length) return { type: 'eof', contents: ('<<EOF>>')};
  var col = (this.col), li = this.li;

  if ( IDHead(peek) ) n = this.readAnIdentifierToken();
  else if (Num(peek)) n = this.readNumberLiteral(peek);
  else {
    var c = this.c, l = this.src, e = l.length; 
 
    switch (peek) {
      case /* _dq */ 34: case /* _sq */ 39: n = this.readStrLiteral(peek); break;
      case /* _min */ 45:
      case /* _add */ 43:
        c++;
        r = l.charCodeAt ( c );
        if ( r === /* _eq */ 61 ) { c ++, this.c=c; n = { contents: null, type : '=' }; break; }
        if ( r === peek ){ c ++, n = { contents: null, type : null}; this.c=c; break; }
        this.c=c;
        n = { contents: null, type : null, prec : 0xA7 }; 
        break;

      case /* _dot */ 46: n = this.readDot (); break;
      case /* _eq */ 61: 
         c++;

         if ( l.charCodeAt(c ) === /* _eq */ 61 ) {
           c++;
           if ( l.charCodeAt(c ) === /* _eq */ 61 ) c++;
           this.c=c; 
           n = { contents: null, type : 'op', prec : 0x5D };
           break;
         }

         else if ( l.charCodeAt ( c ) === /* _grea */ 62 ) c++; 
        
         this.c=c;
         n = { contents: null, type: '=' }; break;

      case /* _less */ 60:
         c++;

         if ( l.charCodeAt(c ) === /* _less */ 60 ) {
             c++;
             if ( l.charCodeAt(c ) === /* _eq */ 61 ) { c++; n = { contents: null, type : '=' }; } 
             else n = { contents: null, type: 'op', prec: 0xA5 };

             this.c=c; 
             break
          }

          if ( l.charCodeAt ( c ) === /* _eq */ 61 ) c++;
          
          this.c=c;
          n = { contents: null, type: 'op', prec: 0x9B }; break;

      case /* _grea */ 62:
         c++;

         if ( l.charCodeAt(c ) === peek ) {
           c++;
           if ( l.charCodeAt ( c ) === peek ) c++;
           if ( l.charCodeAt(c ) === /* _eq */ 61 ) { c++; n = { contents: null, type : '=' }; }
           else n = { contents: null, type: 'op', prec: 0xA5 };
           this.c=c; break;;
         }

         if ( l.charCodeAt ( c ) === /* _eq */ 61 ) c++;
        
         this.c=c;
         n = { contents: null, type: 'op', prec: 0x9B }; break;

      case /* _mul */ 42: if ( l.charCodeAt ( c+1 ) === peek ) c++; 
      case /* _mod */ 37: 
         c++;
         if ( l.charCodeAt ( c ) === /* _eq */ 61 ) { c ++;n = { contents: null, type : '=' }; }
         else n = { prec : 0xAD, contents: null, type : 'op' };
        
         this.c=c; break;

      case /* _exc */ 33:
         c++;
         if ( l.charCodeAt ( c ) === /* _eq */ 61 ) {
             c ++;
             if ( l.charCodeAt ( c ) === /* _eq */ 61 ) c ++;
             n = { prec : 0x5D, contents: null, type : ('op' ) }; 
             this.c=c; break; 
         }

         this.c=c;
         n = { contents: null, type: null }; break;
                                    
      case /* _comp */ 126:
            c++; this.c=c; n = { contents: null, type : null }; break; 

      case /* _or */ 124:
         c++; 
         switch ( l.charCodeAt ( c ) ) {
            case /* _eq */ 61 : c ++; this.c=c; n = { contents: null, type : '=' }; break;
            case /* _or */ 124 : c ++; this.c=c; n = { contents: null, type : 'op', prec : ( 0x09 ) }; break; 
            default : this.c=c; n = { contents: null, type : 'op', prec : 0x0D }; break;
         }

         break;

      case /* _and */ 38:
          c++;
          switch ( l.charCodeAt ( c ) ) {
            case /* _eq */ 61 : c ++; this.c=c; n = { contents: null, type : '=' }; break;
            case /* _and */ 38 : c ++; this.c=c; n = { contents: null, type : 'op', prec : ( 0x0B ) }; break;
            default : this.c=c; n = { contents: null, type : 'op', prec : ( 0x01D ) }; break;
         }

         break;

      case /* _xor */ 94:
        c++;
        if ( l.charCodeAt(c ) === /* _eq */ 61 ) {this.c = ++ c; n = { contents: null, type : ('=' ) }; break; }
          this.c=c; n = { prec : (0x01B ), loc : {}, contents: null, type : 'op' }; 

         break; 

// case /* _com */ 44: this.c++; return TOK_C;

      default:
        var mustBeAnID = 0;

        this.c=c; 

        if (/* _bs */ 92 === peek) {
          mustBeAnID = 1;
          peek = l.charCodeAt(++ this. c);
          if (peek !==/* _u */ 117) this.err('u');
          peek = this.peekUSeq();
        }

        if (peek >= 0x0D800 && peek <= 0x0DBFF ) {
            if ( !mustBeAnID ) mustBeAnID = 2;

             this . c ++; e = peek; r = this.peekTheSecondByte(); 
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

  n.start = _c; n.end = this.c;
  this.col += (n.end - n.start);
  n.loc = { start: {   line : li, column: col }, end: { line: this.li, column: this.col } };
  if ( ! n.contents ) n.contents = this.src.substring(n.start, n.end);
  n. src = this.src;
  if (!n.type) n.type = n.contents

return n;
};

lp.skipS = function() {

     var noNewLine = true; 
     var c = this.c, l = this.src, e = l.length, start = c;

     while ( c < e ) {
       switch ( l.charCodeAt ( c ) ) {
         case /* _ws */ 32 :
             while ( l.charCodeAt ( ++ c ) === /* _ws */ 32 );
             continue;

         case /* _cret */ 13 : if ( /* _lf */ 10 === l.charCodeAt ( c + 1 ) ) c ++; 
         case /* _lf */ 10 :
            if ( noNewLine ) noNewLine = false; 
            start = ++ c;
            this.li ++; 
            this.col = ( 0)
            
            continue;
            
         case /* _tab */ 9: c++; continue;
         case /* _div */ 47:
             switch ( l.charCodeAt ( c + ( 1) ) ) {
                 case /* _div */ 47: c ++; this.c=c; this.readCmntl (); if ( noNewLine ) noNewLine = false; start = c = this.c; continue;
                 case /* _eq */ 61: c ++; this. hasL = ! noNewLine; this.col += (c-start );this.c=c; return { contents: null, type : '=', loc : {} }; 

                 case /* _mul */ 42: c += (2 ); this.col += (c-start );this.c = c; noNewLine = this. readCmntm () && noNewLine; start = c = this.c; continue;
                 default:
                     c++; 
                     this. hasL = ! noNewLine;
                     this.col += (c-start );this.c=c; 
                     return { prec : 0xAD, type : '/', contents : '/', loc : {} }; 
             }

         case 0x0020:case 0x00A0:case 0x1680:case 0x2000:
         case 0x2001:case 0x2002:case 0x2003:case 0x2004:case 0x2005:case 0x2006:case 0x2007:case 0x2008:case 0x2009:case 0x200A:
         case 0x202F:case 0x205F:case 0x3000:
                                                    c ++; continue;

         case 0x2028:
         case ((0x202<<4) + ( ( 9 ) )) : 
            if ( noNewLine ) noNewLine = false;
            start = ++c;
            this.col = 0;
            this.li ++; continue; 

         default :
           if ( this. isScript   &&  l. charCodeAt ( c ) === /* _less */ 60 &&
                                     l. charCodeAt ( c + 1 )   === /* _exc */ 33 &&
                                     l. charCodeAt ( c + 2 )   === /* _min */ 45 &&
                                     l. charCodeAt ( c + 2 + 1)=== /* _min */ 45 )  {
              this.c = c  +4  ;
              this. readCmntl() ;
              if ( noNewLine ) noNewLine = false ;
              start = c = this.c ; 






              continue ;


           }

           this.col += (c-start );this.c=c; this.hasL = !noNewLine; return;

       }
     } 

 this.col += (c-start );this.c = c;

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

  if (/* _bs */ 92 === e) {
    if (/* _u */ 117 !==this.src.charCodeAt(++this.c)) this.err('the \\ must have "u" after it;instead, it has ' + this.src[this.c] );
    e = (this.peekUSeq());
  } 

  else this.col--;
 
  if (e < 0x0DC00 || e > 0x0DFFF )
      this.err('Byte (' + _h(e)+ ') must be in range 0x0DC00 to 0x0DFFF, but it is not ');

  return e;
};

var toNum = function (n) {
  return (n >= /* _0 */ 48 && n <= /* _9 */ 57) ? n - /* _0 */ 48 :
         (n <= /* _f */ 102 && n >= /* _a */ 97) ? 10 + n - /* _a */ 97 :
         (n >= /* _A */ 65  && n <= /* _F */ 70) ? 10 + n - /* _A */ 65  : -1;
};

lp.peekUSeq = function () {
  var c = ++this.c, l = this.src, e = l.length;
  var byteVal = 0;
  var n = l.charCodeAt(c);
  
  if (/* _cubO */ 123 === n) {
    n = l.charCodeAt(c + 1 );
    do {
      c++; 
      n = toNum(n); if (n === - 1) this.err(n[c] + ' is not a valid hexadecimal');
      byteVal <<= 4; byteVal += n;
      if (byteVal > 0x010FFFF ) this.err( 'Byte (' + _h (byteVal) + ') must not be bigger than 0x010FFFF ');
      n = l.charCodeAt(c);
    } while (c < e && n !==/* _cubC */ 125);

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

    while (true ) {
      if ( IDBody( peek = l.charCodeAt(++c) ) ) continue;
     
      if (peek === /* _bs */ 92) {
         if ( !v ) v = l. charAt ( n -1 );
         if ( n < c ) v += l.substring(n, c);

         if (/* _u */ 117 !==l.charCodeAt(this.c = ++c) ) this.err('the \\ must have "u" after it;instead, it has ' + this.src[this.c]);
        
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
          if ( !v ) { v = l. charAt ( n -1 ); }
          if ( n < c ) v += l.substring(n, c); 
         
          r = this.peekTheSecondByte();
          if (!IDBody(((peek-0x0D800 ) << 10) + (r-0x0DC00) + 0x010000))
            this.err( 'a \\u sequence in identifier body position must belong to IDContinue group, but it (' + _h (peek) + ') does not' );

          v += String.fromCharCode(peek, r ); 
          n = c+ ( 1);
         
          c = this.c;

          continue;
       }

       break;

    }

    if ( !v ) { v = l.substring(this.c, c); this.c = c; return { pDepth : 0, contents: v, type: 'Identifier', value : v, name : v }; }
    
    this.c = c;
    if ( n < c ) v += l . substring(n, c);

return { pDepth : 0, contents: v, type: 'Identifier', value : v, name : v };
};

lp.readNumberLiteral = function (peek) {
  var c = this.c, l = this.src, e = l.length;
  var r = 10, v = 0, n = { contents: null, type : 'Literal' };

  if (peek === /* _0 */ 48) {
    r = l.charCodeAt(++c);
    switch (r) {
      case /* _X */ 88:
      case /* _x */ 120:
         if ( !num_hex(l.charCodeAt(++c) ) ) this.err (l[c] + ' is not a valid hexadecimal' );

         while ( c < e && num_hex(r= l .charCodeAt ( (c ) ) ) ) c ++;
    
         n. value = parseInt ( n.contents = l.substring(this.c, c) ); 
         this.c = c;
        
         return n;

      case /* _B */ 66:
      case /* _b */ 98:
        r = l .charCodeAt ( ++ c);
        if ( r !==/* _0 */ 48 && r !==/* _1 */ 49 ) this.err( 'got ' + l[c] + ' but expected either 0 or 1' );
        v = r - /* _0 */ 48; 
        while ( c < e && ( r = l . charCodeAt(c ), r === /* _0 */ 48 || r === /* _1 */ 49 ) ) { c ++; v<<= 1; v |= (r- /* _0 */ 48 ); }
        this.c=c; n. value = v;

        return n;

      case /* _O */ 79:
      case /* _o */ 111:
        r = l . charCodeAt ( ++ c);
        ( r < /* _0 */ 48 || r >= /* _8 */ 38  ) && ( this.err( 'must e ' ) );

        { v = r - /* _0 */ 48; }

        while ( c < e && ( r = l.charCodeAt ( ++ c), r >= /* _0 */ 48 && r < /* _8 */ 38  ) ) c ++, v<<= ( 2 + 1 ), v |= (r- /* _0 */ 48 );
        this.c=c; n. value = v;
        return n;

      default:

       if ( r >= /* _0 */ 48 && r <= /* _9 */ 57 ) {
          v  = 0 ;

          if ( r >= /* _8 */ 38  ) v =           10  ;
          while ( ++c < e && ( r = l. charCodeAt (c ), r >= /* _0 */ 48 && r<= /* _9 */ 57 ) ) if ( !v & r >= /* _8 */ 38  ) v = 10  ;
          if ( !v ) v = 8 ;

          n. value = parseInt ( n. contents = l.substring( this.c, ( (c) ) ) , v );
          this.c=c;


         return n;
       }

       else {
         v = this.c;
         this.c = c;
         if ( /* _dot */ 46 === r ) {
            ++ this.c;
            this.frac ( n);
            n. value = parseFloat ( n.contents = l.substring( v, this.c ) );
         }

         else 
            n. value = 0;

       return n;
       }

    }

  } 

  else {
    c = this.c; v = this.c;

    while (c ++ < e && num(l.charCodeAt(c)));

    this.c = c;
    if ( this.src.charCodeAt (this.c) === /* _dot */ 46 ) {
       this.c++;
       this.frac(n); 
       n. value = ( parseFloat ( n. contents = l.substring(v, this.c ) ) );

     }

   else n. value = ( parseInt ( n. contents = l. substring(v, this.c ) ) );

  }

  if (c < e && IDHead(l.charCodeAt(c))) this.err('Num can not be follwed by ' + this.src[this.c]);
  return (n );

};

lp . frac = function(n) {

  var c = this.c, l = this.src, e = l.length;
  while( c < e && Num(l.charCodeAt (c)))c ++;

  if ( n || c > this.c ) {
    switch(l.charCodeAt(c)){
      case /* _E */ 69:
      case /* _e */ 0x65: 
        c++;
        switch(l.charCodeAt(c)){case /* _min */ 45: case /* _add */ 43: c++; }
        if ( c < e && Num(l.charCodeAt( c) )) { do { c++; } while (  c < e && Num(l.charCodeAt( c) )       )       ; } 
        else this.err ( 'A - or + or num expeted; got ' + l[c]   )  ;

     }

    this.c=c; 
 }

 if ( !n ) return { contents: null, type : 'Literal' }
}

lp.readStrLiteral = function (start) {
  var c = this.c += 1, l = this.src, e = l.length, i = 0,  _e ;

  var v = "", v_start = c;
  while (c < e && (i = l.charCodeAt(c)) !== start) {
    switch ( i ) {
     
     case /* _bs */ 92 : 
        v += l.substring(v_start, c ); 
        switch ( l.charCodeAt ( ++ c ) ) {
          case /* _bs */ 92 : v += '\\'; break;
          case /* _dq */ 34 : v +='\"'; break;
          case /* _sq */ 39 : v += '\''; break;
          case /* _b */ 98 : v += '\b'; break;
          case /* _v */ 0x076  : v += '\v'; break;
          case /* _f */ 102 : v += '\f'; break;
          case /* _t */ 116  : v += '\t'; break;
          case /* _r */ 0x072  : v += '\r'; break; 
          case /* _n */ 0x6e  : v += '\n'; break;

          case /* _u */ 117 :
             this.c=c; 

             _e = this. peekUSeq ();
            
             if ( _e >= 0x0D800 && _e <= 0x0DBFF ) {
               this.c ++;
               v += String.fromCharCode ( _e, ( ( this ) . peekTheSecondByte () ) );
              }

             else {
               v += String.fromCharCode( (_e) );

                  }
                     
             c = this.c; 
             break;
          case /* _x */ 120 :
            _e = toNum ( l. charCodeAt ( ++c)  )  ; if ( _e ===  -1  ) this.err ( l[c] + ' is not a valid hex   '  )  ;
            i  = toNum ( l. charCodeAt ( ++c ) ) ; if ( i  ===  -1  ) this.err ( l[c+1] + ' is not a valid hex '  )  ; _e |= ( i<<4 )  ;
            
            v  += String.fromCharCode( _e )  ; break ;
     
             
          case /* _cret */ 13: if ( l.charCodeAt(c + 1 ) === /* _lf */ 10 ) c++;
          case /* _lf */ 10 :
          case 0x2028 :
          case ((0x202<<4) + 9 ) : this.li ++; break;

          default : v += l.charAt(c); break;
        }

        v_start = ++c;

        continue;

     case /* _cret */ 13: if ( l.charCodeAt(c + 1 ) === /* _lf */ 10 ) c++;
     case /* _lf */ 10 :
     case 0x2028 :
     case ((0x202<<4) + 9 ) : this.err( 'a newline can not appear in a str literal' );
    }
  
     c++;
  }

  if ( v_start !==c ) { v += l.substring(v_start, c ); }

  this.c = c;

  if (!(c < e && (l.charCodeAt(c)) === start)) {
    this.err('s lit open');
  }
  ++this.c;
  return {
    contents: null, type: 'Literal', value : v
  };

};

lp . readDot = function() {
   ++this.c;
   if( this.src.charCodeAt(this.c)===/* _dot */ 46) {
     if (this.src.charCodeAt(++ this.c) === /* _dot */ 46) ++this.c; 
     else this.err('Unexpectd ' + this.src[this.c]);
   }

   else if ( Num(this.src.charCodeAt(this.c))) return this.frac();

return { contents: null, type : null }; 
};

lp.readCmntm = function () {
   var c = this.c, l = this.src, e = l.length;
   var r, start = c, n = true;

   while ( c < e ) 
        switch (r = l.charCodeAt(c++ ) ) {

          case /* _mul */ 42 :
             if ( l.charCodeAt ( c ) === /* _div */ 47 ) {
                c++;
                this.col += (c-(start ) );
                this.c=c;
 
                if ( !n && this.isScript && l.charCodeAt(c) === /* _min */ 45 &&
                                            l.charCodeAt(c+ 1 ) === /* _min */ 45 &&
                                            l.charCodeAt ( ( c+  (2)  )   )  === /* _grea */ 62
                   ) { this.c  += 2   +  1 ; this. readCmntl   () ; }  
 
                return n;
             }
             continue;

          case /* _cret */ 13 : if (  /* _lf */ 10   ===  l.charCodeAt(c) ) c++; 
          case /* _lf */ 10 :
          case 0x2028:
          case ((0x202<<4) + ( ( 9 ) )) : 
            start = c ;
            if ( n ) n = false; 
            this.col = 0;
            this.li ++; continue; 

          default : if ( r >= 0x0D800 && r <= 0x0DBFF ) this.col--;
        }

   this.err( ' */ ' );
};

lp.readCmntl = function() {
    var c = this.c, l = this.src, e = l.length, r;

    L :
    while ( c < e ) 
       switch (r = l.charCodeAt(c++ ) ) {

          case /* _cret */ 13 : if ( /* _lf */ 10 === l . charCodeAt ( c) ) c++; 
          case /* _lf */ 10 :
          case 0x2028:
          case ((0x202<<4) + ( ( 9 ) )) :
            this.col = 0;
            this.li ++; 
            break L;

          default : if ( r >= 0x0D800 && r <= 0x0DBFF ) this.col--;

       }

    this.c=c;

return;
};

lp.readMisc = function () { this.c++; return { contents: null, type: null, loc : null }; };

var iskw = createLookup_sw(kwords);

lp.next = function () {

  var e = this.peek, n = this.nextraw();
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

lp . end = function (n, e) { n.end = e.end; n.loc.end = e.loc.end; return n; };

lp.semi = function () {
  switch (this.peek.type) {
    case ';':
           return this.next();

    case 'eof':
    case '}':
      return;
  }

   (this.hasL) || this.err('EOS expected; found ' + this.peek.contents );
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
    case ';': this.peek.type = 'EmptyStatement'; return this.next();
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
     head = this.start( this.next(), head ); 
     head. type= 'LabeledStatement';
     head. label = l  ;

   l  = l.contents +  '%';
   if ( this.lbn.hasOwnProperty ( l ) ) this.err( 'label already exists ' + ( l.substr(0, l.length ) ) );
   this.lbn[l] = this. iteD; 
    
    head.body = this.parseStatement(); delete this.lbn[l];

    return this.end(head, head.body)
  }

  l =  head  ;
  head = this.start( { 
       type : 'ExpressionStatement', 
       expression : core( head ), 
       loc : {}
  }, head );

return this.end(head, this.semi() || l );
};

lp . start = function (n, e) { n.src = e.src; n.start = e.start; n.loc.start = e.loc.start; return n; };

lp.parseIfStatement = function () {
  var n = this.next(); 
  n. type= 'IfStatement';

  this.expect('('); n. test = core ( this.parseExpr() ); this.expect(')' );

  var scopeFlags = this.scopeFlags; this.scopeFlags |= /* breakFlag */ 4 ;
  n.consequent = this. parseStatement (true); this.scopeFlags = scopeFlags; 
 
  if ( this. peek.contents === 'else') { this.next(); n. alternate = this.parseStatement(true); }
  else { n.alternate = null; }

return this.end(n, n.alternate ? n.alternate : n.consequent);
};

lp.parseWhileStatement = function () {
  
  var n = this.next();
  n. type = 'WhileStatement';

  this.expect('('); n. test = core( this.parseExpr() ); this.expect(')');

  var scopeFlags = this.scopeFlags; this.scopeFlags |= (/* continueFlag */ 8 |/* breakFlag */ 4  );
 
  this. iteD++;
  n.body = this.parseStatement(true);
  this.scopeFlags = scopeFlags;
  
  this.iteD--;

return this.end(n, n.body);
};

lp.parseBlckStatement = function () {
  var n = this.next();
   
  n. type = 'BlockStatement',
  n. body = this.blck();

return this.end(n, this.expect(('}')));
};

lp.parseDoWhileStatement = function () {
  var n = this.start({ 
        type: 'DoWhileStatement', 
        loc : {}
  }, this.next());

  var scopeFlags = this. scopeFlags; this.scopeFlags |= ( /* breakFlag */ 4 |/* continueFlag */ 8  );

  this. iteD++; 
  n.body = this.parseStatement ();
  this.scopeFlags = ( scopeFlags );

  this. iteD --; 

  this.expect('while');
  this.expect('('); n. test =core( this.parseExpr() ); var e = this.expect(')');

  if (this.peek.contents === ';' ) e = this.next();

return this.end(n, e);
};

lp.parseContinueStatement = function () {

  if ( !(this.scopeFlags & /* continueFlag */ 8 ) ) this.err ( 'continue is not valid ' );
  var e = this. id (true);
  var n = this.start({
        type: 'ContinueStatement',
        loc:{}
  }, e);

  if ( n.label = this.hasL ? null : this. peek. type === 'Identifier' ? this.next() : null ) {
     var _l = ( n.label.contents + '%' );

     if ( ! this.lbn.hasOwnProperty ( _l ) ) this.err( 'Label is not def ' + ( n.label ) );
     else if ( this.lbn [_l] === this.iteD) this.err('Not iter for ' + ( n.label ) );
    }
 
return this.end(n, this.semi() || n.label || e);
};

lp.parseBreakStatement = function () {

  if ( ( ! ( this.scopeFlags & /* breakFlag */ 4  ) ) ) this.err ( 'break is not valid ' );
  
  var e = this. id (true);
  var n = this.start({
        type: 'BreakStatement',
        loc: {}
  }, e);

 if ( n.label = this.hasL ? null : this. peek. type === 'Identifier' ? this.next() : null )
    if ( !this .lbn.hasOwnProperty ( ( ( n.label) .contents ) + '%' ) ) this.err( 'Label is not def ' + n.label . contents ); 
 
 return this.end(n, (this .semi() ) || n . label || e);
};

lp.parseSwitchStatement = function () {
 
  var n = this.next(); 
  n. type= 'SwitchStatement';

  this.expect('('); n. discriminant = ( core ( this.parseExpr() ) ); this.expect ( ')' );
  this.expect('{');

  var c = [], hasD = false;
  var scopeFlags = this.scopeFlags, e;

  this.scopeFlags |= ( /* breakFlag */ 4  );

  while ( e = this.parseSwitchCase()) {
    if (!e.test) {
      if ( hasD ) this.err('switch statement has already got a \'default\'');
      hasD = true;
    }

    c.push(e);
  }

  n. cases = c;

  this.scopeFlags = scopeFlags;

return this.end(n, this.expect('}'));
};

lp.parseSwitchCase = function () {
  var n;

  var e = this.peek.contents;
  if (e === 'case') { 
    n = this.next();

    n. type= 'SwitchCase';
 
    this.foundStmt = false;
    n. test = core ( this.parseExpr() );
  }
 
  else {
    if (e === 'default') {
      n = this.next();
     
      n. type= 'SwitchCase';

      n. test = null;
      this.foundStmt = false;
     } 
    
     else
       return;
  }

  e = this.expect(':');
  var stmts = n.consequent = this.blck();

return this.end(n, (stmts && stmts.length && stmts[stmts.length-1]) || e);
};

lp.parseReturnStatement = function () {

  if ( ( ! ( this.scopeFlags & /* funcFlag */ 2  ) ) ) { this.err ( 'not in function: return ' ); }

  var e = this.next();
  var n = this.start({
        type: 'ReturnStatement',
        loc: {}
  }, e);

  if (this.hasL) n. argument = null;
  else {
    var head = this.parseExprHeadOrYield ();
    n .argument = head && core ( e = this.parseExpr(head) );
  }

return this.end(n, this.semi() || e );
};

lp.parseThrowStatement = function () {
  var e = this.next();
  var n = this.start({
        type:'ThrowStatement',
        loc: {}
  }, e);

  if ( this.hasL ) n. argument = null;
  else {
    var head = this. parseExprHeadOrYield ();
    n. argument = head ? core ( e = this. parseExpr(head) ) : null;
  }

return this.end(n, this.semi() || e );
};

lp.parseTryStatement = function () {
 
  var n = this.start({
        type: 'TryStatement',
        loc: {}
  }, this.next());

  n. block = this.parseBlckStatement ();

  if (this.peek.contents === 'catch') n.handler = this.parseCatchClause ();
  else { n . handler = null; }

  if (this.peek.contents === 'finally') { this.next (), n.finalizer = this.parseBlckStatement(); }
  else { ( n . finalizer ) = null; }

return this.end(n, n.finalizer || n. handler || n. block );
};

lp. parseCatchClause = function () {
 
  var n = this.start ( {
        type: 'CatchClause',
        loc: {}
  }, this.next() );
 
  this.expect('('); n. param = this. parsePattern  ();this.expect(')');

return (this.end(n, n. body = this. parseBlckStatement ()));
};

lp . parseWithStatement = function() {

   var n = this.start ( {
         type : 'WithStatement',
         loc : {}
   }, this.next () );

   this.expect('(' ); n .object = core ( this. parseExpr () ); this.expect(')' );

return ( this.end( n, n . body = this.parseStatement (true) ) );
};

lp.parseExpr = function ( head, cf ) {

  var n;

  head = this.parseNonSeqExpr(
    head || this.parseExprHeadOrYield (cf) || this.err('n'),
    0,
    cf
  );

  if ( this.peek.contents === ',' ) {
    
    head = this.start ({
         type : 'SequenceExpression',
         expressions : [core(head ) ],
         loc: {}
    }, head );

    do {
      this.next();
      n = this.parseNonSeqExpr( this. parseExprHeadOrYield(), 0, cf );
      head.expressions.push( core(n) ); 
    } while ( this.peek.contents === ',' );

   return this.end(head, n ); 
   }

return head;
};

lp.parseNonSeqExpr = function (head, breakIfLessThanThis, cFlags_For ) {

  if (!head) this.err( 'Unexpected ' + this . peek . type );

  var n;
  if ( this.funcBecause ) {
     if ( this. peek. contents === '=>' ) {
       if ( this. propThatMustBeInAnAssig ) {
          var conv = this.convList(core(head));
          if ( conv ) this.err( ' param no ' );
          this. propThatMustBeInAnAssig = null;
       }

       this.next ();

       this.funcBecause = null; n = core(head );

       n = this.start ( { 
         type: 'ArrowFunctionExpression',
         expression: this. peek. contents !=='{',
         loc: {},
         params : n .type === 'SequenceExpression' ? n .expressions : [n ]
       }, head );

       if ( ! n.expression ) { return this.end(n, n.body = this.parseFuncBody () ); }

        ( n. body ) = (head = this. parseNonSeqExpr (
            this.parseExprHeadOrYield () || this.err ( 'Unexpected ' + this. peek. contents ),
            0,
            (cFlags_For  )    
       )
       ); 

     return (this.end(n, head ) );
     }

     else this.err( this. propThatMustBeInAnAssig ? '(pat) must have => ': ( '=>' ) ); 
  } 

  if ( this. propThatMustBeInAnAssig ) {
      if ( this. peek. contents !=='=' ) {
          if ( this.canHaveNoAssig ) { this. canHaveNoAssig = false; return head; }
          else this. err( 'assig expcted ', head );
      }

      else
          this.propThatMustBeInAnAssig = null;
   }

  if ( this. canHaveNoAssig ) this.canHaveNoAssig = false;

  var o, prec, precOrAssocDistance;
  var hasPrefixOrPostfix = false;

  switch (head.contents) {
    case ('++') :
    case '--':
      
      head. type = 'UpdateExpression', 
      head. operator= head.contents 
      this. simpAssig( head. argument = core( o = this. parseExprHead (/* cfExpectHeadBePrim */ 0x020  ) ) ) || 
                       this.err ( head. argument . type + ' is not an assig ' ),

      this.end(head, o);
      hasPrefixOrPostfix = true;

      break;

    case 'yield' :

      if ( ! ( this.scopeFlags & /* yieldFlag */ 0x010  ) ) this.err ( 'yield must not be there ' );

      var e = head; 

      head = this.start ( {
           type: 'YieldExpression',
           loc : {} 
      }, head );
 
      if ( this.hasL ) head. argument = null, head. delegate = false;
      else {
            if ( this.peek.contents === '*' ) {
               this.next();
               head. delegate = true;
               o = this.parseExprHeadOrYield ();
               head. argument = this.parseNonSeqExpr(o, cFlags_For );
            }
            
            else { 
               o = this.parseExprHeadOrYield ();
               head. delegate = false; 
               head. argument = o ? this.parseNonSeqExpr(o, cFlags_For ) : null;
            }
      }
         
      return (this.end(head, ( head ) . argument||e));
  }

  EXPR:
  while (true) {
    o = this.peek
    switch (o. type ) {
      case '++':
      case '--':
        if (hasPrefixOrPostfix) this.err(' both ')
        if (this.hasL) return head;
       
        n = ( core(head ) );
        this.simpAssig ( n ) || this.err( ( n.   type ) + ' is not an assig   '  );
      
  
        head = this.start ( this.next(), head );

        head. type = 'UpdateExpression',
        head. argument = n,
        
        head. operator = o,
        head. prefix = false
       ; 

        this.end(head, o);
        hasPrefixOrPostfix = true;
        
        continue;

      case '/' :
      case '+' :
      case '-' :
      case 'op' :
         prec = o . prec;
         break;

      case '?':
         if ( breakIfLessThanThis) return head;
         
         n = core(head );
         head = this.start ( this.next (), head ); 

         head. type = 'ConditionalExpression',
         head. test = n,
         
         head. consequent = core(this.parseExpr(null,0))
        ;
 
         this.expect(':');
         o = this.parseNonSeqExpr( this.parseExprHeadOrYield(), 0, cFlags_For );
         head. alternate = core(o);

         return this.end(head, o );
       
       case '=' : 

          if( breakIfLessThanThis !==0 ) this.err( head.type + ' is not a valid assignable' );

          var convErr;
 
          if ( o.contents === '=>' ) {
             n = core(head);

             this. prepareArgs (true  )  ;

             convErr = this.convList(n);
             if ( convErr ) this.err ( convErr.type + ' is not a param for a function; reason ' + this.convErr );

             this.next ();
             n = this.start ( {
               type : 'ArrowFunctionExpression',
               params : n. type === 'SequenceExpression' ? n.expressions : [n],
               loc : {}
             }, head ); 

             if ( this. peek. contents === '{' ) { n.expression = false; return this.end(n, n.body = this.parseFuncBody () ); }

             n. expression = true;
             head = this. parseNonSeqExpr(
                  this.parseExprHeadOrYield () || this.err ( 'Unexpected ' + this. peek. contents, head ),
                  0, 
                  0);
             n. body = core(head );

           return this.end(n, head );
           }

          convErr = this.convAssig(core(head));
          if (convErr) { var m = this.convErr; this.convErr = null; this.err(m, convErr ); }

          n = core(head ); head = this.start ( this.next (), head );

          head. type= 'AssignmentExpression',
          head. operator = o,
          head. left = n,
          head. pDepth = 0;
          
         head.right = core(o = this.parseNonSeqExpr(
            this. parseExprHeadOrYield(),
            0,
            cFlags_For )
          );

         return this.end(head, o ); 

      case 'Identifier' :
        switch ( o.contents ) {
            case 'in':
            case 'of':
            if (cFlags_For & /* cfFor */ 2  ) {
              if (breakIfLessThanThis !==0 || hasPrefixOrPostfix) this.err( head.type + ' is not a valid assignable' );

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
    if (precOrAssocDistance !==0 ? precOrAssocDistance < 0 : (prec & 1)) return head;

    n = core(head );

    head = this.start ( this.next(), head );

    head. type = (prec===0x09 || prec === 0x0B ) ? 'LogicalExpression' : 'BinaryExpression', 
    head. operator =o,
    head. right = core (o =this.parseNonSeqExpr(this.parseExprHead(), prec, cFlags_For )),
    
    head. left = n;
     
   ; this.end(head, o ); 

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
    case 1: return (this.id());
    case 2:
      switch (c) {
        case 'do': parse = lp.parseDoWhileStatement; break;
        case 'if': parse = lp.parseIfStatement; break;
        case 'in': break;
        default: {return (this.id());}
      }
      break;

    case 3:
      switch (c) {
        case 'new': return this.parseNewHead();
        case 'for': parse = lp. parseFor; break;
        case 'try': parse = lp.parseTryStatement; break;
        case 'let':
        case 'var': return this. parseVariableDeclaration(c );
        default: {return (this.id());}
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
        case 'super': n .type = ('Super'); if ( this.startStmt ) this.startStmt = false;return this.next ();
        case 'break': parse = (lp.parseBreakStatement); break;
        case 'catch': return;
        case 'class':
           var _n, _s = null;
           _n =n;

           var scopeFlags = this.scopeFlags; 
          
            n = this.next (); 

            this.startStmt ?

               ( n. type = 'ClassDeclaration',
                n. id = ( this. peek. type === 'id' && this.id () ) || this.err ( 'id ' )

               ) :
                      
          ( n. type = 'ClassExpression',
              ( ( n ) . id ) = ( this. peek. type === 'id' && this.id () ) || null );

            if ( this. peek. contents === 'extends' ) {
               this.next ();
               n.superClass = this. parseNonSeqExpr ( this.parseExprHeadOrYield(),0,0);
            }

            else 
              n. superClass = null;

            c = [];
            n. body = { type : 'ClassBody', body : c, loc : {} };

            this.expect ( '{' );
             
             this.scopeFlags = 0x020 ;
                             
             while ( _n = this. parseProperty ( /* METHD */ 0x010  ) ) {
                              c. push ( _n );
            }

            this.scopeFlags = scopeFlags;
          
            if ( c.length ) { this.start ( n.body, c[0]); this.end(n.body, c[c.length- 1 ]); }
            else { n.body.start = n.body.end = 0; n.body.loc.start = n.body.loc.end = { li : 0, c : ( ( 0) ) }; } 

            if ( this.startStmt ) { this.startStmt = false; this.foundStmt = true; }

        return this.end(n, this.expect('}' ));

        case 'const': return this. parseVariableDeclaration ( c );
        case 'throw': parse = (lp.parseThrowStatement); break;
        case 'while': parse = lp.parseWhileStatement; break;
        case 'yield': return;
        case 'false': n. type = ( 'Literal' ); n. value = false; if ( this.startStmt ) this.startStmt = false;return this.next (); 
 
        default: {return (this.id());}
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

              return (n ); 

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
     var c = this.c, l = this.src, e = l.length;

     var n = { regex : { }, type : 'Literal' };

     n.loc = {start:{line: this.li, column : this.col-1}};
     n . start = this.c - 1;

     var b = false;
     var o;

     var _l = "";

     L:
     while ( c < e ) {

       o = l.charCodeAt(c);
       switch ( o ) {
         case /* _sbrO */ 91: if ( !b ) b = true; break;
         case /* _bs */ 92 : ++c; break;
         case /* _sbrC */ 93 : if ( b ) b = false; break;
         case /* _div */ 47 :
            if ( b ) break;
            break L;

        default:if ( o >= 0x0D800 && o <= 0x0DBFF ) { this.col--; }

       }

       c++;

     }
 
     l.charCodeAt(c ) === /* _div */ 47 || this.err('expcted /');
     
     var _g = 0;
  
     o = 0;

      L :
     while ( o <= 5 ) {
        switch ( l.charCodeAt ( ++c ) ) {
            case /* g_ */ 0x67  : ( _g & /* g_o */ 2  ) && this.err ( 'g already there' ); _g |= /* g_o */ 2 ; break; 
            case /* u_ */ 0x075  : ( _g & /* u_o */ 4  ) && this.err ( 'u already there' ); _g |= /* u_o */ 4 ; break; 
            case /* y_ */ 0x079  : ( _g & /* y_o */ 8  ) && this.err ( 'y already there' ); _g |= /* y_o */ 8 ; break; 
            case ( /* m_ */ 109  ) : ( _g& /* m_o */ 0x020  ) && this.err ( ' m already there' ); _g |= /* m_o */ 0x020 ; break;
            default : break L;
    
            case /* i_ */ 105  : ( _g& /* i_o */ 0x080  ) && this.err ( ' i already there' ); _g |= /* i_o */ 0x080 ; break; 
          }

         o ++; 
     }

     n. regex . flags = l.substring(c-o, c);
     n. regex . pattern = n.contents = l.substring(this.c, c-o -( 1 ) ); 
    
     this.col += ( ( c ) - this.c ) 
     n.loc.end = { l: this.li, c : this.col };
 
     if ( !( _g & ( ALL ^ _g ) ) ) n. value = new RegExp ( n. regex . pattern, n. regex . flags ); 
     else { new RegExp ( n. regex . pattern ); n. value = null; } 

     this.c = c;
     n. end = this.c;

     this.peek = n;

return this. next ();
}

lp . parseTemplateLiteral = function() {
  var c = this.c, l = this.src, e = l.length;
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
  while ( c < e && ( i = ( l.charCodeAt ( c ) ), i !==/* _tick */ 96 ) ) {
    switch ( i ) {
      case /* _$ */ 36  :
        if ( l.charCodeAt(c + 1 ) === ( /* _cubO */ 123) ) {
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
          v_start = r_start = c = this.c; li = this.li, col = this. col;
        }

        else
           c++;
     
        continue;

      case /* _cret */ 13: v += l.substring(v_start, c); v += '\n'; if ( l.charCodeAt(c + 1 ) === /* _lf */ 10 ) c++; v_start = ++c; this.li++; continue;
      case /* _lf */ 10 : v += l.substring(v_start, c); v += '\n'; v_start = ++c; this.li++; continue; 
      case 0x2028 :
      case ((0x202<<4) + 9 ) :
         v += l.substring(v_start, c);
         v += l.charAt(c);

         v_start = ++c; 
         this.li ++; 

         continue;

      case /* _bs */ 92 :

        v += l.substring(v_start, c ); 
        switch ( l.charCodeAt ( ++ c ) ) {
          case /* _bs */ 92 : v += '\\'; break; case /* _dq */ 34 : v +='\"'; break;case /* _sq */ 39 : v += '\''; break; case /* _b */ 98 : v += '\b'; break;
          case /* _v */ 0x076  : v += '\v'; break; case /* _f */ 102 : v += '\f'; break; case /* _t */ 116  : v += '\t'; break; case /* _r */ 0x072  : v += '\r'; break; 
          case /* _n */ 0x6e  : v += '\n'; break;
          case /* _u */ 117 :
             this.c=c; var e = this. peekUSeq ();
            
             if ( e >= 0x0D800 && e <= 0x0DBFF ) { this.c ++; v += String.fromCharCode ( e, ( ( this ) . peekTheSecondByte () ) ); }
             else { v += String.fromCharCode(e );}
             c = this.c; 
                   
             break;

          case /* _cret */ 13: if ( l.charCodeAt(c + 1 ) === /* _lf */ 10 ) c++; case /* _lf */ 10 : case 0x2028 : case ((0x202<<4) + 9 ) : this.li ++; break;

          default : v += l.charAt(c); break;
        }

        v_start = ++c;
        continue;

    } 

    c++;
  }

  if ( c > r_start ) {

    if ( c > v_start )             v += ( ( l.substring ( v_start, c) ) ); 
      
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

  ( l[ c ] === '`' || this.err ( '` expcted') );
  n.loc.end = { l: this.li, c :this.col }
  this.c = ++c;
  this.peek = n;
  n = this.next ()
  return n
}

lp.parseExprHead = function (cFlags_For_Sh_Non_Ex ) {
  var head = this.peek; 
  var n, e = false;

  if ( head.type === 'Identifier' ) {
      head = this.parseStatementOrID (head); 
      if ( this.foundStmt ) { return head; } 
      if ( this.foundUnaryDVT ) { 
        if (cFlags_For_Sh_Non_Ex & /* cfExpectHeadBePrim */ 0x020 ) { this.err('Unexpected unary'); }

        this.foundUnaryDVT = false;
        head = {
             type : 'UnaryExpression', 
             operator : this.next(),
             loc: {},
             prefix : true

        };

        head. argument = core(n= this.parseNonSeqExpr(this.parseExprHead(),0xAE, cFlags_For_Sh_Non_Ex & /* cfFor */ 2   )), 
        this.start ( head, head .operator );

      return this.end(head, n );

     }
  }

  else {
      if ( this. startStmt ) this.startStmt = false;
      switch (head.type) {
            case '[' : head = this. parseArrayExpression( cFlags_For_Sh_Non_Ex &    (/* CFLAGS_PTRN_MEM */ 9  ) ); if ( this. propThatMustBeInAnAssig ) return head; break;
            case '(' : head = this. parseParen(); if ( this . funcBecause ) return head; break;
            case '{' : head = this. parseObjectExpression( cFlags_For_Sh_Non_Ex & (/* CFLAGS_PTRN_MEM */ 9 ) ); if ( this. propThatMustBeInAnAssig ) return head; break;
            case '/' : head = this. parseRegExpLiteral (); break;
            case '`' : head = this. parseTemplateLiteral (); break;
            case 'Literal': head = this.next(); break;

            case '++': 
            case '--':
               if (cFlags_For_Sh_Non_Ex & /* cfExpectHeadBePrim */ 0x020  ) this.err('Unexpected unary');
               return this.next();

            case '~':
            case '!':
            case '-':
            case '+':
               if (cFlags_For_Sh_Non_Ex & /* cfExpectHeadBePrim */ 0x020 ) this.err('Unexpected unary');
              
               head = {
                    type : 'UnaryExpression',
                    operator : this.next(), 
                    loc: {},
                    prefix : true 

               };
            
               head. argument = core( n= this.parseNonSeqExpr(this.parseExprHead(),0xAE,0)), 
               this.start ( head, head .operator );

               return this.end(head, n); 

            default:
               if ( (cFlags_For_Sh_Non_Ex) & /* cfExpectHeadBePrim */ 0x020  ) this.err(this. peek + ' is not a vaild start for an expr' ); return; 

    }
  }

   n = core( head );

   while ( true ) {
        switch (this.peek.contents) {

          case '.':
               head = this.start (this.next(), head);
                
               head. type = 'MemberExpression';
               head. property = this.memID();
               head. object = n;
               head. computed= false; 

               n = this.end( head, head . property );
               continue;

         case '[':
            
            head = this.start (this.next(), head);
           
            head. type = 'MemberExpression';
            head. property = core ( this. parseExpr() );     
            head. object = n;
            head. computed= true ; 

            n = this.end( head, this.expect(']'));
            continue;

         case '(':

              head = this.start ( this.next(), head );
                 
              head. type= 'CallExpression'      ; 
              head. callee = n                  ; 
              head. arguments = this. parseArgList() ;

             n = this.end (head, this.expect(')'));
             continue;

          case '`' :
            
             head = n = this.start ( {
                  type : 'quasi',
                  quasi : this . parseTemplateLiteral (),
                  loc : {},
                  tag : n
             }, head ); 

             this.end (head, head.quasi ); 
             continue; 

          default: return head;
        }

      } 

  return head;

};

lp.parseNewHead = function () {
  if ( this. startStmt ) this.startStmt = false;

  var n; 
  var e = this.next ();

  if ( this. peek. contents === '.' ) {
    this.next ();
    n = this.start ({
      type : 'MetaProperty',
      meta : e,
      loc : {}
    }, e );

    if ( this. peek. type === 'Identifier' && ( e= this.next() ).contents === 'target' ) return (this.end(n, n. property = e ) );
    this.err( 'found ' +     e . contents + ', not target ' );
   }

  var head = this.peek; 
  switch (head.type) {
    case '[': head = this. parseArrayExpression(); break;
    case '(': head = this. parseParen(); if ( this.funcBecause ) this.err('Unexpected ' + this.funcBecause. contents ); break;
    case '{': head = this. parseObjectExpression(); break;
    case '/': head = this. parseRegExpLiteral (); break;
    case '`': head = this. parseTemplateLiteral (); break;
    case 'Literal': head = this.next(); break;
    case 'Identifier' : 
      head = this.parseStatementOrID (head);
      if ( this. foundUnaryDVT ) this.err ( this. peek. contents + ' can not come in the head of new' ); break;

    default: this.err('Unexpected ' + ( this. peek .type ) );
  }

  n = core( head );

  while ( true ) {
    switch (this.peek.contents) {
      
       case '.':
         head = this.start (this.next(), head);
         
         head. type = 'MemberExpression';
         head. property = this.memID();
         head. object = n;
         head. computed = false;
           
         n = this.end( head, head. property );
         continue;

      case '[':
         head = this.start (this.next(), head);
         
         head. type = 'MemberExpression'           ; 
         head. property = core ( this. parseExpr() );
         head. object = n                          ;
         head. computed= true                    ;

         n = this.end( head, this.expect(']'));
         continue;

       case '(':
          this.next();
         
          e. type= 'NewExpression';
          e. callee = n           ;
          e. arguments = this. parseArgList() ;

          return this.end (e, this.expect(')'));

        case '`' :

             head = n = this.start ({
                  type : 'quasi',
                  quasi : this . parseTemplateLiteral (),
                  loc : {},
                  tag : n
              }, head );

              this.end (head, head.quasi );
              continue; 
    
        default:
                e. type = 'NewExpression';
                e. callee = n; 
     	   e. arguments = [];
 
                return this.end (e, head );

     }
  } 
};

lp.id = function (n) {
  if ( this.startStmt ) this.startStmt = false;

return this.next (); 
};

lp . parseSpreadElement = function() {
    
     var n = this.start ({
           type : 'SpreadElement',
           loc : {}
     }, this.next () ); 
 
     var e;
     n. argument = core (e = this.parseNonSeqExpr( this.parseExprHead(), 0, 0 ) );

return (this.end ( n, e) );
};

lp.parseArrayExpression = function (cFlags_Sh_Non ) {
  var e = [], _e;
 
  var n = this.next ();
                  
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
            if ( !propThatMustBeInAnAssig ) { propThatMustBeInAnAssig = this.propThatMustBeInAnAssig; p = /* cfNonAssigNotValid */ 1  ; }
            this. propThatMustBeInAnAssig =null;
       }

       else if ( this. mustNot ) {
         if ( !hasPropThatMustNot ) { hasPropThatMustNot = this. mustNot; p = /* cfShortNotValid */ 8 ; }
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

return this.end(n, this.expect(']'));
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
                            

         if ( this. tightness ) switch ( nexpr .   value ) { case 'eval' : case 'arguments' : this.err (        nexpr .   value + ' is not an arg ' )  ;  }

         if ( isB ) {
           if ( nexpr . pDepth ) {
             this.convErr = 'an identifier must not be in parens when used as in a var def position'; 
             return nexpr;
           }
           if ( this. vnames [ r  =  nexpr . value +  '%' ] ) this.err ( nexpr . value   +   '  already in the arglist   '  ) ;
           this. vnames[r] = VAR_ALREADY_IN_ARG_LIST   ;
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

  n = this.next ();
  n. type = 'ObjectExpression',
  n. pDepth = 0;

  var p = cFlags_Sh_Non,
      propThatMustBeInAnAssig = null,
      hasPropThatMustNot = (false );

  while ( e = this.parseProperty(p)) {
     prop .push(e);

     if ( this. propThatMustBeInAnAssig ) {
        if ( !propThatMustBeInAnAssig ) { propThatMustBeInAnAssig = this. propThatMustBeInAnAssig; p = /* cfNonAssigNotValid */ 1  ; }
        this. propThatMustBeInAnAssig = null;
     }

     else if ( this. mustNot ) {
       if ( !hasPropThatMustNot ) { 
             hasPropThatMustNot = this. mustNot;
             p = /* cfShortNotValid */ 8 ;
       } 

       this. mustNot = false;
     }

     if ( this.peek. contents === (',' ) ) { this.next (); continue; }
     break;
  }

  n .properties = (prop );

  if ( propThatMustBeInAnAssig ) this. propThatMustBeInAnAssig = propThatMustBeInAnAssig;
  else if ( hasPropThatMustNot ) { this. mustNot = hasPropThatMustNot; }

return this.end(n, this.expect('}'));
};

lp.parseParen = function () {
  var r, argListBecause = null, n = this.next(); 
                                var e; 

  e = this.parseExprHeadOrYield ();
  if ( e ) {
    this.canHaveNoAssig = true;
    e = this. parseNonSeqExpr ( e, 0, 0 );

    if (this.propThatMustBeInAnAssig ) {

       
       if ( this. peek. contents === ')' ) {
          if ( e.type !=='(' ) e. pDepth = 1;
          else e = e.expr, e. pDepth ++; 

          this.prepareArgs   (true ) ; 
          this.funcBecause = e;

       return n. expr = (e ), this.end(n, this.expect( ')' ) );
       }

       this. prepareArgs   ( ( true ) ) ; 
       if ( r = this. convAssig(e, true ) ) { this.err(e . type + ' can\'t be a def; reason: ' + this.convErr ); } 

       argListBecause = e;
       this. propThatMustBeInAnAssig = null;
    } 

    if ( this. peek. contents === ',' ) {
      
       e = this.start ({
         type : 'SequenceExpression',
         expressions : [core(e)],
         loc: {}
       }, e );

       e .pDepth = ( 1);
 
       var head;
       do {
         this.next ();
        
         if ( this. peek. contents === '...' ) {
            if ( !argListBecause ) this. prepareArgs   ( true ) ; 
            if ( r = this.convList(e) ) this.err( e. type + ' can\'t be a param; reason : ' + this.convErr, r );
            r = this. peek;


            e.expressions . push ( this.parseRestElement () );
            this.funcBecause = r; 
            this.expect ( ')');
           
            n. expr = e;

          return n;
          }

          if ( argListBecause ) {
            var ptrn = this. parsePattern   ();
            if ( '=' === this. peek. contents ) { 
               this.next () 
               ptrn = this.start ({
                    type : 'AssignmentPattern',
                    left : ptrn,
                    loc : {}
               }, ptrn ); 
               
               ptrn. right = core ( r = this.parseNonSeqExpr (this .parseExprHeadOrYield (), 0, ( ( 0) ) ) ); head = (this.end(ptrn, r ) );
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

          e. expressions.push ( core( ( head ) ) );

       } while ( this. peek. contents === (',' ) );
    }

    if ( e. type !=='(' ) e. pDepth = 1; 
    else { e = e .expr; e .pDepth ++; } 

    n.expr = e;
    if ( argListBecause ) this.funcBecause = argListBecause;
  
  return this.end(n, this.expect(')' ) );
  }

  else switch ( this. peek. contents ) {
        case ')' :
           r = this.next ();
           n.expr = {
             type : 'SequenceExpression',
             expressions : []
           };

           this.funcBecause = r;
           return n;

        case '...' :
          this.funcBecause = this . peek; this.prepareArgs   () ; 
          n.expr = this. parseRestElement ();
          this.expect ( ')'  );
          return n;

        default : this. err ( 'Unexpected ' + this. peek. type );

  }
};

lp . parseVariableDeclaration = function(kind, cFlags_For ) {

     if ( this.startStmt ) this.startStmt = false;
     else  if ( ! ( cFlags_For & /* cfFor */ 2  ) ) { this.err ( kind + 'is not a vaild name ' ); }
 
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

     if ( ! ( cFlags_For & /* cfFor */ 2  ) ) {
       this.foundStmt = true;
       e = this.semi ();
     }

   return this.end ( n, e || ( dec[dec.length-1 ] ) );
}

lp . parseVariableDeclarator = function(cFlags_For ) {
   var n = this.parsePattern  (), e = null; // console.log( n, "N", "N", this. peek ); 
   if ( n ) {
       n = this.start ( {
         type : 'VariableDeclarator',
         id : n,
         loc : {},
         init : this.peek.contents === '=' ? (this.next(),
                                             core (e  =  this. parseNonSeqExpr(this.parseExprHeadOrYield(),0, cFlags_For ) ) ) : 
                n.  type !== 'Identifier' ? (this.expect ('=' ),
                                             core (e  =  this. parseNonSeqExpr(this.parseExprHeadOrYield   (), 0, cFlags_For )  ) )  : null,
       }, n); 

       return this.end ( n, e || n. id );
   }
} ; 

lp . parseFor = function() {
  var n = this.next ();
  this.expect('(' );
  var e;

  switch (e = this.peek.contents ) {
     case 'var':
     case 'let':
     case 'const' : e = this. parseVariableDeclaration(e, /* cfFor */ 2  ); break;

     default :
       e = this. parseExprHead ();
       if ( this. propThatMustBeInAnAssig ) this.canHaveNoAssig = true;
       else if ( e ) { e = this.parseExpr(e, /* cfFor */ 2  ); } 
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

        else {
          if ( this . propThatMustBeInAnAssig ) this. propThatMustBeInAnAssig = null;

          var convErr = this.convAssig ( e);
          if ( convErr ) this.err ( e. type + ' is not an assig; reason ' + this.convErr );
       }
       
       this.next();
 
       n = this.start ( {
         type : 'ForInStatement',
         left : e,
         loc :       {},
         right :  ( _in ? core( this.parseExpr() ) : core ( this. parseNonSeqExpr(this. parseExprHead(), 0,0) )  )
       }, n );

       break;

     default :
        if ( this. propThatMustBeInAnAssig ) {
           this.canHaveNoAssig = false;
           e = this.parseExpr(e);
        }

        this. expect (';' ); 

        n = this.start ( {
          type: 'ForStatement',
          init : e, 
          loc : {} ,  
          test : this.peek.contents === ';' ? null :(core ( this.parseExpr ()   )  )
        }, n );

        this.expect(';' );
        e = this. parseExprHead() || null;
        n . update = e &&                    core(  this.parseExpr (e)   )  ; 
    }

    this. expect ( ')' );

    ++ this. iteD;
    var scopeFlags = this.scopeFlags;
    this.scopeFlags |= ( /* breakFlag */ 4 |/* continueFlag */ 8  );
    n = this.end(n, n. body = this.parseStatement () );

    this.scopeFlags = scopeFlags;
    -- ( this. iteD );

return n;
}

var core = function(n ) { return ( ( n . type === '(' ? n.expr : n )); } 
var coreBrack = function(n) { return n. type === '[' ? n. expr : n   }

lp.parseProperty = function (cmn) {

  var e, Prop = ( cmn === /* METHD */ 0x010  ) ? 'MethodDefinition' : 'Property', n = null;
  switch ( this. peek. type ) {
    case 'Identifier' : { n = this. peek. value;} break;
    case 'op' : n = this. peek. contents; 
  } 

  var _static = null; 
  
  L :
  while ( true ) 
    switch ( n ) { 
      case 'get':
        n = this.next();
       
        if (e = this.parseMemName()) {
           if ( cmn & /* cfNonAssigNotValid */ 1   ) this.err('get' ); 
     
           n = this.start ( { type : Prop,  key : coreBrack (e), kind : 'get', computed : ( e. type === '[' ), loc : {} }, _static || n);


           if ( cmn !==/* METHD */ 0x010  ) {  n.shorthand =false; n. method= false;   }
           else n.static = _static !==null      ;

           this.end(n, n.value = this.parseArgsAndBody(0, this.start ( { 
                type : 'FunctionExpression',
                  id : coreBrack(e),
                 loc : {},
           generator : false
           }, e ) ) );

           if ( cmn !==/* METHD */ 0x010  ) this. mustNot = true;
       
        return n  ;
        }

        break L;

    case 'set':

      n = this.next();
      if ( e = this.parseMemName()) {
         if ( cmn & /* cfNonAssigNotValid */ 1   ) this.err('set' ); 
         n = this.start ( { type : Prop,  key : coreBrack (e), kind : 'set', loc: {}}, n ); 

         if ( cmn !==/* METHD */ 0x010  ) n. method = n. shorthand = false;
         else n.static = _static !==null; 

         n. computed = ( e .type === '[' ); 
         this.end(n, n. value = this.parseArgsAndBody(1, this.start ( {
           type : 'FunctionExpression',
           id : coreBrack(e),
           loc : {},
           generator : false
         }, e) ) );

         if ( cmn !==/* METHD */ 0x010  ) this. mustNot = true;

      return n
      }

      break L;

    case '*':
      if ( cmn & /* cfNonAssigNotValid */ 1   ) this.err('sh and * ' ); 

      n = this.next();
      e = this.parseMemName() || this.err('[ or and expr expcted', this.peek );
  
      n = this.start ({ type : Prop, key : coreBrack(e), kind : ( cmn === /* METHD */ 0x010  ?
                                                                  (n.contents === 'constructor' && this.err('can not be a g ' ) ) || ( 'method' ) :
                                                                  'init'
 
                                                       ),
        loc : {}
      }, n);
    
      n.computed = e. type === '[';
      if ( cmn !==/* METHD */ 0x010  ) {  n.method = true;  n.shorthand = false;   }

      this.end(n, n. value = this. parseArgsAndBody(-1, this.start ( { type :'FunctionExpression', id :   ( coreBrack (e)   )  , loc : {}, generator : true }, e ) ) );
      if ( cmn !==/* METHD */ 0x010  ) this. mustNot = true;
      else n.static = _static !==null
     
      return n  ;

       case 'static' :
          if ( cmn === /* METHD */ 0x010  && !_static ) {
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
       if ( cmn & /* cfNonAssigNotValid */ 1   ) this.err('paren ' ); 

       n = this.start ( {
         type: Prop,
         key : coreBrack (n),
         kind : ( cmn === /* METHD */ 0x010  ? n.contents === 'constructor'? 'constructor' : ( 'method' ) : 'init' ),
         computed : n. type === '[', loc : {},
         value : this . parseArgsAndBody(-1, this.start ( {
               type : 'FunctionExpression',
               id : coreBrack (n),
               loc : {},
               generator : false
         }, n) )
       }, n);
 
       if ( cmn !==/* METHD */ 0x010  ) {  n. method = true;  n. shorthand = false;   }
       else n.static = _static !==null      ;
  
       if ( cmn !==/* METHD */ 0x010  ) this. mustNot = true;
 
       return this.end (n, n . value );
 
     case ':':
       cmn === /* METHD */ 0x010  && this.err( 'Unexpected ' + this. peek. contents );


       e = n;
       n = this.start ( this.next(), e); 
       n . type = 'Property',
       n . key = coreBrack (e), 
       n . kind = 'init',
       n . computed = e . type === '[',
 
       n .method = false;
       n .shorthand = false;

       var head = ( this. parseExprHeadOrYield ()||this.err('must be an actual expr') );

       this.canHaveNoAssig = true;
       n. value = core (e = this.parseNonSeqExpr( (head ), 0, 0) );

       return this.end (n, e)

    default : 

      cmn === /* METHD */ 0x010  && this.err( 'Unexpected ' + this. peek. contents );
      var _r;
      e = n; 
         
      if (n. type !=='Identifier' ) this.err('id expcted'); 

        if ( this. peek.contents === ('=' ) ) {
          if ( cmn& /* cfShortNotValid */ 8  ) this. err( 'no' );
          e = this.start ( { left : n, type : 'AssignmentPattern', loc : {} }, n);
          this.next ();  e . right = core ( _r = this. parseNonSeqExpr ( this. parseExprHeadOrYield(), 0,  0) ) ; 
          this.end( e, _r ) ;

          this. propThatMustBeInAnAssig = true;
          n = this.start ( {type : 'AssignmentProperty', key : n, loc :{} }, n);
        }

        else { n = this.start ( {type : 'Property', key : n, loc :{} }, n); }

        n.kind = 'init'; 
        n.shorthand = true;
        n. method = n. computed = false;

      return this.end(n, n. value = e );
      }
};

lp.parseMemName = function() {
      if ( this.peek.contents === '[' ) {
          var e =  this.next(); 
          e. expr  = core( this. parseNonSeqExpr (this. parseExprHeadOrYield ()||this.err('must be an actual expr'), 0, 0 )   )  ;

      return this.end(e, this.expect (']' ) ); 
      }

return this.memID ();
}

lp . memID = function() { 
    switch ( this.peek.type ) {
      case 'Identifier' : 
      case 'Literal' : return this.next ();
    } 
}


lp.parsePattern = function() {
     switch ( this.peek.type ) {
       case 'Identifier' :
           if ( !iskw(this.peek) )  {
              var n =  this.next ();
              
              if ( this. vnames ) {
                 var r = n.value  + '%' ;
                 if ( this.vnames.hasOwnProperty (  r    ) ) {
                   switch  (  this.vnames[r] ) {
                      case   2  :
                         if ( this. vnames.immediateErr ) {        this.err ( n. value   +  ' already in the arglist   '  ) ;   }
                         this.vnames[r] = 4  ; break ;
                      case   8 : this.err ( n.value  + ' can not be def ' )  ;
                   }
                 }
 
                 else  {
                    this.vnames[r] = 2 ;
                 }
              }

              return n ;
           
       
            }

           
            return ;
  
       case '[' : return this. parseArrayPattern  ();
       case '{' : return this. parseObjectPattern ();
     }
   }


lp. parseArrayPattern = function() {

    var _e = [],  n = this .next (); 
                   n.    type =  'ArrayPattern';
                   n.   elements = _e;

    var e;

    L :
    while ( true ) {
       
       if ( e = this. parsePattern   () ) {

          if ( e. type === 'Identifier' && this. vnames ) {
             var r =  e. value   +  ( '%' )  ; 
             if ( this.vnames[r]    !==2  ) { this.err ( e. value + ' already in the arglist'   )           ;   }
             this.vnames[r] = 8 ;
          }
 
          if ( this.peek.contents === '=' ) {
             this.next (); 
             e = this.start ( {
               type : 'AssignmentPattern',
               left : e,
               loc : {}
             }, e );

          var r;
          e . right = core ( r = this.parseNonSeqExpr (this .parseExprHeadOrYield (), 0, ( ( 0) ) ) );

          _e . push (this.end ( e, ( r ) ) );
          }

          else 
             _e . push (e );
        }
 
        else if ( this. peek. contents === '...' ) { _e .push (this. parseRestElement () );     break;  }
        
        else
           _e . push( null );

          
      if ( this.peek.contents           ===    ',' ) { this.next ();  continue  ;    }
      break;


    }

return this.end (n, this.expect (']') ) ;
}

lp.parseObjectPattern  = function() {
    var prop = [];
    var n = this.next ()  ;   

    n. type = 'ObjectPattern' ;
    n. properties =  prop;

    var e;

    var v, _n;

    while ( _n = this. parseMemName() ) {
        e = this.start ( {type : 'AssignmentProperty', key : coreBrack (_n ), loc : {}, computed : _n . type === '(', method : false  }, _n);
        e. kind = "init"; 

        if ( this.peek.contents === ':' ) { this.next(); v = this.parsePattern   ();}
        else { _n .type !=='Identifier' && this.err('id' ); v = _n; e.shorthand = true;}

        if        ( e. type === 'Identifier' && this. vnames ) {
             var r =  e. value   +  ( '%' )  ; 
             if ( this.vnames[r]    !== 2  ) { this.err ( e. value + ' already in the arglist'   )           ;   }
             this.vnames[r] = 8 ;
          }
      
        if ( this.peek.contents === '=' ) {
             this.next();
             v = this.start ( {
               type : 'AssignmentPattern', 
               left : v,
               loc : {}, 
               right : core (_n = this. parseNonSeqExpr(this. parseExprHeadOrYield (), 0, 0) ) 
             }, v );

             this.end (v, (_n) );
        }

        prop. push (this.end(e, e.value = v )); 

        if ( this.peek.contents === ',' ) { this.next (); continue; }
    }

return this.end(n, this.expect('}' ) );
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
        if ( _n . type ==                                        'Identifier' ) {
          r  = _n . value +   '%' ;
          if ( this. vnames[r]  ==   (       2 )   ) this. vnames[r] = 8 ;
          else 
             this.err ( _n . value + ' already in the arglist ' )  ; 
         }

        _n = this.parseAssig (_n);
    }
    e.push(_n);
    if (this.peek.contents === ',') {
      this.next();
      continue;
    }

  break;
  }

  if ( argLen && this.peek.contents === '...') { e. push (this. parseRestElement () ); }

  this.expect(')' );

  r  = this. scopeFlags ;
  if ( n. generator ) r |= /* yieldFlag */ 0x010  ;
 
  if ( this.peek.contents === '{' ) { _n =  n. body = ( this . parseFuncBody() )   ;  }

  else  n. body = core(
      _n = this.parseNonSeqExpr(
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

     var a = null ;
     if ( this. vnames ) {
        a  = this.vnames;
        this. vnames = null ;
      }

     var scopeFlags = this.scopeFlags;
     if ( scopeFlags & 0x020 ) {
         if ( scopeFlags & /* funcFlag */ 2  ) this.scopeFlags = /* funcFlag */ 2 ;
         else this.scopeFlags = ( 0x020 | /* funcFlag */ 2  );
     }

     else
       this.scopeFlags = /* funcFlag */ 2 ;

     if ( scopeFlags & /* yieldFlag */ 0x010  ) this.scopeFlags |= (      /* yieldFlag */ 0x010    )  ;
 

     var stmts = [],
         stmt,
         n = this.start ( { type : 'BlockStatement', body : stmts, loc : {} }, this.next () ),
         l = this.lbn,
         iteD = this. iteD;

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

     if ( a ) this.vnames = a. prev ;

return this.end ( n, this.expect ( '}' ) ); 
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
           case /* _cret */ 13 : if ( /* _lf */ 10 === src.charCodeAt ( c  +   1 ) ) c ++; 
           case /* _lf */ 10 :
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
exports.lube.parse = function(src) { return new Prser(src).parseProgram   () ; } 












}) ( (typeof exports==="object") ? exports :  (typeof window==="undefined")? this : window )
