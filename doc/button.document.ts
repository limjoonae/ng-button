import { Component, OnInit } from '@angular/core';

const VERSION: string = '1.0.0';
const CDN_URL: string = 'http://10.182.247.73/gos-cdn/';
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
    ` 'go-button': 'gos:button/`+VERSION+`',`,
    ` 'go-directive': 'gos:directive/`+VERSION+`',`,
    ` 'go-service': 'gos:service/`+VERSION+`',`,
    `},`,
    ``,
    `packages: {`,
    ` 'go-button': {`,
    `    main: './button.module.js',`,
    `    defaultExtension: 'js'`,
    `  },`,   
    ` 'go-directive': {`,
    `    main: './index.js',`,
    `    defaultExtension: 'js'`,
    `  },`,   
    ` 'go-service': {`,
    `    main: './index.js',`,
    `    defaultExtension: 'js'`,
    `  },`,   
    `}`,   
    
];

const APPMODULELINE: Array<any> = [
    `import { ButtonModule }  from 'go-button';`,
    ``,
    `@NgModule({`,
    `   imports: [`,
    `   ..........`,
    `   ButtonModule,`,
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

  private componentTag: string = '<go-button>';
  private componentDescription: string = `Button ใช้ในการเรียกใช้ action ต่างๆ`;
  private version: string = VERSION;
  private releaseDate: string = '7/12/2016';
  private credit: string = '-';
  private creditUrl: string = '/';
  private prefixSyntax: string = `<go-button `;
  private attrSyntax: string = `id="button_id" name="button_name" [label="label_name"] [disable="true_or_false"] [buttonColor="color_theme"] [buttonSize="sm_or_lg"] [iconName="icon_name"] [iconSize="icon_size"] [iconPos="right_position"]`;
  private suffixSyntax: string = `></go-button>`;
  private attributeList = ATTRIBUTELIST;
  private systemjsLine = SYSTEMJSLINE;
  private appModuleLine = APPMODULELINE;
  private fontAwesomeVersion = '4.7.0';
  private eventList = EVENTLIST;
  private htmlImport = `<link href="` + CDN_URL + `font-awesome/` + this.fontAwesomeVersion + `/css/font-awesome.min.css rel="stylesheet" type="text/css">`;
  private cssImport = `@import url('` + CDN_URL + `font-awesome/` + this.fontAwesomeVersion + `/css/font-awesome.min.css');`;
  private count: number = 0;
  private countCode = `Count: {{count}}`;
  
  constructor() { }

  ngOnInit() {
  }

  myClick() {
      this.count++;
  }

}
