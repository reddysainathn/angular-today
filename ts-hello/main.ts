//import { Point } from "./Point";
import { LikeComponent } from "./like.component"
// let point = new Point(2, 3);
// point.x = 10;
// let ui = point.x;
// point.draw();

let component = new LikeComponent(10,true)
component.onCLick();
console.log('LikeCount:'+component.likesCount+" IsSelected:"+component.isSelected);
console.log(`LikeCount:${component.likesCount},IsSelected:${component.isSelected}`);

