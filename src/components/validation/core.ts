import { isEmail, validate } from "./deps.ts";

export async function isEmailValid(input: string) {
  const inputs = {
    input: input,
  };
  const [passes, errors] = await validate(inputs, { input: isEmail });
  return { success: passes, errors };
}
