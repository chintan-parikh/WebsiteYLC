


function PageSlider(options) {
        this.sliderNav = options.pagination;
        this.sliderContent = options.container;
        this.current = 0;

}

PageSlider.prototype.eventListener = function (evt) {

    var id = evt.target.attributes.id;
    this.show(id);
};

PageSlider.prototype.show = function (id) {
    var container = this.findContainer(id);
    this.hideAll()
    container.show();
};

PageSlider.prototype.attachToAll = function () {
    var self = this;
    for(var i=0;i<this.nav.length;i++){
        $(this.nav[i]).on("click",this.eventListener.bind(self));
    }

};

PageSlider.prototype.identify = function () {
    var containers = $(this.sliderContent).children();
    this.containers = containers.filter(function(index){
        // only support direct div child for now
        return containers[index].tagName =="DIV";
    });
    this.nav = $(this.sliderNav).find("a");

};

PageSlider.prototype.initialize = function () {
    this.identify();
    this.validate();
    this.attachToAll();
};

PageSlider.prototype.findContainer = function (id) {

    for(var i =0 ;i < this.containers.length;i++){
        if( $(this.containers[i]).attr("id") == id ){
            return $(this.containers[i]);
        }
    }

};

// Is used to make each container cover the whole page
PageSlider.prototype.maximizeAll = function () {

};
PageSlider.prototype.hideAll = function () {
    var self = this;
    this.containers.map(function(index) {
        $(this).hide();
    });


};
PageSlider.prototype.moveTo = function (id) {

};

PageSlider.prototype.validate = function () {

    if(this.nav.length != this.containers.length){
        throw new Error("the link count and container count dont match");
    }




};
