
const router = require("express").Router();
const nodemailer = require('nodemailer');
const nodemailerSendgrid = require('nodemailer-sendgrid');
const { Result } = require("../db")
const Sequelize = require("sequelize")

router.post("/", async (req, res, next)=> {
  try{
    const ids = req.body.ids
    const results = await Result.findAll({
      where: {
          id: {
              [Sequelize.Op.in]: ids
          }
      }
  });
  const lis = results.map((result)=> {
    return `<li>${result.recommendation}</li>`
  })
  const html = `
<ul>${lis}</ul>
  `
  const transport = nodemailer.createTransport(
    nodemailerSendgrid({
        apiKey: process.env.SENDGRID_API_KEY
    })
);
await transport
    .sendMail({
        from: 'rachelcorawood@gmail.com',
        to: req.body.email,
        subject: 'daily health',
        html: html
    });
console.log(process.env.SENDGRID_API_KEY)
res.json(results)
  }catch(error){
    next(error)
  }
})

module.exports = router;
