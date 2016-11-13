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

  isRequired() {
    return this.required;
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
}
