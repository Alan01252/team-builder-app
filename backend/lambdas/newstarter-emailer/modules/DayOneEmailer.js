import moment from 'moment';

class DayOneEmailer {

    constructor(ses) {
        this.ses = ses;
    }


    sendDayOneEmail(newStarters) {
        newStarters.map((member) => {
            this.sendEmail(member.email)
        })
    }

    sendEmail(to) {

        this.ses.sendEmail({
                Source: "platform-engineering@capgemini.com",
                Destination: {ToAddresses: to},
                Message: {
                    Subject: {
                        Data: 'Welcome to Capgemini from the platforms team'
                    },
                    Body: {
                        Text: {
                            Data: 'Welcome email goes here',
                        }
                    }
                }
            }
            , function (err, data) {
                if (err) throw err;
                console.log('Email sent:');
                console.log(data)
            });
    }
}

module.exports = DayOneEmailer