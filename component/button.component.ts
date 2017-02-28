import { Component, OnInit, Input } from '@angular/core';
import { BootstrapClassService, CommonService } from 'gos-service';

@Component({
  moduleId: module.id,
  selector: 'gos-button',
  templateUrl: './button.component.html',
  providers: [BootstrapClassService, CommonService]
})
export class ButtonComponent implements OnInit {

  @Input() id: string;
  @Input() name: string;
  @Input() label: string;
  @Input() disable: string;
  @Input() buttonColor: string;
  @Input() buttonSize: string;
  @Input() iconName: string;
  @Input() iconSize: string;
  @Input() iconPos: string;
  private buttonClassPrefix = 'btn';
  private iconClassPrefix = 'fa';
  private buttonSizeClass: string;
  private buttonStyleClass: string;
  private iconSizeClass: string;
  private iconStyleClass: string;
  private space = ' ';

  constructor(private _bootstrapClassService: BootstrapClassService, private _commonService: CommonService) { }

  ngOnInit() {
    this.buttonSizeClass = this.setSizeClass(this.buttonSize, this.buttonClassPrefix);
    this.buttonStyleClass = this.setStyleClass(this.buttonColor, this.buttonClassPrefix).concat(this.space) + this.buttonSizeClass;
    this.iconSizeClass = this.setSizeClass(this.iconSize, this.iconClassPrefix);
    this.iconStyleClass = this.setStyleClass(this.iconName, this.iconClassPrefix).concat(this.space) + this.iconSizeClass;
  }

  setStyleClass(styleClass: string, prefix:string): string {
      return this._commonService.isNull(styleClass)? '' : prefix.concat(this.space) + this._bootstrapClassService.setStyleClass(styleClass, prefix);
  }

  setSizeClass(size: string, prefix: string): string {
      return this._commonService.isNull(size)? '' : this._bootstrapClassService.setSizeClass(size, prefix);
  }

}
