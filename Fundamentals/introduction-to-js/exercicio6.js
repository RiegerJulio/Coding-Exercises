let chessPieces = "BISHOP";

switch(chessPieces.toLowerCase()){
  case "pawn":
    console.log("Pawn chess pieces can only directly forward one square");
    break;
  case "rook":
    console.log("The rook piece can move forward, backward, left or right at any time.");
    break;
  case "knight":
    console.log("The Knight piece can move forward, backward, left or right two squares and must then move one square in either perpendicular direction.");
    break;
  case "bishop":
    console.log("The bishop can move in any direction diagonally, so long as it is not obstructed by another piece.");
    break;
  case "queen":
    console.log("The queen can move in any direction on a straight or diagonal path.");
    break;
  case "king":
    console.log("The king piece can move one single square in any direction.");
    break;
  default:
    console.log("error, invalid piece");
    break;
}