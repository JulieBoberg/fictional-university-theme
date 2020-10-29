import $ from 'jquery';

class Search {
    // 1. Describe and create/initiate our object
    constructor(){
        this.openButton = $(".js-search-trigger");
        this.closeButton = $(".search-overlay__close");
        this.searchOverlay = $(".search-overlay");
        this.events();

}
events(){
    this.openButton.on("click", this.openOverlay.bind(this));
    this.closeButton.on("click", this.closeOverlay.bind(this));
}
// 2. events

// 3. methods (functions, actions)

openOverlay(){
    this.searchOverlay.addClass("search-overlay--active");

}
closeOverlay(){
    this.searchOverlay.removeClass("search-overlay--active");
    }
}

export default Search; 