import { Component, Input } from '@angular/core';
import { Paiting } from 'src/Paiting';


@Component({
  selector: 'app-gallary',
  templateUrl: './gallary.component.html',
  styleUrls: ['./gallary.component.css']
})
export class GallaryComponent {
  selectedPaiting?: Paiting;
  onSelect(paiting: Paiting): void {
  this.selectedPaiting = paiting;
  }
  

  @Input() paitingDictionary: Paiting[]=[    
    {urlCard: "https://sr.gallerix.ru/_EX/2037947957/608117675.jpg", title: "Утро в сосновом лесу", yearOfCreation: 1889, artist: "ШИШКИН Иван", size: "200*200", part: "-"},
    {urlCard: "https://sr.gallerix.ru/_EX/2037947957/979483032.jpg", title: "Над вечным покоем", yearOfCreation: 1894, artist: "ЛЕВИТАН Исаак", size: "150*206", part: "Государственная Третьяковская галерея, Москва."},
    {urlCard: "https://sr.gallerix.ru/_EX/2037947957/161578369.jpg", title: "Богатыри (Три богатыря)", yearOfCreation: 1898, artist: "ВАСНЕЦОВ Виктор", size: "200*200", part: "-"},
    {urlCard: "https://sr.gallerix.ru/_EX/21028680/720150756.jpg", title: "Охотники на привале", yearOfCreation: 1871, artist: "ПЕРОВ Василий", size: "119×183", part: "Государственная Третьяковская галерея, Москва."},
    {urlCard: "https://sr.gallerix.ru/_EX/2037947957/659478759.jpg", title: "Девушка в костюме Флоры", yearOfCreation: 1898, artist: "МАКОВСКИЙ Константин", size: "200*200", part: "-"},
    {urlCard: "https://sr.gallerix.ru/_EX/2037947957/554394531.jpg", title: "Золотая осень", yearOfCreation: 1898, artist: "ЛЕВИТАН Исаак", size: "200*200", part: "Государственная Третьяковская галерея, Москва."},
    {urlCard: "https://sr.gallerix.ru/_EX/2037947957/917904663.jpg", title: "Девочка с персиками", yearOfCreation: 1887, artist: "СЕРОВ Валентин", size: "91х85", part: "Государственная Третьяковская галерея, Москва."},
    {urlCard: "https://sr.gallerix.ru/_EX/1189127576/183056640.jpg", title: "Портрет императора Николая II", yearOfCreation: 1900, artist: "СЕРОВ Валентин", size: "71×59", part: "Государственная Третьяковская галерея, Москва."},
    {urlCard: "https://sr.gallerix.ru/_EX/1016087178/713080393.jpg", title: "Девятый вал", yearOfCreation: 1850, artist: "АЙВАЗОВСКИЙ Иван", size: "200*200", part: "Государственный Русский Музей, Санкт-Петербург."}    
  ]
}
