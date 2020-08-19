@@include('partials/jquery.min.js')
@@include('partials/webp.js')
@@include('partials/Vibrant.js')


$(function () {
    gradiendBlock('.js-gradient img');
})


//Функция для радиального градиента блока
function gradiendBlock(selector) {
    var img = document.querySelectorAll(selector);
    for (let elem2 of img) {
        var vibrant = new Vibrant(elem2);
        var swatches = vibrant.swatches();
        for (var swatch in swatches){
            if (swatches.hasOwnProperty(swatch) && swatches[swatch]){
                if(swatch == 'Vibrant'){
                    elem2.closest('.js-gradient').style.backgroundImage = 'radial-gradient(49.83% 165.14% at 50% 50%, ' + swatches[swatch].getHex() + ' -50%, #1A1A1A 100%)';
                }
            }
        }

    }
}