export function countWords(str: string): number {
  return str.split(" ").length;
}

export function countChars(str: string): number {
  return str.split("").length;
}

interface CreateUserResponse {
  success: true;
  data: User;
}

interface User {
  firstName: string;
  lastName: string;
  email: string;
}

interface FormElements extends HTMLFormControlsCollection {
  first_name: HTMLInputElement;
  last_name: HTMLInputElement;
  email: HTMLInputElement;
}

export function createUser(form: HTMLFormElement): CreateUserResponse {
  const elements = form.elements as FormElements;
  return {
    success: true,
    data: {
      firstName: elements.first_name.value,
      lastName: elements.last_name.value,
      email: elements.email.value,
    },
  };
}
