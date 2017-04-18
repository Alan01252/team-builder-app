'use strict';

import DayOneEmailer from '../../modules/DayOneEmailer'
import {expect} from 'chai';
import sinon from 'sinon';
import moment from 'moment';
var AWS = require('aws-sdk');

describe('DayOneEmailer', () => {
    describe('#sendDayOneEmail', () => {
        let emailer;
        let sesStub;

        beforeEach(() => {

            var ses = new AWS.SES({apiVersion: '2010-12-01'});
            sesStub = sinon.stub(ses, 'sendEmail');
            emailer = new DayOneEmailer(ses);
        });

        it('sends the new starter email', () => {

            const members = [{
                startDate: new moment(),
                emailTo: 'test@testemail.com'
            }];

            emailer.sendDayOneEmail(members);
            expect(sesStub.called).to.equal(true);
        });
    });

});