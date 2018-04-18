var draw = (function(){

    //Get the height and width of the main element.
    var mWidth = document.querySelector('main').offsetWidth;
    var mHeight = document.querySelector('main').offsetHeight;

    //Create the canvas
    var canvas = document.createElement('canvas');

    //create the context
    var ctx = canvas.getContext('2d');

    //Create the initial bounding rectangle
    var rect = canvas.getBoundingClientRect();

    //current x,y position
    var x = 0;
    var y = 0;

    return {

        //Set the x,y cords based on current event data
        setXY: function(evt){
            x = (evt.clientX - rect.left) - canvas.offsetLeft;
            y = (evt.clientY - rect.top) - canvas.offsetTop;
        },

        //Write the x,y cords based on current event data
        writeXY: function(){
            document.getElementById('trackX').innerHTML = 'X: ' + x;
            document.getElementById('trackY').innerHTML = 'Y: ' + y;
        },

        //Access the canvas
        getCanvas: function(){
            return canvas;
        },

        //Draw a rectangle
        drawRect: function(){
            ctx.fillStyle = 'rgb(200, 0, 0)';
            ctx.fillRect(10, 10, 55, 50);
        },

        //Initialize the object, this must be called before anything else
        init: function(){
            canvas.width = mWidth;
            canvas.height = mHeight;
            document.querySelector('main').appendChild(canvas);
        }
    }

})();

//Initialize draw
draw.init();

draw.drawRect();

draw.getCanvas().addEventListener('mousemove', function(evt){
    draw.setXY(evt);
    draw.writeXY();
});