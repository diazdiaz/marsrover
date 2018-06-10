// Rover Object Goes Here
var rover = {
  direction:"N",
  x: 0,
  y: 0,
  travelLog: []
};

// ======================



// ======================
function turnLeft(){
  switch (rover.direction) {
    case "N" :
    rover.direction="W";
    break;
    case "W":
      rover.direction = "S";
      break;
    case "S":
      rover.direction = "E";
      break;
    case "E":
      rover.direction = "N";
      break;
  }
  console.log("turnLeft executed! Current direction is " + rover.direction);
}



function turnRight(){
  switch (rover.direction) {
    case "N":
    rover.direction="E";
    break;
    case "E":
    rover.direction="S";
    break;
    case "S":
    rover.direction="W";
    break;
    case "W":
    rover.direction="N";
    break;
  }
  console.log("turnRight executed! Current direction is " + rover.direction);
}

function moveForward(){
  if(rover.direction === "N" && rover.y > 0){
    rover.y -= 1;
  }
  else if(rover.direction === "S" && rover.y < 10){
    rover.y += 1;
  }
  if(rover.direction === "E" && rover.x < 10){
    rover.x += 1;
  } else if {
    else if(rover.direction === "W" && rover.x > 0){
      rover.x -= 1;
      
    }
    else {
      console.log("Out of bounds!")
  
    }
    rover.travelLog.push("(" + rover.x + ", " + rover.y + ")");

  }
}

  function moveBackward(){
    if(rover.direction === "N" & rover.y < 10){
      rover.y += 1;
    }
    else if(rover.direction === "S" && rover.y > 0) {
      rover.y -= 1;
    }
    if(rover.direction === "E" && rover.x > 0){
      rover.x -= 1;
    } else if {
    else if(rover.direction === "W" && rover.x < 10){
      rover.x += 1;
    }
    else {
      console.log("Out of Bounds!")
    }
    rover.travelLog.push("(" + rover.x + ", " + rover.y + ")");
  }
  }
