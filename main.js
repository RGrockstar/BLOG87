var canvas=new fabric.Canvas('myCanvas');

player_x=10;
player_y=10;

block_image_width=30;
block_image_height=30;

var player_objects="";
var block_image_objects="";

function player_update() { 
    fabric.Image.fromURL("player.png", function(Img) { 
        player_object = Img; 
        player_object.scaleToWidth(150); 
        player_object.scaleToHeight(140); 
        player_object.set({ top:player_y, left:player_x }); 
        canvas.add(player_object); 
    }); 
}
function new_image(get_image) { 
    fabric.Image.fromURL(get_image, function(Img) { 
        block_image_object = Img; 
        block_image_object.scaleToWidth(block_image_width); 
        block_image_object.scaleToHeight(block_image_height); 
        block_image_object.set({ top:player_y, left:player_x }); 
        canvas.add(block_image_object); 
    }); 
}
window.addEventListener("keydown", my_keydown); 
function my_keydown(e) { 
    keyPressed = e.keyCode; 
    console.log(keyPressed);
    if(e.shiftKey == true && keyPressed == '80') { 
        console.log("p and shift pressed together"); 
        block_image_width = block_image_width + 10; 
        block_image_height = block_image_height + 10; 
        document.getElementById("current_width").innerHTML = block_image_width; 
        document.getElementById("current_height").innerHTML = block_image_height; 
    }
    if(e.shiftKey && keyPressed == '77') { 
        console.log("m and shift pressed together"); 
        block_image_width = block_image_width - 10; 
        block_image_height = block_image_height - 10; 
        document.getElementById("current_width").innerHTML = block_image_width; 
        document.getElementById("current_height").innerHTML = block_image_height; 
    }
    if(keyPressed == '72') { 
        new_image('groot head.PNG');
        console.log("h"); 
    } 
    if(keyPressed == '66') { 
        new_image('iron man body.jpg'); 
        console.log("b"); 
    } 
    if(keyPressed == '76') { 
        new_image('spider-man legs.PNG');
        console.log("l"); 
    } 
    if(keyPressed == '82') { 
        new_image('hulk_right_hand.png'); 
        console.log("r"); 
    } 
    if(keyPressed == '67') { 
        new_image('black panther claws.PNG'); 
        console.log("c"); 
    }