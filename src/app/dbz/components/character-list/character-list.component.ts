import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-character-list',
  templateUrl: './character-list.component.html',
  styleUrl: './character-list.component.css'
})
export class CharacterListComponent {

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();


  @Input()
  public characterList: Character[] = [{
    name: 'Trunks',
    power: 10,
  }
  ]

  // public onDeleteCharacter( index:number ):void {
  //   console.log(index)
  //   this.onDelete.emit(index);
  // }

  public deleteCharacterById( id:string ):void {
    this.onDelete.emit( id )
  }
}
