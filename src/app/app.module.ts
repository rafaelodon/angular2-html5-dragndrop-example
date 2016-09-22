import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';

import { DragAndDropExample, DragMe, DropOverMe } from './dragndrop.component';

@NgModule({
    imports: [        
        BrowserModule        
    ],

    declarations: [
        DragAndDropExample,
        DragMe,
        DropOverMe
    ],

    bootstrap: [
        DragAndDropExample
    ]
})
export class AppModule { 

}