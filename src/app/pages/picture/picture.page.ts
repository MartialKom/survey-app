import { Component, OnInit } from '@angular/core';
import { Photo } from '@capacitor/camera';
import { PhotoService } from 'src/app/services/photo.service';
import { Camera, CameraOptions } from '@awesome-cordova-plugins/camera/ngx';
import { Preferences } from '@capacitor/preferences';
@Component({
  selector: 'app-picture',
  templateUrl: './picture.page.html',
  styleUrls: ['./picture.page.scss'],
})
export class PicturePage implements OnInit {

  public photo: Photo | undefined = undefined;
  galleryImages: any[] = [];
  constructor(public PhotoService: PhotoService, private camera: Camera) { }

  async ngOnInit() {
    //await Preferences.clear();
    await this.PhotoService.loadSaved();
  }

  public capture(){
    this.PhotoService.addNewToGallery();
  }

}
