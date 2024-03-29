/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

/**
* Compute a moving sample absolute Pearson product-moment correlation coefficient incrementally.
*
* @module @stdlib/stats-incr-mapcorr
*
* @example
* var incrmapcorr = require( '@stdlib/stats-incr-mapcorr' );
*
* var accumulator = incrmapcorr( 3 );
*
* var ar = accumulator();
* // returns null
*
* ar = accumulator( 2.0, 1.0 );
* // returns 0.0
*
* ar = accumulator( -5.0, 3.14 );
* // returns ~1.0
*
* ar = accumulator( 3.0, -1.0 );
* // returns ~0.925
*
* ar = accumulator( 5.0, -9.5 );
* // returns ~0.863
*
* ar = accumulator();
* // returns ~0.863
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
