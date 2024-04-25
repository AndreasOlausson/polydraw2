import "reflect-metadata";
import { container } from "tsyringe";
import { Component, Input } from '@angular/core';

import { ILatLng } from './map/polygon-helpers';
import { PolyDrawService } from './map/polydraw';

@Component({
  selector: 'hello',
  templateUrl: "./hello.component.html",
  styleUrls: ["./hello.component.css"]
})
export class HelloComponent {
  star: ILatLng[][][] = [[
    [
      { lat: 59.903, lng: 10.718 },
      { lat: 59.908, lng: 10.722 },
      { lat: 59.91, lng:  10.714 },
      { lat: 59.912, lng: 10.722 },
      { lat: 59.916, lng: 10.718 },
      { lat: 59.914, lng: 10.726 },
      { lat: 59.918, lng: 10.73 },
      { lat: 59.914, lng: 10.734 },
      { lat: 59.916, lng: 10.742 },
      { lat: 59.912, lng: 10.738 },
      { lat: 59.91, lng:  10.746 },
      { lat: 59.908, lng: 10.738 },
      { lat: 59.903, lng: 10.742 },
      { lat: 59.905, lng: 10.734 },
      { lat: 59.901, lng: 10.73 },
      { lat: 59.905, lng: 10.726 },
      { lat: 59.903, lng: 10.718 }
    ]
  ]];
  pn0254: ILatLng[][][] = [[
    [
      { lat: 59.9137669995347, lng: 10.716912 },
      { lat: 59.9119439995347, lng: 10.718086 },
      { lat: 59.9122099995347, lng: 10.719407 },
      { lat: 59.9119269995347, lng: 10.721145 },
      { lat: 59.9123129995347, lng: 10.722227 },
      { lat: 59.9121599995347, lng: 10.722759 },
      { lat: 59.9118759995347, lng: 10.722396 },
      { lat: 59.9117869995347, lng: 10.72365 },
      { lat: 59.9124999995347, lng: 10.723694 },
      { lat: 59.9122829995347, lng: 10.724347 },
      { lat: 59.9128319995347, lng: 10.725652 },
      { lat: 59.9132499995347, lng: 10.723503 },
      { lat: 59.9134449995347, lng: 10.723672 },
      { lat: 59.9140599995347, lng: 10.722228 },
      { lat: 59.9145049995347, lng: 10.723162 },
      { lat: 59.9152129995348, lng: 10.722434 },
      { lat: 59.9148489995347, lng: 10.720304 },
      { lat: 59.9145679995347, lng: 10.720726 },
      { lat: 59.9141289995347, lng: 10.719708 },
      { lat: 59.9144329995347, lng: 10.718779 },
      { lat: 59.9142809995348, lng: 10.718283 },
      { lat: 59.9139759995347, lng: 10.718653 },
      { lat: 59.9137669995347, lng: 10.716912 }
    ],
    [
      { lat: 59.9132319995347, lng: 10.722003 },
      { lat: 59.9134349995347, lng: 10.721425 },
      { lat: 59.9136029995347, lng: 10.721683 },
      { lat: 59.9130309995347, lng: 10.723528 },
      { lat: 59.9124709995347, lng: 10.723031 },
      { lat: 59.9125529995347, lng: 10.721881 },
      { lat: 59.9132319995347, lng: 10.722003 }
    ]
  ]];

