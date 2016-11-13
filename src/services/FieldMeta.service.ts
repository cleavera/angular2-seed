import {IFieldMeta} from "../interfaces/IFieldMeta.interface";
import {FieldType} from "../constants/FieldType.constant";

export class FieldMeta {
  private type: FieldType;
  private required: boolean;

  description: string;
  options: any[];
  maxLength: number;

  constructor({type, description, required, maxLength, options}: IFieldMeta) {
    if (!FieldType[type]) {
      throw new Error(`Unknown type field type ${type}`);
    }

    this.type = FieldType[type];
    this.description = description;
    this.maxLength = maxLength;
    this.required = required;
    this.options = options;
  }

  isString() {
    return this.type === FieldType.string;
  }

  isNumber() {
    return this.type === FieldType.decimal || this.type === FieldType.integer;
  }

  isBoolean() {
    return this.type === FieldType.boolean;
  }

  validate(value: any) {
    let issues: any = {};

    if (!this.validateType(value)) {
      issues.type = true;
    }

    if (!this.validateRequired(value)) {
      issues.required = true;
    }

    if (!this.validateMaxLength(value)) {
      issues.maxLength = true;
    }

    if (!this.validateOptions(value)) {
      issues.options = true;
    }

    return issues;
  }

  private validateType(value: any): boolean {
    if (this.isBoolean()) {
      return typeof value === 'boolean';
    }

    if (this.isString()) {
      return typeof value === 'string';
    }

    if (this.isNumber()) {
      return !isNaN(value);
    }
  }

  private validateOptions(value: any): boolean {
    if (!this.options) {
      return true;
    }

    return this.options.includes(value);
  }

  private validateMaxLength(value: any): boolean {
    if (!this.isString()) {
      return true;
    }

    return value.length <= this.maxLength;
  }

  private validateRequired(value: any): boolean {
    if (this.isNumber()) {
      return !!value || value === 0;
    }

    return !!value;
  }
}
