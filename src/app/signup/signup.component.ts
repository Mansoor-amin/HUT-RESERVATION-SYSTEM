import { Component, OnInit } from '@angular/core';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Marker } from "../interface/marker";

import {AuthService} from '../service/auth.service'

declare var google: any;

let city:{long_name:string,short_name:string};
let state:{long_name:string,short_name:string};
let country:{long_name:string,short_name:string};
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

createUserForm = this.fb.group({
    name: ["", Validators.required],
    phoneNo: ["", Validators.required],
    location: [""],
    email: ["", Validators.required],
    password: ["", Validators.required],
    password1: ["", Validators.required],
    city: ["", Validators.required],
    state: ["", Validators.required],
    country: ["", Validators.required]
  }); 

  constructor(public fb: FormBuilder,private auth: AuthService) { 
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition((position)=>{
        console.log(position);
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;

        var geocoder = new google.maps.Geocoder();

        var latlng = new google.maps.LatLng(this.lat, this.lng);

        geocoder.geocode({'latLng': latlng}, function(results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
            if (results[1]) {
              console.log(results)
              for (var i = 0; i < results.length; i++) {
                if (results[i].types[0] === "locality") {
                  city = results[i].address_components[0];
                  state = results[i].address_components[2];
                  country = results[i].address_components[3];
                  console.log(city,state,country);
                }
              }
            }
            else {console.log("No reverse geocode results.")}
          }
          else {console.log("Geocoder failed: " + status)}
        });

      },()=>{
        console.error('Error: The Geolocation service failed.')
      })
    }
    else{
      console.error('Error: Your browser doesn\'t support geolocation.')
    }
  }


   // Zoom level
  zoom: number = 15;
  // Start Position
  lat: number ;
  lng: number ;
  // Marker
  marker: Marker = {
        lat: this.lat,
        lng: this.lng,
        draggable: false
    };

  ngOnInit() {
  }

  onSignUp(){
    let userObj = {
      name: this.createUserForm.value.name,
      phoneNo: this.createUserForm.value.phoneNo,
      location:this.marker,
      userType: "user",
      email: this.createUserForm.value.email,
      password: this.createUserForm.value.password,
      city : city,
      state : state,
      country: country
    }
 console.log(userObj)
    this.auth.signup(userObj)
      .subscribe((data)=>{
        if(data){
          console.log(data);
        }
      })
  }
  

}