  pn0252: ILatLng[][] = [
    [
      { lat: 59.90128599953461, lng: 10.715012999999999 },
      { lat: 59.90605499953466, lng: 10.716393 },
      { lat: 59.90772399953467, lng: 10.718193 },
      { lat: 59.90946199953467, lng: 10.722602999999998 },
      { lat: 59.909975999534694, lng: 10.722030999999998 },
      { lat: 59.91037899953471, lng: 10.723245000000004 },
      { lat: 59.906482999534646, lng: 10.724845000000002 },
      { lat: 59.90192499953463, lng: 10.721306000000002 },
      { lat: 59.90128599953461, lng: 10.715012999999999 }
    ]
  ];
  pn0253: ILatLng[][][] = [
    [[
      { lat: 59.9112809995347, lng: 10.720321999999998 },
      { lat: 59.91171999953472, lng: 10.720544 },
      { lat: 59.911641999534716, lng: 10.723379000000001 },
      { lat: 59.9117679995347, lng: 10.723480000000002 },
      { lat: 59.91184499953473, lng: 10.721888 },
      { lat: 59.912069999534715, lng: 10.721374000000003 },
      { lat: 59.912262999534725, lng: 10.721598000000002 },
      { lat: 59.91213999953472, lng: 10.721990000000002 },
      { lat: 59.9123129995347, lng: 10.722227 },
      { lat: 59.91215999953473, lng: 10.722759000000002 },
      { lat: 59.9118759995347, lng: 10.722396 },
      { lat: 59.911786999534705, lng: 10.72365 },
      { lat: 59.911580999534706, lng: 10.723459 },
      { lat: 59.91165499953472, lng: 10.722184000000002 },
      { lat: 59.91113099953468, lng: 10.722066000000002 },
      { lat: 59.9112809995347, lng: 10.720321999999998 }
    ]],
    [[
      { lat: 59.91343499953473, lng: 10.721424999999998 },
      { lat: 59.913602999534724, lng: 10.721683 },
      { lat: 59.913030999534726, lng: 10.723528000000002 },
      { lat: 59.912470999534726, lng: 10.723031 },
      { lat: 59.912536999534716, lng: 10.722772000000003 },
      { lat: 59.91236699953473, lng: 10.722519000000002 },
      { lat: 59.91255299953473, lng: 10.721880999999998 },
      { lat: 59.91275899953473, lng: 10.722159999999999 },
      { lat: 59.91295899953471, lng: 10.721596 },
      { lat: 59.913231999534716, lng: 10.722003 },
      { lat: 59.91343499953473, lng: 10.721424999999998 }
    ]],
    [[
      { lat: 59.914059999534736, lng: 10.722228000000001 },
      { lat: 59.91450499953475, lng: 10.723161999999999 },
      { lat: 59.91488299953473, lng: 10.722514 },
      { lat: 59.91506199953474, lng: 10.722853 },
      { lat: 59.91463499953472, lng: 10.723891 },
      { lat: 59.91512799953473, lng: 10.724659 },
      { lat: 59.91495399953473, lng: 10.725907 },
      { lat: 59.91519099953475, lng: 10.726231 },
      { lat: 59.915136999534745, lng: 10.726750000000001 },
      { lat: 59.91479399953474, lng: 10.727636999999996 },
      { lat: 59.914208999534736, lng: 10.726809 },
      { lat: 59.91433099953474, lng: 10.726432 },
      { lat: 59.91371499953473, lng: 10.725579999999999 },
      { lat: 59.913596999534725, lng: 10.725832 },
      { lat: 59.913272999534726, lng: 10.725498 },
      { lat: 59.91306499953472, lng: 10.725956 },
      { lat: 59.912831999534724, lng: 10.725652000000002 },
      { lat: 59.913220999534715, lng: 10.724587999999999 },
      { lat: 59.91324999953473, lng: 10.723502999999997 },
      { lat: 59.91344499953475, lng: 10.723672000000002 },
      { lat: 59.914059999534736, lng: 10.722228000000001 }
    ]]
  ];

  homansbyen: ILatLng[][] = [
    [
      { lat: 59.923856980873936, lng: 10.716666358724478 },
      { lat: 59.92503291743531, lng: 10.717809979918782 },
      { lat: 59.92898204341424, lng: 10.726612840084913 },
      { lat: 59.92553505967488, lng: 10.73081000540787 },
      { lat: 59.92120857646666, lng: 10.732596444866198 },
      { lat: 59.92007735898484, lng: 10.73536681137 },
      { lat: 59.91728146232324, lng: 10.732162703067074 },
      { lat: 59.91872314511897, lng: 10.731608888171255 },
      { lat: 59.91906334379838, lng: 10.730897463821027 },
      { lat: 59.9203110946203, lng: 10.727894411679614 },
      { lat: 59.919826467815064, lng: 10.727161251301162 },
      { lat: 59.92028213379621, lng: 10.72583328175604 },
      { lat: 59.92368739893148, lng: 10.719453160886356 },
      { lat: 59.923856980873936, lng: 10.716666358724478 }
    ]]
  mapHelperService: PolyDrawService;

  constructor() {
    this.mapHelperService = container.resolve(PolyDrawService)
    console.log(this.mapHelperService);

    this.mapHelperService.configurate({
      polygonOptions: {
        color: "#FF00FF",
        fillColor: "#00FF00"
      }
    })
  }


  onFreedrawMenuClick(): void {
    this.mapHelperService.freedrawMenuClick();
  }
  onSubtractClick(): void {
    this.mapHelperService.subtractClick();
  }

  add0254() {
    this.mapHelperService.addAutoPolygon(this.pn0254 as any);
  }

  add0252() {
    this.mapHelperService.addAutoPolygon(this.pn0252 as any);
  }

  add0253() {
    this.mapHelperService.addAutoPolygon(this.pn0253 as any);
  }

  addHomansbyen() {
    this.mapHelperService.addAutoPolygon(this.homansbyen as any);
  }

  addViken() {
    // this.mapHelperService.addViken(this.viken);
  }

  addStar() {
    this.mapHelperService.addAutoPolygon(this.star as any);

  }

}