var canvas = new fabric.Canvas("myCanvas");
block_y=1;
block_x=1;

block_image_width = 350;
block_image_height = 430;

var block_image_object= "";

function new_image(get_image)
{
    fabric.Image.fromURL(get_image, function(Img) {

        block_image_object = Img

        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.set({

        top:block_y,
        left:block_x
        });
    canvas.add(block_image_object);

    });
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

   if(keyPressed == '82') // add appropriate keycode
   {
       block_x = 400;
       // upload red ranger
       new_image("redranger.jpg");
   }
   if(keyPressed == '71')
   {
       block_x = 200;
       // upload green ranger
       new_image("greenranger.png");
   }
   
   if(keyPressed == '89')
   {
       block_x =350;
       // upload yellow ranger
       new_image("yellowranger.png");
   }
   if(keyPressed == '80')
   {
       block_x = 600;
       // upload pink ranger
       new_image("pinkranger.png");
       
   }
   if(keyPressed == '66')
   {
       block_x = 300;
       // upload blue ranger
       new_image("blueranger.png");
   }
   
}

