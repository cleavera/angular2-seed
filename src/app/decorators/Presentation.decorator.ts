import {Component} from '@angular/core';
import {$snakeCase} from "../../helpers/SnakeCase.helper";

export function Presentation({ name, template, styles }: {name: string, templateUrl: string, styles?: any[], styleUrls?: string[]}): ClassDecorator {
  let componentDecorator = Component({
    styles,
    template,
    selector: `p-${$snakeCase(name)}`,
  });

  return function(Class: any): void {
    componentDecorator(Class);
  }
}
