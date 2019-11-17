import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit 
{
    @Input() title:string = "";
    @Input() name:string= "";
    @Input() img:string ="";
    @Input() info:string = "";
    @Output() close:EventEmitter<any> = new EventEmitter()
    constructor()
    {
        
    }
    ngOnInit(): void 
    {
    }
    fecharModal()
    {
        this.close.emit();
    }
}