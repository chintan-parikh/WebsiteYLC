


function PageSlider(options) {
        this.sliderNav = options.pagination;
        this.sliderContent = options.container;
        this.current = 0;

}

PageSlider.prototype.initialize = function () {
    this.containers = $(this.sliderContent);
    this.nav = $(this.sliderNav);
    console.log(this.nav);
    console.log(this.containers);
};
