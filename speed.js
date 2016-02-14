var tok = ( "l.l.l - l.l.l ;l.l.l - l.l.l ;l.l.l - l.l.l ;l.l.l - l.l.l ;l.l.l - l.l.l ;l.l.l - l.l.l ;l.l.l - l.l.l ;l.l.l - l.l.l ;l.l.l - l.l.l ;l.l.l - l.l.l ;l.l.l - l.l.l ;l.l.l - l.l.l ;l.l.l - l.l.l ;l.l.l - l.l.l ;l.l.l - l.l.l ;l.l.l - l.l.l ;l.l.l - l.l.l ;l.l.l - l.l.l ;l.l.l - l.l.l ;l.l.l - l.l.l ;l.l.l - l.l.l ;l.l.l - l.l.l ;l.l.l - l.l.l ;l.l.l - l.l.l ;l.l.l - l.l.l ;l.l.l - l.l.l ;l.l.l - l.l.l ;l.l.l - l.l.l ;l.l.l - l.l.l ;l.l.l - l.l.l ;l.l.l - l.l.l ;l.l.l - l.l.l ;l.l.l - l.l.l ;l.l.l - l.l.l ;l.l.l - l.l.l ;l.l.l - l.l.l ;l.l.l - l.l.l ;l.l.l - l.l.l ;l.l.l - l.l.l ;l.l.l - l.l.l ;l.l.l - l.l.l ;l.l.l - l.l.l ;l.l.l - l.l.l ;l.l.l - l.l.l ;l.l.l - l.l.l ;l.l.l - l.l.l ;l.l.l - l.l.l ;l.l.l - l.l.l ;l.l.l - l.l.l ;"    )   ||         require("fs" ).readFileSync("../../../../../N14_Muhammad(PBUH)/40/js/12").toString ();



var L = require('acorn')
var B = require('benchmark' )

var _B = new B.Benchmark.Suite();
var E  = require('./lube.js' ) ;  console.log ( E   ) ; 




function printStatus(fn) {
    switch(%GetOptimizationStatus(fn)) {
        case 1: console.log("Function is optimized"); break;
        case 2: console.log("Function is not optimized"); break;
        case 3: console.log("Function is always optimized"); break;
        case 4: console.log("Function is never optimized"); break;
        case 6: console.log("Function is maybe deoptimized"); break;
        case 7: console.log("Function is optimized by TurboFan"); break;
        default: console.log("Unknown optimization status"); break;
    }
}

var _L =   { next : function() { return {} } } ;   new E. Parser ( "12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 " )  ,  _e =  _L.next()    ;
('lube', function() { E   .   parse(tok) } ) ()   ;




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


if ( 0 ) {
   var funcName = 'nextraw'   ,   func     = E. func. prototype[ funcName ] ;
   %OptimizeFunctionOnNextCall( func ) ;
   E. parse(tok) ;
   %OptimizeFunctionOnNextCall( func ) ;
   if ( 0 || 12 ) {  
     _L = new E. Parser ( "l" )  ;
     _L .nextraw   () ;
     while ( !false ) {
        %OptimizeFunctionOnNextCall ( func ) ;
        var _l = 0 ; 
        while ( !false ) {
           _L = new (E. Parser )( "." )     ;
           _l ++ ;  
           %OptimizeFunctionOnNextCall( func ) ;
           _L .  next() ; _L .next() ; 
           var _e = ( %GetOptimizationStatus  ( func )    )  ;
           if ( _e == 2 )  break  ;
           if ( _e != %GetOptimizationStatus  ( _L [ funcName ]  ) ) break ;  
           if ( _l % 1200 == 0   ) console . log ( 12, _l )   ;
        }

        console.log( 120,  _l ) 
     }
   }
}











 0 && compMain( L.parse(tok, {
      locations: ! false
    } ), new E. Parser((tok)).parseProgram() );

 _B  .add('lube', function() { E   .   parse(tok) } ).
  add('12', function () {

    L.parse(tok, {
      locations:  false
    } ) } ) .
    add ( '114', function() { return 114 ;   }   )  .
  add('r', function () {

    L.parse(tok, {
      locations:  ! false
    } ) } ).
  on('complete',  ( function() { var e =  0; while ( e < arguments[0].currentTarget.length ) {   console.log( e  +  1 , arguments[0].currentTarget[ ( e ) ].hz )   ; e++ ; } } ) ) .
  run()


var l; 
for ( l in E.  Parser.prototype   )  {
   if ( E. Parser.prototype. hasOwnProperty ( l )   )    {
     console.log( l );
     printStatus ( E.  Parser.prototype [ l ]   )  ;
     }
}

for ( l in L.  Parser.prototype   )  {
   if ( L. Parser.prototype. hasOwnProperty ( l )   )    {
     console.log( l );
     printStatus ( L.  Parser.prototype [ l ]   )  ;
     }
}


