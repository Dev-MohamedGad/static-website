// TypeScript declarations for EmailJS
declare module '@emailjs/browser' {
  interface EmailJSResponse {
    status: number;
    text: string;
  }

  interface EmailJSParams {
    [key: string]: string | number;
  }

  interface EmailJS {
    send(
      serviceId: string,
      templateId: string,
      templateParams: EmailJSParams,
      publicKey: string
    ): Promise<EmailJSResponse>;
  }

  const emailjs: EmailJS;
  export default emailjs;
}
