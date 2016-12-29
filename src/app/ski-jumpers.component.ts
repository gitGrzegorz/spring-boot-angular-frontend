import {Component, OnInit} from "@angular/core";
import {SkiJumper} from "./ski-jumper";
import {SkiJumpersService} from "./ski-jumpers.service";

@Component({
  selector: 'ski-jumpers',
  templateUrl: './ski-jumpers.component.html',
  styleUrls: ['./ski-jumpers.component.css']
})
export class SkiJumpers implements OnInit {
  private skiJumpersService: SkiJumpersService;
  private skiJumpers: SkiJumper[];

  constructor(skiJumpersService: SkiJumpersService) {
    this.skiJumpersService = skiJumpersService;
  }

  ngOnInit(): void {
    this.skiJumpersService.getSkiJumpers()
      .then(skiJumpersFromServer => this.skiJumpers = skiJumpersFromServer);
  }
}
