const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: `${process.env.EMAIL_HOST}`,
  port: `${process.env.EMAIL_PORT}`,
  secure: false,
  auth: {
    user: `${process.env.EMAIL_USER}`,
    pass: `${process.env.EMAIL_PASS}`
  },
  tls: {
    rejectUnauthorized: false
  }
});


class Email {

  static sendEmail(data) {
    const config = {
      from: `${process.env.EMAIL_USER}`,
      to: data.to,
      subject: data.subject,
      text: data.text,
      attachments: data.attachments
    };
    return new Promise((resolve, reject) => {
      transporter.sendMail(config, (error, info) => {
        if (error) {
          console.log(error);
          reject(error);
        }
        else {
          console.log(`Email enviado ${info.response}`);
          resolve(info);
        }
      });
    });
  }

  static userWaitingForApproval(to, firstName) {

    const content = `Prezado(a) ${firstName},
    Você acabou de cadastrar na plataforma Bem Conectado. Aguarde a ativação do seu cadastro para que os usuários possam ver sua ONG.`;
    const subject = 'Bem Conectado: Aguardando ativação de cadastro';
    const emailContent = {
      to: to,
      subject: subject,
      text: content
    };
    return new Promise((resolve) => {
      Email.sendEmail(emailContent).then((info) => {
        resolve(info);
      });
    });
  }

  static userApprovedEmail(to, firstName) {
    console.log('Cadastro de usuário aprovado');
    const content = `Prezado(a) ${firstName},
    Seu cadastro foi realizado e aprovado com sucesso. Agora sua ONG está visível ao público!`;
    const subject = 'Bem Conectado: Cadastro ativado com sucesso';
    const emailContent = {
      to: to,
      subject: subject,
      text: content
    };
    return new Promise((resolve) => {
      Email.sendEmail(emailContent).then((info) => {
        resolve(info);
      });
    });
  }

  static userRejectedEmail(to, fullname) {
    console.log('Cadastro de usuário reprovado');
    const content = `Prezado(a) ${fullname},
    Seu cadastro foi reprovado. Entre em contato com este email para mais informações.`;
    const subject = 'Bem conectado: Cadastro reprovado';
    const emailContent = {
      to: to,
      subject: subject,
      text: content
    };
    return new Promise((resolve) => {
      Email.sendEmail(emailContent).then((info) => {
        resolve(info);
      });
    });
  }

}

module.exports = Email;
