import { RouterModule, Routes } from "@angular/router";
import { CircleComponent } from "./Components/circle/circle.component";
import { FactorialComponent } from "./Components/factorial/factorial.component";
import { FibonacciComponent } from "./Components/fibonacci/fibonacci.component";
import { RectangleComponent } from "./Components/rectangle/rectangle.component";
import { TriangleComponent } from "./Components/triangle/triangle.component";

const app_routes:Routes =[
    {path:'fibonacci',component:FibonacciComponent},
    {path:'factorial',component:FactorialComponent},
    {path:'circle',component:CircleComponent},
    {path:'triangle',component:TriangleComponent},
    {path:'rectangle',component:RectangleComponent},
    {path:'**', pathMatch:'full', redirectTo:'fibonacci'},
]

export const app_routing = RouterModule.forRoot(app_routes)