import { FavouriteChangedEventArgs } from './components/favourite/favourite.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  post = {
    title: "Title",
    isFavourite: true
  }
  onFavouriteChange(eventArgs: FavouriteChangedEventArgs) {
    console.log("Favourite Changed:" + eventArgs.newValue);
  }

  tweet = {
    body: "Body of Tweet",
    isLiked: false,
    likeCount: 0
  }
}