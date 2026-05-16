/** @license Apache-2.0 */

'use strict';

/**
* Reinterpret a double-precision complex floating-point ndarray as a real-valued double-precision floating-point ndarray containing interleaved real and imaginary components.
*
* @module @stdlib/ndarray-base-reinterpret-complex128
*
* @example
* var ones = require( '@stdlib/ndarray-base-ones' );
* var reinterpretComplex128 = require( '@stdlib/ndarray-base-reinterpret-complex128' );
*
* var x = ones( 'complex128', [ 2, 2 ], 'row-major' );
* // returns <ndarray>[ [ <Complex128>[ 1.0, 0.0 ], <Complex128>[ 1.0, 0.0 ] ], [ <Complex128>[ 1.0, 0.0 ], <Complex128>[ 1.0, 0.0 ] ] ]
*
* var out = reinterpretComplex128( x );
* // returns <ndarray>[ [ [ 1.0, 0.0 ], [ 1.0, 0.0 ] ], [ [ 1.0, 0.0 ], [ 1.0, 0.0 ] ] ]
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
