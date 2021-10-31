var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");

function new_image()
{
	fabric.image.fromURL(get_image, function (img) {
        block_image_object = img;
        block_image_object.scaleToWidth(800);
        block_image_object.scaleToWidth(600);
        block_image_object.set ({
            top: 0,
            left: 0
        });
        canvas.add(block_image_object);
    });
}
    
function playSound(){
	x.play(
        console.log("play")
    )
}

