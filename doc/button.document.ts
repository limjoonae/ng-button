import { Component, OnInit } from '@angular/core';

const ATTRIBUTELIST: Array<any> = [
    { require: '*', name: 'id', type: 'text', description: `ใช้สำหรับระบุ id ของปุ่ม`},
    { require: '*', name: 'name', type: 'text', description: `ใช้สำหรับระบุ name ของปุ่ม`},
    { require: '', name: 'label', type: 'text', description: `ใช้สำหรับใส่ข้อความใน label ของปุ่ม`},
    { require: '', name: 'disable', type: 'boolean', description: `ใช้กำหนดเพื่อปิดใช้งานปุ่ม โดย
        หากระบุค่า disable="true" จะไม่สามารถกดปุ่มได้`},
    { require: '', name: 'buttonColor', type: 'text', description: `ใช้กำหนดสีของปุ่ม โดยค่าที่สามารถระบุได้ ประกอบด้วย
        primary, secondary, success, info, warning, danger, outline-primary, outline-secondary, outline-success, outline-info, outline-warning, outline-danger`},
    { require: '', name: 'buttonSize', type: 'text', description: `ใช้กำหนดขนาดของปุ่ม ค่าที่ระบุได้ประกอบด้วย sm, lg`},
    { require: '', name: 'iconName', type: 'text', description: `ระบุชื่อรูปที่จะนำมาแสดงบนปุ่ม`},
    { require: '', name: 'iconSize', type: 'text', description: `ระบุขนาดของรูปที่จะนำมาแสดงบนปุ่ม ประกอบด้วย lg, 2x, 3x, 4x, 5x (เรียงจากขนาดเล็กไปใหญ่)`},
    { require: '', name: 'iconPos', type: 'text', description: `ระบุตำแหน่งของรูป กำหนดค่าได้คือ iconPos="right" หากไม่ระบุจะ default เป็น left`},
];

const EVENTLIST: Array<any> = [
    { name: `(click)` ,parameter: 'event: function_name()', description: `ใช้ในการสร้าง event เพื่อทำงานตาม function ที่กำหนด`},
];

const SYSTEMJSLINE: Array<any> = [
    `map: {`,
    ` 'gos-button': 'gos:button/{version}',`,
    ` 'gos-directive': 'gos:directive/{version}',`,
    ` 'gos-service': 'gos:service/{version}',`,
    `},`,
    ``,
    `packages: {`,
    ` 'gos-button': {`,
    `    main: './button.js',`,
    `    defaultExtension: 'js'`,
    `  },`,   
    ` 'gos-directive': {`,
    `    main: './index.js',`,
    `    defaultExtension: 'js'`,
    `  },`,   
    ` 'gos-service': {`,
    `    main: './index.js',`,
    `    defaultExtension: 'js'`,
    `  },`,   
    `}`,   
    
];

const APPMODULELINE: Array<any> = [
    `import { ButtonComponent } from 'gos-button';`,
    `import { CustomDisabledDirective } from 'gos-directive';`,
    ``,
    `@NgModule({`,
    `   declarations: [`,
    `   ..........`,
    `   ButtonComponent,`,
    `   CustomDisabledDirective,`,
    `   ..........`,
    `],`,
];

@Component({
  moduleId: module.id,
  selector: 'button-document',
  templateUrl: './button.document.html',
  styleUrls: ['./button.document.css']
})
export class ButtonDocument implements OnInit {

  private cdn_url: string = 'http://10.182.247.173/angular-cdn/font-awesome/';
  private componentTag: string = '<gos-button>';
  private componentDescription: string = `Button ใช้ในการเรียกใช้ action ต่างๆ`;
  private version: string = '1.0';
  private releaseDate: string = '7/12/2016';
  private credit: string = '-';
  private creditUrl: string = '/';
  private prefixSyntax: string = `<gos-button `;
  private attrSyntax: string = `id="button_id" name="button_name" [label="label_name"] [disable="true_or_false"] [buttonColor="color_theme"] [buttonSize="sm_or_lg"] [iconName="icon_name"] [iconSize="icon_size"] [iconPos="right_position"]`;
  private suffixSyntax: string = `></gos-button>`;
  private attributeList = ATTRIBUTELIST;
  private systemjsLine = SYSTEMJSLINE;
  private appModuleLine = APPMODULELINE;
  private fontAwesomeVersion = '4.7.0';
  private eventList = EVENTLIST;
  private htmlImport = `<link href="` + this.cdn_url + this.fontAwesomeVersion + `/css/font-awesome.min.css rel="stylesheet" type="text/css">`;
  private cssImport = `@import url('` + this.cdn_url + this.fontAwesomeVersion + `/css/font-awesome.min.css');`;
  private count: number = 0;
  private countCode = `Count: {{count}}`;
  
  constructor() { }

  ngOnInit() {
  }

  myClick() {
      this.count++;
  }

}
