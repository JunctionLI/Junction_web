const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

// 处理 POST 请求
app.post('/send-email', (req, res) => {
  const { name, email, subject, message } = req.body;

  // 创建邮件传输对象
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'ivyiknow@gmail.com', // 发送邮件的邮箱地址
      pass: 'Ivy!2345' // 发送邮件的邮箱密码或授权码
    }
  });

  // 设置邮件内容
  const mailOptions = {
    from: email,
    to: 'lijunxianjunction@gmail.com', // 接收邮件的邮箱地址
    subject: subject,
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
  };

  // 发送邮件
  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      console.log(error);
      res.status(500).send('Error'); // 发送邮件失败时返回错误信息
    } else {
      console.log('Email sent: ' + info.response);
      res.send('Success'); // 发送邮件成功时返回成功信息
    }
  });
});

// 启动服务器
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

