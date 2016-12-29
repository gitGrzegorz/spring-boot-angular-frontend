import {Component, Input} from "@angular/core";
import {SkiJumper} from "./ski-jumper";

@Component({
  selector: 'person-component',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent {

  @Input('person')
  private person: SkiJumper;
}
