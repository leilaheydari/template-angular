import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { Component, OnInit, AfterViewInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import * as L from 'leaflet';
import { province } from 'src/app/core/jsons/locations';
import { SharedModule } from '../../shared.module';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
  standalone: true,
  imports: [SharedModule,LeafletModule]
})
export class MapComponent implements OnInit, AfterViewInit {
  map: any;
  marker2: any;
  codeProvince: number = 1;
  lng: number = 51.3477;
  lat: number = 35.6984;
  lngMarker: number = 51.3477;
  latMarker: number = 35.6984;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<MapComponent>
  ) {
    this.codeProvince = data['dataKey'];
    if (data['latitude'] && data['longitude']) {
      this.lat = Number(data['latitude']);
      this.lng = Number(data['longitude']);
    }
  }

  ngOnInit() { }

  ngAfterViewInit(): void {
    this.initializeMapOptions();
  }

  private initializeMapOptions() {
    if (this.lat !== 35.6984 && this.lng !== 51.3477) {
      this.map = L.map('map').setView([this.lat, this.lng], 14);
      this.latMarker = this.lat;
      this.lngMarker = this.lng;
      if (this.marker2 != undefined) {
        this.map.removeLayer(this.marker2);
      };
      this.marker2 = new L.Marker(new L.LatLng(this.latMarker, this.lngMarker));
      this.map.addLayer(this.marker2);
    }
    else if (this.codeProvince) {
      let locations = province.filter(item => item.code === this.codeProvince);
      this.lat = locations[0].lat;
      this.lng = locations[0].lng;
      this.map = L.map('map').setView([this.lat, this.lng], 8);
    }
    this.map.on('click', (e: any) => {
      var coord = e.latlng;
      this.latMarker = coord.lat;
      this.lngMarker = coord.lng;
      if (this.marker2 != undefined) {
        this.map.removeLayer(this.marker2);
      };
      this.marker2 = new L.Marker(new L.LatLng(this.latMarker, this.lngMarker));
      this.map.addLayer(this.marker2);
    });

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 5,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });
    tiles.addTo(this.map);
  }

  selectLocation() {
    this.dialogRef.close({ 'lat': this.latMarker.toFixed(4), 'lng': this.lngMarker.toFixed(4) });
  }

  close() {
    if (this.lat !== 35.6984 && this.lng !== 51.3477) {
      this.dialogRef.close({ 'lat': this.latMarker.toFixed(4), 'lng': this.lngMarker.toFixed(4) });
    }
  }

}
