/**
	liFilter
	@author: Will Rhodes
*/

var COMPARISON_EXACT = 0;
var COMPARISON_START = 1;
var COMPARISON_IN = 2;
var MIN_LENGTH = 2;

$.fn.extend({
    liFilter: function (inputId, comparisonMode, caseSensitive,callback) {
		
		caseSensitive = caseSensitive === 'undefined' ? true : caseSensitive;
		inputId = inputId === 'undefined' ? 'input' : inputId;
		comparisonMode = comparisonMode === 'undefined' ? COMPARISON_IN : comparisonMode;
        var input = $(inputId);
		
		var list = $(this).find("li");
		var invisibleClass = "filteredOut";
		
		input.keyup(function(evt){
			
			var inputValue = input.val();

			if(inputValue.length !==0 && inputValue.length < MIN_LENGTH ){
				return;
			}

			if(!caseSensitive){
				inputValue = inputValue.toUpperCase();
			}
			list.each(function(id){
				var liHtml = $(this).html();
				if(!caseSensitive){
					liHtml = liHtml.toUpperCase();
				}
				$(this).removeClass(invisibleClass);
						
				if(comparisonMode == COMPARISON_START){
					if(inputValue != "" && liHtml.indexOf(inputValue) != 0){
						$(this).addClass(invisibleClass);
					}
				}
				else if(comparisonMode == COMPARISON_IN){
					if(inputValue!= "" && liHtml.indexOf(inputValue) < 0){
						$(this).addClass(invisibleClass);
					}
				}
				else if(comparisonMode == COMPARISON_EXACT){
					if(inputValue != "" && liHtml != inputValue){
						$(this).addClass(invisibleClass);
					}
				}
			});//end each
			
			//callback
			if(callback !== 'undefined'){
				callback();
			}
			
		});//end on keyup
    }
});
