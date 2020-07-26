import { Component, OnInit } from '@angular/core';

import { marker } from '../models/marker';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  canMark  = true;
  lat: number = 19.8563;
  lng: number = 102.4955;

  markers: marker[] = [
	  {
		  lat: 19.8563,
		  lng: 102.4955,
      label: '',
      draggable: true
	  }
  ]

  constructor() { }

  ngOnInit() {
  }

  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`)
  }

  mapClicked($event ) {
    if ( !this.canMark )
      return;
    this.markers.push({
      lat: $event.coords.lat,
      lng: $event.coords.lng,
      draggable: true
    });

  }

  markerDragEnd(m: marker, $event: MouseEvent) {
    console.log('dragEnd', m, $event);
  }


}


