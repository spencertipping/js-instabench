caterwaul.module( 'bench' ,function(c) { (function( ) {var init=function() {;
return( ( ($( 'body' ) ) .append(benchmark_interface() ) ) , ($( '#builtins' ) .remove() ) ) } ,benchmark_interface=function() {;
return jQuery( "<div>" ) .append(jQuery( "<div>" ) .addClass( "right" ) .append(page_source_link() ,log() ,controls() ,builtins() ) ) .append(function_input_area() ) } ,page_source_link=function() {;
return jQuery( "<div>" ) .addClass( "padded" ) .append(jQuery( "<a>" ) .append(jQuery( "<span>" + ( 'js-instabench on Github' ) + "</span>" ) ) .attr( "href" , 'http://github.com/spencertipping/js-instabench' ) .attr( "target" , '_blank' ) ) } ,log=function() {;
return jQuery( "<table>" ) .addClass( "log" ) .append(jQuery( "<tr>" ) .append(jQuery( "<th>" ) .append(jQuery( "<span>" + ( 'Name' ) + "</span>" ) ) .add(jQuery( "<th>" ) .append(jQuery( "<span>" + ( 'Average (ms)' ) + "</span>" ) ) ) .add(jQuery( "<th>" ) .append(jQuery( "<span>" + ( 'Min' ) + "</span>" ) ) ) .add(jQuery( "<th>" ) .append(jQuery( "<span>" + ( 'Max' ) + "</span>" ) ) ) .add(jQuery( "<th>" ) .append(jQuery( "<span>" + ( 'SD' ) + "</span>" ) ) ) .add(jQuery( "<th>" ) .append(jQuery( "<span>" + ( 'N' ) + "</span>" ) ) ) ) ) } ,controls=function() {;
return(function( ) {var run=function(e) {;
return run_benchmark($( 'input.name' ) .val() ,$( 'textarea.bench' ) .val() ) } ;
return(jQuery( "<div>" ) .addClass( "controls" ) .append(jQuery( "<button>" ) .addClass( "run" ) .append(jQuery( "<span>" + ( 'Run' ) + "</span>" ) ) .click(run) .add(jQuery( "<span>" + ( ' for ' ) + "</span>" ) ) .add(accepts_numbers(jQuery( "<input>" ) .addClass( "duration" ) ) .val(1000) ) .add(jQuery( "<span>" + ( ' ms' ) + "</span>" ) ) ) ) } ) .call(this) } ,function_input_area=function() {;
return jQuery( "<div>" ) .addClass( "function-input" ) .append(jQuery( "<div>" ) .append(jQuery( "<input>" ) .addClass( "name" ) .val( 'Empty function' ) ) .add(accepts_valid_syntax(jQuery( "<textarea>" ) .addClass( "bench" ) ) .val( 'benchmark(function () {});' ) ) .add(jQuery( "<pre>" ) .addClass( "errors" ) ) ) } ,builtins=function() {;
return(function( ) {var lists=function() {;
return(function(xs) {var x,x0,xi,xl,xr;
for(var xr=new xs.constructor() ,xi=0,xl=xs.length;
xi<xl;
 ++xi)x=xs[xi] ,xr.push( ( (function( ) {var name=$(x) .attr( 'name' ) ;
return( (function(it) {return(it[0] ) } ) .call(this, (jQuery( "<div>" ) .append(toggles_contents(jQuery( "<h1>" ) .addClass( "category" ) .text(name) ) .add(jQuery( "<ul>" ) .append(items_for($(x) ) ) .hide() ) ) ) ) ) } ) .call(this) ) ) ;
return xr} ) .call(this,$( '#builtins > div' ) ) } ,items_for=function(div) {;
return(function(xs) {var x,x0,xi,xl,xr;
for(var xr=new xs.constructor() ,xi=0,xl=xs.length;
xi<xl;
 ++xi)x=xs[xi] ,xr.push( ( (function(x,x0,xi,xl,xs,xr) {return(function( ) {var name=$(x) .attr( 'name' ) ,populate=populator(name,$(x) .text() ) ;
return( (function(it) {return(it[0] ) } ) .call(this, (jQuery( "<li>" ) .append(clickable(jQuery( "<a>" ) .text(name) ) .click(populate) ) ) ) ) } ) .call(this) } ) .call(this,x,x0,xi,xl,xs,xr) ) ) ;
return xr} ) .call(this,div.children( 'script' ) ) } ,toggles_contents=function(e) {;
return e.click(function(_) {return $(this) .next() .toggle() } ) .css( {cursor: 'pointer' } ) } ;
return(jQuery( "<div>" ) .addClass( "builtins" ) .append(lists() ) ) } ) .call(this) } ,clickable=function(a) {;
return a.attr( 'href' , 'javascript:void 0' ) } ,accepts_numbers=function(e) {;
return e.instavalidate( /\d+(\.\d+)?/ ) } ,accepts_valid_syntax=function(e) {;
return e.instavalidate(function(_) {return(function( ) {try{return(compile(_) ) }catch(e) {return(false) } } ) .call(this) } ) } ,compile=function(source) {;
return caterwaul() ( ( '(function () {' + (source) + '})' ) ) } ,dangerous=function(message,f) {;
return( ($( 'pre.errors' ) .empty() ) , ( (function( ) {try{return(f() ) }catch(e) {return($( 'pre.errors' ) .text( ( 'Error ' + (message) + ': ' + (e) + '' ) ) ,undefined) } } ) .call(this) ) ) } ,populator=function(name,bench) {;
return function() {;
return( ( ($( 'input.name' ) ) .val(name) ) , ( ($( 'textarea.bench' ) ) .val(bench) ) ) } } ,run_benchmark=function(name,b) {;
return(function( ) {var execute_benchmark=function() {;
return compiled&&run() && ($( 'table.log' ) ) .append(the_log_entry() ) } ,populate=populator(name,b) ,nuke=function() {;
return $(this) .parents( 'tr' ) .first() .remove() } ,log_entry=function(avg,min,max,sd,n) {;
return jQuery( "<tr>" ) .append(jQuery( "<td>" ) .append(clickable(jQuery( "<a>" ) .text(name) ) .click(populate) ) .add(jQuery( "<td>" ) .text(avg) ) .add(jQuery( "<td>" ) .text(min) ) .add(jQuery( "<td>" ) .text(max) ) .add(jQuery( "<td>" ) .text(sd) ) .add(jQuery( "<td>" ) .text(n) ) .add(jQuery( "<td>" ) .append(clickable(jQuery( "<a>" ) .append(jQuery( "<span>" + ( '[x]' ) + "</span>" ) ) ) .click(nuke) ) ) ) } ,recorded_times= [ ] ,record=function(time) {;
return(recorded_times) .push(time) } ,duration= +$( 'input.duration' ) .val() ||5000,benchmark=function(f) {;
return(function( ) {var start= +new Date,last=start;
return( (function(xs) {var x,x0,xi,xl,xr;
for(var x=xs,xi=0,x0,xl;
x0= ( +new Date-start<duration) ;
 ++xi)x= (f() ,record( - (last- (last= +new Date) ) ) ) ;
return x} ) .call(this,null) ) } ) .call(this) } ,environment=function() {;
return{benchmark:benchmark,billion:1000000000,million:1000000,thousand:1000} } ,run=function() {;
return dangerous( 'running benchmark function' ,compiled) } ,compiled=dangerous( 'compiling benchmark function' ,function(_) {return caterwaul() ( ( '(function () {' + (b) + '; return true})' ) ,environment() ) } ) ,the_log_entry=function() {;
return(function( ) {var average= (function(xs) {var x,x0,xi,xl,xr;
for(var x0=xs[0] ,xi=1,xl=xs.length;
xi<xl;
 ++xi)x=xs[xi] ,x0= (x+x0) ;
return x0} ) .call(this,recorded_times) /recorded_times.length;
return(log_entry(average.toFixed(3) , (function(xs) {var x,x0,xi,xl,xr;
for(var x0=xs[0] ,xi=1,xl=xs.length;
xi<xl;
 ++xi)x=xs[xi] ,x0= (Math.min(x,x0) ) ;
return x0} ) .call(this,recorded_times) , (function(xs) {var x,x0,xi,xl,xr;
for(var x0=xs[0] ,xi=1,xl=xs.length;
xi<xl;
 ++xi)x=xs[xi] ,x0= (Math.max(x,x0) ) ;
return x0} ) .call(this,recorded_times) , (function(it) {return(it.toFixed(3) ) } ) .call(this, (Math.sqrt( (function(xs) {var x,x0,xi,xl,xr;
for(var x0= (0) ,xi=0,xl=xs.length;
xi<xl;
 ++xi)x=xs[xi] ,x0= (x0+ (x-average) * (x-average) ) ;
return x0} ) .call(this,recorded_times) ) ) ) ,recorded_times.length) ) } ) .call(this) } ;
return(execute_benchmark() ) } ) .call(this) } ;
return($(init) ) } ) .call(this) } ) ;
