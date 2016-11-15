import {ValidationIssue} from "../../../../constants/ValidationIssue.constant";

export const ValidationMessages = {
  [ValidationIssue.MAXLENGTH]: 'This value is too long',
  [ValidationIssue.OPTIONS]: 'This is not a valid option',
  [ValidationIssue.REQUIRED]: 'This field is required',
  [ValidationIssue.TYPE]: 'This value is invalid'
};
