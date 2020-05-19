interface Response {
  token: string;
  user: {
    name: string;
    email: string;
  };
}

export function singIn(): Promise<Response> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        token: "aflkdsjflksdjflksdjflksdjflkdsjmaldjwoejfwdkjsdnsv",
        user: {
          name: "Davi",
          email: "davi.test@gmail.com",
        },
      });
    }, 2000);
  });
}
