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

  static contactEmail(to, subject, name) { // Função Estragada
    const config = {
      from: `${process.env.EMAIL_USER}`,
      to: to,
      subject: subject,
      text: `Mensagem enviada por: ${name}

      ${data.content}`
    };
    return new Promise((resolve) => {
      transporter.sendMail(config, (error, info) => {
        if (error) {
          resolve(error);
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
    Você acabou de cadastrar na plataforma Lamico. Aguarde a ativação do seu cadastro para começar a utilizar o sistema.`;
    const subject = 'LAMICO: Aguardando ativação de cadastro';
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

  static newUserNotificationEmail(to) {
    console.log('Email enviado');
    const content = `Prezada Kelly, novo cadastro a ser aprovado na plataforma`;
    const subject = 'Novo cadastro';
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
    Seu cadastro foi realizado e aprovado com sucesso. Entre na plataforma com seu email e senha`;
    const subject = 'LAMICO: Cadastro ativado com sucesso';
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
    Seu cadastro foi reprovado. Entre em contato com o admin para maiores informações.`;
    const subject = 'LAMICO: Cadastro reprovado';
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
