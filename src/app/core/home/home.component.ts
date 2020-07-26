import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  lat: number = 51.673858;
  lng: number = 7.815982;

  markers: marker[] = [
	  {
		  lat: 51.673858,
		  lng: 7.815982,
		  label: 'A'
	  },
	  {
		  lat: 51.373858,
		  lng: 7.215982,
		  label: 'B',
	  },
	  {
		  lat: 51.723858,
		  lng: 7.895982,
		  label: 'C',
	  }
  ]

  constructor() { }

  ngOnInit() {
  }
  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`)
  }
      
  mapClicked($event) {
    this.markers.push({
      lat: $event.coords.lat,
      lng: $event.coords.lng
    });

  }


}


// just an interface for type safety.
interface marker {
	lat: number;
	lng: number;
	label?: string;
}
