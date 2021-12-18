import * as core from "./core.ts";

export async function isEmail(input: string) {
  return await core.isEmailValid(input);
}
