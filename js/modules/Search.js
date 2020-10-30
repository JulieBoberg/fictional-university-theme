import $ from 'jquery';

class Search {
    // 1. Describe and create/initiate our object
    constructor(){
        this.resultsDiv = $("#search-overlay__results")
        this.openButton = $(".js-search-trigger");
        this.closeButton = $(".search-overlay__close");
        this.searchOverlay = $(".search-overlay");
        this.searchField = $(".search-term");
        this.events();
        this.isOverlayOpen = false;
        this.typingTimer;
        this.isSpinnerVisible = false;
        this.previousValue;

}
events(){
    this.openButton.on("click", this.openOverlay.bind(this));
    this.closeButton.on("click", this.closeOverlay.bind(this));
    $(document).on("keyup", this.keyPressDispatcher.bind(this));
    this.searchField.on("keyup", this.typingLogic.bind(this));
}
// 2. events

// 3. methods (functions, actions)

typingLogic(){

    if(this.searchField.val() != this.previousValue){
        clearTimeout(this.typingTimer)

if(this.searchField.val()){
    
    if(!this.isSpinnerVisible){
        this.resultsDiv.html('<div class="spinner-loader"></div>');
    this.isSpinnerVisible = true;
    }
    
    this.typingTimer = setTimeout(this.getResults.bind(this), 2000);



}else{
    this.resultsDiv.html('');
    this.isSpinnerVisible = false;
}        
    }

this.previousValue = this.searchField.val();
}

getResults(){
    $.getJSON('http://fictional-university.local/wp-json/wp/v2/posts?search=' + this.searchField.val(),
    function(posts){
        alert(posts[0].title.rendered);
    } );
}

keyPressDispatcher(e){
    console.log(e.keyCode);
    if(e.keyCode == 83 && !this.isOverlayOpen && !$("input, textarea").is(':focus')){
        this.openOverlay();
    }
    if(e.keyCode == 27 && this.isOverlayOpen){
        this.closeOverlay();
    }
}


openOverlay(){
    this.searchOverlay.addClass("search-overlay--active");
    $("body").addClass("body-no-scroll");
    this.isOverlayOpen = true;

}
closeOverlay(){
    this.searchOverlay.removeClass("search-overlay--active");
    $("body").removeClass("body-no-scroll");
    this.isOverlayOpen = false;
    }   
}

export default Search; 