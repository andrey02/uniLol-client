import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
@Component({
    selector:'table-region',
    templateUrl:'./table-region.html',
    styleUrls:['./table-region.scss']

})
export class TableRegion implements OnInit 
{
    @Input() detailPartida :Array<any> = [];
    @Input() isLoading:boolean = true;
    @Input() typeTeam :string = "";
    constructor() { }
    ngOnInit() 
    {}

}