const userModel = require("../models/userModel");
const mailModel = require("../models/mailModel");

async function getMails(req, res) {
    //to get all mails of the authorized user

    const mails = await mailModel.find({ "to": req.user.id });
    res.json({ status: true, mails: mails })
}

async function getSentMails(req, res) {
    //to get all mails sent by the authorized user

    const mails = await mailModel.find({ "from": req.user.id });
    res.json({ status: true, mails: mails })
}

async function sendMail(req, res) {
    //to send a mail to an existing email from an authorized user

    const email = req.body.to;
    const user = await userModel.findOne({ email: email }, "_id");
    if (!user) {
        res.json({
            status: false,
            msg: "Sender doesn't exist"
        })
        return;
    }

    if (!req.body.body) {
        res.json({
            status: false,
            msg: "Email body missing"
        })
        return;
    }

    if (!req.body.subject) {
        res.json({
            status: false,
            msg: "Subject missing"
        })
        return;
    }
    const newMail = new mailModel({
        fromMail: req.user.email,
        from: req.user.id,
        to: user,
        body: req.body.body,
        subject: req.body.subject,
        seenByReciever: false
    });
    await newMail.save();
    res.json({ status: true, msg: "Mail sent" })
}

async function deleteMail(req, res) {
    //to delete a mail recieved by user
    //Needs the mail id and user token in header

    const response = await mailModel.findOneAndDelete({ _id: req.body.id, to: req.user.id });

    if (response)
        res.json({ status: true, msg: "Mail Deleted" });
    else
        res.json({ status: false, msg: "Mail Doesn't Exist" });
}

module.exports = { getMails, sendMail, getSentMails, deleteMail };