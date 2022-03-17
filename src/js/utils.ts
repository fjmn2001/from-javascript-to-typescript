export function countWords(str: string): number {
  return str.split(" ").length
}

export function countChars(str: string): number {
  return str.split("").length
}

interface User {
  firstName: string
  lastName: string
  email: string
}

interface CreateUserResponse {
  success: true
  data: User
}

interface FormElements extends HTMLFormControlsCollection {
  firstName: HTMLInputElement
  lastName: HTMLInputElement
  email: HTMLInputElement
}

export function createUser(form: HTMLFormElement): CreateUserResponse {
  const elements = form.elements as FormElements
  return {
    success: true,
    data: {
      firstName: elements.firstName.value,
      lastName: elements.lastName.value,
      email: elements.email.value,
    },
  }
}

export const handleFormSuccess = (form: HTMLFormElement, newUser: User) => {
  const thanksBlock = document.getElementById("thanks")!
  const title = thanksBlock.querySelector("h3")!
  const content = thanksBlock.querySelector("p")!

  title.innerHTML = `Thanks you ${newUser.firstName}!`
  content.innerHTML = "We sent a confirmation email."
}

export const initForms = async () => {
  // const fetchData = (select: Element) => {
  //   const domain =
  //     document.domain === "localhost" ? "localhost:8080" : document.domain
  //   const type = select.getAttribute("data-type")
  //
  //   return fetch(`http://${domain}/data/${type}.json`)
  //     .then((response) => response.json())
  //     .catch(() => {
  //       throw new Error(`Could not find ${type}.json`)
  //     })
  // }
}

interface Course {
  title: string
}

export const getOneByTitle = (title: string) => {
  if (!(title.length >= 3)) {
    return
  }

  const courses: Course[] = [
    { title: "😎 Vue 3: News" },
    { title: "🐄 Makefile" },
  ]

  return courses.find((course) => course.title.includes(title))
}

export const initSearchByTitle = () => {
  const filter = document.getElementById("getOneByName") as HTMLInputElement
  const result = document.getElementById("name-search-result")!

  filter.addEventListener("keyup", () => {
    const course = getOneByTitle(filter.value)

    result.innerHTML = <string>course?.title
  })
}
