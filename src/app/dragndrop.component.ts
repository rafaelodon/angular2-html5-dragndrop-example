/**
 * A simple example of HTML5 drag and drop using Angular2.
 * 
 * Author: Rafael Odon (odon.rafael@gmail.com)
 * Date: 21 sept 2016
 */

import { Component, HostListener, Input } from '@angular/core';

// The draggable component
@Component({
    selector: 'dragme',
    template: `
        <div draggable="true">
            Drag {{name}}!
        </div>
    `,
    styles: [`
        [draggable] {
            -moz-user-select: none;
            -khtml-user-select: none;
            -webkit-user-select: none;
            user-select: none;
            -khtml-user-drag: element;
            -webkit-user-drag: element;
            background-color: #AAA; 
            border: 1px solid black; 
            padding: 24px;
            margin: 12px;
        }
    `]
})
export class DragMe {

    @Input()
    name: string = "";

    @HostListener('dragstart', ['$event'])
    onDrag(event: any) {
        event.dataTransfer.setData("name", this.name);
    }
}

// The drop area component
@Component({
    selector: 'drop',
    template: `
        <div class="drop">
            Drop over me!
            <ul>
                <li *ngFor="let i of items">{{i}}</li>
            </ul>
        </div>
    `,
    styles: [`
        .drop{
            border: 1px solid black;
            padding: 24px;
        }
    `]
})
export class DropOverMe {

    items: string[] = [];

    @HostListener('dragover', ['$event'])
    onDragOver(event: any) {
        event.preventDefault();
    }

    @HostListener('drop', ['$event'])
    onDrop(event: any) {
        event.preventDefault();
        var name = event.dataTransfer.getData("name");
        this.items.push(name);
    }
}

// The functional example
@Component({
    selector: "dragndrop-example",
    template: `        
        <dragme name="Bob"></dragme>
        <dragme name="Alice"></dragme>
        <dragme name="Carl"></dragme>

        <drop></drop>
    `

})
export class DragAndDropExample {

}