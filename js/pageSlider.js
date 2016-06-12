


function PageSlider(options) {
        this.sliderNav = options.pagination;
        this.sliderContent = options.container;
        this.current = 0;

}

PageSlider.prototype.identify = function () {
    var containers = $(this.sliderContent).children();
    this.containers = containers.filter(function(index){
        // only support direct div child for now
        return containers[index].tagName =="DIV";
    })
    this.nav = $(this.sliderNav).find("a");

};

PageSlider.prototype.initialize = function () {
    this.identify();
    this.validate();


};
PageSlider.prototype.validate = function () {

    if(this.nav.length != this.containers.length){
        throw new Error("the link count and container count dont match");
    }


};
