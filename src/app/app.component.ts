import { Component } from '@angular/core';
export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
  title: string;
  hasImage?: boolean;
  imageUrl?: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AngularMatGrid';
  tiles: Tile[] = [
    { text: 'Vertical...', title: "Top tile", cols: 1, rows: 2, color: '#5F8D4E' },
    { text: 'Middle Tile', title: "With an image", cols: 1, rows: 4, color: '#5F9DF7', imageUrl: "https://images.unsplash.com/photo-1599631438215-75bc2640feb8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YnV0dGVyZmxpZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60", hasImage: true },
    {
      text: 'Tall tile', title:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fermentum venenatis lacus, sit amet commodo nunc tristique ut. Vestibulum gravida ex id elit consectetur sodales. Aliquam mollis felis sit amet est rhoncus, nec blandit lacus malesuada. Morbi ante lacus, maximus eu tortor vel, facilisis sollicitudin ante. Pellentesque sed quam nulla. Phasellus suscipit consequat lectus a dapibus. Phasellus vestibulum diam vitae nibh mattis, non tincidunt erat tristique. Quisque eget viverra leo. Aenean hendrerit sem et urna congue porttitor. Morbi in rhoncus nisi. Nullam a facilisis dui. Praesent lobortis risus at mauris facilisis iaculis non quis diam. Suspendisse potenti. Phasellus nisi nunc, bibendum sit amet mauris non, vulputate placerat urna Donec pretium ultricies magna.Nam consectetur consequat erat eu iaculis.Donec dictum turpis quis molestie tempus.Curabitur pretium urna porttitor nisi vehicula pulvinar.Aenean condimentum vestibulum neque.Praesent rutrum libero et aliquam aliquet.Fusce porta tristique risus, nec mollis lectus fermentum nec.Donec porttitor ipsum sit amet consequat gravida.Suspendisse laoreet aliquet ullamcorper.Nullam ac facilisis quam, ac molestie lacus.Pellentesque tristique lobortis mauris, in pretium enim ultricies id.Nullam nec ipsum risus.Cras iaculis, augue eu viverra rhoncus, ligula diam congue diam, non vulputate ex libero ac quam.In hac habitasse platea dictumst.Vestibulum ornare hendrerit enim id molestie.Curabitur ultricies ut odio eu porta.Fusce laoreet massa ac felis bibendum, vel fringilla odio rutrum.Sed placerat a tellus sit amet hendrerit.Vestibulum quis diam odio.Vivamus turpis augue, iaculis id placerat sit amet, pulvinar vitae lectus.Etiam vitae convallis lectus, sit amet tincidunt turpis.Fusce ultrices, nunc a sollicitudin ultrices, lectus tortor pretium nisl, vitae consectetur nisi dolor non ipsum.Mauris enim nibh, aliquam ut dolor at, congue laoreet lectus.Suspendisse semper justo sit amet magna congue, ac elementum neque sagittis.In eget fringilla nibh.", cols: 2, rows: 6, color: '#6D9886' },
    { text: '........tiles', title: "Bottom tile", cols: 1, rows: 2, color: 'yellow' },
    { text: 'Wide tile', title: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum,", cols: 2, rows: 2, color: 'peech' },

  ];

}
